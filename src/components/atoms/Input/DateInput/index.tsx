import React from "react";
import InputFactory from "../inputFactory";

interface IPropsDateInput {
  value: string | number | string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

const DateInput: React.FC<IPropsDateInput> = props => {
  const { value, onChange, style } = props;
  return (
    <InputFactory type="date" value={value} onChange={onChange} style={style} />
  );
};

export default DateInput;
