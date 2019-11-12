import React from "react";
import styled from "@emotion/styled";
import { H2 } from "../atoms/Heading";
import Button from "../atoms/button/Button";
import { marginM, paddingM, marginS } from "../../constrants/style";
import { CSSProperties } from "@emotion/serialize";

interface IPropsPost {
  title: string;
  detail: string;
  style?: CSSProperties;
}

const Post: React.FC<IPropsPost> = props => {
  const { title, detail, style } = props;

  const ColumnLeft = styled("div")({
    marginRight: marginS,
    flex: 1
  });

  const Wrapper = styled("div")({
    ...{
      display: "flex",
      alignItems: "center",
      border: "1px solid grey",
      borderRadius: 4,
      padding: paddingM,
      marginBottom: marginM
    },
    ...style
  });

  return (
    <Wrapper>
      <ColumnLeft>
        <H2>{title}</H2>
        <p>{detail}</p>
      </ColumnLeft>
      <Button onClick={() => console.log("pushed")}>詳細ページへ</Button>
    </Wrapper>
  );
};

export default Post;
