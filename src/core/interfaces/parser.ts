import { IDocManipulator } from "./manipulators";
import { SectionModifier } from "./modifiers";
import { ISectionObject, ISectionParser } from "./sections";

export interface SectionsParserOptions<T, V> {
    modifiers: SectionModifier<V>[];
    parsers: ISectionParser<T, V>[];
    manipulator: IDocManipulator<V>;
}

export interface ISectionsParser<T, V> {
    render(sections: ISectionObject<T>[]): V[];
}