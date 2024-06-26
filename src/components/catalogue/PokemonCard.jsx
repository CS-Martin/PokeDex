import Link from "next/link";
import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import styles from "@/app/globals.css";
import { getPokemonType } from "../typeIcons/icons";
import { PokemonCardSkeleton, PokemonTypesSkeleton } from "../ui/skeletons";
import DisplayPokemonImage from "@/components/catalogue/DisplayPokemonImage";
import { Loader2 } from "lucide-react";

export default function PokemonCard({ pokemon }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to track loading when button is clicked

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Suspense fallback={<PokemonCardSkeleton />}> {/* Use Suspense */}
      <div
        className={`pb-14 pt-4 px-3 max-w-[224px] border rounded-lg border-[#e6e6e6] relative card-container minecraft-font ${isHovered ? styles["card-container"] : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ boxShadow: isHovered ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none" }}
      >
        <Link href={`/pokemon/${pokemon.id}/details`} className="">
          <Suspense fallback={<PokemonTypesSkeleton />}>
            <div className="flex flex-wrap gap-2 ">
              {pokemon.types.map((type, index) => {
                const Icon = getPokemonType(type);
                return Icon;
              })}
            </div>
          </Suspense>
          <DisplayPokemonImage pokemon={pokemon} size={200} />
          <div className={`${isHovered ? "hovered-text" : ""} justify-between absolute bottom-3`}>
            <p>#{pokemon.id}</p>
            <p className="lg:text-xl">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
          </div>
        </Link>
        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 hidden w-full p-2 transition-all md:block">
            <Link href={`/pokemon/${pokemon.id}/details`}>
              <Button className="w-full px-4 py-2 transition-colors ease-in-out" onClick={handleClick} disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <span>View {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Details</span>
                )}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Suspense>
  );
}