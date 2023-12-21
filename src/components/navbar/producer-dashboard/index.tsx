// Firebase Authentication
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";

// Local Imports
import BrandLogoBlack from "@assets/brand/brand-logo-black.svg";
import Profile from "@components/user-profile";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const userProfile = {
  photoURL: "url-to-user-photo",
  displayName: "User Display Name",
  userRole: "User Role",
};

export default function ProducerNav() {
  // Dashboard button CSS
  const dashboardButton =
    "px-4 py-4 my-1 text-xl font-manrope font-bold w-full";
  const dashboardButtonActive =
    "px-4 py-4 my-1 text-xl font-manrope font-bold w-full bg-[#BBB3B3] rounded-xl";
  // Producer Dashboard only
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };

  async function signOutUser() {
    try {
      await signOut(auth);
      handleNavigate();
    } catch (err) {
      // XXX
      // Handle better
      console.error(err);
    }
  }

  const [dashboard, setDashboard] = useState(false);
  const [notification, setNotification] = useState(false);
  const [product, setProduct] = useState(false);
  const [pricing, setPricing] = useState(false);

  // Common Buttons
  const [message, setMessage] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);

  const clicked = (buttonType: string) => {
    if (buttonType === "dashboard") {
      setDashboard(true);
      navigate("/producer");
      setNotification(false);
      setProduct(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
      setProfile(false);
    } else if (buttonType === "product") {
      setProduct(true);
      navigate("/product-default");
      setDashboard(false);
      setNotification(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
      setProfile(false);
    } else if (buttonType === "notification") {
      setNotification(true);
      navigate("/producer-notification");
      setDashboard(false);
      setProduct(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
      setProfile(false);
    } else if (buttonType === "pricing") {
      setPricing(true);
      navigate("/producer-pricing");
      setDashboard(false);
      setProduct(false);
      setNotification(false);
      setMessage(false);
      setHelp(false);
      setProfile(false);
    } else if (buttonType === "message") {
      setMessage(true);
      navigate("/producer-message");
      setDashboard(false);
      setProduct(false);
      setNotification(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
      setProfile(false);
    } else if (buttonType === "help") {
      setHelp(true);
      navigate("/producer-help");
      setDashboard(false);
      setProduct(false);
      setNotification(false);
      setPricing(false);
      setMessage(false);
      setProfile(false);
    } else if (buttonType === "profile") {
      setProfile(true);
      navigate("/producer-profile");
      setDashboard(false);
      setProduct(false);
      setNotification(false);
      setPricing(false);
      setMessage(false);
      setHelp(false);
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
        <div className={product ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("product")}>
            <p>Evaluations</p>
          </button>
        </div>
        <div className={notification ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("notification")}>
            <p>Notification</p>
          </button>
        </div>
        <div className={pricing ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("pricing")}>
            <p>Payment Settings</p>
          </button>
        </div>
      </section>
      {/* ================================================================================= */}
      {/* Icons that are common for Dashboards here */}
      <section>
        <div className={message ? dashboardButtonActive : dashboardButton}>
          <button type="button" onClick={() => clicked("message")}>
            <p>Messages</p>
          </button>
        </div>
        <div className="mt-10">
          <div className={help ? dashboardButtonActive : dashboardButton}>
            <button type="button" onClick={() => clicked("help")}>
              <p>Help / FAQ</p>
            </button>
          </div>
          <div className={profile ? dashboardButtonActive : dashboardButton}>
            <button type="button" onClick={() => clicked("profile")}>
              <p>Profile</p>
            </button>
          </div>
        </div>
      </section>
      <footer className="mt-2 mb-10">
        <Link to="/login">
          <button
            onClick={signOutUser}
            className="text-xl text-left font-manrope font-bold w-full pl-4"
          >
            Logout
          </button>
        </Link>
      </footer>
    </div>
  );
}
