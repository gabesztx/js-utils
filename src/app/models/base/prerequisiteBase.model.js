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
var base_model_1 = require("./base.model");
var PrerequisiteBaseModel = /** @class */ (function (_super) {
    __extends(PrerequisiteBaseModel, _super);
    function PrerequisiteBaseModel(data) {
        var _this = _super.call(this, data) || this;
        _this.targetId = '';
        _this.targetName = '';
        return _this;
    }
    PrerequisiteBaseModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return PrerequisiteBaseModel;
}(base_model_1.BaseModel));
exports.PrerequisiteBaseModel = PrerequisiteBaseModel;
