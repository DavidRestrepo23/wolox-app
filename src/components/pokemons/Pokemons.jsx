import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import ListPokemon from "./ListPokemon";
import Modal from "react-modal";
import ComparePokemons from "./ComparePokemons";
import SearchPokemon from "./SearchPokemon";
import Paginate from "./Pagination";

const Pokemons = (props) => {
  return (
    <>
      <Header />
      <section className="header-auth">
        <div className="content">
          <div className="row">
            <div className="grid-12 center">
              <h1>Pokemons</h1>
              <div className="actions-pokemons">
                <div>
                  <SearchPokemon
                    handleOnChangeSearch={props.handleOnChangeSearch}
                    handleOnClickSearch={props.handleOnClickSearch}
                  />
                </div>
                <div>
                  <button
                    onClick={props.handleOnClickCompare}
                    disabled={props.canCompareBtn}
                  >
                    Compare
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="content">
          <div className="row">
            {props.pokemons.length > 0 &&
              props.pokemons
                .sort((a, b) => a.id - b.id)
                .map((pokemon, index) => (
                  <ListPokemon
                    pokemon={pokemon}
                    key={index}
                    handleOnChangeCheckbox={props.handleOnChangeCheckbox}
                    checked={props.checked}
                    setChecked={props.setChecked}
                  />
                ))}
          </div>
        </div>
      </section>
      <Modal isOpen={props.modalIsOpen} onRequestClose={props.closeModal}>
        <button onClick={props.closeModal}>close</button>
        <div className="content">
          <div className="row">
            {props.pokemonsCompare !== undefined &&
              props.pokemonsCompare.map((pokemon, index) => (
                <ComparePokemons pokemon={pokemon} key={index} />
              ))}
          </div>
        </div>
      </Modal>
      <Paginate
        paginate={props.paginate}
        handlePageChange={props.handlePageChange}
        activePage={props.activePage}
        handleSelectItemsPerPage={props.handleSelectItemsPerPage}
      />
      <Footer />
    </>
  );
};

export default Pokemons;
