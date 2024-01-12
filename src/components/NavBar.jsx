
// eslint-disable-next-line react/prop-types
function NavBar({setPokemonIndex, pokemonIndex, pokemonList}) {

    let previousClic = () => {
        if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex - 1)
        }
      }
    
      let nextClic = () => {
        // eslint-disable-next-line react/prop-types
        if (pokemonIndex < pokemonList.length - 1)
        setPokemonIndex(pokemonIndex + 1)
      }
      return (
        <div>
            <button onClick={previousClic}>precedent</button>
            <button onClick={nextClic}>suivant</button>
        </div>
      )
}

export default NavBar;
