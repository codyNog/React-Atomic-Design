import React from "react";
import { H2 } from "../atoms/Heading";
import Button from "../atoms/button/Button";
import { css } from "emotion";
import { marginM, paddingM, marginS } from "../../constrants/style";

interface IPropsPost {
  title: string;
  detail: string;
}

const Post: React.FC<IPropsPost> = props => {
  const { title, detail } = props;

  const PostStyle = css({
    display: "flex",
    alignItems: "center",
    border: "1px solid grey",
    borderRadius: 4,
    padding: paddingM,
    marginBottom: marginM
  });

  const ColumnLeftStyle = css({
    marginRight: marginS,
    flex: 1
  });

  return (
    <div className={PostStyle}>
      <div className={ColumnLeftStyle}>
        <H2>{title}</H2>
        <p>{detail}</p>
      </div>
      <Button onClick={() => console.log("pushed")}>詳細ページへ</Button>
    </div>
  );
};

export default Post;
