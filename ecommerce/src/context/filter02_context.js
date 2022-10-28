import React, { useState, useReducer, useEffect } from "react";
import dummyPlayer from "../dummyPlayer";
import reducer from "../reducers/filter02_reducer";

const Filter02Context = React.createContext({
  filterposition: () => {},
  position: [],
  player: [],
  updateFilters: () => {},
  clearFilters: () => {},
});

const initState = {
  filtered_players: [],
  all_products: [],
  filters: {
    text: "",
    min_price: 0,
    max_price: 0,
    price: 0,
    position: "all",
  },
};

const allposition = [
  "all",
  ...new Set(
    dummyPlayer.map((player) => {
      return player.position;
    })
  ),
];

export const Filter02ContextProvider = (props) => {
  const [position, setPosition] = useState(allposition);
  const [player, setPlayer] = useState(dummyPlayer);

  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: dummyPlayer });
  }, [dummyPlayer]);
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  const filterposition = (position) => {
    if (position === "all") {
      setPlayer(dummyPlayer);
      return;
    }

    const newPlayer = dummyPlayer.filter((player) => player.position === position);
    setPlayer(newPlayer);
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "price") {
      value = Number(value);
    }
    if (name === "position") {
      value = e.target.textContent;
    }
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const contextValue = {
    filterposition: filterposition,
    position: position,
    player: player,
    ...state,
    updateFilters,
    clearFilters,
  };

  return <Filter02Context.Provider value={contextValue}>{props.children}</Filter02Context.Provider>;
};

export default Filter02Context;
