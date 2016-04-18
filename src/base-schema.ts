import {StringType, DateType, DocumentOptions} from "via-type";
import {Dictionary} from "via-core";

import {Schema} from "./schema";

let defaultOptions: DocumentOptions = {
  properties: {
    _id: {type: new StringType()},
    _rev: {type: new StringType()},
    _type: {type: new StringType()},
    _created: {type: new DateType()},
    _tested: {type: new DateType()},
    _updated: {type: new DateType()}
  }
};

export let baseSchema = new Schema(defaultOptions);
