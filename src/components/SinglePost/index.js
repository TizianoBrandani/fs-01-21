import React from 'react';

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
    }
  }

  componentDidMount() {
    this.getPost();
  };

  componentDidUpdate() {
    if (urlChanged) {
      urlChanged = false;
      return;
    }

    this.getPost();
  }

  getPost() {
    urlChanged = true;

    fetch(
      `http://laragon.test/bedrock/web/wp-json/wp/v2/posts/${this.props.match.params.id}`)
    .then(
      res => res.json()
    ).then(
      data => this.setState({
        post: toPost(data)
      })
    );
  }

  render() {
    return (
      <div className="row m-3">
        <div className="col-12 singlePagePost">
          <h3>{ this.state.post.name }</h3>
          <p dangerouslySetInnerHTML={{ __html: this.state.post.content }}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SinglePost);