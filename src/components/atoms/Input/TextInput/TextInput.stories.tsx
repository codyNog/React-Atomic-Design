import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import TextInput from ".";

const store = new Store({
  value: ""
});

const value = store.get("value");

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  store.set({ value: e.currentTarget.value });
};

const selector = storiesOf("atoms", module);
selector.add("TextInput", () => (
  <State store={store}>
    <TextInput value={value} onChange={onChange} />
  </State>
));
