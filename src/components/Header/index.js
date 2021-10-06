import React from 'react';

import { toCategory } from "../../models/Category";
import { toPage } from "../../models/Page";

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
    fetch('http://laragon.test/bedrock/web/wp-json/wp/v2/categories').then(
      res => res.json()
    ).then(
      data => this.setState({
        categories: data.map(category => toCategory(category))
      })
    )

    fetch('http://laragon.test/bedrock/web/wp-json/wp/v2/pages').then(
      res => res.json()
    ).then(
      data => this.setState({
        pages: data.map(page => toPage(page))
      })
    )
  }

  render() {
    const categories = this.state.categories.filter(category => category.count >= 1).map(category => 

      <Link key={`${category.name}${category.id}`}
        className="text-decoration-none btn-outline-dark p-3"
        to={`/category/${category.id}-${ category.slug }`}>
        { category.name }
      </Link>
    )
    const pages = this.state.pages.map(page =>
      <Link key={ `${page.category}${page.id}` }
        className="text-decoration-none btn-outline-dark p-3"
        to={`/pages/${page.id}`}>
        { page.name }
      </Link>
    )

    return (
      <div className="container-fluid header">
        <img src="images/header-logo.png" alt="logo" />
        <div className="navbar-dark bg-primary justify-content-left d-flex">
          <img src="images/site-logo.png" alt="logo" width="60px" height="60px" />
          <Link to={"/home"} className="text-decoration-none btn-outline-dark p-3">Home</Link>
          { categories }
          { pages }
        </div>
      </div>
    )
  }
}