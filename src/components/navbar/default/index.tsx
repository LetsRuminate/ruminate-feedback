import { Link } from "react-router-dom";
import BrandLogo from "@assets/brand/brand-logo.svg";
import { useState } from "react";

export default function NavBar() {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="bg-black w-full px-[73px] pt-2 pb-10">
        
      </div>
      <nav className="bg-[#000000] w-full h-20 py-8 px-14 flex justify-between items-center relative">
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
        </Link>
        <div className="flex items-right gap-10 ml-auto">
          <Link to="/about-us">
            <button className="text-white text-xl font-manrope font-normal">
              About us
            </button>
          </Link>
          <Link to="/how-it-works">
            <button className="text-white text-xl font-manrope font-normal">
              How it works
            </button>
          </Link>
          <Link to="/pricing">
            <button className="text-white text-xl font-manrope font-normal">
              Pricing
            </button>
          </Link>
        </div>
        
        <div className="flex ml-auto mr-7">   
        <Link to="/login">
            <button className="text-white text-xl font-manrope font-normal">
              Login
            </button>
          </Link>
        </div>
        <button className="text-[#000000] text-xl shrink-0 w-48 h-11 rounded-2xl bg-white text-center font-manrope font-bold">
          <Link to="/registration">GET STARTED</Link>
        </button>
      </nav>
    </>
  );
}
