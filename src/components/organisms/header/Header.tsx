import React from "react";
import { css } from "emotion";
import { secondaryColor } from "../../../constrants/style";

const Header: React.FC = () => {
  const headerStyle = css({
    backgroundColor: secondaryColor,
    height: 64
  });

  return <div className={headerStyle}>header</div>;
};

export default Header;
