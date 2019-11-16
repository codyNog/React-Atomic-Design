import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import HomeTemplate from "./HomeTemplate";

const homeTemplate = storiesOf("templates/home", module);
homeTemplate.addDecorator(withKnobs).add("Home", () => <HomeTemplate />);
