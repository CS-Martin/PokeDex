import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function useScrollToBottom(dependency) {
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [dependency]);
}

export function sortPokemons(pokemons, sortBy) {
  return pokemons.sort((a, b) => {
    if (sortBy === "id") {
      return a.id - b.id;
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return pokemons;
    }
  });
}