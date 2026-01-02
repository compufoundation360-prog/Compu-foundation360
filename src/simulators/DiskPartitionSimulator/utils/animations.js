/**
 * Animation utilities for Disk Partition Simulator
 * Provides smooth transitions and visual effects
 */

/**
 * Animates partition width change
 * @param {HTMLElement} element - Partition element
 * @param {number} newWidth - New width in percentage
 * @param {number} duration - Animation duration in ms
 * @returns {Promise} Resolves when animation completes
 */
function animatePartitionResize(element, newWidth, duration = 300) {
    return new Promise((resolve) => {
        element.style.transition = `width ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        element.style.width = `${newWidth}%`;
        
        setTimeout(() => {
            element.style.transition = '';
            resolve();
        }, duration);
    });
}

/**
 * Adds highlight animation to partition
 * @param {HTMLElement} element - Partition element
 * @param {string} color - Highlight color
 * @param {number} duration - Animation duration in ms
 */
function animateHighlight(element, color = '#F39C12', duration = 500) {
    const originalOutline = element.style.outline;
    const originalOutlineOffset = element.style.outlineOffset;
    
    element.style.outline = `3px solid ${color}`;
    element.style.outlineOffset = '-3px';
    element.style.transition = 'outline 0.3s ease';
    
    setTimeout(() => {
        element.style.outline = originalOutline;
        element.style.outlineOffset = originalOutlineOffset;
    }, duration);
}

/**
 * Animates partition creation (slide in)
 * @param {HTMLElement} element - Partition element
 * @returns {Promise} Resolves when animation completes
 */
function animatePartitionCreate(element) {
    return new Promise((resolve) => {
        element.classList.add('creating');
        element.style.opacity = '0';
        element.style.width = '0';
        
        // Force reflow
        element.offsetHeight;
        
        element.style.transition = 'width 0.5s ease-out, opacity 0.5s ease-out';
        element.style.opacity = '1';
        
        // Get target width from data attribute or computed style
        const targetWidth = element.dataset.width || element.style.width;
        element.style.width = targetWidth;
        
        setTimeout(() => {
            element.classList.remove('creating');
            element.style.transition = '';
            resolve();
        }, 500);
    });
}

/**
 * Animates partition deletion (fade out and shrink)
 * @param {HTMLElement} element - Partition element
 * @returns {Promise} Resolves when animation completes
 */
function animatePartitionDelete(element) {
    return new Promise((resolve) => {
        element.classList.add('deleting');
        element.style.transition = 'width 0.5s ease-out, opacity 0.5s ease-out';
        element.style.width = '0';
        element.style.opacity = '0';
        
        setTimeout(() => {
            resolve();
        }, 500);
    });
}

/**
 * Animates popup appearance
 * @param {HTMLElement} element - Popup element
 */
function animatePopupShow(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px) scale(0.95)';
    
    // Force reflow
    element.offsetHeight;
    
    element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) scale(1)';
}

/**
 * Animates popup hide
 * @param {HTMLElement} element - Popup element
 * @returns {Promise} Resolves when animation completes
 */
function animatePopupHide(element) {
    return new Promise((resolve) => {
        element.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        
        setTimeout(() => {
            resolve();
        }, 200);
    });
}

/**
 * Animates context menu appearance
 * @param {HTMLElement} element - Context menu element
 */
function animateContextMenuShow(element) {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.9)';
    
    // Force reflow
    element.offsetHeight;
    
    element.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
    element.style.opacity = '1';
    element.style.transform = 'scale(1)';
}

/**
 * Animates status message appearance
 * @param {HTMLElement} element - Status message element
 */
function animateStatusMessageShow(element) {
    element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    element.classList.add('show');
}

/**
 * Animates status message hide
 * @param {HTMLElement} element - Status message element
 * @returns {Promise} Resolves when animation completes
 */
function animateStatusMessageHide(element) {
    return new Promise((resolve) => {
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        element.classList.remove('show');
        
        setTimeout(() => {
            resolve();
        }, 300);
    });
}

/**
 * Pulses an element (for attention)
 * @param {HTMLElement} element - Element to pulse
 * @param {number} iterations - Number of pulses
 */
function animatePulse(element, iterations = 2) {
    let count = 0;
    const interval = setInterval(() => {
        element.style.transform = 'scale(1.05)';
        element.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
        
        count++;
        if (count >= iterations) {
            clearInterval(interval);
            element.style.transition = '';
        }
    }, 400);
}

/**
 * Smoothly updates text content with count animation
 * @param {HTMLElement} element - Element containing number
 * @param {number} targetValue - Target number value
 * @param {number} duration - Animation duration in ms
 */
function animateNumberChange(element, targetValue, duration = 500) {
    const startValue = parseFloat(element.textContent) || 0;
    const difference = targetValue - startValue;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (difference * easeOut);
        
        element.textContent = Math.round(currentValue);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = targetValue;
        }
    }
    
    requestAnimationFrame(update);
}

/**
 * Shakes an element (for error indication)
 * @param {HTMLElement} element - Element to shake
 */
function animateShake(element) {
    element.style.animation = 'shake 0.5s ease-in-out';
    
    // Add shake keyframes if not already present
    if (!document.getElementById('shake-animation')) {
        const style = document.createElement('style');
        style.id = 'shake-animation';
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animatePartitionResize,
        animateHighlight,
        animatePartitionCreate,
        animatePartitionDelete,
        animatePopupShow,
        animatePopupHide,
        animateContextMenuShow,
        animateStatusMessageShow,
        animateStatusMessageHide,
        animatePulse,
        animateNumberChange,
        animateShake
    };
}

