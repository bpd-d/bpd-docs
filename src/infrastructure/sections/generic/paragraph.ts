import { IDocManipulator } from "../../../core/interfaces/manipulators";
import { SectionBaseParser } from "../base";

export class ParagraphSectionGenericParser<V> extends SectionBaseParser<string, V> {
    constructor(cls?: string) {
        super('paragraph', cls);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: string): V {
        const element = manipulator.create("p");
        if (t)
            manipulator.setText(element, t);
        return element;
    }

} 