/**
 * Main Application Logic for Disk Partition Simulator
 * Realistic Windows Disk Management style
 */

class DiskManager {
    constructor() {
        this.partitions = [];
        this.totalSizeMB = 500 * 1024; // 500 GB default
        this.selectedPartition = null;
        this.isResizing = false;
        this.resizeStartX = 0;
        this.resizeStartWidth = 0;
        this.resizeStartLeft = 0;
        this.resizePartition = null;
        this.resizeSide = null; // 'left' or 'right'
        this.nextPartitionId = 1;

        this.initialize();
    }

    /**
     * Initializes the disk with default partitions
     * C: 120GB Primary, Extended (containing D: 200GB Logical), 180GB Unallocated
     */
    initialize() {
        this.partitions = [
            {
                id: 'p1',
                name: 'C:',
                sizeMB: 120 * 1024, // 120 GB
                type: 'primary',
                status: 'Healthy',
                fileSystem: 'NTFS',
                usedMB: 60 * 1024,
                freeMB: 60 * 1024
            },
            {
                id: 'ext1',
                name: 'Extended',
                sizeMB: 200 * 1024, // 200 GB (contains logical drive)
                type: 'extended',
                status: 'Healthy',
                fileSystem: '',
                contains: ['p2'] // Contains logical drive D:
            },
            {
                id: 'p2',
                name: 'D:',
                sizeMB: 200 * 1024, // 200 GB Logical inside Extended
                type: 'logical',
                status: 'Healthy',
                fileSystem: 'NTFS',
                usedMB: 100 * 1024,
                freeMB: 100 * 1024,
                parentExtended: 'ext1'
            },
            {
                id: 'unallocated-1',
                name: 'Unallocated',
                sizeMB: 180 * 1024, // 180 GB
                type: 'unallocated'
            }
        ];

        this.render();
        this.updateDiskInfo();
    }

    /**
     * Renders all partitions on the disk bar
     */
    render() {
        const diskBar = document.getElementById('diskBar');
        diskBar.innerHTML = '';

        this.partitions.forEach((partition, index) => {
            // Skip logical drives in main render (they're inside extended)
            if (partition.type === 'logical') return;
            
            const partitionElement = this.createPartitionElement(partition, index);
            diskBar.appendChild(partitionElement);
        });
    }

    /**
     * Creates a partition DOM element with left and right resize handles
     * @param {Object} partition - Partition object
     * @param {number} index - Partition index
     * @returns {HTMLElement} Partition element
     */
    createPartitionElement(partition, index) {
        const widthPercent = (partition.sizeMB / this.totalSizeMB) * 100;
        const partitionDiv = document.createElement('div');
        partitionDiv.className = `partition ${partition.type}`;
        partitionDiv.dataset.partitionId = partition.id;
        partitionDiv.style.width = `${widthPercent}%`;

        const labelDiv = document.createElement('div');
        labelDiv.className = 'partition-label';

        if (partition.type === 'unallocated') {
            labelDiv.innerHTML = `
                <div class="partition-name">Unallocated</div>
                <div class="partition-size">${formatSize(partition.sizeMB)}</div>
            `;
        } else if (partition.type === 'extended') {
            // Show logical drive info if it exists
            const logicalDrive = this.partitions.find(p => p.parentExtended === partition.id);
            labelDiv.innerHTML = `
                <div class="partition-name">${logicalDrive ? logicalDrive.name : 'Extended'}</div>
                <div class="partition-size">${formatSize(partition.sizeMB)}</div>
                <div class="partition-type">${logicalDrive ? 'Logical' : 'Extended'}</div>
            `;
        } else {
            labelDiv.innerHTML = `
                <div class="partition-name">${partition.name}</div>
                <div class="partition-size">${formatSize(partition.sizeMB)}</div>
                <div class="partition-type">${partition.type === 'primary' ? 'Primary' : 'Logical'}</div>
            `;
        }

        partitionDiv.appendChild(labelDiv);

        // Add LEFT resize handle (except for first partition and unallocated)
        if (partition.type !== 'unallocated' && index > 0) {
            const leftHandle = document.createElement('div');
            leftHandle.className = 'resize-handle left';
            partitionDiv.appendChild(leftHandle);

            leftHandle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.startResize(partition, e, 'left');
            });

