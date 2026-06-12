import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const playerPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [price, setPrice] = useState(7000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  return (
    <>
      <Navbar price={price}></Navbar>
      <div className="max-w-300 mx-auto flex justify-between items-center">
        <h1 className=" font-bold text-2xl">Available Players</h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 ${toggle == true ? "bg-[#E7FE29] " : ""}     px-4 border border-gray-400 rounded-l-2xl border-r-0`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${toggle == false ? "bg-[#E7FE29] " : ""}`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
      {toggle == true ? (
        <Suspense fallback={<p>Loading......</p>}>
          <AvailablePlayers
            price={price}
            playerPromise={playerPromise}
            setPrice={setPrice}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
