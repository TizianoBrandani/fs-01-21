export class Page {
    constructor (id, title) {
        this.id = id;
        this.title = title;
    }
}

export function toPage(page) {
    return new Page(page.id, page.title)
}