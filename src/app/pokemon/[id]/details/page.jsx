'use client';

import { usePathname } from "next/navigation";
import { useFetchPokemon, useFetchPokemonDetails } from "@/hooks/view-actions";

export default function Page() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const { pokemon, pokemonDetails } = useFetchPokemon(id);
  console.log(pokemon, pokemonDetails);

  return (
    <div>
      {pokemon ? (
        <>
          <p>Name: {pokemon.name}</p>
          <p>ID: {pokemon.id}</p>
          <p>{pokemon.types}</p>
          <p>{pokemon.url}</p>
          <p>{pokemonDetails.weight}</p>
          <p>{pokemonDetails.height}</p>
          {pokemonDetails.stats.map(stats => (
            <p>{stats.stat.name}: {stats.base_stat}</p>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
