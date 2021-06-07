import React, { useState } from 'react';


const PokeApi = () => {

  const [pokemon, setPokemon]=useState([]);

  const fetchPoke = () =>{
   const consultaApi = axios.get("https://pokeapi.co/api/v2/pokemon?limit=807");

    setPokemon
  }

  return(
      <div>
          <h1>Listado de Pokemones</h1>

          <div className="forms">
            <button onClick={fetchPoke}>Fetch Pokemon</button>
            {pokemon.length > 0 && pokemon.map((pokemon, index)=>(
                <div key={index}>
                  <ul>
                    <li>"{pokemon.name}"</li>
                  </ul>
                  
                </div>
            ))}

          </div>
      </div>
    );
}
export default PokeApi;