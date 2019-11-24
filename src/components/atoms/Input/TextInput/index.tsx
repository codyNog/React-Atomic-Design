import React from "react";
import InputFactory from "../inputFactory";

interface IPropsTextInput {
  value: string | number | string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const TextInput: React.FC<IPropsTextInput> = props => {
  const { value, onChange, style } = props;
  return (
    <InputFactory type="text" value={value} onChange={onChange} style={style} />
  );
};

export default TextInput;
