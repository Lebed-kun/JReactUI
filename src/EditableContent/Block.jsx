import React from "react";

const Block = ({ tag, children, ...props } = {}) =>
  React.createElement(tag, props, children);

export default Block;
