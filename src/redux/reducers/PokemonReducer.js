const initialState = {
  pokemons: [],
  paginate: {
    count: 0,
    nextPage: null,
    prevPage: null,
    itemsPerPage: 0,
    firstItem:0
  },
};

const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_POKEMONS":
      console.log();
      return {
        ...state,
        pokemons: action.payload,
        paginate: {
          count: action.paginate.count,
          nextPage: action.paginate.nextPage,
          prevPage: action.paginate.prevPage,
          itemsPerPage: action.paginate.itemsPerPage,
          firstItem: 0
        },
      };
    default:
      return state;
  }
};

export default PokemonReducer;
