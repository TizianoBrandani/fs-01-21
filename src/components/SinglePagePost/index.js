import React from 'react';

import { toPost } from '../../models/Post';
import { toPage } from '../../models/Page';

import { withRouter } from 'react-router-dom';

export class SinglePagePost extends React.Component {
  constructor() {
    super();

    this.state = {
      element: ''
    }
  }

  componentDidMount() {
    fetch(`http://laragon.test/bedrock/web/wp-json/wp/v2/${this.props.match.params.name}/${this.props.match.params.id}`).then(
      res => res.json()
    ).then(
      data => {
        if(data.type === 'post') {
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
          <p>{ this.state.element.content }</p>
        </div>
      </div>
    )
  }
}

export default withRouter(SinglePagePost);