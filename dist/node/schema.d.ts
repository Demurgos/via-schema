import { DocumentType, DocumentOptions } from "via-type";
import { schema } from "via-core";
export declare class Schema extends DocumentType implements schema.Schema {
    extend(options: DocumentOptions): Schema;
    static cloneOptions(source: DocumentOptions): DocumentOptions;
    static assignOptions(target: DocumentOptions, source: DocumentOptions): DocumentOptions;
}
