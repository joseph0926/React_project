import React from "react";
import GridViewPlayer from "./GridViewPlayer";

import dummyPlayer from "../../dummyPlayer";

const PlayerList = () => {
  if (dummyPlayer.length < 1) {
    return <h5 style={{ textTransform: "none" }}>죄송합니다, 일치하는 제품이 존재하지 않습니다.</h5>;
  }

  return <GridViewPlayer products={dummyPlayer} />;
};

export default PlayerList;
