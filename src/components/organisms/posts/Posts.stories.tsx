import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Posts from "./Posts";

const title = "タイトル";
const detail = "詳細が入ります";
const post = { title, detail };

const postArray = new Array(5).fill(post);

const posts = storiesOf("organisms", module);
posts.addDecorator(withKnobs).add("Posts", () => <Posts posts={postArray} />);
