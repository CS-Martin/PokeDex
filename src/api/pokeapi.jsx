const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'
const POKEMON_IMAGE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

export async function fetchAllPokemons() {
    try {
        const storedPokemons = localStorage.getItem('pokemons');
        if (storedPokemons) {
            console.log('Using stored pokemons');
            return JSON.parse(storedPokemons);
        } else {
            const response = await fetch(`${POKEMON_API}?offset=0&limit=1302`);
            const data = await response.json();

            const pokemons = await Promise.all(data.results.map(async (pokemon, index) => {
                const fullPokemonUrl = pokemon.url;
                const types = await fetchPokemonTypes(fullPokemonUrl);
                console.log("types", types);
                return {
                    id: (index + 1).toString().padStart(3, '0'),
                    name: pokemon.name,
                    url: fullPokemonUrl, // Use the full URL here
                    image: `${POKEMON_IMAGE_API}${(index + 1).toString().padStart(3, '0')}.png`,
                    types: types,
                };
            }));

            localStorage.setItem('pokemons', JSON.stringify(pokemons));

            return pokemons;
        }
    } catch (error) {
        console.error('Error fetching pokemons:', error);
        return null;
    }
}

const fetchPokemonTypes = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.types.map((type) => type.type.name);
    } catch (error) {
        console.error('Error fetching pokemon types:', error);
        return [];
    }
}