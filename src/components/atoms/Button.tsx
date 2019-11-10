import React from "react";
import { css } from "emotion";

interface IPropsButton {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const buttonFactory = (role: React.CSSProperties) => (props: IPropsButton) => {
  const { children, onClick, style } = props;

  const className = css({
    ...role,
    ...style
  });

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

const buttonStyle: React.CSSProperties = {
  fontSize: 20
};

const defaultStyle = {
  ...buttonStyle,
  ...{ backgroundColor: "blue", color: "white" }
};

const dangerStyle = {
  ...buttonStyle,
  ...{ backgroundColor: "red", color: "white" }
};

const Button = buttonFactory(defaultStyle);
const DangerButton = buttonFactory(dangerStyle);

export default Button;
export { DangerButton };
