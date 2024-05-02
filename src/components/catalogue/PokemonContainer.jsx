'use client';
import React, { useState } from "react";
import { useDisplayPokemons } from "@/hooks/actions";
import { Button } from "@/components/ui/Button";
import Search from "@/components/ui/Search";
import { useSearchPokemon, useGetAllPokemons } from "@/hooks/actions";
import PokemonCard from "@/components/catalogue/PokemonCard";

export default function PokemonContainer() {
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const { allPokemons } = useGetAllPokemons();
    const { pokemons, isLoading } = useDisplayPokemons(limit);
    const { filteredPokemons } = useSearchPokemon(allPokemons, searchTerm);

    const loadMorePokemons = () => {
        setLimit((prevLimit) => prevLimit + 10);
    };

    const handleSearch = (input) => {
        setSearchTerm(input);
    };

    return (
        <div>
            <div className="">
                <Search placeholder={"Search for Pokemon"} onSearch={handleSearch} />
            </div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid grid-cols-2 gap-7 xl:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-5">
                    {/* Use filteredPokemons if user is using Search. If not, use pokemons to load only sliced data*/}
                    {(searchTerm.trim() === "" ? pokemons : filteredPokemons).map(
                        (pokemon) => (
                            <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                                className="fade-enter"
                            />
                        )
                    )}
                </div>
            )}

            <div className="flex justify-center p-10">
                {!isLoading && (
                    <Button onClick={loadMorePokemons} variant="secondary">
                        Load More Pokemons
                    </Button>
                )}
            </div>
        </div>
    );
}