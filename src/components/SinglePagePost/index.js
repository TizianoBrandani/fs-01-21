import React from 'react';

import { toPost } from '../../models/Post';
import { toPage } from '../../models/Page';

import { withRouter } from 'react-router-dom';

let urlChanged = false;

export class SinglePagePost extends React.Component {
  constructor() {
    super();

    this.state = {
      element: ''
    }
  }

  componentDidMount() {
    this.getPosts();
  };

  componentDidUpdate() {
    if (urlChanged) {
      urlChanged = false;

      return;
    }

    this.getPagePost();
  }

  getPosts() {
    urlChanged = true;

    fetch(
      `http://laragon.test/bedrock/web/wp-json/wp/v2/${this.props.match.params.name}/${this.props.match.params.id}`
    ).then(
      res => res.json()
    ).then(
      data => {
        if (data.type === 'post') {
          this.setState({
            element: toPost(data)
          })
        } else {
          this.setState({
            element: toPage(data)
          })
        }
      }
    )
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <h3>{ this.state.element.name }</h3>
          <p dangerouslySetInnerHTML={{ __html: this.state.element.content }} />
        </div>
      </div>
    )
  }
}

export default withRouter(SinglePagePost);