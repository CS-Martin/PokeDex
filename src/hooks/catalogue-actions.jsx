import { useEffect, useRef, useState } from 'react';
import { fetchAllPokemons } from '@/api/pokeapi';
import { sortPokemons } from '@/lib/utils';
import { useScrollToBottom } from '@/lib/utils';
import { useRouter } from 'next/router';

/**
 * Custom hook to filter an array of pokemons based on what user  searches
 *
 * @param {Array} pokemons - The array of pokemons to filter.
 * @param {string} searchTerm - The search term to filter the pokemons.
 * @returns {Object} - An object containing the filtered pokemons.
 */
export const useSearchPokemon = (pokemons, searchTerm) => {
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPokemons(pokemons);
        } else {
            const filtered = pokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                pokemon.id.toString().includes(searchTerm.toLowerCase())
            );
            setFilteredPokemons(filtered);
        }
    }, [pokemons, searchTerm]);

    return { filteredPokemons };
};

/**
 * Custom hook to fetch and display a list of pokemons.
 *
 * @param {number} limit - The maximum number of pokemons to display.
 * @param {string} sortBy - The sorting criteria for the pokemons.
 * @returns {Object} An object containing the list of pokemons and a loading state.
 */
export const useDisplayPokemons = (limit, sortBy) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemonsData = async () => {
            try {
                setLoading(true);
                const data = await useFetchAllPokemons();
                const slicedData = data.slice(0, limit);
                const sortedData = sortPokemons(slicedData, sortBy);
                setPokemons(sortedData);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchPokemonsData();
    }, [limit, sortBy]);

    return { pokemons, isLoading };
};

export const useGetAllPokemons = (sortBy) => {
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        const fetchAllPokemonsData = async () => {
            try {
                const data = await useFetchAllPokemons();
                const sortedData = sortPokemons(data, sortBy);
                setAllPokemons(sortedData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllPokemonsData();
    }, [sortBy]);

    return { allPokemons };
};

export async function useFetchAllPokemons() {
    try {
        const response = await fetchAllPokemons();
        return response;
    } catch (error) {
        console.error(error);
        return [];
    }
}