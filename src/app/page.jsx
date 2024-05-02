'use client';
import { Header } from "@/components/ui/Header";
import PokemonContainer from "@/components/catalogue/PokemonContainer";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <PokemonContainer /> 
    </main>
  );
}