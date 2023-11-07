import { useContext } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";
import { UserContext } from "@contexts/UserContext";
import BrandLogo from "@assets/images/brand-logo.svg";

function getDashboardRoute(role: "admin" | "producer" | "evaluator" | null) {
  if (role) {
    return role;
  }
  // XXX
  // somehow we got a user with "null" role...what should we do?
  return "login";
}

async function signOutUser() {
  try {
    await signOut(auth);
  } catch (err) {
    // XXX
    // Handle better
    console.error(err);
  }
}

export default function NavBar() {
  const user = useContext(UserContext);

  const navStyle =
    "bg-brand-green w-full h-[86px] flex justify-between items-center px-10";

  if (user) {
    return (
      <nav className={navStyle}>
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} />
        </Link>
        <div className="text-1xl text-white gap-3 flex items-center">
          <Link to={`/${getDashboardRoute(user.role)}`}>My Dashboard</Link>
          <button onClick={signOutUser} type="button">
            Sign Out
          </button>
        </div>
      </nav>
    );
  }

  return (
    <nav className={navStyle}>
      <Link to="/">
        <img alt="Feedback logo" src={BrandLogo} />
      </Link>
      <div className="text-1xl text-white gap-3 flex items-center">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
