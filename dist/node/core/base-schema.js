"use strict";
var via_type_1 = require("via-type");
var schema_1 = require("./schema");
var defaultOptions = {
    properties: {
        _id: { type: new via_type_1.StringType() },
        _rev: { type: new via_type_1.StringType() },
        _type: { type: new via_type_1.StringType() },
        _created: { type: new via_type_1.DateType() },
        _tested: { type: new via_type_1.DateType() },
        _updated: { type: new via_type_1.DateType() }
    }
};
exports.baseSchema = new schema_1.Schema(defaultOptions);
