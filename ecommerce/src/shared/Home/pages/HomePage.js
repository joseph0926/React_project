import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Service from "../components/Service";
import FeaturedPlayers from "../../../player/components/FeaturedPlayers";

const HomePage = () => {
  return (
    <Fragment>
      <Hero></Hero>
      <FeaturedPlayers></FeaturedPlayers>
      <Service></Service>
      <Footer></Footer>
    </Fragment>
  );
};

export default HomePage;
