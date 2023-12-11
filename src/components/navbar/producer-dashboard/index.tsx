// Firebase Authentication
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";

// Local Imports
import BrandLogoBlack from "@assets/brand/brand-logo-black.svg";
import Profile from "@components/user-profile";
import { NavLink } from "react-router-dom";
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
  // Producer Dashboard only
  const [dashboard, setDashboard] = useState(false);
  const handleDashboard = () => {
    setDashboard(true);
  };

  const [product, setProduct] = useState(false);
  const handleProduct = () => {
    setProduct(true);
  };

  // Common Buttons
  const [message, setMessage] = useState(false);
  const handleMessage = () => {
    setMessage(true);
  };

  const [help, setHelp] = useState(false);
  const handleHelp = () => {
    setHelp(true);
  };

  const [faq, setFAQ] = useState(false);
  const handleFAQ = () => {
    setFAQ(true);
  };
  return (
    <div>
      <header>
        <img
          alt="Feedback logo"
          src={BrandLogoBlack}
          className="shrink-0 mx-auto mt-10 text-black"
        />
        <Profile user={userProfile} />
        <div>
          <NavLink
            to="/producer"
            className={
              dashboard
                ? "px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
            onClick={handleDashboard}
          >
            {/* <button
              className="px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold"
              onClick={handleDashboard}
            >
              Dashboard
            </button>
            {dashboard && (
              <button className="px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold">
                Dashboard
              </button>
            )} */}
            Dashboard
          </NavLink>
        </div>
      </header>
      {/* For buttons that are Producer-Only */}
      <section>
        <div>
          <NavLink
            to="/product-default"
            className={
              product
                ? "px-7 py-5 my-1 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                : "px-7 py-5 my-1 rounded-xl mx-auto text-xl font-manrope font-bold"
            }
            onClick={handleProduct}
          >
            Product Evaluation
          </NavLink>
        </div>
      </section>
      {/* ================================================================================= */}
      {/* Icons that are common for Dashboards here */}
      <section>
        <div>
          <NavLink to="/messages">
            {message ? (
              <button
                className="px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                onClick={handleMessage}
              >
                Messages
              </button>
            ) : (
              <button className="px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold">
                Messages
              </button>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/help">
            {help ? (
              <button
                className="px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                onClick={handleHelp}
              >
                Help
              </button>
            ) : (
              <button className="px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold">
                Help
              </button>
            )}
          </NavLink>
        </div>
        <div>
          <NavLink to="/help">
            {faq ? (
              <button
                className="px-7 py-5 bg-[#BBB3B3] rounded-xl mx-auto text-xl font-manrope font-bold"
                onClick={handleFAQ}
              >
                FAQ
              </button>
            ) : (
              <button className="px-7 py-5 rounded-xl mx-auto text-xl font-manrope font-bold">
                FAQ
              </button>
            )}
          </NavLink>
        </div>
      </section>
      <footer>
        <button onClick={signOutUser}>Logout</button>
      </footer>
    </div>
  );
}
