import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  let previousClic = () => {
    if (pokemonIndex > 0) {
    setPokemonIndex(pokemonIndex - 1)
    }
  }

  let nextClic = () => {
    if (pokemonIndex < pokemonList.length - 1)
    setPokemonIndex(pokemonIndex + 1)
  }

  const pokemon = pokemonList[pokemonIndex]
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <button onClick={previousClic}>precedent</button>
      <button onClick={nextClic}>suivant</button>
      
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
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


