import { DomDocManipulator } from "./infrastructure/manipulators/dom";
import { BoldTextModifier, ItalicTextModifier } from "./infrastructure/modifiers/text";
import { SectionsParser } from "./infrastructure/parser/parser";
import { getSections, HTMLDataTypes } from "./infrastructure/sections/generic/index";

export const BPD_DOCS_VERSION = '0.0.1';


declare global {
    interface Window {
        BPD_DOCS_VERSION: string;
        $bpdDocsParser: SectionsParser<HTMLDataTypes, HTMLElement>;
    }
}

window.BPD_DOCS_VERSION = BPD_DOCS_VERSION;
window.$bpdDocsParser = new SectionsParser<HTMLDataTypes, HTMLElement>(
    {
        modifiers: [new BoldTextModifier(), new ItalicTextModifier()],
        parsers: getSections<HTMLElement>(),
        manipulator: new DomDocManipulator()
    }
)