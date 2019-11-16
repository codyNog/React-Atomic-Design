import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Post from "./Post";

const title = "タイトル";
const detail = "詳細が入ります";

const post = storiesOf("molecules", module);
post
  .addDecorator(withKnobs)
  .add("Post", () => <Post title={title} detail={detail} />);
