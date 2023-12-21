// PLEASE NOTE
// I wanted to utilize this navigation component, but I could not figure out how.

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import BrandLogoBlack from "@assets/brand/brand-logo-black.svg";
import Profile from "@components/user-profile";

// Firebase Authentication
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";

const userProfile = {
  photoURL: "url-to-user-photo",
  displayName: "User Display Name",
  userRole: "User Role",
};

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

interface Navbar2Props {
  role: "Producer" | "Evaluator" | "Administrator";
}

const Navbar2: React.FC<Navbar2Props> = ({ role }) => {
  const [selectedButton, setSelectedButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    signOutUser();
  };

  return (
    <div className="bg-[#D9D9D9] h-full w-72 px-4">
      <div>
        <header>
          <img
            alt="Feedback logo"
            src={BrandLogoBlack}
            className="shrink-0 mx-auto mt-10 text-black"
          />
          <Profile user={userProfile} />
        </header>
        <NavLink
          to="/messages"
          className={
            selectedButton === "messages"
              ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
              : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
          }
        >
          Messages
        </NavLink>
        <NavLink
          to="/help"
          className={
            selectedButton === "help"
              ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
              : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
          }
        >
          Help
        </NavLink>
        <NavLink
          to="/faq"
          className={
            selectedButton === "faq"
              ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
              : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
          }
        >
          FAQ
        </NavLink>
        <button
          onClick={() => handleButtonClick("logout")}
          className={`common-button ${
            selectedButton === "logout"
              ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
              : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
          }`}
        >
          Logout
        </button>
      </div>

      {role === "Producer" && isProducerDashboard && (
        <div className="producer-buttons">
          <NavLink
            to="/product-default"
            className={
              selectedButton === "product-evaluation"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Product Evaluation
          </NavLink>
          <NavLink
            to="#"
            className={
              selectedButton === "pricing-plans"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Pricing Plans
          </NavLink>
          <NavLink
            to="#"
            className={
              selectedButton === "payment-settings"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Payment Settings
          </NavLink>
        </div>
      )}

      {role === "Evaluator" && isEvaluatorDashboard && (
        <div className="evaluator-buttons">
          <NavLink
            to="/evaluation-default"
            className={
              selectedButton === "evaluation"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Evaluation
          </NavLink>
          <NavLink
            to="#"
            className={
              selectedButton === "availabilities"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Availabilities
          </NavLink>
          <NavLink
            to="#"
            className={
              selectedButton === "payment-history"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Payment History
          </NavLink>
          <NavLink
            to="#"
            className={
              selectedButton === "notifications"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Notifications
          </NavLink>
        </div>
      )}

      {role === "Administrator" && isAdminDashboard && (
        <div className="administrator-buttons">
          <NavLink
            to="#"
            className={
              selectedButton === "evaluation-detail"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Evaluation Detail
          </NavLink>
          <NavLink
            to="#"
            className={
              selectedButton === "admin-panel"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Admin Panel
          </NavLink>
          <NavLink
            to="#"
            className={
              selectedButton === "notifications"
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
          >
            Notifications
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
