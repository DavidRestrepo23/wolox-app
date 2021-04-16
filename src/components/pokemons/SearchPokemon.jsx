import React from "react";

const SearchPokemon = (props) => {
  return (
    <>
      <div className="search-pokemon">
        <label htmlFor="">
          <small>
            Buscar Pokemon <strong>(id, nombre)</strong>
          </small>
          <input
            type="text"
            name="pokemon"
            onChange={props.handleOnChangeSearch}
          />
          <button type="button" onClick={props.handleOnClickSearch}>
            Buscar
          </button>
        </label>
        <small className="error-msg">
          {props.pokemonFind !== "" && props.pokemonFind}
        </small>
      </div>
    </>
  );
};

export default SearchPokemon;
