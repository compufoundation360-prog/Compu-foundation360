/**
 * Popup Component for Disk Partition Simulator
 * Handles all modal dialogs and user inputs
 */

class PopupManager {
    constructor() {
        this.overlay = document.getElementById('popupOverlay');
        this.popup = document.getElementById('popup');
        this.currentCallback = null;
    }

    /**
     * Shows a popup with custom content
     * @param {Object} options - Popup configuration
     * @param {string} options.title - Popup title
     * @param {string} options.description - Popup description
     * @param {Array} options.fields - Form fields array
     * @param {Function} options.onConfirm - Callback when confirmed
     * @param {Function} options.onCancel - Callback when cancelled
     */
    show(options) {
        const {
            title = 'Dialog',
            description = '',
            fields = [],
            onConfirm = null,
            onCancel = null,
            type = 'form' // 'form' or 'properties'
        } = options;

        this.currentCallback = { onConfirm, onCancel };

        let content = '';

        if (type === 'properties') {
            content = this.renderProperties(title, description, fields);
        } else {
            content = this.renderForm(title, description, fields);
        }

        this.popup.innerHTML = content;
        this.overlay.classList.add('show');
        animatePopupShow(this.popup);

        // Focus first input
        const firstInput = this.popup.querySelector('input, select');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }

