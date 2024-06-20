import { fetchAllPokemons, Pokemon } from "@/services/pokeapi"
import { resolve } from "path";
import { useEffect, useState } from "react";

export const useDisplayPokemons = (limit: number) => {
    const [pokemons, setPokemons] = useState<Pokemon[] | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedPokemons = await getPokemonsFromLocalStorage();

                if (!storedPokemons) {
                    throw new Error("Failed to fetch pokemons");
                }

                setPokemons(storedPokemons);
            } catch (error) {
                throw new Error('An error occurred while fetching pokemons');
            }
        }

        fetchData();
    }, [])

    return pokemons || [];
}

const getPokemonsFromLocalStorage = (): Promise<Pokemon[] | null> => {
    return new Promise((resolve, reject) => {
        try {
            const storedPokemons = localStorage.getItem('pokemons');

            if (storedPokemons) {
                resolve(JSON.parse(storedPokemons) as Pokemon[]);
            } else {
                const pokemons = fetchAllPokemons();

                resolve(pokemons);
            }
        } catch (error) {
            reject(new Error('Failed to get pokemons from local storage'));
        }
    });
}