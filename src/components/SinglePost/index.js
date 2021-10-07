import React from 'react';

import URL from "../../constants";

//models
import { toPost } from '../../models/Post';

//router
import { withRouter } from 'react-router-dom';

let urlChanged = false;

export class SinglePost extends React.Component {
  constructor() {
    super();

    this.state = {
      post: ''
    };
  }

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate() {
    if (urlChanged) {
      urlChanged = false;
      return;
    }

    this.getPost();
  };

  getPost() {
    urlChanged = true;

    fetch(`${ URL }/posts/${ this.props.match.params.id }`).then(
      res => res.json()
    ).then(
      data => {
        if ( data.data?.status === 404 ) {
          this.props.history.push('/not-found');
          return;
        }

        this.setState({
        post: toPost(data)
        });
      }
    );
  }

  render() {
    return (
      <div className="row m-3">
        <div className="col-12 singlePagePost">
          <img className='post-img' src={ this.state.post.imgPath} alt="post-logo" />
          <h3>{ this.state.post.name }</h3>
          <p dangerouslySetInnerHTML={{ __html: this.state.post.content }}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SinglePost);