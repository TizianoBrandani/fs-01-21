export class Category {
    constructor(id, name, count) {
        this.count = count;
        this.id = id;
        this.name = name;
    }
}

export function toCategory(category) {
    return new Category(category.id, category.name, category.count);
}