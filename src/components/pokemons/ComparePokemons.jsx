import React from "react";

const ComparePokemons = ({ pokemon }) => {

  return (
    <>
      <div className="grid-4">
        <div className="box-pokemon center">
          <img src={pokemon.sprites} width="120px" alt="" />
          <p>N.°{pokemon.id}</p>
          <h3>{pokemon.name}</h3>

          <div className="details-pokemon">
            <p>
              <span>Altura:</span> {pokemon.height}m - <span>Peso: </span>
              {pokemon.weight} kg
            </p>
          </div>

          <div className="details-pokemon-moves">
            <h2>Movimientos</h2>
            {pokemon.moves.map((item, index) => (
              <p>{item.move.name}</p>
            ))}
          </div>

          <div className="types-pokemon">
            {pokemon.types.map((item, index) => (
              <div className={item.type.name} key={index}>
                {item.type.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ComparePokemons;
