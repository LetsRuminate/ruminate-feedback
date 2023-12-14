// Firebase Authentication
import { signOut } from "firebase/auth";
import { auth } from "@components/api/firebase";

// Local Imports
import BrandLogoBlack from "@assets/brand/brand-logo-black.svg";
import Profile from "@components/user-profile";

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

export default function ProducerUnpaid() {
  const dashboardButton =
    "px-4 py-4 my-1 text-xl font-manrope font-bold text-black opacity-30 w-full";
  return (
    <div className="bg-[#D9D9D9] px-5 overflow-y-scroll">
      <header>
        <img
          alt="Feedback logo"
          src={BrandLogoBlack}
          className="shrink-0 mx-auto my-10 opacity-30"
        />
        <div className="opacity-30">
          <Profile user={userProfile} />
        </div>
        <p className={dashboardButton}>Dashboard</p>
      </header>
      {/* For buttons that are Producer-Only */}
      <section>
        <p className={dashboardButton}>Evaluations</p>
        <p className={dashboardButton}>Payment Settings</p>
      </section>
      {/* ================================================================================= */}
      {/* Icons that are common for Dashboards here */}
      <section>
        <p className={dashboardButton}>Messages</p>
        <div className="mt-10">
          <p className={dashboardButton}>Help / FAQ</p>
          <p className={dashboardButton}>Profile</p>
        </div>
      </section>
      <footer className="mt-2 mb-10">
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
