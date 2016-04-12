"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var via_type_1 = require("via-type");
var ViaSchema = (function (_super) {
    __extends(ViaSchema, _super);
    function ViaSchema(options) {
        _super.call(this, options);
    }
    ViaSchema.prototype.extend = function () {
        return new ViaSchema(this.options);
    };
    return ViaSchema;
}(via_type_1.DocumentType));
exports.ViaSchema = ViaSchema;
