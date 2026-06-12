import { useState } from "react";
import userimg from "../../assets/Imageicon.png";
import flagimg from "../../assets/flag.png";
const PlayerCard = ({
  player,
  price,
  setPrice,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = (player) => {
    const playerprice = player["price"];
    if (playerprice > price) {
      alert("Insufficient Balance");
      return;
    }
    (setIsSelected(true), setPrice(price - player["price"]));
    setPurchasedPlayers([...purchasedPlayers, player]);
  };
  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img
          className="w-full h-75 "
          src={player["player-image"]}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userimg} alt="" />{" "}
          <h2 className="card-title ml-2">{player["player-name"]}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b pb-2 border-gray-400">
          <div className="flex items-center">
            <img className="w-5 h-5" src={flagimg} alt="" />
            <span className="ml-2">{player["player-country"]}</span>
          </div>
          <button className="btn">{player["role"]}</button>
        </div>

        <div className="flex justify-between font-bold mt-4">
          <span>Rating</span>
          <span>{player["rating"]}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player["bating-style"]}</span>
          <span>{player["bowling-style"]}</span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className=" font-bold">Price : BDT {player["price"]}</p>
          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn "
          >
            {isSelected == true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
