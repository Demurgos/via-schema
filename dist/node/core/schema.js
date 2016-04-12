"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require("lodash");
var via_type_1 = require("via-type");
var Schema = (function (_super) {
    __extends(Schema, _super);
    function Schema() {
        _super.apply(this, arguments);
    }
    Schema.prototype.extend = function (options) {
        return new Schema(Schema.assignOptions(Schema.cloneOptions(this.options), options));
    };
    // TODO: add boolean to choose to performe a deep clone (currently it's ~shallow)
    Schema.cloneOptions = function (source) {
        var result = _.assign({}, source);
        if (source.properties) {
            if (!result.properties) {
                result.properties = {};
            }
            for (var propertyName in source.properties) {
                result.properties[propertyName] = _.assign({}, result.properties[propertyName], source.properties[propertyName]);
            }
        }
        return result;
    };
    Schema.assignOptions = function (target, source) {
        // TODO: cleaner assignation
        var oldProps = target.properties;
        _.assign(target, source);
        target.properties = oldProps;
        if (source.properties) {
            if (!target.properties) {
                target.properties = {};
            }
            for (var propertyName in source.properties) {
                target.properties[propertyName] = _.assign({}, target.properties[propertyName], source.properties[propertyName]);
            }
        }
        return target;
    };
    return Schema;
}(via_type_1.DocumentType));
exports.Schema = Schema;
