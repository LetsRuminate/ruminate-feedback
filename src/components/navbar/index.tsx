import { Link } from "react-router-dom";
import BrandLogo from "@assets/images/brand-logo.svg";

// REACT ICONS HERE
// import { login } from "../api/firebase";

export default function NavBar() {
  return (
    <>
      <div className="bg-black w-full h-10 text-right px-[73px] pt-2 pb-1">
        <Link to="/login">
          <button className="text-white text-xl font-Manrope font-semibold">
            Login
          </button>
        </Link>
      </div>
      <nav className="bg-[#0F7B41] w-full h-[88px] py-8 px-14 flex justify-between items-center">
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
        </Link>
        <div className="flex items-center gap-14">
          <Link to="/about-us">
            <button className="text-white text-xl font-semibold font-Manrope">
              About us
            </button>
          </Link>
          <Link to="/how-it-works">
            <button className="text-white text-xl font-semibold font-Manrope">
              How it works
            </button>
          </Link>
          <Link to="/pricing">
            <button className="text-white text-xl font-semibold font-Manrope">
              Pricing
            </button>
          </Link>
        </div>
        <button className="text-[#0F7B41] shrink-0 w-[200px] h-11 rounded-2xl bg-white">
          GET STARTED
        </button>
        {/* <div className="gap-3 flex items-center">
          <button onClick={() => login()} className="text-2xl text-white">
            Login
          </button>
        </div> */}
      </nav>
    </>
  );
}
