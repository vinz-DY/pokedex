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

function PokemonCard() {
    const pokemon = pokemonList[0];
    const imageok = pokemon.imgSrc ?(
        <img src={pokemon.imgSrc} alt={pokemon.name}/>
    ):(<p>???</p>
    );

    return (
        <div>
            <div>{pokemon.name}</div>
            <div>{imageok}</div>
        </div>
    );
}


export default PokemonCard;