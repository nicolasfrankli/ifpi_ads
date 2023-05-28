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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileError = exports.InvalidValueError = exports.insufficientFunds = exports.InvalidSavingError = exports.accountNotFound = exports.AplicationError = void 0;
var AplicationError = /** @class */ (function (_super) {
    __extends(AplicationError, _super);
    function AplicationError(message) {
        return _super.call(this, message) || this;
    }
    return AplicationError;
}(Error));
exports.AplicationError = AplicationError;
var accountNotFound = /** @class */ (function (_super) {
    __extends(accountNotFound, _super);
    function accountNotFound(message) {
        return _super.call(this, message) || this;
    }
    return accountNotFound;
}(Error));
exports.accountNotFound = accountNotFound;
var InvalidSavingError = /** @class */ (function (_super) {
    __extends(InvalidSavingError, _super);
    function InvalidSavingError(message) {
        return _super.call(this, message) || this;
    }
    return InvalidSavingError;
}(Error));
exports.InvalidSavingError = InvalidSavingError;
var insufficientFunds = /** @class */ (function (_super) {
    __extends(insufficientFunds, _super);
    function insufficientFunds(message) {
        return _super.call(this, message) || this;
    }
    return insufficientFunds;
}(AplicationError));
exports.insufficientFunds = insufficientFunds;
var InvalidValueError = /** @class */ (function (_super) {
    __extends(InvalidValueError, _super);
    function InvalidValueError(message) {
        return _super.call(this, message) || this;
    }
    return InvalidValueError;
}(AplicationError));
exports.InvalidValueError = InvalidValueError;
var FileError = /** @class */ (function (_super) {
    __extends(FileError, _super);
    function FileError(message) {
        return _super.call(this, message) || this;
    }
    return FileError;
}(Error));
exports.FileError = FileError;
