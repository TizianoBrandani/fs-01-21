import React from "react";
import { Category, toCategory } from "../../models/Category";
import { Post, toPost } from "../../models/Post";

import { Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [
        {
          id: 1,
          title: "Update Services",
          summary: "Update services are tools you can use to let other people know you've updated your blog",
          body: '',
          category: 'wordpress',
          imgPath: 'images/wordpress-logo.png'
        },
        {
          id: 2,
          title: "First steps with WordPress",
          summary: "Let's take a step-by.step tour through your Wordpress site and see how the different functions work and how to make your new site your own",
          body: '',
          category: 'wordpress',
          imgPath: 'images/wordpress-logo.png'
        },
        {
          id: 3,
          title: "WP API Menus",
          summary: "Currently, the menu-locations/ route for individual menus will return a tree with full menu hierarchy",
          body: '',
          category: 'wordpress',
          imgPath: 'images/wordpress-logo.png'
        },
        {
          id: 4,
          title: "Components and props",
          summary: "Concettualmente i componenti sono come funzioni Javascript",
          body: '',
          category: 'react',
          imgPath: 'images/react-logo.png'
        },
        {
          id: 5,
          title: "Rendering elements",
          summary: "Gli elementi react sono immutabili. Una volta creato un elemento non puoi cambiare i suoi figli o attributi",
          body: '',
          category: 'react',
          imgPath: 'images/react-logo.png'
        },
        {
          id: 6,
          title: "Introduction to JSX",
          summary: "React non obbliga ad utilizzare JSX, ma la maggior parte delle persone lo trovano utile come aiuto visuale quando lavorano con la UI all'interno del codice JavaScript.",
          body: '',
          category: 'react',
          imgPath: 'images/react-logo.png'
        }
      ]
    }
  }

  componentDidMount() {
    fetch('http://laragon.test/bedrock/web/wp-json/wp/v2/posts').then(
      res => res.json()
    ).then(
      data => this.setState({
        posts: data.map(post => toPost(post))
      })
    )
  }

  render () {
    const posts = this.state.posts.map(post => 
      <div key={ post.id } className="post col-12 col-md-4">
        <img src={ post.imgPath }  alt="post-logo"/>
        <div>
          <h4>{ post.title }</h4>
          <p> { post.content } </p>
          <Link className="btn btn-outline-primary" to={ `/posts/${post.id}` }>Read All
          </Link>
        </div>
      </div>
    )

    return (
      <div className="container overflow-hidden">
        <div className="row">
          { posts }
        </div>
      </div>
    )
  }
}