import { IDocManipulator } from "../../../core/interfaces/manipulators";
import { SectionLink } from "../../../core/interfaces/sections";
import { SectionBaseParser } from "../base";

export class LinkSectionGenericParser<V> extends SectionBaseParser<SectionLink, V> {
    constructor(cls?: string) {
        super('link', cls);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: SectionLink): V {
        const element = manipulator.create("a");
        if (t) {
            manipulator.setText(element, t.text ?? "#");
            manipulator.setAttribute(element, "href", t.url ?? "#");
        }
        return element;
    }

} 