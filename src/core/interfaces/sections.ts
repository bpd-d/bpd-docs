import { IDocManipulator } from "./manipulators";

export interface ISectionParser<T, V> {
    getType(): string;
    render(data: ISectionObject<T>, manipulator: IDocManipulator<V>): V;
}

export interface ISectionObject<T> {
    type: string;
    id?: string;
    key?: string;
    modifiers?: string[];
    data?: T;
    children?: ISectionObject<T>[];
}

export interface SectionHeader {
    type: string;
    text?: string;
}

export interface SectionImage {
    url: string;
    alt: string;
}

export interface SectionImages {
    url: string;
    alt: string;
}


export interface SectionLink {
    url: string;
    text: string;
}