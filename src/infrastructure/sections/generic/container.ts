import { IDocManipulator } from "../../../core/interfaces/manipulators";
import { SectionBaseParser } from "../base";

export class ContainerSectionGenericParser<V> extends SectionBaseParser<string, V> {
    constructor(cls?: string) {
        super('container', cls);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: string): V {
        const element = manipulator.create('div');
        if (t) {
            manipulator.setText(element, t);
        }

        return element;
    }

} 