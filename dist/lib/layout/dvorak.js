"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dvorak = void 0;
var layout_1 = require("./layout");
var Dvorak = /** @class */ (function (_super) {
    __extends(Dvorak, _super);
    function Dvorak() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Dvorak";
        _this.keys = {
            "Row 1": "1234567890[]".split(""),
            "Row 2": "',.pyfgcrl/=".split(""),
            "Row 3": "aoeuidhtns-".split(""),
            "Row 4": ";qjkxbmwvz".split(""),
        };
        return _this;
    }
    return Dvorak;
}(layout_1.Layout));
exports.Dvorak = Dvorak;
