import BrandLogo from "@assets/brand/brand-logo.svg";
import Profile from "@components/user-profile";
import { Link, useLocation } from "react-router-dom";

export default function Navbar2() {
  const user = {
    photoURL: "url-to-user-photo",
    displayName: "User Display Name",
    userRole: "User Role",
  };

  const location = useLocation();

  const isProducerDashboard = location.pathname.startsWith("/producer");
  const isEvaluatorDashboard = location.pathname.startsWith("/evaluator");

  return (
    <div className="bg-[#D9D9D9] h-full">
      <header>
        <Link to="/">
          <img alt="Feedback logo" src={BrandLogo} className="shrink-0" />
        </Link>
        <Profile user={user} />
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
