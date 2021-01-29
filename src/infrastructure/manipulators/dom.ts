import { IDocManipulator } from "../../core/interfaces/manipulators";

export class DomDocManipulator implements IDocManipulator<HTMLElement> {
    constructor() {
    }

    addClass(element: HTMLElement, name: string): void {
        this.throwIfNotExist(element);
        if (name && !element.classList.contains(name)) {
            element.classList.add(name);
        }
    }
    removeClass(element: HTMLElement, name: string): void {
        this.throwIfNotExist(element);
        if (name && element.classList.contains(name))
            element.classList.remove(name);
    }

    create(name: string): HTMLElement {
        return document.createElement(name);
    }

    setAttribute(element: HTMLElement, name: string, value: string): void {
        this.throwIfNotExist(element);
        if (name && value) {
            element.setAttribute(name, value);
        }
    }

    removeAttribute(element: HTMLElement, name: string): void {
        this.throwIfNotExist(element);
        if (name && element.hasAttribute(name)) {
            element.removeAttribute(name);
        }
    }

    append(element: HTMLElement, children: HTMLElement[]) {
        this.throwIfNotExist(element);
        if (children && children.length > 0) {
            children.forEach(child => element.appendChild(child));
        }
    }

    setText(element: HTMLElement, text: string): void {
        this.throwIfNotExist(element);
        element.textContent = text;
    }

    setKey(element: HTMLElement, key: string): void {
        this.throwIfNotExist(element);
        element.setAttribute("key", key);
    }

    setId(element: HTMLElement, id: string): void {
        this.throwIfNotExist(element);
        element.id = id;
    }


    private throwIfNotExist(element: HTMLElement): void {
        if (!element)
            throw new Error("Element doesn't exist");
    }
}