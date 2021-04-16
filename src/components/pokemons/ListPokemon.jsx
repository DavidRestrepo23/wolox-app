import React from "react";

const ListPokemon = (props) => {
  return (
    <>
      <div className="grid-3">
        <div className="box-pokemon center">
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${props.pokemon.id}.png`}
            width="120px"
            alt=""
          />
          <p>N.°{props.pokemon.id}</p>
          <h3>
            {props.pokemon.name}{" "}
            <input
              type="checkbox"
              value={props.pokemon.id}
              name="compare"
              onChange={props.handleOnChangeCheckbox}
            />{" "}
          </h3>
          <div className="types-pokemon">
            {props.pokemon.types.map((item, index) => (
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

export default ListPokemon;
