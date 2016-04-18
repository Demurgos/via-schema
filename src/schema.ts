import {assign} from "lodash";

import {DocumentType, DocumentOptions, PropertyDescriptor} from "via-type";
import {ViaSchema} from "via-core";

export class Schema extends DocumentType implements ViaSchema {
  extend (options: DocumentOptions): Schema {
    return new Schema(Schema.assignOptions(Schema.cloneOptions(this.options), options));
  }

  // TODO: add boolean to choose to performe a deep clone (currently it's ~shallow)
  static cloneOptions (source: DocumentOptions): DocumentOptions {
    let result: DocumentOptions = assign({}, source);
    if (source.properties) {
      if (!result.properties) {
        result.properties = {};
      }
      for (let propertyName in source.properties) {
        result.properties[propertyName] = <PropertyDescriptor> assign({}, result.properties[propertyName], source.properties[propertyName]);
      }
    }
    return result;
  }

  static assignOptions (target: DocumentOptions, source: DocumentOptions): DocumentOptions {
    // TODO: cleaner assignation
    let oldProps = target.properties;
    assign(target, source);
    target.properties = oldProps;
    if (source.properties) {
      if (!target.properties) {
        target.properties = {};
      }
      for (let propertyName in source.properties) {
        target.properties[propertyName] = <PropertyDescriptor> assign({}, target.properties[propertyName], source.properties[propertyName]);
      }
    }
    return target;
  }
}
