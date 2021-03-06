import React, { Component } from "react";
import { css } from "react-emotion";
import PropTypes from "prop-types";

const page_wrapper = css`
  margin: 0 auto;
  max-width: 800px;
  font-family: "nta", Arial, sans-serif;
`;
export class Layout extends Component {
  render() {
    return <div className={page_wrapper}>{this.props.children}</div>;
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Layout;
