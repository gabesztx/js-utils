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
var RollupMethod;
(function (RollupMethod) {
    RollupMethod[RollupMethod["Unknown"] = 0] = "Unknown";
    RollupMethod[RollupMethod["None"] = 1] = "None";
    RollupMethod[RollupMethod["Default"] = 2] = "Default";
})(RollupMethod = exports.RollupMethod || (exports.RollupMethod = {}));
var GrossLimitBase;
(function (GrossLimitBase) {
    GrossLimitBase[GrossLimitBase["Unknown"] = 0] = "Unknown";
    GrossLimitBase[GrossLimitBase["FirstAttempt"] = 1] = "FirstAttempt";
    GrossLimitBase[GrossLimitBase["Registration"] = 2] = "Registration";
})(GrossLimitBase = exports.GrossLimitBase || (exports.GrossLimitBase = {}));
var ObjectRequirementModel = /** @class */ (function (_super) {
    __extends(ObjectRequirementModel, _super);
    function ObjectRequirementModel(data) {
        var _this = _super.call(this, data) || this;
        _this.resultStartDate = '';
        _this.resultEndDate = '';
        _this.exemptionForCompleted = false;
        _this.exemptionForSatisfied = false;
        _this.requiredForCompleted = false;
        _this.requiredForSatisfied = false;
        _this.rollupMethod = RollupMethod.Default;
        _this.progressWeight = 0;
        _this.measureWeight = 0;
        _this.averageTime = 0;
        _this.suggestedTime = 0;
        _this.minimumTime = 0;
        _this.netTimeLimit = 0;
        _this.grossTimeLimit = 0;
        _this.grossLimitBase = GrossLimitBase.Unknown;
        _this.netLimitOverride = false;
        _this.grossLimitOverride = false;
        _this.registrationDateOverride = false;
        _this.alwaysAvailable = false;
        return _this;
    }
    ObjectRequirementModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return ObjectRequirementModel;
}(base_model_1.BaseModel));
exports.ObjectRequirementModel = ObjectRequirementModel;
