var screen;
var native;

/**
 * @param {BrowserWindow} browserWindow                  - reference to the browser window the OSK
 *                                                         is shown in reference to
 * @param {boolean}       menuPresent                    - whether the browser window has a menu
 * @param {number}        keyboardHeightScreenPercentage - the height of the OSK in screen height
 *                                                         percentage
 * @constructor
 */
function OSK(browserWindow, menuPresent, keyboardHeightScreenPercentage, keyboardWidthScreenPercentage) {
    this.browserWindow = browserWindow;
    this.menuPresent = menuPresent;
    this.keyboardHeightScreenPercentage = keyboardHeightScreenPercentage || 30;
    this.keyboardWidthScreenPercentage = keyboardWidthScreenPercentage || 70;
}

/**
 * Makes the OSK to appear.
 *
 * @param {number} x      - position at screen x
 * @param {number} y      - position at screen y
 * @param {number} width  - width of the OSK
 * @param {number} height - height of the OSK
 * @returns {boolean}
 */
OSK.prototype.show = function(x, y, width, height) {
    console.log('mock virtual keyboard: show');
    return false;
};

/**
 * Makes the OSK to close.
 * @returns {boolean}
 */
OSK.prototype.close = function() {
    console.log('mock virtual keyboard: close');
    return true;
};

/**
 * Checks if the OSK is visible.
 * @returns {boolean}
 */
OSK.prototype.isVisible = function() {
    console.log('mock virtual keyboard: isVisible');
    return true;
};

/**
 * Gets some system specific window metrics.
 * @returns {{topBarThickness: number, borderThickness: number, menuHeight: number}}
 */
OSK.prototype.getSystem = function() {
    console.log('mock virtual keyboard: getSystem');
    return {
        topBarThickness: 0,
        borderThickness: 0,
        menuHeight: 0
    };
};

/**
 * Shows the OSK in regard to a html event. Tries to position the OSK according to event.target
 * element.
 * @param {number} inBrowserYOffset - browser event
 * @param {number} height           - height of the input element
 * @param {number} padding          - additional y offset for the OSK
 * @returns {boolean}
 */
OSK.prototype.showFromEvent = function(inBrowserYOffset, height, padding) {
    console.log('mock virtual keyboard: showFromEvent');
    return this.show(0, 0, 0, 0);
};

module.exports = OSK;
