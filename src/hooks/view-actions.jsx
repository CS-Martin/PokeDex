import { fetchPokemonDetails } from "@/api/pokeapi";
import { useEffect, useState } from "react";

/**
 * Custom hook to fetch one Pokemon data and details.
 * @param {number} id - The ID of the Pokemon to fetch.
 * @returns {Object} - An object containing the fetched Pokemon and its details.
 */
export const useFetchPokemon = (id) => {
    const [pokemon, setPokemon] = useState(null);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [pokemonDescription, setPokemonDescription] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const storedPokemons = localStorage.getItem('pokemons');
                if (storedPokemons) {
                    const pokemons = JSON.parse(storedPokemons);

                    // Find pokemon by id
                    const foundPokemon = pokemons.find((pokemon) => pokemon.id === id);

                    // Fetch pokemon details
                    const pokemonDetails = await fetchPokemonDetails(foundPokemon.url);

                    // Fetch pokemon descriptions
                    // "https://pokeapi.co/api/v2/pokemon/2/"
                    const pokemonDescription = await useFetchPokemonDescription(pokemonDetails.id);

                    setPokemon(foundPokemon);
                    setPokemonDetails(pokemonDetails);
                    setPokemonDescription(pokemonDescription);
                    setIsLoading(false);
                } else {
                    setPokemon(null);
                }
            } catch (error) {
                console.error('Error fetching pokemon:', error);
                setPokemon(null);
                setPokemonDetails(null);
                setPokemonDescription(null);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [id]);

    return { pokemon, pokemonDetails, pokemonDescription };
};

const useFetchPokemonDescription = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
        const data = response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pokemon information:', error);
        return null;
    }
}