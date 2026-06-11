import "./App.css";
import navImg from "./assets/logo.png";
import coinImg from "./assets/dollar 1.png";

function App() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="">
            <img className=" w-[60px] h-[60px] " src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className=" mr-1">60000000</span>
          <span>Coin</span>
          <img src={coinImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
