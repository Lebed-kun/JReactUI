import React from "react";

const Button = ({ tag, children, ...props }) =>
  React.createElement(tag, props, children);

export default Button;
