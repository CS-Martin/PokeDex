const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'
const POKEMON_IMAGE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

export async function fetchAllPokemons() {
    try {
        // localStorage.clear();
        const storedPokemons = localStorage.getItem('pokemons');
        if (storedPokemons) {
            return JSON.parse(storedPokemons);
        } else {
            const response = await fetch(`${POKEMON_API}?offset=0&limit=1000`);
            const data = await response.json();

            const pokemons = await Promise.all(data.results.map(async (pokemon, index) => {
                const types = await fetchPokemonTypes(pokemon.url);

                return {
                    id: (index + 1).toString().padStart(3, '0'),
                    name: pokemon.name,
                    url: pokemon.url,
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
    console.log('url fetchingasdasdhjjadja');
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.types.map((type) => type.type.name);
    } catch (error) {
        console.error('Error fetching pokemon types:', error);
        return [];
    }
}

export async function fetchPokemonDetails(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pokemon information:', error);
        return null;
    }
}

export async function fetchPokemonDescription(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.flavor_text_entries.find((entry) => entry.language.name === 'en').flavor_text;
    } catch (error) {
        console.error('Error fetching pokemon description:', error);
        return null;
    }
}