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
var labeledBase_model_1 = require("./base/labeledBase.model");
var CourseModel = /** @class */ (function (_super) {
    __extends(CourseModel, _super);
    function CourseModel(data) {
        var _this = _super.call(this, data) || this;
        _this.imageUrl = '';
        _this.registration = null;
        _this.courseObjects = [];
        _this.provider = null;
        _this.forCredit = false;
        _this.qualificationNotice = '';
        _this.accreditationNum = '';
        _this.isLocked = false;
        return _this;
    }
    CourseModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return CourseModel;
}(labeledBase_model_1.LabeledBaseModel));
exports.CourseModel = CourseModel;
