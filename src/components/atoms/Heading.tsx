import React from "react";
import { css } from "emotion";

interface IPropsHeading {
  style?: React.CSSProperties;
}

const H1: React.FC<IPropsHeading> = props => {
  const { children, style } = props;
  const h1Style = css({
    ...{
      fontSize: 30
    },
    ...style
  });

  return <h1 className={h1Style}>{children}</h1>;
};

const H2: React.FC<IPropsHeading> = props => {
  const { children, style } = props;
  const h2Style = css({
    ...{
      fontSize: 30
    },
    ...style
  });

  return <h2 className={h2Style}>{children}</h2>;
};

const H3: React.FC<IPropsHeading> = props => {
  const { children, style } = props;
  const h3Style = css({
    ...{
      fontSize: 30
    },
    ...style
  });

  return <h3 className={h3Style}>{children}</h3>;
};

const H4: React.FC<IPropsHeading> = props => {
  const { children, style } = props;
  const h4Style = css({
    ...{
      fontSize: 30
    },
    ...style
  });

  return <h4 className={h4Style}>{children}</h4>;
};

export { H1, H2, H3, H4 };
