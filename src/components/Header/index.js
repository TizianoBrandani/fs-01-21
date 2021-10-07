import React from 'react';

import URL from "../../constants";

import logoHeader from '../../images/header-logo.png';
import logoNav from '../..//images/site-logo.png';

//models
import { toCategory } from "../../models/Category";
import { toPage } from "../../models/Page";

//link
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      pages: []
    }
  }

  componentDidMount() {
    fetch(`${ URL }/categories`).then(
      res => res.json()
    ).then(
      data => this.setState({
        categories: data.map(category => toCategory(category))
      })
    );

    fetch(`${ URL }/pages`).then(
      res => res.json()
    ).then(
      data => this.setState({
        pages: data.map(page => toPage(page))
      })
    );
  }

  render() {
    const categories = this.state.categories.filter(category => category.count >= 1)
    .map(category => 
      <li className="nav-item">
        <Link 
          key={ `${ category.name }${ category.id }` }
          className="p-3 nav-link active"
          to={ `/category/${ category.slug }/${ category.id }` }>
          { category.name }
        </Link>
      </li>
    );
    const pages = this.state.pages.map(page => 
      <li className="nav-item">
        <Link
          key={ `${ page.category }${ page.id }` }
          className="p-3 nav-link active"
          aria-current="page"
          to={ `/pages/${ page.id }` }>
          { page.name }
        </Link>
      </li>
    );

    return (
      <div className="container-fluid header">
        <img src={ logoHeader } alt="logo" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={ logoNav } alt="logo" />
            </a>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className="p-3 nav-link active"
                    aria-current="page"
                    to={ '/'}>
                    Home
                  </Link>
                </li>
                { categories }
                { pages }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}