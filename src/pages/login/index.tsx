import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  const input: string = "";

  return (
    <div className="py-[142px] w-[316px] mx-auto">
      <section>
        <form>
          <h1 className="font-Manrope text-2xl font-normal leading-7 mb-6">
            Log in
          </h1>
          <p className="text-[#344054] text-sm font-medium leading-5 mb-2">
            Email
          </p>
          {input && input.includes("@") ? (
            <input
              type="text"
              placeholder="Email"
              className="mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base text-[#6D778C] border-[#888D95] font-semibold leading-6 border w-full"
            />
          ) : (
            <input
              type="text"
              placeholder="Email"
              className="mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-base border-[#E46D64] text-[#E46D64] font-semibold leading-6 border w-full"
            />
          )}
          <p className="text-[#344054] text-sm font-medium leading-5 mb-2">
            Password
          </p>
          <input
            type="text"
            placeholder="Password"
            className="mb-4 mt-2 pt-2 pb-3 px-4 rounded-lg text-[#6D778C] text-base font-semibold leading-6 border border-[#888D95] w-full"
          />
        </form>
        <button className="text-[#3E5BD1] text-xs underline font-normal leading-7 pb-4">
          Forgot my password
        </button>
      </section>
      <section>
        <button className="text-white text-base text-center font-normal leading-5 rounded-md bg-[#5772DA] px-6 w-full h-8">
          Log in
        </button>
        <p className="text-center py-4">OR</p>
        <div className="border border-[#BE493A] w-full h-8 rounded-md mb-4">
          <button className="gap-1 flex items-center mx-auto text-[#BE493A] text-base font-normal leading-7">
            <FcGoogle />
            Login with Google
          </button>
        </div>
        <p className="text-[#344054] text-xs font-normal leading-7 text-center">
          By using Feedback you agree to the{" "}
          <span className="text-[#0563E0] text-xs font-normal leading-7">
            <Link to="/">Terms of Service</Link>
          </span>{" "}
          and{" "}
          <span className="text-[#0563E0] text-xs font-normal leading-7">
            <Link to="/">Privacy Policy</Link>
          </span>
        </p>
      </section>
    </div>
  );
}
