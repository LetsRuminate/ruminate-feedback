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

export default function ProducerNav() {
  // Dashboard button CSS
  const dashboardButton =
    "px-4 py-4 my-1 text-xl font-manrope font-bold w-full";
  const dashboardButtonActive =
    "px-4 py-4 my-1 text-xl font-manrope font-bold w-full bg-[#BBB3B3] rounded-xl";
  // Producer Dashboard only
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(false);
  const [product, setProduct] = useState(false);
  const [pricing, setPricing] = useState(false);

  // Common Buttons
  const [message, setMessage] = useState(false);
  const [help, setHelp] = useState(false);

  const clicked = (buttonType: string) => {
    if (buttonType === "dashboard") {
      setDashboard(true);
      navigate("/producer");
      setProduct(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "product") {
      setProduct(true);
      navigate("/product-default");
      setDashboard(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "pricing") {
      setPricing(true);
      navigate("/producer-pricing");
      setDashboard(false);
      setProduct(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "message") {
      setMessage(true);
      navigate("/producer-message");
      setDashboard(false);
      setProduct(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
    } else if (buttonType === "help") {
      setHelp(true);
      navigate("/producer-help");
      setDashboard(false);
      setProduct(false);
      setPricing(false);
      setMessage(false);
    }
  };

  return (
    <div className="bg-[#D9D9D9] px-5">
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
        <div className={product ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("product")}>
            <p>Product Evaluation</p>
          </button>
        </div>
        <div className={pricing ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("pricing")}>
            <p>Pricing Plans</p>
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
      <footer className="mt-2 mb-10 overflow-y-scroll">
        <button
          onClick={signOutUser}
          className="text-xl text-left font-manrope font-bold w-full pl-4"
        >
          Logout
        </button>
      </footer>
    </div>
  );
}
