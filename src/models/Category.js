export class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

export function toCategory(category) {
    return new Category(category.id, category.name);
}