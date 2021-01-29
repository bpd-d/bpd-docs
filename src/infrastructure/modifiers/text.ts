import { AttributeModifierBase, ClassModifierBase } from "./base";


/**
 * Common class modifier. When initilizing provide keyword and class name
 */
export class ClassModifier<V> extends ClassModifierBase<V> {
    constructor(type: string, cls: string) {
        super(type, cls)
    }
}


/**
 * Common attribute modifier. When initilizing provide keyword and attribute name and value to be set when attributes is set
 */
export class AttributeModifier<V> extends AttributeModifierBase<V> {
    constructor(type: string, attr: string, value: string) {
        super(type, attr, value)
    }
}

export class BoldTextModifier<V> extends ClassModifierBase<V> {
    constructor(cls?: string) {
        super("bold", cls ?? "bold")
    }
}

export class ItalicTextModifier<V> extends ClassModifierBase<V> {
    constructor(cls?: string) {
        super("italic", cls ?? "italic")
    }
}