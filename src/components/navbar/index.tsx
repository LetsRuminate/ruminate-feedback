import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";
import BrandLogo from "@assets/images/brand-logo.svg";

export default function NavBar() {
  const getDashboardRoute = (
    role: "admin" | "producer" | "evaluator" | null,
  ) => {
    if (role) {
      return role;
    }
    // XXX
    // somehow we got a user with "null" role...what should we do?
    return "login";
  };

  const user = useContext(UserContext);

  const navStyle =
    "bg-brand-green w-full h-[86px] flex justify-between items-center px-10";

  if (user) {
    return (
      <nav className={navStyle}>
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} />
        </Link>
        <div className="gap-3 flex items-center">
          <Link
            className="text-2xl text-white"
            to={`/${getDashboardRoute(user.role)}`}
          >
            My Dashboard
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navStyle}>
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
