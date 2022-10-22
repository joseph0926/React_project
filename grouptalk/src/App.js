import React, { Fragment } from "react";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Fragment>
      <Home></Home>
      <Navbar></Navbar>
    </Fragment>
  );
};

export default App;
