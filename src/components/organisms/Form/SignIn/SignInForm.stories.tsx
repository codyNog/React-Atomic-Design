import React from "react";
import { storiesOf } from "@storybook/react";
import SignInForm from ".";

const checkbox = storiesOf("organisms", module);
checkbox.add("SignInForm", () => <SignInForm />);
