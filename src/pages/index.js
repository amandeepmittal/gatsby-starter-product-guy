import React, { Component } from "react";
import Link from "gatsby-link";
import { siteMetadata } from "../../gatsby-config";

import About from "../components/About";
import Projects from "../components/Project";

class IndexPage extends Component {
  render() {
    const projectEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <h1>{siteMetadata.author}</h1>
        <h3>{siteMetadata.description}</h3>
        <About />
        <Projects projectEdges={projectEdges} />
      </div>
    );
  }
}

export const ProjectQuery = graphql`
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
