import { IDocManipulator } from "../../../core/interfaces/manipulators";
import { SectionImage } from "../../../core/interfaces/sections";
import { SectionBaseParser } from "../base";

export class ImageSectionGenericParser<V> extends SectionBaseParser<SectionImage, V> {
    constructor(classes?: string) {
        super('image', classes);
    }

    public buildElement(manipulator: IDocManipulator<V>, t?: SectionImage,): V {
        const element = manipulator.create("img");
        if (t) {
            manipulator.setAttribute(element, "src", t.url);
            manipulator.setAttribute(element, "alt", t.alt);
        }
        return element;

    }

} 