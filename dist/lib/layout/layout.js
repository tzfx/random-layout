"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var Layout = /** @class */ (function () {
    function Layout() {
        this.keys = {};
    }
    Layout.prototype.toString = function () {
        return Object.entries(this.keys)
            .map(function (_a) {
            var _ = _a[0], v = _a[1];
            return v.join(" ");
        })
            .join("\n");
    };
    return Layout;
}());
exports.Layout = Layout;
