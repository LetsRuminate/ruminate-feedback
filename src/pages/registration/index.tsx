import { Link } from "react-router-dom";

export default function Registration() {
    return (
        <div className="py-96">
            <p>
                This is the page where you can choose what type of user you are.
            </p>
            <button><Link to="/producer-registration">Producer</Link></button>
            {/*  */}
        </div>
    );
}

