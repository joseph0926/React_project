import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./shared/Home/pages/HomePage";
import Nav from "./shared/Nav/Nav";
import PlayerPage from "./player/pages/PlayerPage";
import SinglePlayerPage from "./player/pages/SinglePlayerPage";
import CartPage from "./cart/pages/CartPage";
import Auth from "./user/pages/Auth";

const App = () => {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/player" element={<PlayerPage></PlayerPage>}></Route>
        <Route path="/player/:id" element={<SinglePlayerPage></SinglePlayerPage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="/auth" element={<Auth></Auth>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
