import { DocumentType, DocumentOptions } from "via-type";
import { ViaSchema } from "via-core";
export declare class Schema extends DocumentType implements ViaSchema {
    extend(options: DocumentOptions): Schema;
    static cloneOptions(source: DocumentOptions): DocumentOptions;
    static assignOptions(target: DocumentOptions, source: DocumentOptions): DocumentOptions;
}
