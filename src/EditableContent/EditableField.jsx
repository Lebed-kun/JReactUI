import React, { useState } from "react";

import Block from "./Block.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const renderElement = ({
  currData,
  element,
  blockTag,
  blockProps,
  inputTag,
  inputProps
}) =>
  element === Block ? (
    <Block tag={blockTag} {...blockProps}>
      {currData}
    </Block>
  ) : (
    <Input tag={inputTag} value={currData} {...inputProps} />
  );

const renderButton = ({
  editContent = "Edit",
  saveContent = "Save",
  onChange,
  setCurrData,
  setElement,
  buttonTag,
  buttonProps
}) =>
  React.createElement(buttonTag, {
    onClick: () => {}
  });

const EditableField = ({
  data,
  editable = true,
  onChange,
  blockTag = "div",
  blockProps = {},
  buttonTag = "button",
  buttonProps = {},
  inputTag = "input",
  inputProps = {},
  tag = "div",
  ...props
}) => {
  const [currData, setCurrData] = useState(data);
  const [element, setElement] = useState(Block);

  return React.createElement(tag, props, [
    renderElement({
      currData,
      element,
      blockTag,
      blockProps,
      inputTag,
      inputProps
    })
  ]);
};

export default EditableField;
