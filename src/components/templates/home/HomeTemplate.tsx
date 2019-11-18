import React from "react";
import { Content } from "../../layouts";
import Posts from "../../organisms/posts/Posts";
import Header from "../../organisms/header/Header";
import PostsData from "../../../store/postsContainer";

const test = [
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" },
  { title: "見出し", detail: "詳細が入る" }
];

const HomeTemplate: React.FC = () => {
  const postsData = PostsData.useContainer();
  const { posts } = postsData;

  return (
    <Content>
      <Header />
      <Posts posts={posts} />
    </Content>
  );
};

export default HomeTemplate;
