import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Pokemons from "../components/pokemons/Pokemons";
import {
  getAllPokemons,
  findPokemonByNameOrId,
} from "../redux/actions/pokemon/actions";
import { getUserAuth } from "../redux/actions/auth/actions";

const PokemonContainer = (props) => {
  const [compare, setCompare] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokemonsCompare, setPokemonsCompare] = useState(undefined);
  const [canCompareBtn, setCanCompareBtn] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemonFind, setPokemonFind] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  /**
   *
   */
  useEffect(() => {
    props.getAllPokemons();
    props.getUserAuth();
  }, [props.getAllPokemons, props.getUserAuth]);

  /**
   * Get Pokemon checkboxs
   * @param {*} e
   */
  const handleOnChangeCheckbox = (e) => {
    let array = [...compare, e.target.value];

    setCompare([...new Set(array)]);

    if (compare.length > 0) {
      setCanCompareBtn(false);
    } else {
      setCanCompareBtn(true);
    }
  };

  /**
   * Compare Pokemons
   * @param {*} e
   */
  const handleOnClickCompare = (e) => {
    e.preventDefault();
    setModalIsOpen(true);
    var pokemonsCompare = [];

    compare.map((itm) => {
      pokemonsCompare.push(props.pokemons.find((x) => x.id === parseInt(itm)));
    });

    setPokemonsCompare(pokemonsCompare);
  };

  /**
   * Close modal
   */
  const closeModal = () => {
    setModalIsOpen(false);
  };

  /**
   * Serach Pokemon
   * @param {*} e
   */
  const handleOnChangeSearch = (e) => {
    setSearchPokemon(e.target.value);
  };

  /**
   * Find a pokemon
   * @param {*} e
   */
  const handleOnClickSearch = (e) => {
    e.preventDefault();

    if (searchPokemon === "") {
      props.getAllPokemons();
    } else {
      var pokemonFind = props.pokemons.find(
        (x) =>
          x.id === parseInt(searchPokemon) ||
          x.name === searchPokemon.toLocaleLowerCase()
      );

      if (pokemonFind) {
        props.findPokemonByNameOrId(pokemonFind.id);
        setPokemonFind("");
        setSearchPokemon("");
      } else {
        setPokemonFind("No se encontro el pokemon");
      }
    }
  };

  /**
   *
   * @param {*} pageNumber
   */
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    const firstItem = (pageNumber - 1) * 20;
    setCurrentPage(firstItem);
    props.getAllPokemons(firstItem, itemsPerPage);
  };

  const handleSelectItemsPerPage = (e) => {
    setItemsPerPage(e.target.value);
    props.getAllPokemons(currentPage, e.target.value);
  };

  return (
    <>
      <Pokemons
        pokemons={props.pokemons}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        handleOnChangeCheckbox={handleOnChangeCheckbox}
        handleOnClickCompare={handleOnClickCompare}
        pokemonsCompare={pokemonsCompare}
        canCompareBtn={canCompareBtn}
        handleOnChangeSearch={handleOnChangeSearch}
        handleOnClickSearch={handleOnClickSearch}
        paginate={props.paginate}
        activePage={activePage}
        handlePageChange={handlePageChange}
        handleSelectItemsPerPage={handleSelectItemsPerPage}
        pokemonFind={pokemonFind}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.PokemonReducer.pokemons,
    paginate: state.PokemonReducer.paginate,
  };
};

const mapDispatchToProps = {
  getAllPokemons,
  findPokemonByNameOrId,
  getUserAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
