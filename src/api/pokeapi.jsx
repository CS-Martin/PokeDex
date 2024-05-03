const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'
const POKEMON_IMAGE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'

/**
 * Fetches all pokemons from the PokeAPI.
 * If the pokemons are already stored in the local storage, it returns the stored pokemons.
 * Otherwise, it fetches the pokemons from the API, stores them in the local storage, and returns them.
 * @returns {Promise<Array<Object>>} An array of pokemon objects.
 * @throws {Error} If there is an error fetching the pokemons.
 */
export async function fetchAllPokemons() {
    try {
        // localStorage.clear();
        const storedPokemons = localStorage.getItem('pokemons');
        if (storedPokemons) {
            return JSON.parse(storedPokemons);
        } else {
            const response = await fetch(`${POKEMON_API}?offset=0&limit=1010`);
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


/**
 * Fetches the types of a Pokemon from the given URL.
 * @param {string} url - The URL to fetch the Pokemon types from.
 * @returns {Promise<Array<string>>} - A promise that resolves to an array of Pokemon types.
 */
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

/**
 * Fetches the details of a Pokemon from the given URL.
 * @param {string} url - The URL of the Pokemon details.
 * @returns {Promise<Object|null>} - A Promise that resolves to the Pokemon details object, or null if there was an error.
 */
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

/**
 * Fetches the description of a Pokemon from the provided URL.
 * @param {string} url - The URL to fetch the Pokemon description from.
 * @returns {Promise<string|null>} - A promise that resolves to the Pokemon description, or null if an error occurs.
 */
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