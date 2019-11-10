import React, { Fragment } from "react";
import { Page } from "../layouts";
import Media from "../../store/mediaContainer";
import HomeTemplate from "../templates/HomeTemplate";
import Drawer from "../organisms/Drawer";

const HomePage: React.FC = () => {
  const media = Media.useContainer();
  const { isMobile } = media;

  return (
    <Page>
      {isMobile ? (
        <div>mobile</div>
      ) : (
        <Fragment>
          <Drawer />
          <HomeTemplate />
        </Fragment>
      )}
    </Page>
  );
};

export default HomePage;
