/**
 * Properties Panel Component for Disk Partition Simulator
 * Windows-style properties window
 */

class PropertiesPanel {
    constructor() {
        this.panel = document.getElementById('propertiesPanel');
        this.currentPartition = null;
    }

    /**
     * Shows properties panel for a partition
     * @param {Object} partition - Partition object
     */
    show(partition) {
        this.currentPartition = partition;
        this.render(partition);
        this.panel.classList.add('show');
    }

    /**
     * Hides the properties panel
     */
    hide() {
        this.panel.classList.remove('show');
        this.currentPartition = null;
    }

    /**
     * Renders properties panel content
     * @param {Object} partition - Partition object
     */
    render(partition) {
        const usedMB = partition.usedMB || generateUsedSpace(partition.sizeMB);
        const freeMB = partition.sizeMB - usedMB;
        const usedPercent = Math.round((usedMB / partition.sizeMB) * 100);

        const properties = [
            { label: 'Volume Label', value: partition.name || 'N/A' },
            { label: 'Type', value: getPartitionTypeName(partition.type) },
            { label: 'File System', value: getFileSystem(partition) },
            { label: 'Status', value: getPartitionStatus(partition) },
            { label: 'Partition Style', value: partition.type === 'logical' ? 'Logical Drive' : 'Primary Partition' },
            { label: 'Total Size', value: formatSize(partition.sizeMB) },
            { label: 'Used Space', value: `${formatSize(usedMB)} (${usedPercent}%)` },
            { label: 'Free Space', value: formatSize(freeMB) },
            { label: 'Partition ID', value: partition.id || 'N/A' },
            { label: 'Drive Letter', value: partition.name && partition.name.match(/^[A-Z]:$/) ? partition.name : 'N/A' }
        ];

        // Add extended partition info if applicable
        if (partition.type === 'extended') {
            properties.splice(4, 0, { label: 'Contains', value: 'Logical Drives' });
        }

        const propertiesHTML = properties.map(prop => `
            <div class="properties-item">
                <span class="properties-label">${prop.label}:</span>
                <span class="properties-value">${prop.value}</span>
            </div>
        `).join('');

        this.panel.innerHTML = `
            <div class="properties-panel-header">
                Properties: ${partition.name || 'Unallocated'}
                <button class="properties-panel-close" id="propertiesClose">×</button>
            </div>
            <div class="properties-list">
                ${propertiesHTML}
            </div>
        `;

        // Attach close button
        const closeBtn = this.panel.querySelector('#propertiesClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.hide());
        }

        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                this.hide();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);

        // Close on overlay click (if clicking outside panel)
        document.addEventListener('click', (e) => {
            if (!this.panel.contains(e.target) && e.target !== this.panel) {
                // Only close if clicking on disk bar or other non-interactive elements
                if (e.target.closest('.disk-bar') || e.target.closest('.partition')) {
                    // Don't close, might be selecting a partition
                    return;
                }
            }
        });
    }

    /**
     * Checks if panel is visible
     * @returns {boolean}
     */
    isVisible() {
        return this.panel.classList.contains('show');
    }
}

// Create global instance
const propertiesPanel = new PropertiesPanel();

