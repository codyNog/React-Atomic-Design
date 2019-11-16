import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Drawer from "./Drawer";

const drawer = storiesOf("organisms", module);
drawer.addDecorator(withKnobs).add("Drawer", () => <Drawer />);
