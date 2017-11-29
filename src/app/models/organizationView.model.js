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
var organizationShallowView_model_1 = require("./organizationShallowView.model");
var OrganizationViewModel = /** @class */ (function (_super) {
    __extends(OrganizationViewModel, _super);
    function OrganizationViewModel(data) {
        var _this = _super.call(this, data) || this;
        _this.contancts = [];
        _this.domains = [];
        _this.properties = [];
        return _this;
    }
    OrganizationViewModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return OrganizationViewModel;
}(organizationShallowView_model_1.OrganizationShallowViewModel));
exports.OrganizationViewModel = OrganizationViewModel;