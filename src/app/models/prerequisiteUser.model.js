"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var prerequisiteBase_model_1 = require("./base/prerequisiteBase.model");
var PrerequisiteUserModel = /** @class */ (function (_super) {
    __extends(PrerequisiteUserModel, _super);
    function PrerequisiteUserModel(data) {
        var _this = _super.call(this, data) || this;
        _this.qualified = false;
        return _this;
    }
    PrerequisiteUserModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return PrerequisiteUserModel;
}(prerequisiteBase_model_1.PrerequisiteBaseModel));
exports.PrerequisiteUserModel = PrerequisiteUserModel;
