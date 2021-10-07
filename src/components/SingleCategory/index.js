import React from 'react';

import URL from '../../constants';

//models
import { toPost } from '../../models/Post';

//router
import { Link, withRouter } from "react-router-dom";

let urlChanged = false;

export class SingleCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  };

  componentDidMount() {
    this.getPosts();
  };

  componentDidUpdate () {
    if ( urlChanged ) {
      urlChanged = false;
      return;
    }

    this.getPosts();
  };

  getPosts () {
    urlChanged = true;

    fetch(`${ URL }/posts?categories=${ this.props.match.params.id }`).then(
      res => res.json()
    ).then(
      data => {
        if ( !data.length ) {
          this.props.history.push('/not-found');
          return;
        };

        this.setState({
          posts: data.map(post => toPost(post))
        });
      }
    );
  };

  render() {
    const posts = this.state.posts.map(post => 
      <div key={ post.id } className="post col-12 my-3 col-md-4">
        <img src={ post.imgPath }  alt="post-logo"/>
        <div>
          <h4>{ post.name }</h4>
          <p dangerouslySetInnerHTML={{ __html: post.summary }} />
          <Link className="btn btn-outline-primary" to={ `/posts/${ post.id }` }>
            Read All
          </Link>
        </div>
      </div>
    );

    return (
      <div className="container">
        <div className="row m-3 gx-3">
          <h2>You are looking at the { this.props.match.params.name } posts.</h2>
          { posts }
        </div>
      </div>
    );
  };
};

export default withRouter(SingleCategory);