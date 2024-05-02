import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="p-5 bg-white border rounded-lg border-[#e6e6e6]">
      <Link href={'/'}>
        <Image
          src={pokemon.image}
          alt={'${pokemon.name} Image'}
          width={200}
          height={200}
          className="pixelated"
        />
        <p className="text-black">{pokemon.id}</p>
        <p className="text-black">{pokemon.name}</p>
      </Link>
    </div>
  );
}