        // Attach event listeners
        this.attachEventListeners();
    }

    /**
     * Renders form popup
     */
    renderForm(title, description, fields) {
        let fieldsHTML = fields.map(field => {
            if (field.type === 'select') {
                return `
                    <div class="form-group">
                        <label class="form-label">${field.label}</label>
                        <select class="form-select" name="${field.name}" ${field.required ? 'required' : ''}>
                            ${field.options.map(opt => 
                                `<option value="${opt.value}" ${opt.selected ? 'selected' : ''}>${opt.label}</option>`
                            ).join('')}
                        </select>
                    </div>
                `;
            } else {
                return `
                    <div class="form-group">
                        <label class="form-label">${field.label}</label>
                        <input 
                            type="${field.type || 'text'}" 
                            class="form-input" 
                            name="${field.name}" 
                            placeholder="${field.placeholder || ''}"
                            value="${field.value || ''}"
                            ${field.required ? 'required' : ''}
                            ${field.min !== undefined ? `min="${field.min}"` : ''}
                            ${field.max !== undefined ? `max="${field.max}"` : ''}
                            ${field.step !== undefined ? `step="${field.step}"` : ''}
                        />
                        ${field.hint ? `<small style="color: var(--text-secondary); font-size: 0.85rem;">${field.hint}</small>` : ''}
                    </div>
                `;
            }
        }).join('');

        return `
            <h2 class="popup-title">${title}</h2>
            ${description ? `<p class="popup-description">${description}</p>` : ''}
            <form class="popup-form" id="popupForm">
                ${fieldsHTML}
                <div class="popup-buttons">
                    <button type="button" class="btn-popup btn-popup-secondary" id="popupCancel">Cancel</button>
                    <button type="submit" class="btn-popup btn-popup-primary" id="popupConfirm">Confirm</button>
                </div>
            </form>
        `;
    }

    /**
     * Renders properties popup
     */
    renderProperties(title, description, properties) {
        const propertiesHTML = properties.map(prop => `
            <li class="properties-item">
                <span class="properties-label">${prop.label}:</span>
                <span class="properties-value">${prop.value}</span>
            </li>
        `).join('');

        return `
            <h2 class="popup-title">${title}</h2>
            ${description ? `<p class="popup-description">${description}</p>` : ''}
            <ul class="properties-list">
                ${propertiesHTML}
            </ul>
            <div class="popup-buttons">
                <button type="button" class="btn-popup btn-popup-primary" id="popupClose">Close</button>
            </div>
        `;
    }

    /**
     * Attaches event listeners to popup
     */
    attachEventListeners() {
        const form = this.popup.querySelector('#popupForm');
        const cancelBtn = this.popup.querySelector('#popupCancel');
        const closeBtn = this.popup.querySelector('#popupClose');

        // Form submission
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleConfirm();
            });
        }

        // Cancel button
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                this.handleCancel();
            });
        }

        // Close button (for properties)
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hide();
            });
        }

        // Close on overlay click
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.handleCancel();
            }
        });

        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                this.handleCancel();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    }

    /**
     * Handles confirm action
     */
    handleConfirm() {
        const form = this.popup.querySelector('#popupForm');
        if (form && !form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const formData = new FormData(form || this.popup);
        const data = {};
        
        if (form) {
            for (const [key, value] of formData.entries()) {
                data[key] = value;
            }
        }

        if (this.currentCallback && this.currentCallback.onConfirm) {
            this.currentCallback.onConfirm(data);
        }

        this.hide();
    }

    /**
     * Handles cancel action
     */
    handleCancel() {
        if (this.currentCallback && this.currentCallback.onCancel) {
            this.currentCallback.onCancel();
        }
        this.hide();
    }

    /**
     * Hides the popup
     */
    async hide() {
        await animatePopupHide(this.popup);
        this.overlay.classList.remove('show');
        this.currentCallback = null;
    }

    /**
     * Shows shrink partition popup
     */
    showShrinkPopup(partition, onConfirm, onCancel) {
        this.show({
            title: 'Shrink Partition',
            description: `Shrink "${partition.name}" partition. Current size: ${formatSize(partition.sizeMB)}`,
            fields: [
                {
                    label: 'Shrink Size',
                    name: 'size',
                    type: 'text',
                    placeholder: 'e.g., 50 GB or 10240 MB',
                    required: true,
                    hint: `Maximum shrink: ${formatSize(partition.sizeMB - MIN_PARTITION_SIZE_MB)}`
                }
            ],
            onConfirm: (data) => {
                const sizeMB = parseSize(data.size);
                if (sizeMB > 0) {
                    onConfirm(sizeMB);
                } else {
                    showStatusMessage('Invalid size format. Use "GB" or "MB" (e.g., "50 GB")', 'error');
                }
            },
            onCancel
        });
    }

    /**
     * Shows extend partition popup
     */
    showExtendPopup(partition, availableSpaceMB, onConfirm, onCancel) {
        this.show({
            title: 'Extend Partition',
            description: `Extend "${partition.name}" partition. Available space: ${formatSize(availableSpaceMB)}`,
            fields: [
                {
                    label: 'Extend Size',
                    name: 'size',
                    type: 'text',
                    placeholder: `e.g., ${formatSize(Math.min(availableSpaceMB, 10240))}`,
                    required: true,
                    hint: `Maximum extend: ${formatSize(availableSpaceMB)}`
                }
            ],
            onConfirm: (data) => {
                const sizeMB = parseSize(data.size);
                if (sizeMB > 0) {
                    onConfirm(sizeMB);
                } else {
                    showStatusMessage('Invalid size format. Use "GB" or "MB" (e.g., "50 GB")', 'error');
                }
            },
            onCancel
        });
    }

    /**
     * Shows create partition popup
     */
    showCreatePopup(availableSpaceMB, onConfirm, onCancel) {
        this.show({
            title: 'Create New Partition',
            description: `Create a new partition. Available unallocated space: ${formatSize(availableSpaceMB)}`,
            fields: [
                {
                    label: 'Partition Name',
                    name: 'name',
                    type: 'text',
                    placeholder: 'e.g., D:, E:, DATA',
                    required: true,
                    hint: 'Maximum 11 characters'
                },
                {
                    label: 'Size',
                    name: 'size',
                    type: 'text',
                    placeholder: 'e.g., 100 GB or 51200 MB',
                    required: true,
                    hint: `Minimum: ${formatSize(MIN_PARTITION_SIZE_MB)}`
                },
                {
                    label: 'Type',
                    name: 'type',
                    type: 'select',
                    options: [
                        { value: 'primary', label: 'Primary Partition', selected: true },
                        { value: 'logical', label: 'Logical Partition' }
                    ]
                }
            ],
            onConfirm: (data) => {
                const sizeMB = parseSize(data.size);
                if (sizeMB > 0) {
                    onConfirm({
                        name: data.name.trim(),
                        sizeMB,
                        type: data.type
                    });
                } else {
                    showStatusMessage('Invalid size format. Use "GB" or "MB" (e.g., "50 GB")', 'error');
                }
            },
            onCancel
        });
    }

    /**
     * Shows delete confirmation popup
     */
    showDeletePopup(partition, onConfirm, onCancel) {
        this.show({
            title: 'Delete Partition',
            description: `Are you sure you want to delete partition "${partition.name}"? This action cannot be undone.`,
            fields: [],
            onConfirm,
            onCancel
        });
    }

    /**
     * Shows partition properties popup
     */
    showPropertiesPopup(partition) {
        const properties = [
            { label: 'Name', value: partition.name },
            { label: 'Size', value: formatSize(partition.sizeMB) },
            { label: 'Type', value: partition.type === 'primary' ? 'Primary Partition' : partition.type === 'logical' ? 'Logical Partition' : 'Unallocated' },
            { label: 'Status', value: partition.status || 'Healthy' },
            { label: 'File System', value: partition.fileSystem || 'NTFS' },
            { label: 'Used Space', value: partition.usedMB ? formatSize(partition.usedMB) : 'N/A' },
            { label: 'Free Space', value: partition.freeMB ? formatSize(partition.freeMB) : formatSize(partition.sizeMB) }
        ];

        this.show({
            title: 'Partition Properties',
            description: `Properties of "${partition.name}"`,
            fields: properties,
            type: 'properties'
        });
    }
}

// Create global instance
const popupManager = new PopupManager();

