import navImg from "../../assets/logo.png";
import coinImg from "../../assets/dollar 1.png";
const Navbar = ({ price }) => {
  return (
    <div className="navbar max-w-300 mx-auto">
      {/* The max width ensure every content is within a fixed space */}
      <div className="flex-1">
        <a className="">
          <img className=" w-15 h-15 " src={navImg} alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <span className="mr-1">{price}</span>
        <span className="mr-1">Coin</span>
        <img src={coinImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
