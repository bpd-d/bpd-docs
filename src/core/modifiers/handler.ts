import { SectionModifier } from "../interfaces/modifiers";

interface ModifiersInstanceLibrary<V> {
    [id: string]: SectionModifier<V>;
}

export class ModifiersHandler<V> {
    #object: ModifiersInstanceLibrary<V>;
    constructor(modifiers: SectionModifier<V>[]) {
        this.#object = {};
        this.setModifiers(modifiers)
    }

    /**
     * Adds modifiers to libarary
     * @param modifiers 
     */
    setModifiers(modifiers: SectionModifier<V>[]): void {
        if (modifiers && modifiers.length > 0) {
            modifiers.forEach(modifier => {
                this.#object[modifier.getKey()] = modifier;
            })
        }
    }

    getModifiers(...names: string[]): SectionModifier<V>[] {
        if (!names || names.length === 0) {
            return [];
        }
        return names.reduce<SectionModifier<V>[]>((ret, current) => {
            let modifier = this.#object[current];
            if (modifier) {
                ret.push(modifier);
            }
            return ret
        }, [])
    }
}