import React from "react";
import styled from "@emotion/styled";

const Select = styled("select")({
  height: 30,
  width: 100,
  fontSize: 20,
  [`:focus`]: { outline: "none" }
});

const Option = styled("option")({});

interface IOption {
  value: string | number;
  label: string;
}

interface IPropsSelector {
  options: IOption[];
}

const Selector: React.FC<IPropsSelector> = props => {
  const { options } = props;

  return (
    <Select>
      {options.map((option, i) => {
        const { value, label } = option;
        return <Option value={value}>{label}</Option>;
      })}
    </Select>
  );
};

export default Selector;
