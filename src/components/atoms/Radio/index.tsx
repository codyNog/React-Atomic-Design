import React from "react";
import styled from "@emotion/styled";
import { marginXS, fontS } from "../../../constrants/style";

interface IPropsRadio {
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | number;
  style?: React.CSSProperties;
}

const Input = styled("input")({
  marginRight: marginXS
});

const P = styled("p")({});

const Label = styled("label")({ display: "flex", alignItems: "center" });

const Radio: React.FC<IPropsRadio> = props => {
  const { value, checked, onChange, label, style } = props;
  return (
    <Label style={style}>
      <Input
        type={"radio"}
        value={value}
        checked={checked}
        onChange={onChange}
      ></Input>
      <P>{label}</P>
    </Label>
  );
};

export default Radio;
