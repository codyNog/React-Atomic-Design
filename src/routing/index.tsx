import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "../components/pages/home/HomePage";

const Routing = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
    </BrowserRouter>
  );
};

export default Routing;
