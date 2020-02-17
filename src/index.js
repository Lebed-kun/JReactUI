import React from "react";
import ReactDOM from "react-dom";

import EditableContent from "./EditableContent/EditableField";

ReactDOM.render(
  <EditableContent data="Hello world" />,
  document.getElementById("simple-editable-content")
);

ReactDOM.render(
  <EditableContent
    data="Edit text with effect"
    onChange={content => {
      const block = document.createElement("div");
      block.setAttribute(
        "style",
        "width: 200px, height: 200px; background: purple; color: white"
      );
      block.textContent = content;
      document.body.appendChild(block);
    }}
  />,
  document.getElementById("effect-editable-content")
);
