import { Link } from "react-router-dom";
import BrandLogo from "@assets/brand/brand-logo.svg";

export default function NavBar() {
  return (
    <>
      <div className="bg-black w-full h-10 text-right px-[73px] pt-2 pb-1 relative z-[11]">
        <Link to="/login">
          <button className="text-white text-xl font-manrope font-normal">
            Login
          </button>
        </Link>
      </div>
      <nav className="bg-[#0F7B41] w-full h-20 py-8 px-14 flex justify-between items-center relative">
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
        </Link>
        <div className="flex items-center gap-14">
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
        <button className="text-[#0F7B41] text-xl shrink-0 w-48 h-11 rounded-2xl bg-white text-center font-manrope font-bold">
          <Link to="/registration">GET STARTED</Link>
        </button>
      </nav>
    </>
  );
}
