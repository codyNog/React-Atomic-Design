import { useState } from "react";
import { createContainer } from "unstated-next";

const test = [
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" }
];

const usePosts = () => {
  const [posts, setPosts] = useState(test);

  return { posts };
};

const PostsData = createContainer(usePosts);

export default PostsData;
