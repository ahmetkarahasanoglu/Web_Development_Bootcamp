import "./RandomPokemon.css";

export default function RandomPokemon() {
  const pokemonId = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  return (
    <div className="pokeCard">
      <h1>Pokemon #{pokemonId}</h1>
      <img src={url} alt="" />
    </div>
  );
}
