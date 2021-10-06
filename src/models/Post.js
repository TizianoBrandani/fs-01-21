export class Post {
  constructor(id, name, content, summary, categories) {
    this.categories = categories;
    this.content = content;
    this.id = id;
    // let Path = '/images/logo';
    // Path += categories.forEach((element, ind) => {
    //   if (ind !== 0) {
    //     return element;
    //   } else {
    //     return '-' + element;
    //   }
    // }),
    this.imgPath = `/images/logo${categories}.png`;
    this.summary = summary.replace(/<\/?[^>]+(>|$)/g, '');
    this.name = name;
  }
}

export function toPost(post) {
  return new Post(post.id, post.title.rendered, post.content.rendered, post.excerpt.rendered, post.categories[0])
}