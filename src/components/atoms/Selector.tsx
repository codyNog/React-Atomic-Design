import React from "react";
import { css } from "emotion";

interface IPropsSelector {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const selectorFactory = (role: React.CSSProperties) => (
  props: IPropsSelector
) => {
  const { children, onClick, style } = props;
  const className = css({ ...role, ...style });

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

const selectorStyle: React.CSSProperties = {
  height: 30,
  width: 100,
  fontSize: 20
};

const defaultStyle: React.CSSProperties = {
  ...selectorStyle,
  ...{ color: "black" }
};

const Selector = selectorFactory(defaultStyle);

export default Selector;
