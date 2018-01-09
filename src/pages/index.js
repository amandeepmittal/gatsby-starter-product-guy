import React, { Component } from "react";
import Link from "gatsby-link";
import { siteMetadata } from "../../gatsby-config";

import About from "../components/About";
import Projects from "../components/Project";
import BlogLinks from "../components/BlogLinks";
import Skills from "../components/Skills";
import Before from "../components/Before";
import Favorite from "../components/Favorite";
import Footer from "../components/Footer";

class IndexPage extends Component {
  render() {
    const projectEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <h1>{siteMetadata.author}</h1>
        <h3>{siteMetadata.description}</h3>
        <br />
        <About />
        <br />
        <Projects projectEdges={projectEdges} />
        <br />
        <BlogLinks />
        <br />
        <Skills />
        <br />
        <Before />
        <br />
        <Favorite />
        <hr />
        <Footer />
      </div>
    );
  }
}

export const rootQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date
            path
            ProductHuntLink
            BlogPost
            Revenue
          }
        }
      }
    }
  }
`;

export default IndexPage;
