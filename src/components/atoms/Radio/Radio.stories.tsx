import React from "react";
import { storiesOf } from "@storybook/react";
import { State, Store } from "@sambego/storybook-state";
import Radio from ".";

const store = new Store({
  checked: "test1"
});

const checked = (value: string) => {
  const result = store.get("checked") === value;
  console.log(result);
  return result;
};

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  store.set({ checked: e.currentTarget.value });
};

const radio = storiesOf("atoms", module);
radio.add("Radio", () => (
  <State store={store}>
    <div style={{ display: "flex" }}>
      <Radio
        value={"test1"}
        checked={checked("test1")}
        onChange={onChange}
        label={"テスト"}
      />
      <Radio
        value={"test2"}
        checked={checked("test2")}
        onChange={onChange}
        label={"テスト"}
      />
      <Radio
        value={"test3"}
        checked={checked("test3")}
        onChange={onChange}
        label={"テスト"}
      />
    </div>
  </State>
));
