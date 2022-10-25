import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./shared/Home/pages/HomePage";
import Nav from "./shared/Nav/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
