import React, { Fragment } from "react";
import { Page } from "../../layouts";
import Media from "../../../store/mediaContainer";
import HomeTemplate from "../../templates/home/HomeTemplate";
import Drawer from "../../organisms/drawer/Drawer";

const HomePage: React.FC = () => {
  return (
    <Page>
      <Drawer />
      <HomeTemplate />
    </Page>
  );
};

export default HomePage;
