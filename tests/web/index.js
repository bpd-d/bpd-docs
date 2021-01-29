const footer = document.querySelector("footer");
const postDataEl = document.getElementById("post-data");

const objectToParse = [
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
                    url: "https://www.google.com",
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
            url: "https://cdn.pixabay.com/photo/2021/01/23/13/01/hills-5942468_960_720.jpg",
            alt: "Pic"
        }
    },
    {
        type: "list",
        children: [{
            type: "list-item",
            data: "Item 1"
        },
        {
            type: "list-item",
            data: "Item 2"
        }, {
            type: "list-item",
            data: "Item 3"
        }, {
            type: "list-item",
            children: [
                {
                    type: "text",
                    modifiers: ["bold"],
                    data: "Bold text list item "
                },
                {
                    type: "text",
                    modifiers: ["italic"],
                    data: "Itealic text list item "
                }
            ]
        }]
    }
]
if (footer) {
    footer.textContent = BPD_DOCS_VERSION;
}

let elements = window.$bpdDocsParser.render(objectToParse);
elements.forEach(element => {
    postDataEl.appendChild(element)
})