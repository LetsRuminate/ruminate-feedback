export default function Profile({
  user: { photoURL, displayName },
}: {
  user: { photoURL: string; displayName: string };
}) {
  return (
    <div className="flex gap-2 items-center">
      <img
        src={photoURL}
        alt={displayName}
        className="rounded-full"
        width={20}
        height={20}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
}
