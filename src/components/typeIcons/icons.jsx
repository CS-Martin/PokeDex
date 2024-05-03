import "./icons.css";

export const Bug = () => {
    return (
        <div className="bg-[#92BC2C] icon-container">
            <img src="/icons/bug.svg" className="bug" alt="Bug Icon" />
            <small className="ml-1">Bug</small>
        </div>
    )
};

export const Dark = () => {
    return (
        <div className="icon-container bg-[#595861]">
            <svg className="dark-icon" width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M229.379 452.85C239.106 454.339 249.068 455.111 259.212 455.111C367.214 455.111 454.767 367.558 454.767 259.556C454.767 151.553 367.214 64 259.212 64C251.966 64 244.811 64.3941 237.77 65.1621C291.345 105.751 326.767 176.062 326.767 256C326.767 340.04 287.616 413.44 229.379 452.85ZM255.656 512C397.041 512 511.656 397.385 511.656 256C511.656 114.615 397.041 0 255.656 0C114.271 0 -0.34375 114.615 -0.34375 256C-0.34375 397.385 114.271 512 255.656 512Z" fill="white" />
            </svg>
            <small className="ml-1">Dark</small>
        </div>
    )
};

export const Dragon = () => {
    return (
        <div className="icon-container bg-[#0C69C8]">
            <img src="/icons/dragon.svg" className="dragon" alt="Dragon Icon" />
            <small className="ml-1">Dragon</small>
        </div>
    )
};

export const Electric = () => {
    return (
        <div className="icon-container bg-[#EDD53E]">
            <img src="/icons/electric.svg" className="electric" alt="Electric Icon" />
            <small className="ml-1">Electric</small>
        </div>
    )
};

export const Fire = () => {
    return (
        <div className="icon-container bg-[#FBA54C]">
            <img src="/icons/fire.svg" className="fire" alt="Fire Icon" />
            <small className="ml-1">Fire</small>
        </div>
    )
}

export const Fairy = () => {
    return (
        <div className="icon-container bg-[#EC8CE5]">
            <img src="/icons/fairy.svg" className="fairy" alt="Fairy Icon" />
            <small className="ml-1">Fairy</small>
        </div>
    )
};

export const Fighting = () => {
    return (
        <div className="icon-container bg-[#D3425F]">
            <img src="/icons/fighting.svg" className="fighting" alt="Fighting Icon" />
            <small className="ml-1">Fighting</small>
        </div>
    )
}

export const Flying = () => {
    return (
        <div className="icon-container bg-[#A1BBEC]">
            <img src="/icons/flying.svg" className="flying" alt="Flying Icon" />
            <small className="ml-1">Flying</small>
        </div>
    )
}

export const Ghost = () => {
    return (
        <div className="icon-container bg-[#516AAC]">
            <img src="/icons/ghost.svg" className="ghost" alt="Ghost Icon" />
            <small className="ml-1">Ghost</small>
        </div>
    )
}

export const Grass = () => {
    return (
        <div className="icon-container bg-[#5DBE62]">
            <img src="/icons/grass.svg" className="grass" alt="Grass Icon" />
            <small className="ml-1">Grass</small>
        </div>
    )
}

export const Ground = () => {
    return (
        <div className="icon-container bg-[#DA7C4D]">
            <img src="/icons/ground.svg" className="ground" alt="Ground Icon" />
            <small className="ml-1">Ground</small>
        </div>
    )
}

export const Ice = () => {
    return (
        <div className="icon-container bg-[#70CCBD]">
            <img src="/icons/ice.svg" className="ice" alt="Ice Icon" />
            <small className="ml-1">Ice</small>
        </div>
    )
}

export const Normal = () => {
    return (
        <div className="icon-container bg-[#A0A29F]">
            <img src="/icons/normal.svg" className="normal" alt="Normal Icon" />
            <small className="ml-1">Normal</small>
        </div>
    )
}

export const Poison = () => {
    return (
        <div className="icon-container bg-[#B763CF]">
            <img src="/icons/poison.svg" className="poison" alt="Poison Icon" />
            <small className="ml-1">Poison</small>
        </div>
    )
}

export const Psychic = () => {
    return (
        <div className="icon-container bg-[#FA8581]">
            <img src="/icons/psychic.svg" className="psychic" alt="Psychic Icon" />
            <small className="ml-1">Psychic</small>
        </div>
    )
}

export const Rock = () => {
    return (
        <div className="icon-container bg-[#C9BB8A]">
            <img src="/icons/rock.svg" className="rock" alt="Rock Icon" />
            <small className="ml-1">Rock</small>
        </div>
    )
}

export const Steel = () => {
    return (
        <div className="icon-container bg-[#5A8EA1]">
            <img src="/icons/steel.svg" className="steel" alt="Steel Icon" />
            <small className="ml-1">Steel</small>
        </div>
    )
}

export const Water = () => {
    return (
        <div className="icon-container bg-[#539DDF]">
            <img src="/icons/water.svg" className="water" alt="Water Icon" />
            <small className="ml-1">Water</small>
        </div>
    )
}

export const getPokemonType = (types) => {
    switch (types) {
        case "ice":
            return <Ice />;
        case "normal":
            return <Normal />;
        case "water":
            return <Water />;
        case "bug":
            return <Bug />;
        case "dark":
            return <Dark />;
        case "dragon":
            return <Dragon />;
        case "electric":
            return <Electric />;
        case "fire":
            return <Fire />;
        case "fairy":
            return <Fairy />;
        case "fighting":
            return <Fighting />;
        case "flying":
            return <Flying />;
        case "ghost":
            return <Ghost />;
        case "grass":
            return <Grass />; 
        case "ground":
            return <Ground />;
        case "poison":
            return <Poison />;
        case "psychic":
            return <Psychic />;
        case "rock":
            return <Rock />;
        case "steel":
            return <Steel />;
        default:
            return null
    }
}
