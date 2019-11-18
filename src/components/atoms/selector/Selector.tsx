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
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: IOption[];
}

const Selector: React.FC<IPropsSelector> = props => {
  const { value, onChange, options } = props;

  return (
    <Select value={value} onChange={onChange}>
      {options.map((option, i) => {
        const { value, label } = option;
        return <Option value={value}>{label}</Option>;
      })}
    </Select>
  );
};

export default Selector;
