import BrandLogo from "@assets/brand/brand-logo.svg";
import Profile from "@components/user-profile";
import { Link, useLocation } from "react-router-dom";

// Firebase Authentication
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";

export default function Navbar2() {
  const userProfile = {
    photoURL: "url-to-user-photo",
    displayName: "User Display Name",
    userRole: "User Role",
  };

  const location = useLocation();

  // For Producer Dashboard
  const isProducerDashboard =
    location.pathname.startsWith("/producer") ||
    location.pathname.startsWith("/product-default") ||
    location.pathname.startsWith("/product-intake-1") ||
    location.pathname.startsWith("/product-intake-2") ||
    location.pathname.startsWith("/product-intake-3") ||
    location.pathname.startsWith("/product-intake-4") ||
    location.pathname.startsWith("/product-completed");

  // For Evaluator Dashboard
  const isEvaluatorDashboard =
    location.pathname.startsWith("/evaluator") ||
    location.pathname.startsWith("/evaluation-default") ||
    location.pathname.startsWith("/evaluation-page-1") ||
    location.pathname.startsWith("/evaluation-page-2") ||
    location.pathname.startsWith("/evaluation-page-3") ||
    location.pathname.startsWith("/evaluation-page-4") ||
    location.pathname.startsWith("/evaluation-completed");

  // For Administrator Dashboard
  const isAdminDashboard = location.pathname.startsWith("/admin");

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
            isProducerDashboard || isEvaluatorDashboard || isAdminDashboard
              ? "active"
              : ""
          }`}
        >
          <Link
            to={
              isAdminDashboard
                ? "/admin"
                : isEvaluatorDashboard
                  ? "/evaluator"
                  : "/producer"
            }
          >
            Dashboard Home
          </Link>
        </button>
      </header>
      <main className="flex flex-col pl-2">
        {/* buttons for Producer Dashboard here */}
        {isProducerDashboard && (
          <>
            <button className="text-left">
              <Link to="/product-default">Product Evaluations</Link>
            </button>
            <button className="text-left">Pricing Plans</button>
            <button className="text-left">Payment Settings</button>
          </>
        )}

        {/* buttons for Evaluator Dashboard here */}
        {isEvaluatorDashboard && (
          <>
            <button className="text-left">
              <Link to="/evaluation-default">Evaluation</Link>
            </button>
            <button className="text-left">Availability</button>
            <button className="text-left">Payment History</button>
            <button className="text-left">Notifications</button>
          </>
        )}
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
            isProducerDashboard || isEvaluatorDashboard || isAdminDashboard
              ? "active"
              : ""
          }`}
          onClick={signOutUser}
          type="button"
        >
          Log out
        </button>
      </footer>
    </div>
  );
}
