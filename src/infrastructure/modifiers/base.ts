import { IDocManipulator } from "../../core/interfaces/manipulators";
import { SectionModifier } from "../../core/interfaces/modifiers";

/**
 * Base class for modifiers working on attributes
 */
export class ClassModifierBase<V> implements SectionModifier<V> {
    cls: string;
    key: string;
    constructor(key: string, cls: string) {
        this.cls = cls;
        this.key = key;
        if (!this.cls) {
            throw new Error("ClassModifierBase cannot have empty class")
        }
        if (!this.key || this.key === '') {
            throw new Error("ClassModifierBase cannot have empty key")
        }
    }

    set(element: V, manipulator: IDocManipulator<V>): void {
        // if (!this.isSet(element)) {
        manipulator.addClass(element, this.cls);
        // }
    }
    remove(element: V, manipulator: IDocManipulator<V>): void {
        // if (this.isSet(element)) {
        manipulator.removeClass(element, this.cls);
        // }
    }

    // isSet(element: Element): boolean {
    //     return element.classList.contains(this.cls);
    // }

    getKey(): string {
        return this.key;
    }
}


/**
 * Base class for modifiers working on attributes
 */
export class AttributeModifierBase<V> implements SectionModifier<V> {
    attr: string;
    key: string;
    value: string;
    constructor(key: string, attr: string, value: string) {
        this.attr = attr;
        this.key = key;
        this.value = value;
        if (!this.attr || !this.value) {
            throw new Error("AttributeModifierBase cannot have empty attribute or value")
        }
        if (!this.key || this.key === '') {
            throw new Error("AttributeModifierBase cannot have empty key")
        }
    }

    set(element: V, manipulator: IDocManipulator<V>): void {
        // if (!this.isSet(element)) {
        manipulator.setAttribute(element, this.attr, this.value);
        // }
    }
    remove(element: V, manipulator: IDocManipulator<V>): void {
        manipulator.removeAttribute(element, this.attr)
    }

    // isSet(element: Element): boolean {
    //     return element.hasAttribute(this.attr)
    // }

    getKey(): string {
        return this.key;
    }
}