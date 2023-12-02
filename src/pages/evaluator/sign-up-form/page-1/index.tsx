// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoInactive from "@assets/registration/progress-bar-1/step-2/step-2-inactive.svg";
import StepThreeInactive from "@assets/registration/progress-bar-1/step-3/step-3-inactive.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoInactive from "@assets/registration/progress-bar-2/step-2/step-2-inactive.svg";
import PageThreeInactive from "@assets/registration/progress-bar-2/step-3/step-3-inactive.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function EvaluatorPage1() {
  const [input, setInput] = useState<string>("");
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const [showWarning2, setShowWarning2] = useState<boolean>(false);

  const [fullName, setFullName] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<string>("");

  // Related to Names
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFullName(value);

    const validatedFullName = validateFullName(value);
    if (validatedFullName) {
      setFullName(validatedFullName);
    }
    updateNextButtonState();
  };

  const validateFullName = (name: string) => {
    const names = name.split(" ");

    const firstName = names[0];
    const lastName = names[1];
    const fullName = firstName + " " + lastName;

    if (names.length < 2) {
      setFullNameError("Please provide both first and last name.");
      return false;
    }

    setFullNameError("");
    return fullName;
  };

  // Related to Password
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.length >= 8) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
    updateNextButtonState();
  };

  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    let numSpecials = 0;

    for (let i = 0; i < value.length; i++) {
      const char = value[i];
      if (!isAlphaNumeric(char)) {
        numSpecials++;
      }
    }

    if (numSpecials >= 2) {
      setShowWarning2(false);
    } else {
      setShowWarning2(true);
    }
    updateNextButtonState();
  };

  function isAlphaNumeric(char: string) {
    return char.match(/[a-zA-Z0-9]/) ? true : false;
  }

  // Validating Email

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    const parts = email.split("@");
    if (parts.length !== 2) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    const username = parts[0];
    const domain = parts[1];

    if (!username || !domain) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    const domainParts = domain.split(".");
    if (domainParts.length !== 2) {
      setEmailError("Please enter a valid email address");
      return false;
    }

    setEmailError("");
    updateNextButtonState();
    return true;
  };

  // Validating to see if the password matches
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const password = input;
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
    const passwordMatch = checkPasswordMatch(password, confirmPassword);

    if (passwordMatch) {
      setPasswordError("");
    } else {
      setPasswordError("Please check your password");
    }
    updateNextButtonState();
  };

  function checkPasswordMatch(password: string, confirmPassword: string) {
    if (password === confirmPassword) {
      return true;
    }
    return false;
  }

  // Disable the Next Button until all the input fields are filled out
  // I need to come back to this code to make sure this works.
  const [, setIsNextButtonDisabled] = useState<boolean>(true);
  const updateNextButtonState = () => {
    // Check all validation conditions and update the state accordingly
    const isValid =
      validateFullName(fullName) &&
      validateEmail() &&
      !showWarning &&
      !showWarning2 &&
      !passwordError &&
      checkPasswordMatch(input, confirmPassword);

    setIsNextButtonDisabled(!isValid);
  };

  return (
    <div className="py-20 bg-[#345EC9] overflow-x-scroll">
      <div className="border border-white md:w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          EVALUATOR SIGN UP
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-32 items-end py-7">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoInactive} alt="Step Two Inactive" />
          <img src={StepThreeInactive} alt="Step Three Inactive" />
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={Connector} alt="Connector" />
          <img src={PageTwoInactive} alt="Page Two Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageThreeInactive} alt="Page Three Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFourInactive} alt="Page Four Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFiveInactive} alt="Page Five Inactive" />
        </div>
        <div className="flex justify-between px-32">
          <p className="text-white text-sm font-manrope font-normal">
            Personal Info
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal">
            Professional Info
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal">
            Qualifications
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Contact & Shipment
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
        <img src={Underline} alt="Underline" width={98} className="ml-28" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-14 pt-14 pb-20">
        <form>
          <div>
            <label
              htmlFor="Name"
              className="text-white text-2xl font-manrope font-bold"
            >
              Name &#42;
            </label>
          </div>
          <div className="mb-4">
            <input
              name="name"
              id="nameField"
              type="text"
              placeholder="Type your full name"
              className="w-full bg-transparent border-b-2 border-white text-white"
              value={fullName}
              onChange={handleFullNameChange}
              required
            />
            {fullNameError && <p className="text-amber-500">{fullNameError}</p>}
          </div>
          <div>
            <label
              htmlFor="Email"
              className="text-white text-2xl font-manrope font-bold"
            >
              Email &#42;
            </label>
          </div>
          <div className="mb-4">
            <input
              name="email"
              autoComplete="username"
              type="text"
              placeholder="i.e. ruminate@ruminate.com"
              className="w-full bg-transparent border-b-2 border-white text-white"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail();
              }}
              required
            />
            {emailError && <p className="mb-8 text-amber-500">{emailError}</p>}
          </div>
          <div>
            <label
              htmlFor="Password"
              className="text-white text-2xl font-manrope font-bold"
            >
              Create Password &#42;
            </label>
          </div>
          <div className="mb-8">
            <input
              name="password"
              autoComplete="new-password"
              type="password"
              placeholder="**********"
              className="w-full bg-transparent border-b-2 border-white text-white"
              value={input}
              onChange={(e) => {
                handleChange(e);
                handleChange2(e);
              }}
            />
            {showWarning && (
              <p className="text-amber-500">
                Password needs to be more than 8 characters long
              </p>
            )}
            {showWarning2 && (
              <p className="text-amber-500">
                Password should have at least 2 of special characters (i.e.
                !@%#&)
              </p>
            )}
          </div>
          <div className="mb-8">
            <div>
              <label
                htmlFor="Password"
                className="text-white text-2xl font-manrope font-bold"
              >
                Confirm Password
              </label>
            </div>
            <input
              name="password"
              autoComplete="new-password"
              type="password"
              className="w-full bg-transparent border-b-2 border-white text-white"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e)}
              required
            />
            {passwordError && (
              <p className="text-amber-500">Please check your password.</p>
            )}
          </div>
          <div>
            <label
              htmlFor="text"
              className="text-white text-2xl font-manrope font-bold"
            >
              Preferred Pronouns &#42;
            </label>
          </div>
          <input
            name="pronoun"
            type="text"
            placeholder="him/her"
            className="w-full bg-transparent border-b-2 border-white mb-8 text-white"
            required
          />
        </form>
        <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
          <Link to="/evaluator-default">Previous</Link>
        </button>
        <Link to="/evaluator-page-2">
          <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
