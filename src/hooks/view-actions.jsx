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

                    setPokemon(foundPokemon);
                    setPokemonDetails(pokemonDetails);
                } else {
                    setPokemon(null);
                }
            } catch (error) {
                console.error('Error fetching pokemon:', error);
                setPokemon(null);
            }
        };
        fetchData();
    }, [id]);

    return { pokemon, pokemonDetails };
};