import React from "react";
import styled from "@emotion/styled";
import Check from "./Check";
import Label from "./Label";

interface IPropsCheckBox {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string | number;
}

const Wrapper = styled("label")({
  display: "flex",
  alignItems: "center"
});

const Checkbox: React.FC<IPropsCheckBox> = props => {
  const { checked, onChange, label } = props;
  return (
    <Wrapper>
      <Check checked={checked} onChange={onChange} />
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
