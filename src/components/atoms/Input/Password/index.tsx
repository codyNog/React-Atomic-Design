import React from "react";
import InputFactory from "../inputFactory";

interface IPropsPassword {
  value: string | number | string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const Password: React.FC<IPropsPassword> = props => {
  const { value, onChange, style } = props;
  return (
    <InputFactory
      type="password"
      value={value}
      onChange={onChange}
      style={style}
    />
  );
};

export default Password;
