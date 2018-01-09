import React from "react";
import Link from "gatsby-link";
import { siteMetadata } from "../../gatsby-config";

import About from "../components/About";

const IndexPage = () => (
  <div>
    <h1>{siteMetadata.author}</h1>
    <h3>{siteMetadata.description}</h3>
    <About />
  </div>
);

export default IndexPage;
