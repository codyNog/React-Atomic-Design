import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import DateInput from ".";

const store = new Store({
  value: ""
});

const value = store.get("value");

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  store.set({ value: e.currentTarget.value });
};

const password = storiesOf("atoms", module);
password.add("DateInput", () => (
  <State store={store}>
    <DateInput value={value} onChange={onChange} />
  </State>
));
