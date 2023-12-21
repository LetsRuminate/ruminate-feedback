import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@contexts/UserContext";

export default function ProducerNotification() {
  const user = useContext(UserContext);
  return (
    <div className="text-brand-black pb-8 flex-1 px-10">
      <div className="my-4">
        <Link to="/producer">
          <button>Dashboard</button>
        </Link>{" "}
        &gt; <span className="font-semibold">Notification</span>
      </div>
      <div className="border-t border-[#D9D9D9]">
        <h1 className="text-5xl py-6 font-manrope font-bold">
          Hello {user && user.name ? user.name : "Producer"}!
        </h1>
        <h2 className="mt-20 mb-5 text-4xl font-manrope font-medium">
          Your Notifications
        </h2>
        <h3 className="text-xl font-semibold font-manrope border-b border-black w-full">
          Unread
        </h3>
        <ul>
          <li>Any unread notifications will appear here.</li>
        </ul>
        <h3 className="text-xl font-semibold font-manrope border-b border-black w-full mt-28">
          Read
        </h3>
        <ul>
          <li>Once you check notifications, they will appear here.</li>
        </ul>
      </div>
    </div>
  );
}
