import React from "react";
import { css } from "emotion";
import { primaryColor } from "../../constrants/style";

const Drawer: React.FC = () => {
  const drawerStyle = css({
    width: 320,
    height: "100vh",
    backgroundColor: primaryColor
  });

  return <div className={drawerStyle}>drawer</div>;
};

export default Drawer;
