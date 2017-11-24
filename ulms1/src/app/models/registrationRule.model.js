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
var RegistrationRuleModel = /** @class */ (function (_super) {
    __extends(RegistrationRuleModel, _super);
    function RegistrationRuleModel(data) {
        var _this = _super.call(this, data) || this;
        _this.startDate = '';
        _this.endDate = '';
        _this.userLimit = 0;
        _this.code = '';
        _this.public = false;
        _this.invitation = false;
        _this.enroll = false;
        _this.learningToolsEnabled = false;
        _this.registrarOrganizationOverride = false;
        return _this;
    }
    RegistrationRuleModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return RegistrationRuleModel;
}(base_model_1.BaseModel));
exports.RegistrationRuleModel = RegistrationRuleModel;
