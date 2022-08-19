const fetchSinglePokemon = async (
  pokemonName: string | undefined
) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const data = await request.json();
  return { response: data }
};
  
export default fetchSinglePokemon