/* function PokemonCard(props.pokemon) {
  console.log(props.pokemon);
  const pokemon = pokemonList[1];
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name}></img>
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard; */

function PokemonCard(props) {
  
  const {pokemon}= props
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
  export default PokemonCard;
