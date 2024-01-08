function PokemonCard() {
    return <figure>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur"/>
    <figcaption>Bulbasaur</figcaption>
    </figure>

     if (pokemon.imgSrc === 'true') {
      const pokemon = pokemonList[0];
      return <figure>{pokemon.name}
      <img src = {pokemon.imgSrc} alt= {pokemon.name}/>
      </figure>}
  } else if {
    <p>'???'</p>
  }


const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

  export default PokemonCard;
