'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFetchPokemon, useFetchPokemonDetails } from "@/hooks/view-actions";
import { getPokemonWeakness } from "@/lib/utils";
import { Header } from "@/components/ui/header";

export default function Page() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const { pokemon, pokemonDetails, pokemonDescription } = useFetchPokemon(id);

  const cleanPokemonDescription = (flavorText) => {
    const pattern = /[^\x20-\x7Eé]/g;
    return flavorText.replace(pattern, '');
  };

  return (
    <div>
      {pokemon ? (
        <>
          <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} />
          <p>Name: {pokemon.name}</p>
          <p>ID: {pokemon.id}</p>
          <p>{pokemon.types}</p>
          <p>{pokemon.url}</p>
          <p>{pokemonDetails.weight}</p>
          <p>{pokemonDetails.height}</p>
          {pokemonDetails.stats.map(stats => (
            <p>{stats.stat.name}: {stats.base_stat}</p>
          ))}
          <p>Base Happiness: {pokemonDescription.base_happiness}</p>
          <p>Pokemon Description: {cleanPokemonDescription(pokemonDescription.flavor_text_entries[0].flavor_text)}</p>
          <p>
            Weak against:
            {pokemon.types.map((type, index) => (
              <div key={index}>
                <p>{type}:</p>
                <ul>
                  {getPokemonWeakness(type).map((weakness, idx) => (
                    <li key={idx}>{weakness}</li>
                  ))}
                </ul>
              </div>
            ))}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
