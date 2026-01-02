/**
 * Context Menu Component for Disk Partition Simulator
 * Handles right-click and long-press context menus
 */

class ContextMenuManager {
    constructor() {
        this.menu = document.getElementById('contextMenu');
        this.currentPartition = null;
        this.currentPosition = { x: 0, y: 0 };
        this.hideTimeout = null;
    }

    /**
     * Shows context menu for a partition
     * @param {Object} partition - Partition object
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     * @param {Array} partitions - All partitions array
     */
    showPartitionMenu(partition, x, y, partitions) {
        this.currentPartition = partition;
        this.currentPosition = { x, y };

        const menuItems = [];

        // Create New Partition (if there's unallocated space)
        const hasUnallocated = partitions.some(p => p.type === 'unallocated');
        if (hasUnallocated) {
            menuItems.push({
                label: '📁 Create New Partition',
                action: 'create',
                disabled: false
            });
        }

        menuItems.push({ type: 'separator' });

        // Partition-specific actions
        if (partition.type !== 'unallocated') {
            menuItems.push({
                label: '📉 Shrink Volume',
                action: 'shrink',
                disabled: false
            });

            // Check if extend is possible
            const partitionIndex = partitions.findIndex(p => p.id === partition.id);
            const nextPartition = partitions[partitionIndex + 1];
            const canExtend = nextPartition && nextPartition.type === 'unallocated';

            menuItems.push({
                label: '📈 Extend Volume',
                action: 'extend',
                disabled: !canExtend
            });

            menuItems.push({
                label: '🗑️ Delete Volume',
                action: 'delete',
                disabled: false
            });

            menuItems.push({
                label: '💾 Format Volume',
                action: 'format',
                disabled: false
            });

            menuItems.push({ type: 'separator' });

            menuItems.push({
                label: 'ℹ️ Properties',
                action: 'properties',
                disabled: false
            });
        } else {
            // Unallocated space menu
            menuItems.push({
                label: '📁 Create New Partition',
                action: 'create',
                disabled: false
            });
        }

        this.renderMenu(menuItems, x, y);
    }

    /**
     * Shows context menu for unallocated space
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    showUnallocatedMenu(x, y) {
        this.currentPartition = { type: 'unallocated' };
        this.currentPosition = { x, y };

        const menuItems = [
            {
                label: '📁 Create New Partition',
                action: 'create',
                disabled: false
            }
        ];

        this.renderMenu(menuItems, x, y);
    }

    /**
     * Renders the context menu
     * @param {Array} items - Menu items array
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    renderMenu(items, x, y) {
        let menuHTML = '';

        items.forEach((item, index) => {
            if (item.type === 'separator') {
                menuHTML += '<div class="context-menu-separator"></div>';
            } else {
                const disabledClass = item.disabled ? 'disabled' : '';
                menuHTML += `
                    <div class="context-menu-item ${disabledClass}" data-action="${item.action}">
                        ${item.label}
                    </div>
                `;
            }
        });

        this.menu.innerHTML = menuHTML;
        this.positionMenu(x, y);
        this.menu.classList.add('show');
        animateContextMenuShow(this.menu);

        // Attach event listeners
        this.attachEventListeners();
    }

    /**
     * Positions the context menu
     * @param {number} x - X coordinate
     * @param {number} y - Y coordinate
     */
    positionMenu(x, y) {
        const menuRect = this.menu.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // Adjust if menu would go off screen
        let finalX = x;
        let finalY = y;

        if (x + menuRect.width > windowWidth) {
            finalX = windowWidth - menuRect.width - 10;
        }

        if (y + menuRect.height > windowHeight) {
            finalY = windowHeight - menuRect.height - 10;
        }

        // Ensure menu stays within viewport
        finalX = Math.max(10, finalX);
        finalY = Math.max(10, finalY);

        this.menu.style.left = `${finalX}px`;
        this.menu.style.top = `${finalY}px`;
    }

    /**
     * Attaches event listeners to menu items
     */
    attachEventListeners() {
        const items = this.menu.querySelectorAll('.context-menu-item:not(.disabled)');
        
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleAction(action);
                this.hide();
            });
        });

        // Hide menu when clicking outside
        const hideHandler = (e) => {
            if (!this.menu.contains(e.target)) {
                this.hide();
                document.removeEventListener('click', hideHandler);
                document.removeEventListener('contextmenu', hideHandler);
            }
        };

        // Use setTimeout to avoid immediate hide on right-click
        setTimeout(() => {
            document.addEventListener('click', hideHandler);
            document.addEventListener('contextmenu', hideHandler);
        }, 100);
    }

    /**
     * Handles menu action
     * @param {string} action - Action name
     */
    handleAction(action) {
        if (!this.currentPartition) return;

        // Dispatch custom event for app.js to handle
        const event = new CustomEvent('contextMenuAction', {
            detail: {
                action,
                partition: this.currentPartition
            }
        });
        document.dispatchEvent(event);
    }

    /**
     * Hides the context menu
     */
    hide() {
        this.menu.classList.remove('show');
        this.currentPartition = null;
    }

    /**
     * Checks if menu is visible
     * @returns {boolean}
     */
    isVisible() {
        return this.menu.classList.contains('show');
    }
}

// Create global instance
const contextMenuManager = new ContextMenuManager();

// Handle long-press for mobile
let longPressTimer = null;
let longPressTarget = null;

document.addEventListener('touchstart', (e) => {
    const target = e.target.closest('.partition');
    if (target && !target.classList.contains('unallocated')) {
        longPressTarget = target;
        longPressTimer = setTimeout(() => {
            if (longPressTarget) {
                const rect = target.getBoundingClientRect();
                const x = rect.left + rect.width / 2;
                const y = rect.top + rect.height / 2;
                const partitionId = target.dataset.partitionId;
                const partition = window.diskManager?.getPartitionById(partitionId);
                if (partition) {
                    contextMenuManager.showPartitionMenu(partition, x, y, window.diskManager?.partitions || []);
                }
            }
        }, 500); // 500ms long press
    }
});

document.addEventListener('touchend', () => {
    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
    longPressTarget = null;
});

document.addEventListener('touchmove', () => {
    if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
    }
    longPressTarget = null;
});

