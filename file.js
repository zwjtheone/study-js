define("test1", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    // 定义模块math.js
    var basicNum = 0;

    function add (a, b) {
        return a + b;
    }

    exports["default"] = add;
});
