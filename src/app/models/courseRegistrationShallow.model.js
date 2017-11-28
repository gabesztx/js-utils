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
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Unknown"] = 0] = "Unknown";
    ContractStatus[ContractStatus["None"] = 1] = "None";
    ContractStatus[ContractStatus["Rejected"] = 2] = "Rejected";
    ContractStatus[ContractStatus["Required"] = 3] = "Required";
    ContractStatus[ContractStatus["Pending"] = 4] = "Pending";
    ContractStatus[ContractStatus["Accepted"] = 5] = "Accepted";
    ContractStatus[ContractStatus["Failed"] = 6] = "Failed";
})(ContractStatus = exports.ContractStatus || (exports.ContractStatus = {}));
var CourseRegistrationShallowModel = /** @class */ (function (_super) {
    __extends(CourseRegistrationShallowModel, _super);
    function CourseRegistrationShallowModel(data) {
        var _this = _super.call(this, data) || this;
        _this.course = null;
        _this.user = null;
        _this.registrationDate = '';
        _this.application = null;
        _this.externalUserId = '';
        _this.externalContextId = '';
        _this.externalContextTitle = '';
        _this.externalContextLabel = '';
        _this.returnUrl = '';
        _this.returnLabel = '';
        _this.forCredit = false;
        _this.registrarOrganization = null;
        _this.lisOutcomeServiceUrl = '';
        _this.lisResultSourcedid = '';
        _this.lisOutcomeDetailedResult = false;
        _this.ltiConsumerKey = '';
        _this.contractStatus = ContractStatus.Unknown;
        _this.contractDate = '';
        _this.contractAcceptedDate = '';
        _this.contract = null;
        _this.certificate = null;
        _this.qualificationNoticeAppeared = false;
        return _this;
    }
    CourseRegistrationShallowModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return CourseRegistrationShallowModel;
}(base_model_1.BaseModel));
exports.CourseRegistrationShallowModel = CourseRegistrationShallowModel;
