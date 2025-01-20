// DOMUtils.js
export class DOMUtils {
    /**
     * Create a DOM element with optional attributes, classes, and inner text.
     * @param {string} tag - The tag name of the element (e.g., 'div', 'span').
     * @param {Object} options - Options for the element.
     * @param {string} [options.text] - Inner text of the element.
     * @param {string} [options.className] - Class name(s) to apply.
     * @param {Object} [options.attributes] - Attributes to set (e.g., { id: "myId" }).
     * @returns {HTMLElement} - The created DOM element.
     */
    static createElement(tag, options = {}) {
        const element = document.createElement(tag);

        if (options.text) {
            element.textContent = options.text;
        }

        if (options.className) {
            element.className = options.className;
        }

        if (options.attributes) {
            Object.keys(options.attributes).forEach((key) => {
                element.setAttribute(key, options.attributes[key]);
            });
        }

        return element;
    }

    /**
     * Remove all child nodes from a parent element.
     * @param {HTMLElement} element - The parent element.
     */
    static removeAllChildren(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    /**
     * Append multiple children to a parent element.
     * @param {HTMLElement} parent - The parent element.
     * @param {HTMLElement[]} children - Array of child elements to append.
     */
    static appendChildren(parent, children) {
        children.forEach((child) => parent.appendChild(child));
    }

    /**
     * Show or hide an element by toggling a class.
     * @param {HTMLElement} element - The element to show or hide.
     * @param {boolean} isVisible - Whether to show the element.
     * @param {string} [className='hidden'] - The class to toggle for hiding.
     */
    static toggleVisibility(element, isVisible, className = 'hidden') {
        if (isVisible) {
            element.classList.remove(className);
        } else {
            element.classList.add(className);
        }
    }
}