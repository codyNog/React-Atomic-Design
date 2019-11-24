import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import Selector from ".";

const store = new Store({
  value: "0"
});

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
selector.add("Selector", () => (
  <State store={store}>
    <Selector
      value={store.get("value")}
      onChange={e => store.set({ value: e.currentTarget.value })}
      options={options()}
    />
  </State>
));
