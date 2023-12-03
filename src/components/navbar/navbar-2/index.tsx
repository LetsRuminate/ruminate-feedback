import BrandLogo from "@assets/brand/brand-logo.svg";
import Profile from "@components/user-profile";
import { Link, useLocation } from "react-router-dom";

// Firebase Authentication
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";

// User Context
import { createContext, useContext } from "react";

type User = "producer" | "evaluator" | "admin";
type UserContextType = {
  role: User | null;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export default function Navbar2() {
  const userProfile = {
    photoURL: "url-to-user-photo",
    displayName: "User Display Name",
    userRole: "User Role",
  };

  const location = useLocation();

  const isProducerDashboard = location.pathname.startsWith("/producer");
  const isEvaluatorDashboard = location.pathname.startsWith("/evaluator");

  const { role } = useUserContext();

  function getDashboardRoute(role: User | null) {
    if (role) {
      return `/${role}`;
    }
    // Handle the case where role is null (if needed)
    return "/";
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

  return (
    <div className="bg-[#D9D9D9] h-full">
      <header>
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
        </Link>
        <Profile user={userProfile} />
        <button
          className={`text-left ${
            isProducerDashboard || isEvaluatorDashboard ? "active" : ""
          }`}
        >
          <Link to={getDashboardRoute(role)}>Dashboard Home</Link>
        </button>
      </header>
      <main className="flex flex-col pl-2">
        {/* buttons for Producer Dashboard here */}
        <button className={`text-left ${isProducerDashboard ? "active" : ""}`}>
          Product Evaluations
        </button>
        <button className={`text-left ${isProducerDashboard ? "active" : ""}`}>
          Pricing Plans
        </button>
        <button className={`text-left ${isProducerDashboard ? "active" : ""}`}>
          Payment Settings
        </button>
        {/* buttons for Evaluator Dashboard here */}
        <button className={`text-left ${isEvaluatorDashboard ? "active" : ""}`}>
          Evaluation
        </button>
        <button className={`text-left ${isEvaluatorDashboard ? "active" : ""}`}>
          Availability
        </button>
        <button className={`text-left ${isEvaluatorDashboard ? "active" : ""}`}>
          Payment History
        </button>
        <button className={`text-left ${isEvaluatorDashboard ? "active" : ""}`}>
          Notifications
        </button>
      </main>
      {/* Stuff for both Producer & Evaluator */}
      <footer className="flex flex-col pl-2">
        <button
          className={`text-left ${
            isProducerDashboard || isEvaluatorDashboard ? "active" : ""
          }`}
        >
          Help / FAQ
        </button>
        <button
          className={`text-left ${
            isProducerDashboard || isEvaluatorDashboard ? "active" : ""
          }`}
          onClick={signOutUser}
          type="button"
        >
          Messages
        </button>
        <button
          className={`text-left ${
            isProducerDashboard || isEvaluatorDashboard ? "active" : ""
          }`}
        >
          Log out
        </button>
      </footer>
    </div>
  );
}
