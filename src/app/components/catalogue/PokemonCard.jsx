import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="p-5 border rounded-lg">
      <Link href={'/'}>
        <Image
          src={pokemon.image}
          alt={'${pokemon.name} Image'}
          width={200}
          height={200}
          className="pixelated"
        />
        <p className="text-white">{pokemon.id}</p>
        <p className="text-white">{pokemon.name}</p>
      </Link>
    </div>
  );
}