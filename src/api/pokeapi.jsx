const POKEMON_API = process.env.NEXT_PUBLIC_POKEMON_API;
const POKEMON_IMAGE_API = process.env.NEXT_PUBLIC_POKEMON_IMAGE;

export async function fetchAllPokemons() {
    try {
        const response = await fetch(`${POKEMON_API}?offset=0&limit=1302`);
        const data = await response.json();
        const pokemons = data.results.map((pokemon, index) => ({
            id: (index + 1).toString().padStart(3, '0'),
            name: pokemon.name,
            url: pokemon.url,
            image: `${POKEMON_IMAGE_API}${(index + 1).toString().padStart(3, '0')}.png`
        }));

        return pokemons;
    } catch (error) {
        console.error('Error fetching pokemons:', error);
        return null;
    }
}