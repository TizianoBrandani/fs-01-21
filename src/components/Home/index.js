import React from "react";

import URL from "../../constants";

//models
import { toPost } from "../../models/Post";

//link
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  };

  componentDidMount() {
    fetch(`${ URL }/posts`).then(
      res => res.json()
    ).then(
      data => this.setState({
        posts: data.map(post => toPost(post))
      })
    );
  };

  render () {
    const posts = this.state.posts.map(post => 
      <div key={ post.id } className="col-12 col-md-4 my-3">
        <div className="p-4 post">
          <img src={ post.imgPath }  alt="post-logo"/>
          <div>
            <h4>{ post.name }</h4>
            <p dangerouslySetInnerHTML={{ __html: post.summary }}/>
            <Link 
              className="btn btn-outline-primary" 
              to={ `/posts/${ post.id }` }>
              Read All
            </Link>
          </div>
        </div>
      </div>
    );

    return (
      <div className="container">
        <div className="row my-3">
          { posts }
        </div>
      </div>
    );
  };
};