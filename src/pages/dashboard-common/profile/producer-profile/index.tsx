import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "@contexts/UserContext";

import { MdOutlineModeEdit } from "react-icons/md";

export default function ProducerProfile() {
  const user = useContext(UserContext);
  return (
    <div className="text-brand-black pb-8 flex-1">
      <div className="my-4 px-20">
        <Link to="/producer">
          <button>Dashboard</button>
        </Link>{" "}
        &gt; <span className="font-semibold">Profile</span>
      </div>
      <div className="border-t border-[#D9D9D9] px-20">
        <h1 className="text-5xl pt-6 font-manrope font-bold">
          Hello {user && user.name ? user.name : "Producer"}!
        </h1>
        <span className="text-xl font-manrope font-bold">
          Here is your Producer Profile
        </span>
        <h2 className="mt-20 mb-5 text-4xl p-3 font-manrope font-medium border-b border-black">
          Profile
        </h2>
        <div className="flex gap-2 p-3 items-center mb-5">
          <h3 className="font-bold">Personal Information</h3>
          <div className="flex gap-1 items-center">
            <MdOutlineModeEdit />
            <button className="underline">Edit</button>
          </div>
        </div>
        <div className="flex grid-cols-2 justify-between items-center px-4">
          <form>
            <label>Name</label>
            <br />
            <label>Role</label>
            <br />
            <label>Preferred Pronoun</label>
            <br />
            <label>Email</label>
            <br />
            <label>Password</label>
            <br />
            <label>Address</label>
          </form>
          <div>
            <p>
              More information about your account detail will appear here once
              the producer fills out the Producer Sign Up form.
            </p>
          </div>
        </div>
        <div className="flex gap-2 p-3 items-center mt-20 mb-5">
          <h3 className="font-bold">Professional Information</h3>
          <div className="flex gap-1 items-center">
            <MdOutlineModeEdit />
            <button className="underline">Edit</button>
          </div>
        </div>
        <div className="flex grid-cols-2 justify-between items-center px-4">
          <form>
            <label>Company</label>
            <br />
            <label>Industry Sector</label>
            <br />
            <label>Certification</label>
            <br />
            <label>Products I sell</label>
            <br />
            <label>Professional Values</label>
          </form>
          <div>
            <p>
              More information about your account detail will appear here once
              the producer fills out the Producer Sign Up form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
