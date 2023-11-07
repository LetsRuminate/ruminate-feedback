import { Link } from "react-router-dom";
import BrandLogo from "@assets/images/brand-logo.svg";

export default function NavBar() {
  return (
    <nav className="bg-brand-green w-full h-[86px] flex justify-between items-center px-10">
      <Link to="/">
        <img alt="Feedback logo" src={BrandLogo} />
      </Link>
      <div className="gap-3 flex items-center">
        <Link className="text-2xl text-white" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
}
