import notFound from "@assets/not-found/ruminate-notfound.png";

export default function NotFound() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: `url(${notFound})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };
  return (
    <div style={containerStyle}>
      <div style={backgroundImageStyle}>
        {/* Your other content goes here */}
        <p className="text-white text-5xl font-manrope my-96 text-center">
          Oops! Have you got to the right place?
        </p>
      </div>
    </div>
  );
}
