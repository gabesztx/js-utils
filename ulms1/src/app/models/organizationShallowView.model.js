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
var OrganizationExternalIdType;
(function (OrganizationExternalIdType) {
    OrganizationExternalIdType[OrganizationExternalIdType["Unknown"] = 0] = "Unknown";
    OrganizationExternalIdType[OrganizationExternalIdType["ONyA"] = 1] = "ONyA";
    OrganizationExternalIdType[OrganizationExternalIdType["TNyA"] = 2] = "TNyA";
    OrganizationExternalIdType[OrganizationExternalIdType["OMA"] = 3] = "OMA";
    OrganizationExternalIdType[OrganizationExternalIdType["CJSz"] = 4] = "CJSz";
})(OrganizationExternalIdType = exports.OrganizationExternalIdType || (exports.OrganizationExternalIdType = {}));
var OrganizationShallowViewModel = /** @class */ (function (_super) {
    __extends(OrganizationShallowViewModel, _super);
    function OrganizationShallowViewModel(data) {
        var _this = _super.call(this, data) || this;
        _this.contacts = [];
        _this.isConfirmed = false;
        _this.isActive = false;
        _this.externalIdType = OrganizationExternalIdType.Unknown;
        _this.lastUpdateTime = '';
        _this.registrationDate = '';
        _this.domains = [];
        _this.leaderName = '';
        _this.category = '';
        _this.vatExt = '';
        _this.vatBase = '';
        _this.shortName = '';
        _this.name = '';
        _this.parent = null;
        _this.typeOf = '';
        _this.properties = [];
        return _this;
    }
    OrganizationShallowViewModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return OrganizationShallowViewModel;
}(referenceBase_model_1.ReferenceBaseModel));
exports.OrganizationShallowViewModel = OrganizationShallowViewModel;
