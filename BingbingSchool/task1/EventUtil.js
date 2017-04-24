var EventUtil = {
    addHandler: function (elememt, type, handler) {
        if (elememt.addEventListener) {
            elememt.addEventListener(type, handler, false);
        }
        else if (element.attachEvent) {
            elememt.attachEvent("on" + type, handler);
        }
        else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function (elememt, type, handler) {
        if (elememt.removeEventListener) {
            elememt.removeEventListener(type, handler, false);
        }
        else if (element.detachEvent) {
            elememt.detachEvent("on" + type, handler);
        }
        else {
            element["on" + type] = null;
        }
    }
};