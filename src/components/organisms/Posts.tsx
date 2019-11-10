import React from "react";
import { Section } from "../layouts";
import Post from "../molecules/Post";

interface Post {
  title: string;
  detail: string;
}

interface IPropsPosts {
  posts: Post[];
}

const Posts: React.FC<IPropsPosts> = props => {
  const { posts } = props;

  return (
    <Section>
      {posts.map((post, i) => (
        <Post key={`post${i}`} title={post.title} detail={post.detail} />
      ))}
    </Section>
  );
};

export default Posts;
