// Firebase Authentication
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";

// Local Imports
import BrandLogoBlack from "@assets/brand/brand-logo-black.svg";
import Profile from "@components/user-profile";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const userProfile = {
  photoURL: "url-to-user-photo",
  displayName: "User Display Name",
  userRole: "User Role",
};

async function signOutUser() {
  try {
    await signOut(auth);
  } catch (err) {
    // XXX
    // Handle better
    console.error(err);
  }
}

export default function EvaluatorNav() {
  // Dashboard button CSS
  const dashboardButton =
    "px-4 py-4 my-1 rounded-xl text-xl font-manrope font-bold w-full";
  const dashboardButtonActive =
    "px-4 py-4 my-1 bg-[#BBB3B3] rounded-xl text-xl font-manrope font-bold w-full";
  // Producer Dashboard only
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(false);
  const [evaluation, setEvaluation] = useState(false);
  const [available, setAvailable] = useState(false);
  const [history, setHistory] = useState(false);

  // Common Buttons
  const [message, setMessage] = useState(false);
  const [help, setHelp] = useState(false);

  const clicked = (buttonType: string) => {
    if (buttonType === "dashboard") {
      setDashboard(true);
      navigate("/evaluator");
      setEvaluation(false);
      setAvailable(false);
      setHistory(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "evaluation") {
      setEvaluation(true);
      navigate("/evaluation-default");
      setDashboard(false);
      setAvailable(false);
      setHistory(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "availabilities") {
      setAvailable(true);
      navigate("/calendar");
      setDashboard(false);
      setHistory(false);
      setEvaluation(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "payment-history") {
      setHistory(true);
      navigate("/evaluator-payment");
      setDashboard(false);
      setEvaluation(false);
      setAvailable(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "message") {
      setMessage(true);
      navigate("/evaluator-message");
      setDashboard(false);
      setEvaluation(false);
      setAvailable(false);
      setHistory(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "help") {
      setHelp(true);
      navigate("/evaluator-help");
      setDashboard(false);
      setEvaluation(false);
      setAvailable(false);
      setHistory(false);
      setMessage(false);
    }
  };

  return (
    <div className="bg-[#D9D9D9] px-5 overflow-y-scroll">
      <header>
        <img
          alt="Feedback logo"
          src={BrandLogoBlack}
          className="shrink-0 mx-auto my-10 text-black"
        />
        <Profile user={userProfile} />
        <div className={dashboard ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("dashboard")}>
            <p>Dashboard</p>
          </button>
        </div>
      </header>
      {/* For buttons that are Producer-Only */}
      <section>
        <div className={evaluation ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("evaluation")}>
            <p>Evaluation</p>
          </button>
        </div>
        <div className={available ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("availabilities")}>
            <p>Availabilities</p>
          </button>
        </div>
        <div className={history ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("payment-history")}>
            <p>Payment History</p>
          </button>
        </div>
      </section>
      {/* ================================================================================= */}
      {/* Icons that are common for Dashboards here */}
      <section className="pt-6">
        <div className={message ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("message")}>
            <p>Messages</p>
          </button>
        </div>
        <div className={help ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("help")}>
            <p>Help / FAQ</p>
          </button>
        </div>
      </section>
      <footer>
        <button
          onClick={signOutUser}
          className="text-xl text-left font-manrope font-bold w-full pl-4 mt-2"
        >
          Logout
        </button>
      </footer>
    </div>
  );
}
