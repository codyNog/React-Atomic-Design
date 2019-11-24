import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { H1, H2 } from ".";

const button = storiesOf("atoms", module);
button.addDecorator(withKnobs).add("Heading", () => (
  <div>
    <H1>H1</H1>
    <H2>H2</H2>
  </div>
));
