export class Post {
    constructor(id, title, content, category) {
        this.category = category == 2 ? 'React' : 'Wordpress';
        var stripedHtml = content.replace(/<\/?[^>]+(>|$)/g, "");
        var decodedStripedHtml = stripedHtml;
        this.content = decodedStripedHtml;
        this.id = id;
        this.imgPath = category == 2 ? 'images/react-logo.png' : 'images/wp-logo.png';
        //this.summary = summary;
        this.title = title;
    }
}

export function toPost(post) {
    return new Post(post.id, post.title.rendered, post.content.rendered, post.categories[0])
}