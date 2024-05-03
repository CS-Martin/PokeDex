export const PokemonCardSkeleton = () => {
    return (
        <div className="pb-12 pt-4 px-3 max-w-[224px] border rounded-lg border-[#e6e6e6] relative card-container">
            <div className="flex flex-wrap gap-2 ">
                {/* Placeholder for type icons */}
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
            {/* Placeholder for image */}
            <div className="w-full mt-4 bg-gray-300 h-52 animate-pulse"></div>
            <div className="absolute justify-between bottom-3">
                {/* Placeholder for Pokemon ID */}
                <div className="w-16 h-4 bg-gray-300 animate-pulse"></div>
                {/* Placeholder for Pokemon name */}
                <div className="w-32 h-4 mt-1 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
};
