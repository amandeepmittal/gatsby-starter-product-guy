import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";
import { site, author, twitter, og } from "../../config/meta";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>{site.title}</title>
      <meta name="author" content={author.name} />
      <meta name="description" content={author.description} />
      <meta name="Keywords" content={site.Keywords} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={author.name} />
      <meta name="twitter:description" content={author.description} />
      <meta name="twitter:creator" content={twitter.creator} />

      <meta name="og:title" content={og.title} />
      <meta name="og:description" content={og.description} />
      <meta name="og:url" content={og.url} />
      <meta name="og:site_name" content={og.site_name} />
      <meta name="og:type" content={og.type} />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
