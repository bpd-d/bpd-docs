import { IDocManipulator } from "../../core/interfaces/manipulators";
import { ISectionsParser, SectionsParserOptions } from "../../core/interfaces/parser";
import { ISectionObject } from "../../core/interfaces/sections";
import { ModifiersHandler } from "../../core/modifiers/handler"
import { SectionsParsersHandler } from "../../core/sections/handler";


export class SectionsParser<T, V> implements ISectionsParser<T, V>{
    #modifiersHandler: ModifiersHandler<V>;
    #sectionsHandler: SectionsParsersHandler<T, V>;
    #manipulator: IDocManipulator<V>;
    constructor(options: SectionsParserOptions<T, V>) {
        this.#modifiersHandler = new ModifiersHandler(options.modifiers)
        this.#sectionsHandler = new SectionsParsersHandler(options.parsers);
        this.#manipulator = options.manipulator;
    }

    render(sections: ISectionObject<T>[]): V[] {
        const elements: V[] = [];
        sections.forEach(section => {
            const el = this.renderSection(section);
            if (el) {
                elements.push(el);
            }
        })
        return elements;
    }

    private renderSection(section: ISectionObject<T>): V | undefined {
        const parser = this.#sectionsHandler.getParser(section.type);
        if (!parser) {
            return undefined;
        }
        let children: V[] = [];
        if (section.children) {
            children = [...this.render(section.children)]
        }

        const newElement = parser.render(section, this.#manipulator);
        if (section.modifiers) {
            const modifiers = this.#modifiersHandler.getModifiers(...section.modifiers)
            if (modifiers) {
                modifiers.forEach(modifier => {
                    modifier.set(newElement, this.#manipulator)
                })
            }
        }
        if (section.key) {
            this.#manipulator.setKey(newElement, section.key);
        }

        if (section.id) {
            this.#manipulator.setId(newElement, section.id);
        }

        if (children) {
            this.#manipulator.append(newElement, children);
        }

        return newElement;
    }
}