import React from "react";

const BlogLinks = () => (
  <div>
    <h2>📝 Latest Blog Posts</h2>
    <ul style={{ listStyle: "none" }}>
      <li>
        - Some Blog Post Title&nbsp;
        <a href="#">(Read)</a>
      </li>
      <li>
        - Some Blog Post Title&nbsp;
        <a href="#">(Read)</a>
      </li>
      <li>
        - Gatsby.js: How to set up and use the React Static Site Generator&nbsp;
        <a href="https://medium.freecodecamp.org/setting-up-and-getting-used-to-gatsby-1fc27985ae8a">
          (Read)
        </a>
      </li>
    </ul>
  </div>
);

export default BlogLinks;
