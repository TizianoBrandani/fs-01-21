export class Page {
    constructor (id, name, content) {
        this.content = content;
        this.id = id;
        this.name = name;
    }
}

export function toPage(page) {
    return new Page(page.id, page.title.rendered, page.content.rendered)
}