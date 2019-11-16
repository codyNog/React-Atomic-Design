import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Selector from "./Selector";

const option = (i: number) => {
  return { value: `${i}`, label: `${i}` };
};

const options = () => {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(option(i));
  }
  return array;
};

const selector = storiesOf("atoms", module);
selector
  .addDecorator(withKnobs)
  .add("Selector", () => <Selector options={options()} />);
