export class Post {
    constructor(id, title, summary, body, category, imgPath) {
        this.body = body;
        this.category = category;
        this. id = id;
        this.imgPath = imgPath;
        this.summary = summary;
        this.title = title;
    }
}

export function toPost(post) {
    return new Post(post.id, post.title, post.summary, post.body, post.category)
}