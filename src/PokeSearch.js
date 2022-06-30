import React from 'react';
import { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';

export default function PokeSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('');
  
  useEffect(() => {
    fetchAndStorePokemon();
  }, []); // eslint-disable-line

  
  async function fetchAndStorePokemon() {
    const data = await getPokemon(pokemonQuery);

    setPokemon(data.results);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // use state data from the input to find that specific pokemon
    await fetchAndStorePokemon();

    setPokemonQuery('');
  }
  
  return (
    <div className='button'>
      <div className='pokemon-search'>
        <form onSubmit={handleSubmit}>
          <input onChange={e => setPokemonQuery(e.target.value)} />
          <button>Search</button>
        </form>
        {
          pokemon.map((poke, i) => <div className='pokemon' key={poke.pokemon + i}>
            <p>{poke.pokemon}</p>
            <img src={poke.url_image}/>
          </div>) 
        }
      </div>
    </div>
  );
}