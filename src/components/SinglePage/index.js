import React from 'react';

import URL from "../../constants";

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
  }

  componentDidUpdate() {
    if ( urlChanged ) {
      urlChanged = false;
      return;
    }

    this.getPage();
  }

  getPage() {
    urlChanged = true;

    fetch(`${ URL }/pages/${ this.props.match.params.id }`).then(
      res => res.json()
    ).then(
      data => {
        if( data.data?.status === 404 ) {
          this.props.history.push('/not-found');
          return;
        };

        this.setState({
          page: toPage(data)
        })
      }
    );
  }

  render() {
    return (
      <div className="row m-3">
        <div className="col-12 singlePagePost">
          <h3>{ this.state.page.name }</h3>
          <p dangerouslySetInnerHTML={{ __html: this.state.page.content }} />
        </div>
      </div>
    );
  }
}

export default withRouter(SinglePagePost);