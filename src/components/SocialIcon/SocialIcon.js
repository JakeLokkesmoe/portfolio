import React from "react";
import { string, object } from "prop-types";
import "./SocialIcon.css";

const SocialIcon = ({ href, name, icon, htmlProps }) => (
  <a
    href={href}
    target="_blank"
    className="SocialIcon"
    tooltip={name}
    rel="noopener noreferrer"
    {...htmlProps}
  >
    <i className={`fa fa-${icon}`} />
  </a>
);

SocialIcon.propTypes = {
  href: string.isRequired,
  name: string.isRequired,
  icon: string.isRequired,
  htmlProps: object
};

SocialIcon.defaultProps = {
  htmlProps: {}
};

export default SocialIcon;
