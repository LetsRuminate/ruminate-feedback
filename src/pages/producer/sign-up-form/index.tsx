import { Link } from "react-router-dom";

export default function ProducerInitial() {
    return (
        <div className="py-20 bg-[#345EC9]">
            <div className="py-8 text-center border-white border w-[874px] mx-auto">
                <h1 className="text-white text-5xl font-manrope font-bold">PRODUCER SIGN UP</h1>
            </div>
            <div className="py-14 px-16 border-white border w-[874px] mx-auto">
                <h1 className="text-white text-2xl font-manrope font-bold mb-6">Taking Your Products to the Next Level</h1>
                <p className="text-white text-base font-manrope font-normal">We will explore your background, your business, and your core values. This information will provide us with a deeper understanding of your profile and business, allowing us to assess compatibility more efficiently. <br/><br/>Click sign up below to get started!</p>
            <button className="bg-white py-3 px-32 text-center rounded-3xl mt-14"><Link to='/producer-page-1'>Sign up</Link></button>
            </div>
            {/*  */}
        </div>
    );
}

