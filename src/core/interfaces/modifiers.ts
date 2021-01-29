import { IDocManipulator } from "./manipulators";

export interface SectionModifier<V> {
    set(element: V, manipulator: IDocManipulator<V>): void;
    remove(element: V, manipulator: IDocManipulator<V>): void;
    //isSet(element: Element): boolean;
    getKey(): string;
}