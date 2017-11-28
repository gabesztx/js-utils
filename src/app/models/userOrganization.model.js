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
var userOrganizationShallow_model_1 = require("./userOrganizationShallow.model");
var UserOrganizationModel = /** @class */ (function (_super) {
    __extends(UserOrganizationModel, _super);
    function UserOrganizationModel(data) {
        return _super.call(this, data) || this;
    }
    UserOrganizationModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return UserOrganizationModel;
}(userOrganizationShallow_model_1.UserOrganizationShallowModel));
exports.UserOrganizationModel = UserOrganizationModel;
