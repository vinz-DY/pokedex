
function PokemonCard({ pokemon }) {

    const imageok = pokemon.imgSrc ?(
        <img src={pokemon.imgSrc} alt={pokemon.name}/>
    ):(<p>???</p>
    );

    return (
        <>
            <div>{pokemon.name}</div>
            <div>{imageok}</div>
        </>
  );

}

export default PokemonCard;
