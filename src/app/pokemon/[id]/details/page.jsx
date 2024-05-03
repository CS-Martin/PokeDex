'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useFetchPokemon } from "@/hooks/view-actions";
import { Loading } from "@/components/ui/loading";
import { capitalizeFirstLetter, getPokemonWeakness } from "@/lib/utils";
import { getPokemonType } from "@/components/typeIcons/icons";

export default function Page() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const { pokemon, pokemonDetails, pokemonDescription } = useFetchPokemon(id);

  const cleanPokemonDescription = (flavorText) => {
    const pattern = /[^\x20-\x7Eé]/g;
    return flavorText.replace(pattern, '');
  };

  return (
    <div className="py-14 minecraft-font">
      {pokemon ? (
        <div className="flex flex-col items-center ">
          <div className="grid w-full max-w-6xl gap-3 lg:grid-cols-2 grid-col-1">
            <div className="relative h-full my-auto border-[#278650] border rounded-xl md:hidden">
              <div className="">
                <Image
                  className="mx-auto"
                  priority
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex justify-between">
                <p className="text-3xl">
                  {capitalizeFirstLetter(pokemon.name)}
                </p>
                <p>#{pokemon.id}</p>
              </div>
              <div className="flex ml-5 text-center border-l flex-col-2">
                <div className="w-[50%]">
                  <p>Height</p>
                  <p>{pokemonDetails.height}'</p>
                </div>
                <div className="w-[50%]">
                  <p>Weight</p>
                  <p>{pokemonDetails.weight}</p>
                </div>
              </div>
              <div className="col-span-2 border-t">
                <p>Description:</p>
                <p>{cleanPokemonDescription(pokemonDescription.flavor_text_entries[0].flavor_text)}</p>
              </div>
              <div className="grid grid-cols-3 col-span-2 border-t border-b">
                {["HP", "ATT", "DEF", "SAT", "SDF", "SPD"].map((stat, index) => (
                  <div key={stat} className="flex gap-3">
                    <p>{stat}</p>
                    <p>{pokemonDetails.stats[index].base_stat}</p>
                  </div>
                ))}
              </div>
              <div>
                <p>Moves:</p>
                {/* loop to pokemonDetails.moves[index].move.name 6x. Get the name*/}
                {pokemonDetails.moves.slice(0, 6).map((move, index) => (
                  <p key={index}>{move.move.name}</p>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p>Type</p>
                  <div className="flex flex-wrap gap-2 mt-1 ">
                    {pokemon.types.map((type, index) => {
                      const Icon = getPokemonType(type);
                      return Icon;
                    })}
                  </div>
                </div>
                <div>
                  <p>Weakness</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {Array.from(new Set(pokemon.types.flatMap(type => getPokemonWeakness(type)))).map((weakness, index) => (
                      <span key={index}>
                        {getPokemonType(weakness)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="my-auto border-[#278650] border rounded-xl md:block hidden">
              <div>
                <Image
                  className="mx-auto"
                  priority
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={500}
                  height={500}
                />
              </div>
              {/* Name */}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}