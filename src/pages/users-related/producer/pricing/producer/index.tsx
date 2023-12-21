import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@contexts/UserContext";
import { MdOutlineModeEdit } from "react-icons/md";

export default function ProducerPricing() {
  const user = useContext(UserContext);
  return (
    <div className="text-brand-black pb-8 flex-1">
      <div className="my-4 px-20">
        <Link to="/producer">
          <button>Dashboard</button>
        </Link>{" "}
        &gt; <span className="font-semibold">Payment Settings</span>
      </div>
      <div className="border-t border-[#D9D9D9] px-20">
        <h1 className="text-5xl py-6 font-manrope font-bold">
          Hello {user && user.name ? user.name : "Producer"}!
        </h1>
        <h2 className="mt-20 mb-5 text-4xl p-3 font-manrope font-medium border-b border-black">
          Payment History
        </h2>
        <div className="justify-between items-center grid-cols-5 flex px-4 font-bold mb-4">
          <h3 className="text-xl font-semibold font-manrope">Product Name</h3>
          <h3 className="text-xl font-semibold font-manrope">Pricing Plan</h3>
          <h3 className="text-xl font-semibold font-manrope">Amount Paid</h3>
          <h3 className="text-xl font-semibold font-manrope">Payment Status</h3>
          <h3 className="text-xl font-semibold font-manrope">Payment Date</h3>
        </div>
        <ul className="px-4">
          <li>Your payment history will appear here.</li>
        </ul>
        <div className="flex gap-2 p-3 border-b border-black items-center mt-20 mb-5">
          <h3 className="text-4xl font-manrope font-medium ">
            Payment Settings
          </h3>
          <div className="flex gap-1 items-center">
            <MdOutlineModeEdit />
            <button>Edit</button>
          </div>
        </div>
        <div className="flex grid-cols-2 justify-between items-center px-4">
          <div>
            <h4>Account Holder Name</h4>
            <h4>Account Number</h4>
            <h4>Routing Number</h4>
            <h4>Account Address</h4>
          </div>
          <div>
            <p>
              More information about your account detail will appear here once
              you make a payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
