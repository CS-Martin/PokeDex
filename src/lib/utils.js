import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function useScrollToBottom() {
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 150); // Adjust the delay duration as needed
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

// https://www.eurogamer.net/pokemon-go-type-chart-effectiveness-weaknesses
export function getPokemonWeakness(pokemonType) {
  const weakness = {
    normal: ["rock", "ghost", "steel"],
    fighting: ["flying", "poison", "psychic", "bug", "ghost", "fairy"],
    flying: ["rock", "steel", "electric"],
    poison: ["poison", "ground", "rock", "ghost", "steel"],
    ground: ["flying", "bug", "grass"],
    rock: ["fighting", "ground", "steel"],
    bug: ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"],
    ghost: ["normal", "dark"],
    steel: ["steel", "fire", "water", "electric"],
    fire: ["rock", "fire", "water", "dragon"],
    water: ["water", "grass", "dragon"],
    grass: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"],
    electric: ["ground", "grass", "electric", "dragon"],
    psychic: ["steel", "psychic", "dark"],
    ice: ["steel", "fire", "water", "ice"],
    dragon: ["steel", "fairy"],
    dark: ["fighting", "dark", "fairy"],
    fairy: ["poison", "steel", "fire"],
  }

  return weakness[pokemonType];
}

export function getPokemonStrength(pokemonType) {
  const strength = {
    normal: [],
    fighting: ["normal", "rock", "steel", "ice", "dark"],
    flying: ["fighting", "bug", "grass"],
    poison: ["grass", "fairy"],
    ground: ["poison", "rock", "steel", "fire", "electric"],
    rock: ["flying", "bug", "fire", "ice"],
    bug: ["grass", "psychic", "dark"],
    ghost: ["ghost", "psychic"],
    steel: ["rock", "ice", "fairy"],
    fire: ["bug", "steel", "grass", "ice"],
    water: ["ground", "rock", "fire"],
    grass: ["ground", "rock", "water"],
    electric: ["flying", "water"],
    psychic: ["fighting", "poison"],
    ice: ["flying", "ground", "grass", "dragon"],
    dragon: ["dragon"],
    dark: ["ghost", "psychic"],
    fairy: ["fighting", "dragon", "dark"],
  }

  return strength[pokemonType];
}
