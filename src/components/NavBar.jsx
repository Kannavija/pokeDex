// eslint-disable-next-line react/prop-types
function NavBar({setPokemonIndex, pokemonIndex, pokemonList}) {
    return (
      <div>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>
            <button onClick={() => setPokemonIndex(pokemonList.indexOf(pokemon))}>
              {pokemon.name}
            </button>
          </li>
        ))}
      </div>
    );
  }
  
  export default NavBar;
  
