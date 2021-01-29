# bpd-docs
Library to convert json to docs or posts.
The goal is to provide a simple library that will be able to convert json doc to DOM elements.

# How it works

## Conversion
There is a JSON content like this: 
```
[
    {
        type: "header",
        data: {
            type: '1',
            text: "Header"
        }
    },
    {
        type: "paragraph",
        children: [
            {
                type: "text",
                modifiers: ["bold"],
                data: "XXX - Bold "
            },
            {
                type: "link",
                modifiers: ["italic"],
                data: {
                    url: "https://url.com",
                    text: "Link - Italic"
                }
            },
            {
                type: "text",
                modifiers: ["bold", "italic"],
                data: " YYY - MIX "
            }
        ]
    },
    {
        type: "header",
        data: {
            type: '2',
            text: "Header 2"
        }
    },
    {
        type: "image",
        data: {
            url: "https://url.jpg",
            alt: "Pic"
        }
    }
]
```

Library creates output which shall match to above structure, which in HTML looks like this: 

```
<h1>Header</h1>
<p>
	<span class="bold">XXX - Bold </span>
	<a href="https://www.google.com" class="italic">Link - Italic</a>
	<span class="bold italic"> YYY - MIX </span>
</p>
<h2>Header 2</h2>
<img src="https://url.jpg" alt="Pic">
```

# Terms
* Manipulators
* Modifiers
* Sections
* Parser

## Manipulators
Manipulator is an implementation of the interface which provides a way to create an element in the environment (JS, React, etc.) and make certain manipulations on the element like class or attribute addition or removal, setting id, key or text. Number of implemented functions may grow in the future, for now interface allows for:
* Element creation
* Appending a child
* Class addtion
* Class removal
* Attribute addtion
* Attribute removal
* Setting a key
* Setting an id
* Setting a text

## Modifiers
Modifiers are interfaces that change section appearance, like decorating a text. They don't make modification itself, they just know what modifiaction is performed to achieve the effect and use manipulator do it. So they will work independently from manipulator implementation.
For example, Bold modificator knows only that class **bold** shall be added to an element and it calls manipulator to add class regardless of manipulator implementation.

## Sections
Sections are responsible for element creation of an element and setting a content related to certain type. For example: image needs a source url and alternative text so ImageSection implementation shall create an element then set two attributes: src and alt. Setting an higher level properties is reserved for parser. There are some generic implementation created based on DOM.

## Parser
Main component which wraps all implementation together. It's job is to render (create) elements from the json data. First it, takes list of json elements as an argument. For each one of them, first it renders children if they are available, then it renders element, sets modifers, then id, key. Last step is to add children to element.