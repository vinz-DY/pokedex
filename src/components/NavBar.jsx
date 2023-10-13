
const NavBar = ({pokemonIndex, pokemonList, tutu, toto}) => {
    return (
        <div>
      {(pokemonIndex > 0) ? (<button onClick={toto}>précédent</button>) : ("")}
      {(pokemonIndex < pokemonList.length - 1) ? (<button onClick={tutu}>suivant</button>) : ("")}
        </div>
    );
}

export default NavBar;