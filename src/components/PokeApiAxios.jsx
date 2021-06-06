import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PokeApiAxios = () => {

  const [pokemon, setPokemon]=useState([]);

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response =>{setPokemon(response.data)})
  },[]);
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
export default PokeApiAxios;