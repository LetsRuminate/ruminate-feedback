import GoogleSigninButton from "@components/google-signin-button";

export default function LoginPage() {
  return (
    <div className="text-neutral-50 bg-brand-blue min-h-[500px] p-16 flex flex-col items-start gap-4">
      <h1 className="text-2xl">Login with Email &amp; Password</h1>
      <form className="flex flex-col gap-4 items-start">
        <label className="flex flex-col gap-2 items-start" htmlFor="email">
          Email
          <input id="email" type="email" />
        </label>
        <label className="flex flex-col gap-2 items-start" htmlFor="pass">
          Password
          <input id="pass" type="password" />
        </label>
        <button className="p-2 bg-brand-yellow text-brand-black" type="button">
          Login
        </button>
      </form>
      <h1 className="text-2xl">Or</h1>
      <GoogleSigninButton />
    </div>
  );
}
