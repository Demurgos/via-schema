import {StringType, DateType, DocumentOptions} from "via-type";
import {schema} from "via-core";

import {Schema} from "./schema";

let viaModelOptions: DocumentOptions = {
  properties: {
    _id: {type: new StringType()},
    _rev: {type: new StringType()},
    _name: {type: new StringType()},
    _created: {type: new DateType()},
    _updated: {type: new DateType()}
  }
};

export let viaModelSchema: Schema = new Schema(viaModelOptions);
