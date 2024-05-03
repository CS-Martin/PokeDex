import Image from "next/image";
import { ModeToggle } from "./theme-toggler";

export function Header() {
  return (
    <header className="flex justify-center w-full p-3">
        <ModeToggle />
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