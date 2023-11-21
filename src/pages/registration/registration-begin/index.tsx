import { Link } from "react-router-dom";

export default function Registration() {
    return (
        <div className="py-9 bg-[#345EC9]">
            <h1 className="text-center text-5xl font-manrope text-white py-10">
                I am interested in signing up as....
            </h1>
            <div className="flex gap-40 mt-16 justify-center pb-20">
            <button className="text-white"><Link to="/producer-default">Producer</Link></button>
            <button className="text-white"><Link to='/evaluator-default'>Evaluator</Link></button>
            </div>
        </div>
    );
}

