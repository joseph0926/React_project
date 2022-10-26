import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./shared/Home/pages/HomePage";
import Nav from "./shared/Nav/Nav";
import PlayerPage from "./player/pages/PlayerPage";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/player" element={<PlayerPage></PlayerPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
