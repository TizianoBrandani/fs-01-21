import React from 'react';

import { Post, toPost } from '../../models/Post';

import { Link, withRouter } from "react-router-dom";

export class SingleCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(`http://laragon.test/bedrock/web/wp-json/wp/v2/posts?categories=${this.props.match.params.id}`).then(
      res => res.json()
    ).then(
      data => this.setState({
        posts: data.map(post => toPost(post))
      })
    )
  }

  render() {
    const posts = this.state.posts.map(post => 
      <div key={ post.id } className="post col-12 col-md-4">
        <img src={post.imgPath}  alt="post-logo"/>
        <div>
          <h4>{ post.title }</h4>
          <p> { post.content } </p>
          <Link className="btn btn-outline-primary" to={ `/posts/${post.id}` }>Read All
          </Link>
        </div>
      </div>
    )

    return (
      <div className="container">
        <div className="row g-2">
          { posts }
        </div>
      </div>
    )
  }
}

export default withRouter(SingleCategory);