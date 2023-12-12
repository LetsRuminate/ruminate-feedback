import { useNavigate } from "react-router-dom";

export default function Profile({
  user: { photoURL, displayName, userRole },
}: {
  user: { photoURL: string; displayName: string; userRole: string };
}) {
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
        {displayName}
      </span>
      <p className="hidden md:block text-sm font-manrope font-normal pl-4">
        {userRole}
      </p>
    </div>
  );
}
