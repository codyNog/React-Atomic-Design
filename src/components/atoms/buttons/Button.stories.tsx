import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Button from "./Button";
import DangerButton from "./DangerButton";
import WarningButton from "./WarningButton";
import { marginM } from "../../../constrants/style";

const button = storiesOf("atoms", module);
button.addDecorator(withKnobs).add("Button", () => (
  <div>
    <Button
      onClick={() => console.log("Button")}
      style={{ marginBottom: marginM }}
    >
      ボタン
    </Button>
    <DangerButton
      onClick={() => console.log("DangerButton")}
      style={{ marginBottom: marginM }}
    >
      ボタン
    </DangerButton>
    <WarningButton onClick={() => console.log("WarningButton")}>
      ボタン
    </WarningButton>
  </div>
));
