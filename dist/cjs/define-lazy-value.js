/*can-define-lazy-value@1.0.2#define-lazy-value*/
'use strict';
module.exports = function defineLazyValue(obj, prop, initializer, writable) {
    Object.defineProperty(obj, prop, {
        configurable: true,
        get: function () {
            Object.defineProperty(this, prop, {
                value: undefined,
                writable: true
            });
            var value = initializer.call(this, obj, prop);
            Object.defineProperty(this, prop, {
                value: value,
                writable: !!writable
            });
            return value;
        },
        set: function (value) {
            Object.defineProperty(this, prop, {
                value: value,
                writable: !!writable
            });
            return value;
        }
    });
};