import React from "react";
import { css } from "emotion";
import { primaryColor, mobileWidth } from "../../../constrants/style";

const Drawer: React.FC = () => {
  const drawerStyle = css({
    width: 320,
    height: "100vh",
    backgroundColor: primaryColor,
    [`@media (max-width: ${mobileWidth}px)`]: {
      display: "none"
    }
  });

  return <div className={drawerStyle}>drawer</div>;
};

export default Drawer;
