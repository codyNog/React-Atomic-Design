import React from "react";
import styled from "@emotion/styled";
import { marginXS } from "../../../constrants/style";

const Input = styled("input")({
  marginRight: marginXS
});

interface IPropsCheck {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Check: React.FC<IPropsCheck> = props => {
  const { checked, onChange } = props;
  return <Input type={"checkbox"} checked={checked} onChange={onChange} />;
};

export default Check;
