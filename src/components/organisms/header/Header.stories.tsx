import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Header from "./Header";

const header = storiesOf("organisms", module);
header.addDecorator(withKnobs).add("Header", () => <Header />);
