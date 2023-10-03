"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.casa = void 0;
var moradia_1 = require("./moradia");
var casa = /** @class */ (function (_super) {
    __extends(casa, _super);
    function casa(tae, tai, pq, pc, pb, ec) {
        var _this = _super.call(this) || this;
        _this.telhadoAreaExterna = tae;
        _this.telhadoAreaInterna = tai;
        _this.paredeQuarto = pq;
        _this.paredeCozinha = pc;
        _this.paredeBanheiro = pb;
        _this.EspelhoCorredor = ec;
        return _this;
    }
    return casa;
}(moradia_1.moradia));
exports.casa = casa;
