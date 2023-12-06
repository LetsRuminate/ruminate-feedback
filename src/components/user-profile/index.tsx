export default function Profile({
  user: { photoURL, displayName, userRole },
}: {
  user: { photoURL: string; displayName: string; userRole: string };
}) {
  return (
    <div>
      <img
        src={photoURL}
        alt=""
        className=" bg-gray-400 w-20 h-20 my-5 rounded-full"
        width={20}
        height={20}
      />
      <span className="hidden md:block py-5">{displayName}</span>
      <p>{userRole}</p>
    </div>
  );
}
