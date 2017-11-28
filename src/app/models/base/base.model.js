"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_uuid_1 = require("angular2-uuid");
var BaseModel = /** @class */ (function () {
    function BaseModel(data) {
        this.createdAt = '';
        Object.assign(this, data);
        if (!this.id) {
            this.id = angular2_uuid_1.UUID.UUID();
        }
    }
    BaseModel.prototype.serialize = function () {
        return JSON.parse(JSON.stringify(this));
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