            leftHandle.addEventListener('touchstart', (e) => {
                e.stopPropagation();
                this.startResize(partition, e, 'left');
            });
        }

        // Add RIGHT resize handle (except for unallocated and last partition)
        if (partition.type !== 'unallocated' && index < this.partitions.filter(p => p.type !== 'logical').length - 1) {
            const rightHandle = document.createElement('div');
            rightHandle.className = 'resize-handle right';
            partitionDiv.appendChild(rightHandle);

            rightHandle.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                this.startResize(partition, e, 'right');
            });

            rightHandle.addEventListener('touchstart', (e) => {
                e.stopPropagation();
                this.startResize(partition, e, 'right');
            });
        }

        // Right-click context menu
        partitionDiv.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.handleContextMenu(partition, e);
        });

        // Click to select
        partitionDiv.addEventListener('click', (e) => {
            if (!this.isResizing && !e.target.classList.contains('resize-handle')) {
                this.selectPartition(partition);
            }
        });

        return partitionDiv;
    }

    /**
     * Handles context menu display
     * @param {Object} partition - Partition object
     * @param {Event} e - Mouse event
     */
    handleContextMenu(partition, e) {
        const x = e.clientX || (e.touches && e.touches[0].clientX);
        const y = e.clientY || (e.touches && e.touches[0].clientY);
        contextMenuManager.showPartitionMenu(partition, x, y, this.partitions);
    }

    /**
     * Starts resize operation
     * @param {Object} partition - Partition to resize
     * @param {Event} e - Mouse/touch event
     * @param {string} side - 'left' or 'right'
     */
    startResize(partition, e, side) {
        this.isResizing = true;
        this.resizePartition = partition;
        this.resizeSide = side;
        this.resizeStartX = e.clientX || (e.touches && e.touches[0].clientX);
        
        const partitionElement = document.querySelector(`[data-partition-id="${partition.id}"]`);
        const diskBar = document.getElementById('diskBar');
        const diskBarRect = diskBar.getBoundingClientRect();
        
        this.resizeStartWidth = partitionElement.offsetWidth;
        this.resizeStartLeft = partitionElement.getBoundingClientRect().left - diskBarRect.left;

        document.addEventListener('mousemove', this.handleResizeMove);
        document.addEventListener('mouseup', this.handleResizeEnd);
        document.addEventListener('touchmove', this.handleResizeMove);
        document.addEventListener('touchend', this.handleResizeEnd);

        const handle = partitionElement.querySelector(`.resize-handle.${side}`);
        if (handle) {
            handle.classList.add('active');
        }
    }

    /**
     * Handles resize mouse/touch move
     * @param {Event} e - Mouse/touch event
     */
    handleResizeMove = (e) => {
        if (!this.isResizing || !this.resizePartition) return;

        const currentX = e.clientX || (e.touches && e.touches[0].clientX);
        const diskBar = document.getElementById('diskBar');
        const diskBarWidth = diskBar.offsetWidth;
        const diskBarRect = diskBar.getBoundingClientRect();
        
        const partitionElement = document.querySelector(`[data-partition-id="${this.resizePartition.id}"]`);
        const deltaX = currentX - this.resizeStartX;
        const deltaPercent = (deltaX / diskBarWidth) * 100;

        if (this.resizeSide === 'right') {
            // Resizing from right edge
            const currentWidthPercent = (this.resizeStartWidth / diskBarWidth) * 100;
            const newWidthPercent = clamp(currentWidthPercent + deltaPercent, 5, 95);
            
            partitionElement.style.width = `${newWidthPercent}%`;
            partitionElement.style.transition = 'none';

            const newSizeMB = Math.round((newWidthPercent / 100) * this.totalSizeMB);
            const sizeLabel = partitionElement.querySelector('.partition-size');
            if (sizeLabel) {
                sizeLabel.textContent = formatSize(newSizeMB);
            }
        } else {
            // Resizing from left edge
            const currentLeftPercent = (this.resizeStartLeft / diskBarWidth) * 100;
            const currentWidthPercent = (this.resizeStartWidth / diskBarWidth) * 100;
            const newLeftPercent = clamp(currentLeftPercent + deltaPercent, 0, 95);
            const newWidthPercent = clamp(currentWidthPercent - deltaPercent, 5, 95);
            
            partitionElement.style.width = `${newWidthPercent}%`;
            partitionElement.style.marginLeft = `${newLeftPercent}%`;
            partitionElement.style.transition = 'none';

            const newSizeMB = Math.round((newWidthPercent / 100) * this.totalSizeMB);
            const sizeLabel = partitionElement.querySelector('.partition-size');
            if (sizeLabel) {
                sizeLabel.textContent = formatSize(newSizeMB);
            }
        }
    };

    /**
     * Handles resize end
     * @param {Event} e - Mouse/touch event
     */
    handleResizeEnd = (e) => {
        if (!this.isResizing || !this.resizePartition) return;

        const partitionElement = document.querySelector(`[data-partition-id="${this.resizePartition.id}"]`);
        const newWidthPercent = parseFloat(partitionElement.style.width);
        const newSizeMB = Math.round((newWidthPercent / 100) * this.totalSizeMB);
        const oldSizeMB = this.resizePartition.sizeMB;
        const sizeDiff = newSizeMB - oldSizeMB;

        // Reset margin
        partitionElement.style.marginLeft = '';

        // Validate and apply resize
        if (this.resizeSide === 'right') {
            if (sizeDiff > 0) {
                this.handleExtendResize(this.resizePartition, sizeDiff);
            } else if (sizeDiff < 0) {
                this.handleShrinkResize(this.resizePartition, Math.abs(sizeDiff));
            }
        } else {
            // Left resize - more complex, affects previous partition
            if (sizeDiff > 0) {
                // Growing left - shrink previous partition
                const partitionIndex = this.partitions.findIndex(p => p.id === this.resizePartition.id);
                const prevPartition = this.partitions[partitionIndex - 1];
                if (prevPartition && prevPartition.type === 'unallocated') {
                    this.handleExtendResize(this.resizePartition, sizeDiff);
                } else {
                    showStatusMessage('Cannot extend from left. No adjacent unallocated space.', 'error');
                    this.render();
                }
            } else if (sizeDiff < 0) {
                // Shrinking left - create unallocated before
                this.handleShrinkResize(this.resizePartition, Math.abs(sizeDiff), 'left');
            }
        }

        partitionElement.style.transition = '';
        const handle = partitionElement.querySelector(`.resize-handle.${this.resizeSide}`);
        if (handle) {
            handle.classList.remove('active');
        }

        this.isResizing = false;
        this.resizePartition = null;
        this.resizeSide = null;

        document.removeEventListener('mousemove', this.handleResizeMove);
        document.removeEventListener('mouseup', this.handleResizeEnd);
        document.removeEventListener('touchmove', this.handleResizeMove);
        document.removeEventListener('touchend', this.handleResizeEnd);
    };

    /**
     * Handles extend via resize
     * @param {Object} partition - Partition to extend
     * @param {number} sizeDiffMB - Size difference in MB
     */
    handleExtendResize(partition, sizeDiffMB) {
        const validation = validateExtend(partition, this.partitions, sizeDiffMB);
        
        if (!validation.valid) {
            showStatusMessage(validation.message, 'error');
            this.render();
            return;
        }

        const partitionIndex = this.partitions.findIndex(p => p.id === partition.id);
        const nextPartition = this.partitions[partitionIndex + 1];

        if (nextPartition && nextPartition.type === 'unallocated') {
            if (sizeDiffMB > nextPartition.sizeMB) {
                sizeDiffMB = nextPartition.sizeMB;
            }

            partition.sizeMB += sizeDiffMB;
            nextPartition.sizeMB -= sizeDiffMB;

            if (nextPartition.sizeMB <= 0) {
                this.partitions.splice(partitionIndex + 1, 1);
            }

            this.render();
            this.updateDiskInfo();
            showStatusMessage(`Partition "${partition.name}" extended by ${formatSize(sizeDiffMB)}`, 'success');
        }
    }

    /**
     * Handles shrink via resize
     * @param {Object} partition - Partition to shrink
     * @param {number} sizeDiffMB - Size difference in MB
     * @param {string} side - 'left' or 'right'
     */
    handleShrinkResize(partition, sizeDiffMB, side = 'right') {
        const validation = validateShrink(partition, sizeDiffMB);
        
        if (!validation.valid) {
            showStatusMessage(validation.message, 'error');
            this.render();
            return;
        }

        partition.sizeMB -= sizeDiffMB;
        const partitionIndex = this.partitions.findIndex(p => p.id === partition.id);

        if (side === 'right') {
            const nextPartition = this.partitions[partitionIndex + 1];
            if (nextPartition && nextPartition.type === 'unallocated') {
                nextPartition.sizeMB += sizeDiffMB;
            } else {
                this.partitions.splice(partitionIndex + 1, 0, {
                    id: `unallocated-${Date.now()}`,
                    name: 'Unallocated',
                    sizeMB: sizeDiffMB,
                    type: 'unallocated'
                });
            }
        } else {
            // Shrinking from left - add unallocated before
            const prevPartition = this.partitions[partitionIndex - 1];
            if (prevPartition && prevPartition.type === 'unallocated') {
                prevPartition.sizeMB += sizeDiffMB;
            } else {
                this.partitions.splice(partitionIndex, 0, {
                    id: `unallocated-${Date.now()}`,
                    name: 'Unallocated',
                    sizeMB: sizeDiffMB,
                    type: 'unallocated'
                });
            }
        }

        this.render();
        this.updateDiskInfo();
        showStatusMessage(`Partition "${partition.name}" shrunk by ${formatSize(sizeDiffMB)}`, 'success');
    }

    /**
     * Selects a partition
     * @param {Object} partition - Partition to select
     */
    selectPartition(partition) {
        document.querySelectorAll('.partition.selected').forEach(el => {
            el.classList.remove('selected');
        });

        const partitionElement = document.querySelector(`[data-partition-id="${partition.id}"]`);
        if (partitionElement) {
            partitionElement.classList.add('selected');
            animateHighlight(partitionElement);
        }

        this.selectedPartition = partition;
    }

    /**
     * Creates a new partition
     * @param {Object} options - Partition options
     */
    createPartition(options) {
        const { name, sizeMB, type } = options;

        const nameValidation = validatePartitionName(name, this.partitions);
        if (!nameValidation.valid) {
            showStatusMessage(nameValidation.message, 'error');
            return;
        }

        const validation = validateCreatePartition(this.partitions, sizeMB, type);
        if (!validation.valid) {
            showStatusMessage(validation.message, 'error');
            return;
        }

        let targetIndex = -1;
        let maxUnallocated = 0;

        this.partitions.forEach((p, index) => {
            if (p.type === 'unallocated' && p.sizeMB > maxUnallocated) {
                maxUnallocated = p.sizeMB;
                targetIndex = index;
            }
        });

        if (targetIndex === -1) {
            showStatusMessage('No unallocated space available', 'error');
            return;
        }

        const unallocatedPartition = this.partitions[targetIndex];

        if (sizeMB > unallocatedPartition.sizeMB) {
            showStatusMessage(`Insufficient space. Available: ${formatSize(unallocatedPartition.sizeMB)}`, 'error');
            return;
        }

        const newPartition = {
            id: generatePartitionId(),
            name: name,
            sizeMB: sizeMB,
            type: type,
            status: 'Healthy',
            fileSystem: 'NTFS',
            usedMB: generateUsedSpace(sizeMB),
            freeMB: sizeMB - generateUsedSpace(sizeMB)
        };

        unallocatedPartition.sizeMB -= sizeMB;

        if (unallocatedPartition.sizeMB > 0) {
            this.partitions.splice(targetIndex, 0, newPartition);
        } else {
            this.partitions[targetIndex] = newPartition;
        }

        this.render();
        this.updateDiskInfo();
        showStatusMessage(`Partition "${name}" created successfully`, 'success');

        setTimeout(() => {
            const partitionElement = document.querySelector(`[data-partition-id="${newPartition.id}"]`);
            if (partitionElement) {
                animatePartitionCreate(partitionElement);
            }
        }, 100);
    }

    /**
     * Shrinks a partition
     * @param {Object} partition - Partition to shrink
     * @param {number} shrinkSizeMB - Size to shrink in MB
     */
    shrinkPartition(partition, shrinkSizeMB) {
        const validation = validateShrink(partition, shrinkSizeMB);
        
        if (!validation.valid) {
            showStatusMessage(validation.message, 'error');
            return;
        }

        partition.sizeMB -= shrinkSizeMB;
        partition.freeMB = partition.sizeMB - (partition.usedMB || 0);

        const partitionIndex = this.partitions.findIndex(p => p.id === partition.id);
        const nextPartition = this.partitions[partitionIndex + 1];

        if (nextPartition && nextPartition.type === 'unallocated') {
            nextPartition.sizeMB += shrinkSizeMB;
        } else {
            this.partitions.splice(partitionIndex + 1, 0, {
                id: `unallocated-${Date.now()}`,
                name: 'Unallocated',
                sizeMB: shrinkSizeMB,
                type: 'unallocated'
            });
        }

        this.render();
        this.updateDiskInfo();
        showStatusMessage(`Partition "${partition.name}" shrunk by ${formatSize(shrinkSizeMB)}`, 'success');
    }

    /**
     * Extends a partition
     * @param {Object} partition - Partition to extend
     * @param {number} extendSizeMB - Size to extend in MB
     */
    extendPartition(partition, extendSizeMB) {
        const validation = validateExtend(partition, this.partitions, extendSizeMB);
        
        if (!validation.valid) {
            showStatusMessage(validation.message, 'error');
            return;
        }

        const partitionIndex = this.partitions.findIndex(p => p.id === partition.id);
        const nextPartition = this.partitions[partitionIndex + 1];

        if (nextPartition && nextPartition.type === 'unallocated') {
            if (extendSizeMB > nextPartition.sizeMB) {
                extendSizeMB = nextPartition.sizeMB;
            }

            partition.sizeMB += extendSizeMB;
            partition.freeMB = partition.sizeMB - (partition.usedMB || 0);
            nextPartition.sizeMB -= extendSizeMB;

            if (nextPartition.sizeMB <= 0) {
                this.partitions.splice(partitionIndex + 1, 1);
            }

            this.render();
            this.updateDiskInfo();
            showStatusMessage(`Partition "${partition.name}" extended by ${formatSize(extendSizeMB)}`, 'success');
        }
    }

    /**
     * Deletes a partition
     * @param {Object} partition - Partition to delete
     */
    deletePartition(partition) {
        const validation = validateDelete(partition);
        
        if (!validation.valid) {
            showStatusMessage(validation.message, 'error');
            return;
        }

        const partitionIndex = this.partitions.findIndex(p => p.id === partition.id);
        const partitionElement = document.querySelector(`[data-partition-id="${partition.id}"]`);

        if (partitionElement) {
            animatePartitionDelete(partitionElement).then(() => {
                const prevPartition = this.partitions[partitionIndex - 1];
                const nextPartition = this.partitions[partitionIndex + 1];

                if (prevPartition && prevPartition.type === 'unallocated') {
                    prevPartition.sizeMB += partition.sizeMB;
                    this.partitions.splice(partitionIndex, 1);
                } else if (nextPartition && nextPartition.type === 'unallocated') {
                    nextPartition.sizeMB += partition.sizeMB;
                    this.partitions.splice(partitionIndex, 1);
                } else {
                    this.partitions[partitionIndex] = {
                        id: `unallocated-${Date.now()}`,
                        name: 'Unallocated',
                        sizeMB: partition.sizeMB,
                        type: 'unallocated'
                    };
                }

                this.render();
                this.updateDiskInfo();
                showStatusMessage(`Partition "${partition.name}" deleted`, 'success');
            });
        } else {
            this.partitions.splice(partitionIndex, 1);
            this.render();
            this.updateDiskInfo();
            showStatusMessage(`Partition "${partition.name}" deleted`, 'success');
        }
    }

    /**
     * Formats a partition
     * @param {Object} partition - Partition to format
     */
    formatPartition(partition) {
        partition.usedMB = 0;
        partition.freeMB = partition.sizeMB;
        partition.fileSystem = 'NTFS';
        showStatusMessage(`Partition "${partition.name}" formatted`, 'success');
        animateHighlight(document.querySelector(`[data-partition-id="${partition.id}"]`));
    }

    /**
     * Updates disk info display
     */
    updateDiskInfo() {
        const totalUnallocated = this.partitions
            .filter(p => p.type === 'unallocated')
            .reduce((sum, p) => sum + p.sizeMB, 0);

        document.getElementById('totalSize').textContent = formatSize(this.totalSizeMB);
        document.getElementById('unallocatedSize').textContent = formatSize(totalUnallocated);
    }

    /**
     * Resets disk to default state
     */
    reset() {
        this.partitions = [];
        this.selectedPartition = null;
        this.nextPartitionId = 1;
        this.initialize();
        showStatusMessage('Disk reset to default state', 'info');
    }

    /**
     * Gets partition by ID
     * @param {string} id - Partition ID
     * @returns {Object|null} Partition object or null
     */
    getPartitionById(id) {
        return this.partitions.find(p => p.id === id) || null;
    }
}

