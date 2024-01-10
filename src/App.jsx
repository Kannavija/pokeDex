import PokemonCard from "./components/PokemonCard";
import {useState} from "react";

function App() {
  const [pokemonIndex, setpokemonIndex]= useState(0);
  const previous = (event) => {
    console.log(event.target);
  
    const next = (event) => {
      console.log(event.target);

    function previous() {
      if (pokemonIndex > 0) {
        setpokemonIndex(pokemonIndex - 1);
      }
    }

    function next() {
      if (pokemonIndex < pokemonList.length - 1) {
        setpokemonIndex(pokemonIndex + 1);         
      }
    }

    let pokemon = pokemonList[0]
    /* console.log(pokemon, 'pokemon'); */
  return (
    <>
    <div>
      <PokemonCard />
    </div>
    <h1>Pokémon Index: {pokemonIndex}</h1>
      {pokemonIndex > 0 && (
        <button onClick={previous}>Précédent</button>
      )}
      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={next}>Suivant</button>
      )}
    </>
  );
}
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

