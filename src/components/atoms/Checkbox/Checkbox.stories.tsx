import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { State, Store, StateDecorator } from "@sambego/storybook-state";
import Checkbox from ".";

const store = new Store({
  checked: false
});

const checked = () => {
  return store.get("checked");
};

const onChange = () => {
  if (checked()) {
    store.set({ checked: false });
  } else {
    store.set({ checked: true });
  }
};

const checkbox = storiesOf("atoms", module);
checkbox.add("Checkbox", () => (
  <State store={store}>
    <Checkbox checked={checked()} onChange={onChange} label={"テスト"} />
  </State>
));
