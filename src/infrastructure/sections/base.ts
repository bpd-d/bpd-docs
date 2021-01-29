import { IDocManipulator } from "../../core/interfaces/manipulators";
import { ISectionParser, ISectionObject } from "../../core/interfaces/sections";

export abstract class SectionBaseParser<T, V> implements ISectionParser<T, V> {
    type: string;
    #cls: string | undefined;
    constructor(type: string, cls?: string) {
        this.type = type;
        this.#cls = cls;
    }
    getType(): string {
        return this.type;
    }

    render(data: ISectionObject<T>, manipulator: IDocManipulator<V>): V {
        const element = this.buildElement(manipulator, data.data);
        if (this.#cls) {
            manipulator.addClass(element, this.#cls);
        }
        return element;
    }

    public abstract buildElement(manipulator: IDocManipulator<V>, t?: T): V;

}