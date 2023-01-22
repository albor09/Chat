import React, { FC } from "react";
import { CSSProperties } from "styled-components";
import * as st from "./style";

interface TextInputProps {
  setText: Function;
  value: string;
  isValid?: boolean;
  placeholder?: string;
  isPass?: boolean;
}

const TextInput: FC<TextInputProps> = ({ setText, value, placeholder, isPass, isValid }) => {
  const getBorderColor = () => {
    if (value == "") return undefined;
    if (isValid != undefined) {
      if (isValid) return { borderColor: "rgba(0,255,0,0.2)" };
      else return { borderColor: "rgba(255,0,0,0.1)" };
    }
  };

  return (
    <st.TextInput
      type={isPass ? "password" : "text"}
      value={value}
      placeholder={placeholder}
      onChange={(event) => setText(event.target.value)}
      style={getBorderColor()}
    />
  );
};

export default TextInput;
