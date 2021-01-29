import { IDocManipulator } from "../../../core/interfaces/manipulators";
import { SectionBaseParser } from "../base";

export class ListSectionGenericParser<V> extends SectionBaseParser<string, V> {
    constructor(cls?: string) {
        super('list', cls);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: string): V {
        const element = manipulator.create('ul');
        return element;

    }

}

export class ListItemSectionGenericParser<V> extends SectionBaseParser<string, V> {
    constructor(cls?: string) {
        super('list-item', cls);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: string): V {
        const element = manipulator.create('li');
        if (t) {
            manipulator.setText(element, t)
        }
        return element;

    }

} 