/**
 * Validation utilities for Disk Partition Simulator
 * Implements realistic OS-style validation rules and error messages
 */

const MIN_PARTITION_SIZE_MB = 100; // Minimum 100MB for a partition
const MIN_SHRINK_SIZE_MB = 50; // Minimum shrink size
const MAX_PARTITION_COUNT = 4; // Maximum primary partitions (MBR limitation)

/**
 * Validates if a partition size is valid
 * @param {number} sizeMB - Size in MB
 * @returns {Object} { valid: boolean, message: string }
 */
function validatePartitionSize(sizeMB) {
    if (sizeMB < MIN_PARTITION_SIZE_MB) {
        return {
            valid: false,
            message: `The volume size you specified is too small. The minimum size is ${MIN_PARTITION_SIZE_MB} MB.`
        };
    }
    return { valid: true, message: '' };
}

/**
 * Validates if shrink operation is allowed
 * @param {Object} partition - Partition object
 * @param {number} shrinkSizeMB - Size to shrink in MB
 * @returns {Object} { valid: boolean, message: string }
 */
function validateShrink(partition, shrinkSizeMB) {
    const currentSizeMB = partition.sizeMB;
    const newSizeMB = currentSizeMB - shrinkSizeMB;

    if (shrinkSizeMB <= 0) {
        return {
            valid: false,
            message: 'The shrink size must be greater than 0 MB.'
        };
    }

    if (shrinkSizeMB < MIN_SHRINK_SIZE_MB) {
        return {
            valid: false,
            message: `The shrink size is too small. Minimum shrink size is ${MIN_SHRINK_SIZE_MB} MB.`
        };
    }

    if (newSizeMB < MIN_PARTITION_SIZE_MB) {
        const maxShrink = currentSizeMB - MIN_PARTITION_SIZE_MB;
        return {
            valid: false,
            message: `The volume cannot be shrunk because the resulting volume would be too small. Maximum shrink size: ${formatSize(maxShrink)}.`
        };
    }

    if (shrinkSizeMB >= currentSizeMB) {
        return {
            valid: false,
            message: 'The shrink size cannot be equal to or greater than the current volume size.'
        };
    }

    // Simulate unmovable files limitation (realistic OS behavior)
    const freeSpaceMB = partition.freeMB || (partition.sizeMB - (partition.usedMB || 0));
    if (shrinkSizeMB > freeSpaceMB * 0.8) {
        return {
            valid: false,
            message: `The volume cannot be shrunk beyond the point where any unmovable files are located. Maximum shrink size: ${formatSize(Math.floor(freeSpaceMB * 0.8))}.`
        };
    }

    return { valid: true, message: '' };
}

/**
 * Validates if extend operation is allowed
 * @param {Object} partition - Partition object
 * @param {Array} partitions - All partitions array
 * @param {number} extendSizeMB - Size to extend in MB
 * @returns {Object} { valid: boolean, message: string, availableSpace: number }
 */
function validateExtend(partition, partitions, extendSizeMB) {
    const partitionIndex = partitions.findIndex(p => p.id === partition.id);
    
    if (partitionIndex === -1) {
        return {
            valid: false,
            message: 'The specified partition could not be found.',
            availableSpace: 0
        };
    }

    // Check if there's unallocated space to the right
    let availableSpaceMB = 0;
    let hasAdjacentUnallocated = false;

    // Find next partition
    const nextPartition = partitions[partitionIndex + 1];
    
    if (nextPartition && nextPartition.type === 'unallocated') {
        availableSpaceMB = nextPartition.sizeMB;
        hasAdjacentUnallocated = true;
    }

    if (!hasAdjacentUnallocated) {
        return {
            valid: false,
            message: 'The volume cannot be extended. There is no adjacent unallocated space available. You can only extend a volume into unallocated space that is immediately next to it.',
            availableSpace: 0
        };
    }

    if (extendSizeMB <= 0) {
        return {
            valid: false,
            message: 'The extend size must be greater than 0 MB.',
            availableSpace: availableSpaceMB
        };
    }

    if (extendSizeMB > availableSpaceMB) {
        return {
            valid: false,
            message: `The volume cannot be extended by ${formatSize(extendSizeMB)}. Only ${formatSize(availableSpaceMB)} of unallocated space is available.`,
            availableSpace: availableSpaceMB
        };
    }

    // Check if partition type allows extension
    if (partition.type === 'extended') {
        return {
            valid: false,
            message: 'Extended partitions cannot be extended. Only logical drives within extended partitions can be extended.',
            availableSpace: availableSpaceMB
        };
    }

    return {
        valid: true,
        message: '',
        availableSpace: availableSpaceMB
    };
}

