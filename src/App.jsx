import PokemonCard from "./components/pokemonCard";

// ------------ici mes const ---------------------------
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

// -----------------ici mes fonctions --------------------

function Card() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
   </div>
  );
}

export default Card;
