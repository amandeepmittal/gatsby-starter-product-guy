import React, { Component } from "react";

class Projects extends Component {
  getData() {
    const Data = [];
    this.props.projectEdges.forEach(projectEdge => {
      Data.push({
        title: projectEdge.node.frontmatter.title,
        date: projectEdge.node.frontmatter.date,
        excerpt: projectEdge.node.excerpt,
        ProductHuntLink: projectEdge.node.frontmatter.ProductHuntLink,
        BlogPost: projectEdge.node.frontmatter.BlogPost,
        Revenue: projectEdge.node.frontmatter.Revenue,
        ProductHuntVotes: projectEdge.node.frontmatter.ProductHuntVotes
      });
    });
    return Data;
  }

  render() {
    const Data = this.getData();

    return (
      <div>
        <h2>🚀 Projects/Apps</h2>
        {Data.map(project => (
          <div key={project.title} style={{ padding: ".5rem" }}>
            <p>{project.title}</p>
            <ul style={{ listStyle: "none" }}>
              <li>- {project.excerpt}</li>
              <li>
                - 😸 On <a href={project.ProductHuntLink}>Product Hunt</a>
              </li>
              <li>
                - 📰 <a href={project.BlogPost}>Blog Post</a>
              </li>
              <li>- 💰 Revenue: {project.Revenue}</li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Projects;
