import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import styles from "@/app/globals.css"; // Import CSS styles

export default function PokemonCard({ pokemon }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-5 py-12 border rounded-lg border-[#e6e6e6] relative card-container ${isHovered ? styles["card-container"] : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ boxShadow: isHovered ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none" }}
    >
      <Link href={`/pokemon/${pokemon.id}/details`} className="">
        <p className="absolute top-3">{pokemon.types}</p>
        <Image
          src={pokemon.image}
          alt={`${pokemon.name} Image`}
          width={200}
          height={200}
          className="transition duration-300 ease-in-out pixelated hover:-translate-y-1 hover:scale-110"
        />
        <div className={`${isHovered ? "hovered-text" : ""} justify-between absolute bottom-3`}>
          <p>#{pokemon.id}</p>
          <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
      </Link>
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 hidden w-full p-2 transition-all md:block" >
          <Link href={`/pokemon/${pokemon.id}/details`}>
            <Button className="w-full px-4 py-2 transition-colors ease-in-out">
              View {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} Details
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}