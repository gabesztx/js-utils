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
var base_model_1 = require("./base/base.model");
var CourseActivityStatus;
(function (CourseActivityStatus) {
    CourseActivityStatus[CourseActivityStatus["Unknown"] = 0] = "Unknown";
    CourseActivityStatus[CourseActivityStatus["Disabled"] = 1] = "Disabled";
    CourseActivityStatus[CourseActivityStatus["NotAttempted"] = 2] = "NotAttempted";
    CourseActivityStatus[CourseActivityStatus["Attempted"] = 3] = "Attempted";
    CourseActivityStatus[CourseActivityStatus["Completed"] = 4] = "Completed";
    CourseActivityStatus[CourseActivityStatus["Satisfied"] = 5] = "Satisfied";
    CourseActivityStatus[CourseActivityStatus["Qualified"] = 6] = "Qualified";
    CourseActivityStatus[CourseActivityStatus["Failed"] = 7] = "Failed";
})(CourseActivityStatus = exports.CourseActivityStatus || (exports.CourseActivityStatus = {}));
var CourseState;
(function (CourseState) {
    CourseState[CourseState["Unknown"] = 0] = "Unknown";
    CourseState[CourseState["Listed"] = 1] = "Listed";
    CourseState[CourseState["Open"] = 2] = "Open";
    CourseState[CourseState["Inactive"] = 3] = "Inactive";
    CourseState[CourseState["Active"] = 4] = "Active";
    CourseState[CourseState["Closed"] = 5] = "Closed";
})(CourseState = exports.CourseState || (exports.CourseState = {}));
var CourseActivityModel = /** @class */ (function (_super) {
    __extends(CourseActivityModel, _super);
    function CourseActivityModel(data) {
        var _this = _super.call(this, data) || this;
        _this.status = null;
        _this.state = null;
        _this.registration = null;
        _this.target = null;
        _this.result = null;
        _this.links = [];
        return _this;
    }
    CourseActivityModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return CourseActivityModel;
}(base_model_1.BaseModel));
exports.CourseActivityModel = CourseActivityModel;
