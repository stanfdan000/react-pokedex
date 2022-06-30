export async function getPokemon(filter) {
  
  const rawData = await fetch(`/.netlify/functions/pokemon?pokeQuery=${filter}`);
  const data = await rawData.json();
  
  return data;
}

export async function getYelp(filter) {
  
  const rawData = await fetch(`/.netlify/functions/yelp?search=${filter}`);
  const data = await rawData.json();
  
  return data;
}