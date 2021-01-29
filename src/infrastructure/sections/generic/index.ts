import { SectionHeader, SectionLink, SectionImage } from "../../../core/interfaces/sections";
import { ContainerSectionGenericParser } from "./container";
import { HeaderSectionGenericParser } from "./header";
import { ImageSectionGenericParser } from "./image";
import { LinkSectionGenericParser } from "./link";
import { ListItemSectionGenericParser, ListSectionGenericParser } from "./list";
import { ParagraphSectionGenericParser } from "./paragraph";
import { TextSectionGenericParser } from "./text";

export type HTMLDataTypes = SectionHeader | SectionLink | SectionImage | string;

export function getSections<V>() {
    return [
        new HeaderSectionGenericParser<V>(),
        new ImageSectionGenericParser<V>(),
        new TextSectionGenericParser<V>(),
        new LinkSectionGenericParser<V>(),
        new ParagraphSectionGenericParser<V>(),
        new ListSectionGenericParser<V>(),
        new ListItemSectionGenericParser<V>(),
        new ContainerSectionGenericParser<V>()
    ]
}
