import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-center w-full p-3">
        <Image 
            src="/pokedex.png"
            height={150}
            width={200}
            alt="PokeDex logo"
            className=""
        />
    </header>
  );
}