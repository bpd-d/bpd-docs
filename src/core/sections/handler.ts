import { ISectionParser } from "../interfaces/sections";

interface SectionParserLibrary<T, V> {
    [id: string]: ISectionParser<T, V>;
}
export class SectionsParsersHandler<T, V> {
    #library: SectionParserLibrary<T, V>;
    constructor(parsers: ISectionParser<T, V>[]) {
        this.#library = {};
        this.setParsers(parsers);
    }

    setParsers(parsers: ISectionParser<T, V>[]): void {
        if (!parsers || parsers.length === 0) {
            return;
        }

        parsers.forEach(parser => {
            this.#library[parser.getType()] = parser;
        })
    }

    getParser(type: string): ISectionParser<T, V> | undefined {
        if (!type) {
            return undefined;
        }
        return this.#library[type];
    }
}