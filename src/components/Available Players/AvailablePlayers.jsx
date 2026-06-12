import { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
const AvailablePlayers = ({
  playerPromise,
  price,
  setPrice,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playerData = use(playerPromise);
  console.log(playerData);
  return (
    <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {playerData.map((player) => (
        <PlayerCard
          setPrice={setPrice}
          price={price}
          player={player}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
