

export function PokemonCardSkeleton() {
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

export function PokemonCardsSkeleton() {
    return (
        <div className="grid grid-cols-2 gap-7 xl:grid-cols-4 lg:grid-cols-3 2xl:grid-cols-5">
            <PokemonCardSkeleton />
            <PokemonCardSkeleton />
            <PokemonCardSkeleton />
            <PokemonCardSkeleton />
            <PokemonCardSkeleton />
            <PokemonCardSkeleton />
        </div>
    )
};

export function PokemonTypesSkeleton() {
    return (
        <div className="flex flex-wrap gap-2 ">
            <div className="icon-container bg-[#595861] flex items-center gap-2">
                <Skeleton.Avatar active size={24} shape="square" />
                <Skeleton.Input style={{ width: '50px' }} active />
            </div>
        </div>
    );
}

export function PokemonDetailsSkeleton() {
    return (
        <div className="py-14 minecraft-font">
            <div className="flex flex-col items-center">
                <div className="grid w-full max-w-6xl gap-3 lg:grid-cols-2 grid-col-1">
                    <div className="relative h-full my-auto border rounded-xl md:hidden card-container">
                        <Skeleton.Image style={{ width: '100%', height: '100%' }} />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center justify-between">
                            <Skeleton.Input style={{ width: '80%' }} active />
                            <Skeleton.Input style={{ width: '20%' }} active />
                        </div>
                        <div className="flex items-center ml-5 text-center border-l flex-col-2">
                            <div className="w-[50%]">
                                <Skeleton.Input style={{ width: '100%' }} active />
                            </div>
                            <div className="w-[50%]">
                                <Skeleton.Input style={{ width: '100%' }} active />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center col-span-2 border-t">
                            <Skeleton.Input style={{ width: '100%' }} active />
                            <Skeleton.Input style={{ width: '100%' }} active />
                        </div>
                        <div className="grid grid-cols-3 col-span-2 pt-5 border-t border-b">
                            {[1, 2, 3, 4, 5, 6].map((_, index) => (
                                <div key={index} className="flex gap-3">
                                    <Skeleton.Input style={{ width: '50%' }} active />
                                    <Skeleton.Input style={{ width: '50%' }} active />
                                </div>
                            ))}
                        </div>
                        <div>
                            <Skeleton.Input style={{ width: '100%' }} active />
                            <Skeleton.Input style={{ width: '100%' }} active />
                            <Skeleton.Input style={{ width: '100%' }} active />
                            <Skeleton.Input style={{ width: '100%' }} active />
                            <Skeleton.Input style={{ width: '100%' }} active />
                            <Skeleton.Input style={{ width: '100%' }} active />
                        </div>
                        <div className="flex flex-col gap-3">
                            <div>
                                <Skeleton.Input style={{ width: '100%' }} active />
                                <Skeleton.Input style={{ width: '100%' }} active />
                                <Skeleton.Input style={{ width: '100%' }} active />
                            </div>
                            <div>
                                <Skeleton.Input style={{ width: '100%' }} active />
                                <Skeleton.Input style={{ width: '100%' }} active />
                                <Skeleton.Input style={{ width: '100%' }} active />
                            </div>
                        </div>
                    </div>

                    <div className={`relative hidden h-full my-auto border-4 rounded-xl md:block card-container`}>
                        <Skeleton.Image style={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
