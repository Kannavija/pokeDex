// eslint-disable-next-line react/prop-types
function NavBar({setPokemonIndex, pokemonIndex, pokemonList}) {
  const alertPokemon = (pokemon) => {
    setPokemonIndex(pokemonList.indexOf(pokemon));
    if (pokemon.name === 'pikachu') {
      alert('Pika Pikachu!!!');
    }
  };
    return (
      <div>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => alertPokemon(pokemon)}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </div>
    );
  }
  
  export default NavBar;
