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
var referenceBase_model_1 = require("./base/referenceBase.model");
var QulificationLevel;
(function (QulificationLevel) {
    QulificationLevel[QulificationLevel["Unknown"] = 0] = "Unknown";
    QulificationLevel[QulificationLevel["PrePrimarySchool"] = 1] = "PrePrimarySchool";
    QulificationLevel[QulificationLevel["PrimarySchool"] = 2] = "PrimarySchool";
    QulificationLevel[QulificationLevel["Finished10ThGrade"] = 3] = "Finished10ThGrade";
    QulificationLevel[QulificationLevel["TechnicalSchool"] = 4] = "TechnicalSchool";
    QulificationLevel[QulificationLevel["SpecialSchool"] = 5] = "SpecialSchool";
    QulificationLevel[QulificationLevel["VocationalSchool"] = 6] = "VocationalSchool";
    QulificationLevel[QulificationLevel["CompletedSecondarySchool12ThGrade"] = 7] = "CompletedSecondarySchool12ThGrade";
    QulificationLevel[QulificationLevel["Highschool"] = 8] = "Highschool";
    QulificationLevel[QulificationLevel["VocationalCollegeDiploma"] = 9] = "VocationalCollegeDiploma";
    QulificationLevel[QulificationLevel["HighschoolDiploma"] = 10] = "HighschoolDiploma";
    QulificationLevel[QulificationLevel["TechnicianDegree"] = 11] = "TechnicianDegree";
    QulificationLevel[QulificationLevel["HigherEducationalDiploma"] = 12] = "HigherEducationalDiploma";
    QulificationLevel[QulificationLevel["SpecializedHigherEducation"] = 13] = "SpecializedHigherEducation";
})(QulificationLevel = exports.QulificationLevel || (exports.QulificationLevel = {}));
var LabourForceStatus;
(function (LabourForceStatus) {
    LabourForceStatus[LabourForceStatus["Unknown"] = 0] = "Unknown";
    LabourForceStatus[LabourForceStatus["Employed"] = 1] = "Employed";
    LabourForceStatus[LabourForceStatus["Entrepreneur"] = 2] = "Entrepreneur";
    LabourForceStatus[LabourForceStatus["Unemployed"] = 3] = "Unemployed";
    LabourForceStatus[LabourForceStatus["Student"] = 4] = "Student";
    LabourForceStatus[LabourForceStatus["Pensioner"] = 5] = "Pensioner";
    LabourForceStatus[LabourForceStatus["Disabled"] = 6] = "Disabled";
    LabourForceStatus[LabourForceStatus["ParentalLeave"] = 7] = "ParentalLeave";
    LabourForceStatus[LabourForceStatus["Homemaker"] = 8] = "Homemaker";
    LabourForceStatus[LabourForceStatus["OtherInacive"] = 9] = "OtherInacive";
})(LabourForceStatus = exports.LabourForceStatus || (exports.LabourForceStatus = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Unknown"] = 0] = "Unknown";
    Gender[Gender["Male"] = 1] = "Male";
    Gender[Gender["Female"] = 2] = "Female";
})(Gender = exports.Gender || (exports.Gender = {}));
var SystemRole;
(function (SystemRole) {
    SystemRole[SystemRole["None"] = 0] = "None";
    SystemRole[SystemRole["User"] = 1] = "User";
    SystemRole[SystemRole["Administrator"] = 2] = "Administrator";
    SystemRole[SystemRole["SysSupport"] = 3] = "SysSupport";
    SystemRole[SystemRole["AccountAdmin"] = 4] = "AccountAdmin";
    SystemRole[SystemRole["SysAdmin"] = 5] = "SysAdmin";
    SystemRole[SystemRole["InternalApp"] = 6] = "InternalApp";
    SystemRole[SystemRole["ExternalApp"] = 101] = "ExternalApp";
})(SystemRole = exports.SystemRole || (exports.SystemRole = {}));
var UserShallowModel = /** @class */ (function (_super) {
    __extends(UserShallowModel, _super);
    function UserShallowModel(data) {
        var _this = _super.call(this, data) || this;
        _this.userApplications = [];
        _this.qualificationLevel = null;
        _this.failedLoginCount = 0;
        _this.lastUpdateTime = '';
        _this.labourForceStatus = LabourForceStatus.Unknown;
        _this.gender = Gender.Unknown;
        _this.vocationalDegreeCnt = 0;
        _this.detail = 0;
        _this.birthPlace = '';
        _this.birthName = '';
        _this.birthday = '';
        _this.mothersName = '';
        _this.role = SystemRole.None;
        _this.locale = '';
        _this.registrationDate = '';
        _this.lastLoginTime = '';
        _this.incapable = false;
        _this.logins = [];
        _this.userOrganizations = [];
        return _this;
    }
    UserShallowModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return UserShallowModel;
}(referenceBase_model_1.ReferenceBaseModel));
exports.UserShallowModel = UserShallowModel;
