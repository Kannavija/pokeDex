import PropTypes from "prop-types";

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

PokemonCard.PropTypes = {
  pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgsrc: PropTypes.string,
  })
}
export default PokemonCard;



