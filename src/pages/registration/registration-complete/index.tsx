import { Link } from "react-router-dom";

export default function ThankYou() {
    return (
        <div className="py-9">
            <h1 className="text-center text-5xl font-manrope py-10">
                Thank you for signing up!
            </h1>
            <div className="text-center mb-10">
            <button className="text-white bg-blue-500 rounded-3xl py-5 px-6"><Link to="/">Go Back to Home</Link></button>
            </div>
        </div>
    );
}