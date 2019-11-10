import React from "react";
import { Content } from "../layouts";
import Posts from "../organisms/Posts";
import Header from "../organisms/Header";

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
  return (
    <Content>
      <Header />
      <Posts posts={test} />
    </Content>
  );
};

export default HomeTemplate;
