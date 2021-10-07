export class Post {
  constructor(id, name, content, summary, imgPath) {
    this.content = content;
    this.id = id;
    this.imgPath = imgPath;
    this.summary = summary.replace(/<\/?[^>]+(>|$)/g, '');
    this.name = name;
  }
}

export function toPost(post) {
  return new Post(
    post.id, 
    post.title.rendered, 
    post.content.rendered, 
    post.excerpt.rendered, 
    post.better_featured_image.source_url
  );
}