import React, { useState } from "react";

import Block from "./Block.jsx";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const renderElement = ({
  currData,
  setCurrData,
  element,
  blockTag,
  blockProps,
  inputTag,
  inputProps
}) =>
  element === "Block" ? (
    <Block tag={blockTag} {...blockProps}>
      {currData}
    </Block>
  ) : (
    <Input
      tag={inputTag}
      value={currData}
      onChange={e => setCurrData(e.currentTarget.value)}
      {...inputProps}
    />
  );

const renderButton = ({
  editContent,
  saveContent,
  currData,
  element,
  setElement,
  onChange,
  tag,
  props
}) =>
  React.createElement(
    tag,
    {
      onClick: () => {
        if (element === "Block") {
          setElement("Input");
        } else {
          setElement("Block");
          if (typeof onChange === "function") onChange(currData);
        }
      },
      ...props
    },
    element === "Block" ? [editContent] : [saveContent]
  );

const EditableField = ({
  data,
  editable = true,
  onChange,
  blockTag = "span",
  blockProps = {},
  buttonTag = "button",
  buttonProps = {},
  inputTag = "input",
  inputProps = {},
  tag = "div",
  ...props
}) => {
  const [currData, setCurrData] = useState(data);
  const [element, setElement] = useState("Block");

  return React.createElement(tag, props, [
    renderElement({
      currData,
      setCurrData,
      element,
      blockTag,
      blockProps,
      inputTag,
      inputProps
    }),
    editable
      ? renderButton({
          editContent: buttonProps.editContent || "Edit",
          saveContent: buttonProps.saveContent || "Save",
          currData,
          element,
          setElement,
          onChange,
          tag: buttonTag,
          props: buttonProps
        })
      : null
  ]);
};

export default EditableField;
