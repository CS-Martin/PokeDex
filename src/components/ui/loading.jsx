export const Loading = () => {
  return (
    <div className="flex flex-col items-center h-full mt-[80px]">
      <div className="flex items-center gap-3">
        <img className="w-[40px] h-[40px] animate-bounce" src="/icons/loading/pikachu.svg" style={{ animationDelay: "0.1s" }} />
        <img className="w-[40px] h-[40px] animate-bounce" src="/icons/loading/bulbasaur.svg" alt="" style={{ animationDelay: "0.2s" }} />
        <img className="w-[40px] h-[40px] animate-bounce" src="/icons/loading/charmander.svg" alt="" style={{ animationDelay: "0.3s" }} />
        <img className="w-[40px] h-[40px] animate-bounce" src="/icons/loading/mankey.svg" alt="" style={{ animationDelay: "0.4s" }} />
        <img className="w-[40px] h-[40px] animate-bounce" src="/icons/loading/psyduck.svg" alt="" style={{ animationDelay: "0.5s" }} />
        <img className="w-[40px] h-[40px] animate-bounce" src="/icons/loading/squirtle.svg" alt="" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="mt-3 text-3xl pokemon-font text-[#FDCC02]">Loading...</div>
    </div>
  );
};
