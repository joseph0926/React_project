import React, { useContext } from "react";
import GridViewPlayer from "./GridViewPlayer";
import Filter02Context from "../../context/filter02_context";

import dummyPlayer from "../../dummyPlayer";

const PlayerList = () => {
  const filterCtx = useContext(Filter02Context);
  const { filtered_players: player } = filterCtx;

  if (player.length < 1) {
    return <h5 style={{ textTransform: "none" }}>죄송합니다, 일치하는 제품이 존재하지 않습니다.</h5>;
  }

  return <GridViewPlayer products={player} />;
};

export default PlayerList;
