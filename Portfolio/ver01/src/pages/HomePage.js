import React, { Fragment } from "react";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Service from "../components/Service/Service";

const HomePage = () => {
  return (
    <Fragment>
      <Home></Home>
      <About></About>
      <Service></Service>
    </Fragment>
  );
};

export default HomePage;
