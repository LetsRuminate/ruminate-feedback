 
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/brand-logo.svg";

export default function NavBar() {
  return (
    <nav className="bg-brand-green px-[72px] py-[30px] flex justify-between">
      <div>
        <Link to='/'>
      <img alt="Feedback logo" src={brandLogo} />
      </Link>
      </div>
      <div className="flex gap-5">
        <div>
        <Link to='/admin' className="text-white">Admin</Link>
        </div>
        <div>
        <Link to='/producer' className="text-white">Producer</Link>
        </div>
        <div>
        <Link to='/evaluator' className="text-white">Evaluator</Link>
        </div>
      </div>
    </nav>);
 
}
