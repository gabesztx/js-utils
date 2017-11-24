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
var userShallow_model_1 = require("./userShallow.model");
var TwoFactorAuthenticationStatus;
(function (TwoFactorAuthenticationStatus) {
    TwoFactorAuthenticationStatus[TwoFactorAuthenticationStatus["Unknown"] = 0] = "Unknown";
    TwoFactorAuthenticationStatus[TwoFactorAuthenticationStatus["NotNeeded"] = 1] = "NotNeeded";
    TwoFactorAuthenticationStatus[TwoFactorAuthenticationStatus["Required"] = 2] = "Required";
    TwoFactorAuthenticationStatus[TwoFactorAuthenticationStatus["Set"] = 3] = "Set";
})(TwoFactorAuthenticationStatus = exports.TwoFactorAuthenticationStatus || (exports.TwoFactorAuthenticationStatus = {}));
var UserModel = /** @class */ (function (_super) {
    __extends(UserModel, _super);
    function UserModel(data) {
        var _this = _super.call(this, data) || this;
        _this.passowrd = '';
        _this.redirectOnNextLogon = '';
        _this.needPasswordChange = false;
        _this.twoFactorAuthenticationStatus = TwoFactorAuthenticationStatus.Unknown;
        _this.contacts = [];
        _this.logins = [];
        _this.userOrganizations = [];
        _this.userApplications = [];
        return _this;
    }
    UserModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return UserModel;
}(userShallow_model_1.UserShallowModel));
exports.UserModel = UserModel;
