import React from "react";
import { css } from "emotion";
import { marginL, paddingL } from "../../constrants/style";

const Page: React.FC = props => {
  const { children } = props;

  const pageStyle = css({
    display: "flex"
  });
  return <div className={pageStyle}>{children}</div>;
};

const Section: React.FC = props => {
  const { children } = props;

  const sectionStyle = css({
    padding: paddingL,
    marginBottom: marginL
  });
  return <section className={sectionStyle}>{children}</section>;
};

const Content: React.FC = props => {
  const { children } = props;

  const contentStyle = css({
    height: "100vh",
    width: "100%",
    overflow: "hidden scroll"
  });

  return <div className={contentStyle}>{children}</div>;
};

export { Page, Section, Content };