/**
 * Shows status message
 * @param {string} message - Message text
 * @param {string} type - Message type (success, error, warning, info)
 */
function showStatusMessage(message, type = 'info') {
    const statusEl = document.getElementById('statusMessage');
    statusEl.textContent = message;
    statusEl.className = `status-message ${type} show`;

    setTimeout(() => {
        animateStatusMessageHide(statusEl);
    }, 3000);
}

// Initialize application
let diskManager;

document.addEventListener('DOMContentLoaded', () => {
    diskManager = new DiskManager();
    window.diskManager = diskManager;

    document.getElementById('resetBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset the disk to default state?')) {
            diskManager.reset();
        }
    });

    document.addEventListener('contextMenuAction', (e) => {
        const { action, partition } = e.detail;
        const p = diskManager.getPartitionById(partition.id);

        switch (action) {
            case 'create':
                const totalUnallocated = diskManager.partitions
                    .filter(p => p.type === 'unallocated')
                    .reduce((sum, p) => sum + p.sizeMB, 0);
                popupManager.showCreatePopup(totalUnallocated, (data) => {
                    diskManager.createPartition(data);
                });
                break;

            case 'shrink':
                popupManager.showShrinkPopup(p, (sizeMB) => {
                    diskManager.shrinkPartition(p, sizeMB);
                });
                break;

            case 'extend':
                const validation = validateExtend(p, diskManager.partitions, 0);
                if (validation.valid) {
                    popupManager.showExtendPopup(p, validation.availableSpace, (sizeMB) => {
                        diskManager.extendPartition(p, sizeMB);
                    });
                } else {
                    showStatusMessage(validation.message, 'error');
                }
                break;

            case 'delete':
                popupManager.showDeletePopup(p, () => {
                    diskManager.deletePartition(p);
                });
                break;

            case 'format':
                if (confirm(`Format partition "${p.name}"? All data will be lost.`)) {
                    diskManager.formatPartition(p);
                }
                break;

            case 'properties':
                propertiesPanel.show(p);
                break;
        }
    });

    document.getElementById('diskBar').addEventListener('contextmenu', (e) => {
        if (e.target.classList.contains('disk-bar')) {
            e.preventDefault();
            contextMenuManager.showUnallocatedMenu(e.clientX, e.clientY);
        }
    });
});
