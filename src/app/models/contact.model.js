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
var ContactModel = /** @class */ (function (_super) {
    __extends(ContactModel, _super);
    function ContactModel(data) {
        var _this = _super.call(this, data) || this;
        _this.typeOf = '';
        _this.email = '';
        _this.addressName = '';
        _this.addressLocality = '';
        _this.addressPostalCode = '';
        _this.addressCountry = '';
        _this.phoneName = '';
        return _this;
    }
    ContactModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return ContactModel;
}(referenceBase_model_1.ReferenceBaseModel));
exports.ContactModel = ContactModel;
