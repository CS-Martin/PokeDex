import { useEffect, useRef, useState } from 'react';
import { fetchAllPokemons } from '@/api/pokeapi';
import { useScrollToBottom } from '@/lib/utils';
import { useRouter } from 'next/router';
import { useDebounce } from 'use-debounce';

export const useSearchPokemon = (pokemons, searchTerm) => {
    const [filteredPokemons, setFilteredPokemons] = useState([]);  

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredPokemons(pokemons);
        } else {
            const filtered = pokemons.filter(pokemon => 
                pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            setFilteredPokemons(filtered);
        }
    }, [pokemons, searchTerm]);

    return { filteredPokemons };
};

export const useDisplayPokemons = (limit) => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useScrollToBottom(pokemons);

    useEffect(() => {
        const fetchPokemonsData = async () => {
            try {
                setLoading(true);

                if (isFirstLoad) {
                    const data = await useAllPokemons();
                    const slicedData = data.slice(0, limit);
                    console.log(slicedData);
                    setPokemons(slicedData);
                    setIsFirstLoad(false);
                } else {
                    const data = await useAllPokemons();
                    const slicedData = data.slice(limit - 10, limit);
                    setPokemons(prevPokemons => [...prevPokemons, ...slicedData]);
                }

                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchPokemonsData();
    }, [limit]);

    return { pokemons, isLoading };
};

export const useGetAllPokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]);

    useEffect(() => {
        const fetchAllPokemonsData = async () => {
            try {
                const data = await useAllPokemons();
                setAllPokemons(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllPokemonsData();
    }, []);

    return { allPokemons };
};  

export async function useAllPokemons() {
    try {
        const storedPokemons = localStorage.getItem('pokemons');
        if (storedPokemons) {
            const response = JSON.parse(storedPokemons);
            return response;
        } else {
            const response = await fetchAllPokemons();
            localStorage.setItem('pokemons', JSON.stringify(response));
            return response;
        }
    } catch (error) {
        console.error(error);
        return [];
    }
}