import PokemonCard from "./components/PokemonCard";
function App(props) {
  const pokemon = pokemonList[0].props.name 
  return (
    <div>
      <PokemonCard />
    </div>
  );
}
export default App;

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

