import React from 'react';

export default class Header extends React.Component {

  render() {
    return (
      <div className="container-fluid header">
        <img src="images/header-logo.png" alt="logo-image" />
        <div className="navbar-dark bg-primary justify-content-left d-flex">
            <img src="images/site-logo.png" alt="logo" width="60px" height="60px"/>
            <a className="text-decoration-none btn-outline-dark p-3" href="/home">Home</a>
            <a className="text-decoration-none btn-outline-dark p-3" href="about-us">About us</a>
            <a className="text-decoration-none btn-outline-dark p-3" href="/react">React</a>
            <a className="text-decoration-none btn-outline-dark p-3" href="/wordpress">Wordpress</a>
        </div>
      </div>
    )
  }
}