/**
 * Validates if a new partition can be created
 * @param {Array} partitions - All partitions array
 * @param {number} sizeMB - Size of new partition in MB
 * @param {string} type - Partition type ('primary' or 'logical')
 * @returns {Object} { valid: boolean, message: string, availableSpace: number }
 */
function validateCreatePartition(partitions, sizeMB, type) {
    // Check size validation
    const sizeValidation = validatePartitionSize(sizeMB);
    if (!sizeValidation.valid) {
        return {
            valid: false,
            message: sizeValidation.message,
            availableSpace: 0
        };
    }

    // Count primary partitions
    const primaryCount = partitions.filter(p => p.type === 'primary').length;

    if (type === 'primary' && primaryCount >= MAX_PARTITION_COUNT) {
        return {
            valid: false,
            message: `Cannot create more than ${MAX_PARTITION_COUNT} primary partitions. This is a limitation of the Master Boot Record (MBR) partition style.`,
            availableSpace: 0
        };
    }

    // Check for extended partition if creating logical
    if (type === 'logical') {
        const hasExtended = partitions.some(p => p.type === 'extended');
        if (!hasExtended) {
            return {
                valid: false,
                message: 'Logical partitions must be created inside an extended partition. Please create an extended partition first.',
                availableSpace: 0
            };
        }
    }

    // Calculate total unallocated space
    const totalUnallocated = partitions
        .filter(p => p.type === 'unallocated')
        .reduce((sum, p) => sum + p.sizeMB, 0);

    if (sizeMB > totalUnallocated) {
        return {
            valid: false,
            message: `Insufficient unallocated space. Requested: ${formatSize(sizeMB)}, Available: ${formatSize(totalUnallocated)}.`,
            availableSpace: totalUnallocated
        };
    }

    return {
        valid: true,
        message: '',
        availableSpace: totalUnallocated
    };
}

/**
 * Validates if a partition can be deleted
 * @param {Object} partition - Partition object
 * @returns {Object} { valid: boolean, message: string }
 */
function validateDelete(partition) {
    if (partition.type === 'unallocated') {
        return {
            valid: false,
            message: 'Unallocated space cannot be deleted.'
        };
    }

    if (partition.type === 'extended') {
        const hasLogical = false; // This would need to be checked against all partitions
        if (hasLogical) {
            return {
                valid: false,
                message: 'Cannot delete extended partition. Please delete all logical drives within it first.'
            };
        }
    }

    return { valid: true, message: '' };
}

/**
 * Validates partition name
 * @param {string} name - Partition name
 * @param {Array} partitions - All partitions array
 * @returns {Object} { valid: boolean, message: string }
 */
function validatePartitionName(name, partitions) {
    if (!name || name.trim().length === 0) {
        return {
            valid: false,
            message: 'The volume label cannot be empty.'
        };
    }

    if (name.length > 11) {
        return {
            valid: false,
            message: 'The volume label is too long. Maximum length is 11 characters (FAT32 limitation).'
        };
    }

    // Check for duplicate names (excluding unallocated)
    const existingNames = partitions
        .filter(p => p.type !== 'unallocated')
        .map(p => p.name.toUpperCase());

    if (existingNames.includes(name.toUpperCase())) {
        return {
            valid: false,
            message: `A volume with the label "${name}" already exists. Please choose a different name.`
        };
    }

    // Validate characters (alphanumeric and some special chars)
    const validPattern = /^[A-Za-z0-9_\- ]+$/;
    if (!validPattern.test(name)) {
        return {
            valid: false,
            message: 'The volume label contains invalid characters. Only letters, numbers, spaces, hyphens, and underscores are allowed.'
        };
    }

    return { valid: true, message: '' };
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validatePartitionSize,
        validateShrink,
        validateExtend,
        validateCreatePartition,
        validateDelete,
        validatePartitionName,
        MIN_PARTITION_SIZE_MB,
        MIN_SHRINK_SIZE_MB,
        MAX_PARTITION_COUNT
    };
}
