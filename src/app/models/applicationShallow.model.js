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
var userShallow_model_1 = require("./userShallow.model");
var ApplicationShallowModel = /** @class */ (function (_super) {
    __extends(ApplicationShallowModel, _super);
    function ApplicationShallowModel(data) {
        var _this = _super.call(this, data) || this;
        _this.name = '';
        _this.secret = '';
        _this.uri = '';
        _this.claimType = '';
        _this.isApiClient = false;
        _this.isApiServer = false;
        _this.applicationContexts = [];
        _this.role = userShallow_model_1.SystemRole.None;
        _this.owner = null;
        _this.matchExistingAccount = false;
        _this.administrator = null;
        _this.lastUpdateTime = '';
        return _this;
    }
    ApplicationShallowModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return ApplicationShallowModel;
}(referenceBase_model_1.ReferenceBaseModel));
exports.ApplicationShallowModel = ApplicationShallowModel;
