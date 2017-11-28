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
var OrganizationType;
(function (OrganizationType) {
    OrganizationType[OrganizationType["Unknown"] = 0] = "Unknown";
    OrganizationType[OrganizationType["Administrator"] = 1] = "Administrator";
    OrganizationType[OrganizationType["Member"] = 2] = "Member";
})(OrganizationType = exports.OrganizationType || (exports.OrganizationType = {}));
var UserOrganizationShallowModel = /** @class */ (function (_super) {
    __extends(UserOrganizationShallowModel, _super);
    function UserOrganizationShallowModel(data) {
        var _this = _super.call(this, data) || this;
        _this.organizationRoleType = null;
        _this.organization = null;
        return _this;
    }
    UserOrganizationShallowModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return UserOrganizationShallowModel;
}(referenceBase_model_1.ReferenceBaseModel));
exports.UserOrganizationShallowModel = UserOrganizationShallowModel;
