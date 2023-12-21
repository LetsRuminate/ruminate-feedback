import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/UserContext";

export default function Profile({
  user: { photoURL },
}: {
  user: { photoURL: string };
}) {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/producer-profile");
  };

  return (
    <div className="mb-10">
      <div onClick={handleNavigate}>
        <img
          src={photoURL}
          alt=""
          className="bg-gray-400 w-20 h-20 mt-10 mx-auto rounded-full cursor-pointer"
          width={20}
          height={20}
        />
      </div>
      <span className="hidden md:block pt-3 text-xl font-manrope font-bold pl-4">
        {user && user.name ? user.name : "Producer"}
      </span>
      <p className="hidden md:block text-sm font-manrope font-normal pl-4">
        Producer
      </p>
    </div>
  );
}
