import { IDocManipulator } from "../../../core/interfaces/manipulators";
import { SectionHeader } from "../../../core/interfaces/sections";
import { SectionBaseParser } from "../base";

export class HeaderSectionGenericParser<V> extends SectionBaseParser<SectionHeader, V> {

    constructor(classes?: string) {
        super('header', classes);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: SectionHeader): V {
        let tag = "h" + (t?.type ?? "1");
        const element = manipulator.create(tag);
        if (t && t.text)
            manipulator.setText(element, t.text);
        return element;
    }
} 