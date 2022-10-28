const filter02_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_players: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, price, position } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => product.name.toLowerCase().startsWith(text));
    }
    if (position !== "all") {
      tempProducts = tempProducts.filter((product) => product.position === position);
    }
    tempProducts = tempProducts.filter((product) => product.price <= price);
    return { ...state, filtered_players: tempProducts };
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        price: state.filters.max_price,
      },
    };
  }
};

export default filter02_reducer;
