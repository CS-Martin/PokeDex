import Image from "next/image";

export default function DisplayImageDisplay({ pokemon, size }) {
    return (
        <Image
            className="mx-auto transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            priority
            src={pokemon.image}
            alt={pokemon.name}
            width={size}
            height={size}
        />
    );
}
