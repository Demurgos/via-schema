"use strict";
var via_type_1 = require("via-type");
var schema_1 = require("./schema");
var viaModelOptions = {
    properties: {
        _id: { type: new via_type_1.StringType() },
        _rev: { type: new via_type_1.StringType() },
        _name: { type: new via_type_1.StringType() },
        _created: { type: new via_type_1.DateType() },
        _updated: { type: new via_type_1.DateType() }
    }
};
exports.viaModelSchema = new schema_1.Schema(viaModelOptions);
