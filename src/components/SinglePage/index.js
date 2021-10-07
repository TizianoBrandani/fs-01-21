import React from 'react';

//models
import { toPage } from '../../models/Page';

//router
import { withRouter } from 'react-router-dom';

let urlChanged = false;

export class SinglePagePost extends React.Component {
  constructor() {
    super();

    this.state = {
      page: ''
    }
  }

  componentDidMount() {
    this.getPage();
  };

  componentDidUpdate() {
    if (urlChanged) {
      urlChanged = false;
      return;
    }

    this.getPage();
  }

  getPage() {
    urlChanged = true;

    fetch(`http://laragon.test/bedrock/web/wp-json/wp/v2/pages/${ this.props.match.params.id }`)
    .then(res => res.json())
    .then(data => this.setState({
        page: toPage(data)
      })
    );
  }

  render() {
    return (
      <div className="row m-3">
        <div className="col-12 singlePost">
          <h3>{ this.state.page.name }</h3>
          <p dangerouslySetInnerHTML={{ __html: this.state.page.content }} />
        </div>
      </div>
    );
  }
}

export default withRouter(SinglePagePost);