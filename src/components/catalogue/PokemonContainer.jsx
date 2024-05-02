'use client';
import React, { useState } from "react";
import { useDisplayPokemons } from "@/hooks/actions";
import { Button } from "@/components/ui/button";
import Search from "@/components/ui/search";
import { useSearchPokemon, useGetAllPokemons } from "@/hooks/actions";
import PokemonCard from "@/components/catalogue/PokemonCard";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function PokemonContainer() {
    const [limit, setLimit] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [position, setPosition] = useState('')
    const [sortBy, setSortBy] = useState('')

    const { allPokemons } = useGetAllPokemons(sortBy);
    const { pokemons, isLoading } = useDisplayPokemons(limit, sortBy);
    const { filteredPokemons } = useSearchPokemon(allPokemons, searchTerm);

    const loadMorePokemons = () => {
        setLimit((prevLimit) => prevLimit + 10);
    };

    const handleSearch = (input) => {
        setSearchTerm(input);
    };

    const handleSortBy = (method) => {
        setSortBy(method);
    };
    
    console.log(sortBy)
    return (
        <div>
            <div className="flex w-full flex-col-2 gap-x-5">
                <Search placeholder={"Search for Pokemon"} onSearch={handleSearch} />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Sort By</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                            <DropdownMenuRadioItem value="id" onClick={() => handleSortBy('id')}>Sort by ID</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="name" onClick={() => handleSortBy('name')}>Sort by Name</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
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
                    <Button onClick={loadMorePokemons} variant="secondary" className="bg-[#366CB8] text-white">
                        Load More Pokemons
                    </Button>
                )}
            </div>
        </div>
    );
}