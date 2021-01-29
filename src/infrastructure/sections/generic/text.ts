import { IDocManipulator } from "../../../core/interfaces/manipulators";
import { SectionBaseParser } from "../base";

export class TextSectionGenericParser<V> extends SectionBaseParser<string, V> {
    constructor(cls?: string) {
        super('text', cls);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: string): V {
        const element = manipulator.create('span');
        if (t)
            manipulator.setText(element, t);
        return element;
    }

} 