import PokemonCard from "./components/pokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";

// ------------ici mes const ---------------------------
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

// -----------------ici mes fonctions --------------------

function Card() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  

  return (
    <div>
      <NavBar
        pokemonIndex = {pokemonIndex}
        pokemonList={pokemonList}
        setPokemonIndex={setPokemonIndex}
       
      />
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    
    </div>
  );
}

export default Card;
