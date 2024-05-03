import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="p-5  border rounded-lg border-[#e6e6e6]">
      <Link href={`/pokemon/${pokemon.id}/details`}>
        <Image
          src={pokemon.image}
          alt={`${pokemon.name} Image`}
          width={200}
          height={200}
          className="pixelated"
        />
        <p>{pokemon.id}</p>
        <p>{pokemon.name}</p>
        <p>{pokemon.types}</p>
      </Link>
    </div>
  );
}