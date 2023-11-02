import brandLogo from "../../assets/images/brand-logo.svg";

export default function NavBar() {
  return (
    <nav className="bg-brand-green px-[72px] py-[30px] ">
      <img alt="Feedback logo" src={brandLogo} />
    </nav>
  );
}
