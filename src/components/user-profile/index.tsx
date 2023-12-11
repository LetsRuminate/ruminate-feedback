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
        className=" bg-gray-400 w-20 h-20 mt-10 mx-auto rounded-full"
        width={20}
        height={20}
      />
      <span className="hidden md:block pt-3 text-center">{displayName}</span>
      <p className="hidden md:block text-left">{userRole}</p>
    </div>
  );
}
