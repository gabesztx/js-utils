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
var LinkRel;
(function (LinkRel) {
    LinkRel["ACCEPT"] = "Accept";
    LinkRel["REJECT"] = "Reject";
    LinkRel["CERTIFICATEALL"] = "CertificateAll";
    LinkRel["CERTIFICATE"] = "Certificate";
    LinkRel["CONTRACTAll"] = "ContractAll";
    LinkRel["CONTRACT"] = "Contract";
    LinkRel["LICENSEDOCUMENTALL"] = "";
    LinkRel["LICENSEDOCUMENT"] = "";
})(LinkRel = exports.LinkRel || (exports.LinkRel = {}));
var LinkModel = /** @class */ (function (_super) {
    __extends(LinkModel, _super);
    function LinkModel(data) {
        var _this = _super.call(this, data) || this;
        _this.rel = '';
        _this.href = '';
        _this.target = '';
        _this.label = '';
        _this.tooltip = '';
        return _this;
    }
    LinkModel.prototype.serialize = function () {
        return _super.prototype.serialize.call(this);
    };
    return LinkModel;
}(base_model_1.BaseModel));
exports.LinkModel = LinkModel;
