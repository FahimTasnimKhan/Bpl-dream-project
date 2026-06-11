import "./App.css";

import AvailablePlayers from "./components/Available Players/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";

// const fetchPlayers = async () => {
//   const res = await fetch("/players.json");
//   return res.json();
// };

function App() {
  return (
    <>
      <Navbar></Navbar>
      <AvailablePlayers></AvailablePlayers>
      {/* fetchPlayers={fetchPlayers} */}
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
