import React from 'react';

import { Category, toCategory } from "../../models/Category";
import { Page, toPage } from "../../models/Page";

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

      <a key={`${category.name}${category.id}`}
        className="text-decoration-none btn-outline-dark p-3"
        href={`http://localhost:3000/category/${category.id}`}>
        { category.name }
      </a>
    )
    const pages = this.state.pages.map(page =>
      <a key={ `${page.category}${page.id}` }
        className="text-decoration-none btn-outline-dark p-3"
        href={`http://localhost:3000/pages/${page.id}`}>
        { page.name }
      </a>

    )
    console.log(categories);
    console.log(this.state.categories);
    return (
      <div className="container-fluid header">
        <img src="images/header-logo.png" alt="logo" />
        <div className="navbar-dark bg-primary justify-content-left d-flex">
          <img src="images/site-logo.png" alt="logo" width="60px" height="60px" />
          <a href="/home" className="text-decoration-none btn-outline-dark p-3">Home</a>
          { categories }
          { pages }
        </div>
      </div>
    )
  }
}