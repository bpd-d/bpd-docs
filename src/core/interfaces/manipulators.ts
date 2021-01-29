export interface IDocManipulator<V> {
    addClass(element: V, name: string): void;
    removeClass(element: V, name: string): void;
    create(name: string): V;
    setAttribute(element: V, name: string, value: string): void;
    removeAttribute(element: V, name: string): void;
    append(element: V, children: V[]): void;
    setText(element: V, text: string): void;
    setKey(element: V, key: string): void;
    setId(element: V, id: string): void;
}