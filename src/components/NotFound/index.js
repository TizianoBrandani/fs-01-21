import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="m-2 alert alert-warning">
        Oops, the page you requested was not found 404 error
      </div>
    );
  };
};