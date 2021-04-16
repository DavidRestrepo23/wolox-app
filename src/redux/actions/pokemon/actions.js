import axios from "axios";
import { LIST_POKEMONS } from "./actionTypes";

/**`texto de cadena de caracteres`
 *
 */
export const getAllPokemons = (firstItem = 0, limit = 20) => {
  return async (dispatch) => {
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${firstItem}&limit=${limit}`
      )
      .then(async (response) => {
        var pokemonComplete = [];

        await Promise.all(
          response.data.results.map(async (pokemon) => {
            const info = await getInfoPokemon(pokemon.url);
            pokemonComplete = [
              ...pokemonComplete,
              {
                name: pokemon.name,
                id: info.id,
                height: info.height,
                weight: info.weight,
                types: info.types,
                sprites: info.sprites.front_default,
                moves: info.moves,
              },
            ];
          })
        );

        return dispatch({
          type: LIST_POKEMONS,
          payload: pokemonComplete,
          paginate: {
            count: response.data.count,
            nextPage: response.data.next,
            prevPage: response.data.previous,
            itemsPerPage: 20,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

/**
 *
 * @param {*} id
 */
const getInfoPokemon = async (url) => {
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
