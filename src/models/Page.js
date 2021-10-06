export class Page {
    constructor (id, name, content) {
        var stripedHtml = content.replace(/<\/?[^>]+(>|$)/g, "");
        this.content = stripedHtml;
        this.id = id;
        this.name = name;
    }
}

export function toPage(page) {
    return new Page(page.id, page.title.rendered, page.content.rendered)
}