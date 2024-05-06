import Image from "next/image";
import { NextButton, PrevButton } from "@/components/ui/customButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Header() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  return (
    <header className="flex justify-between w-full gap-3 p-3 md:justify-center 2xl:gap-x-10 lg:gap-x-7">
      {!isHomePage && <PrevButton />}
      <Link href={'/'}>
        <Image
          src="/pokedex.png"
          alt="PokeDex logo"
          width={130}
          height={150}
        />
      </Link>
      {!isHomePage && <NextButton />}
    </header>
  );
}