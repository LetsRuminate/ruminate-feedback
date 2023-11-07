import { useReducer } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@components/api/firebase";
import GoogleSigninButton from "@components/google-signin-button";

interface Action {
  type: "changeEmail" | "changePassword";
  value: string;
}

interface LoginInfo {
  email: string;
  password: string;
}

function loginReducer(loginInfo: LoginInfo, action: Action) {
  switch (action.type) {
    case "changeEmail":
      return { ...loginInfo, email: action.value };
    case "changePassword":
      return { ...loginInfo, password: action.value };
    default:
      throw Error(`unknown action: ${action.type}`);
  }
}

export default function LoginPage() {
  const initialLoginState = {
    email: "",
    password: "",
  };

  const [loginInfo, dispatchLogininfo] = useReducer(
    loginReducer,
    initialLoginState,
  );

  const changeLoginEmail = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    dispatchLogininfo({
      type: "changeEmail",
      value: target.value,
    });
  };

  const changeLoginPassword = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    dispatchLogininfo({
      type: "changePassword",
      value: target.value,
    });
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password,
      );
    } catch (err) {
      // XXX
      // Handle better
      console.error(err);
    }
  };

  return (
    // XXX
    // Placeholder front-end styling just to test backend functionality
    <div className="text-neutral-50 bg-brand-blue min-h-[500px] p-16 flex flex-col items-start gap-4">
      <h1 className="text-2xl">Login with Email &amp; Password</h1>
      <form className="flex flex-col gap-4 items-start">
        <label className="flex flex-col gap-2 items-start" htmlFor="email">
          Email
          <input
            className="text-brand-black p-1"
            id="email"
            onChange={changeLoginEmail}
            type="email"
            value={loginInfo.email || ""}
          />
        </label>
        <label className="flex flex-col gap-2 items-start" htmlFor="pass">
          Password
          <input
            className="text-brand-black p-1"
            id="pass"
            onChange={changeLoginPassword}
            type="password"
            value={loginInfo.password || ""}
          />
        </label>
        <button
          className="p-2 bg-brand-yellow text-brand-black"
          onClick={login}
          type="button"
        >
          Login
        </button>
      </form>
      <h1 className="text-2xl">Or</h1>
      <GoogleSigninButton />
    </div>
  );
}
