/**
 * Helper utilities for Disk Partition Simulator
 * Common functions used across the application
 */

/**
 * Formats size in MB to human-readable format
 * @param {number} sizeMB - Size in MB
 * @returns {string} Formatted size string
 */
function formatSize(sizeMB) {
    if (sizeMB >= 1024) {
        const sizeGB = (sizeMB / 1024).toFixed(2);
        return `${parseFloat(sizeGB)} GB`;
    }
    return `${Math.round(sizeMB)} MB`;
}

/**
 * Converts human-readable size to MB
 * @param {string} sizeStr - Size string (e.g., "100 GB", "500 MB")
 * @returns {number} Size in MB, or 0 if invalid
 */
function parseSize(sizeStr) {
    if (!sizeStr || typeof sizeStr !== 'string') {
        return 0;
    }

    const trimmed = sizeStr.trim();
    const match = trimmed.match(/^(\d+(?:\.\d+)?)\s*(GB|MB|gb|mb)$/i);
    
    if (!match) {
        return 0;
    }

    const value = parseFloat(match[1]);
    const unit = match[2].toUpperCase();

    if (unit === 'GB') {
        return Math.round(value * 1024);
    } else {
        return Math.round(value);
    }
}

/**
 * Generates a unique partition ID
 * @returns {string} Unique ID
 */
function generatePartitionId() {
    return `partition-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Generates next available drive letter
 * @param {Array} partitions - All partitions array
 * @returns {string} Next available drive letter (C:, D:, E:, etc.)
 */
function getNextDriveLetter(partitions) {
    const usedLetters = partitions
        .filter(p => p.type !== 'unallocated' && p.name && p.name.match(/^[A-Z]:$/))
        .map(p => p.name.charAt(0).toUpperCase())
        .sort();

    // Start from C (A and B are typically reserved for floppy drives)
    for (let i = 67; i <= 90; i++) { // C to Z
        const letter = String.fromCharCode(i);
        if (!usedLetters.includes(letter)) {
            return `${letter}:`;
        }
    }
    return 'Z:';
}

/**
 * Calculates used space percentage (simulated)
 * @param {Object} partition - Partition object
 * @returns {number} Used space percentage (0-100)
 */
function calculateUsedPercentage(partition) {
    if (partition.usedMB && partition.sizeMB) {
        return Math.round((partition.usedMB / partition.sizeMB) * 100);
    }
    // Simulate random usage between 20-80% for new partitions
    return Math.floor(Math.random() * 60) + 20;
}

/**
 * Generates random used space for a partition
 * @param {number} totalSizeMB - Total partition size in MB
 * @returns {number} Used space in MB
 */
function generateUsedSpace(totalSizeMB) {
    const percentage = calculateUsedPercentage({ sizeMB: totalSizeMB });
    return Math.round((totalSizeMB * percentage) / 100);
}

/**
 * Gets partition type display name
 * @param {string} type - Partition type
 * @returns {string} Display name
 */
function getPartitionTypeName(type) {
    const types = {
        'primary': 'Primary Partition',
        'extended': 'Extended Partition',
        'logical': 'Logical Drive',
        'unallocated': 'Unallocated'
    };
    return types[type] || type;
}

/**
 * Gets file system type
 * @param {Object} partition - Partition object
 * @returns {string} File system type
 */
function getFileSystem(partition) {
    return partition.fileSystem || 'NTFS';
}

/**
 * Gets partition status
 * @param {Object} partition - Partition object
 * @returns {string} Status
 */
function getPartitionStatus(partition) {
    return partition.status || 'Healthy';
}

/**
 * Checks if two partitions are adjacent
 * @param {Object} partition1 - First partition
 * @param {Object} partition2 - Second partition
 * @param {Array} partitions - All partitions array
 * @returns {boolean} True if adjacent
 */
function areAdjacent(partition1, partition2, partitions) {
    const index1 = partitions.findIndex(p => p.id === partition1.id);
    const index2 = partitions.findIndex(p => p.id === partition2.id);
    
    if (index1 === -1 || index2 === -1) {
        return false;
    }
    
    return Math.abs(index1 - index2) === 1;
}

/**
 * Merges adjacent unallocated spaces
 * @param {Array} partitions - All partitions array
 * @returns {Array} Partitions with merged unallocated spaces
 */
function mergeUnallocatedSpaces(partitions) {
    const merged = [];
    let currentUnallocated = null;

    for (let i = 0; i < partitions.length; i++) {
        const partition = partitions[i];

        if (partition.type === 'unallocated') {
            if (currentUnallocated) {
                currentUnallocated.sizeMB += partition.sizeMB;
            } else {
                currentUnallocated = { ...partition };
                merged.push(currentUnallocated);
            }
        } else {
            currentUnallocated = null;
            merged.push(partition);
        }
    }

    return merged;
}

/**
 * Validates drive letter format
 * @param {string} name - Drive letter or name
 * @returns {boolean} True if valid
 */
function isValidDriveLetter(name) {
    if (!name) return false;
    // Allow drive letters (C:) or custom names
    return /^[A-Z]:$/.test(name.toUpperCase()) || /^[A-Za-z0-9_\- ]{1,11}$/.test(name);
}

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Clamps a value between min and max
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatSize,
        parseSize,
        generatePartitionId,
        getNextDriveLetter,
        calculateUsedPercentage,
        generateUsedSpace,
        getPartitionTypeName,
        getFileSystem,
        getPartitionStatus,
        areAdjacent,
        mergeUnallocatedSpaces,
        isValidDriveLetter,
        debounce,
        clamp
    };
}

