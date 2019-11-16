import React from "react";
import { Section } from "../layouts";
import Post from "../molecules/post/Post";
import { marginM } from "../../constrants/style";

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
        <Post
          key={`post${i}`}
          style={{ marginBottom: marginM }}
          title={post.title}
          detail={post.detail}
        />
      ))}
    </Section>
  );
};

export default Posts;
