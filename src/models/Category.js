export class Category {
  constructor(id, name, count, slug) {
    this.count = count;
    this.id = id;
    this.name = name;
    this.slug = slug;
  }
}

export function toCategory(category) {
  return new Category(category.id, category.name, category.count, category.slug);
}