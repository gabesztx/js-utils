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
var ObjectResultModel = /** @class */ (function (_super) {
    __extends(ObjectResultModel, _super);
    function ObjectResultModel(data) {
        var _this = _super.call(this, data) || this;
        _this.completed = false;
        _this.satisfied = false;
        _this.hasCompletionExemption = false;
        _this.hasSatisfactionExemption = false;
        _this.progress = 0;
        _this.measure = 0;
        _this.completionTime = '';
        _this.satisfactionTime = '';
        _this.firstAttemptTime = '';
        _this.lastAttemptTime = '';
        _this.qualificationTime = '';
        _this.finalResultDate = '';
        _this.resultEndTime = '';
        _this.totalTime = 0;
        _this.resultTime = 0;
        _this.netTimeLimitOverride = 0;
        _this.grossTimeLimitOverride = 0;
        _this.qualified = false;
        _this.isHiddenOverride = false;
        _this.remainingTime = 0;
        return _this;
    }
    ObjectResultModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return ObjectResultModel;
}(base_model_1.BaseModel));
exports.ObjectResultModel = ObjectResultModel;
