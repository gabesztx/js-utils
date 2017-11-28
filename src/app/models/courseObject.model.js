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
var TechnicalProfile;
(function (TechnicalProfile) {
    TechnicalProfile[TechnicalProfile["Unknown"] = 0] = "Unknown";
    TechnicalProfile[TechnicalProfile["XgaDesktop"] = 1] = "XgaDesktop";
    TechnicalProfile[TechnicalProfile["XgaDesktopMobile"] = 2] = "XgaDesktopMobile";
    TechnicalProfile[TechnicalProfile["XgsDesktopMobileHtmlOnly"] = 3] = "XgsDesktopMobileHtmlOnly";
})(TechnicalProfile = exports.TechnicalProfile || (exports.TechnicalProfile = {}));
var CourseObjectModel = /** @class */ (function (_super) {
    __extends(CourseObjectModel, _super);
    function CourseObjectModel(data) {
        var _this = _super.call(this, data) || this;
        _this.index = 0;
        _this.parent = null;
        _this.requirement = null;
        _this.prerequisite = [];
        _this.serviceTechnicalProfile = TechnicalProfile.Unknown;
        _this.disturbingContent = false;
        return _this;
    }
    CourseObjectModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return CourseObjectModel;
}(labeledBase_model_1.LabeledBaseModel));
exports.CourseObjectModel = CourseObjectModel;
