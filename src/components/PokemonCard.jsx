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

function PokemonCard(props.pokemon) {
  const {pokemon} = props;
  console.log(props.pokemon);
  const pokemon = pokemonList[1];
  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={props.pokemon.imgSrc} alt={props.pokemon.name}></img>
      ) : (
        <p>???</p>
      )}
      <figcaption>{props.pokemon.name}</figcaption>
    </figure>
  );
}
export default PokemonCard;

