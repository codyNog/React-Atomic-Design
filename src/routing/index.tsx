import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "../components/pages/home/HomePage";
import { Page } from "../components/layouts";
import Drawer from "../components/organisms/drawer/Drawer";

const Routing = () => {
  return (
    <BrowserRouter>
      <Page>
        <Drawer />
        <Route exact path="/" component={HomePage} />
      </Page>
    </BrowserRouter>
  );
};

export default Routing;
