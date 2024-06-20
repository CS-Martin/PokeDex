import React from "react";
import { Pokemon } from '../../services/pokeapi';

type PokemonCardProps = {
    name: string,
    url: string
}
const PokemonCard: React.FC<PokemonCardProps> = ({ name, url}) => {
    // Fetch all pokemons
    
    return (
        <div className="text-white">
            {name}, {url}
        </div>
    );
}

export default PokemonCard;
