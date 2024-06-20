export type Pokemon = {
    name: string,
    url: string
}

export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
    try {
        const storedPokemons = localStorage.getItem('pokemons');

        if (storedPokemons) {
            return JSON.parse(storedPokemons) as Pokemon[];
        } else {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');

            if (!response.ok) {
                throw new Error("Failed to fetch pokemons");
            }

            const data = await response.json();
            const pokemons = data.results as Pokemon[];

            localStorage.setItem('pokemons', JSON.stringify(pokemons));

            return pokemons;
        }
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }

        throw new Error('An error occurred while fetching pokemons');
    }
}