import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

import { IoIosRadioButtonOff } from "react-icons/io";
import { IoRadioButtonOn } from "react-icons/io5";
import { Link } from "react-router-dom";



function TestForm() {
  const { register, handleSubmit } = useForm();

  const labelClass = "text-white text-2xl font-manrope font-bold";
  const inputClass = "w-full bg-white rounded-lg px-2 py-2 mt-2";
  
  // Related to the content
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

  // handleInputChange(e);
};
const validateFullName = (name: string) => {
  const names = name.split(" ");

  const firstName = names[0];
  const lastName = names.slice(1).join(" ");
  const fullName = firstName + " " + lastName;

  if (names.length < 2 || !fullName || lastName.trim().length === 0) {
    setFullNameError("Please provide both first and last name.");
    return false;
  }

  setFullNameError("");
  return fullName;
};

// ======================================================================
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
    return true;
  };
// ===========================================================================
  // Related to Password
  const [password, setPassword] = useState<string>("");
  const [isPasswordFilled, setIsPasswordFilled] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length >= 8) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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
  };

  function isAlphaNumeric(char: string) {
    return char.match(/[a-zA-Z0-9]/) ? true : false;
  }

  // Validating to see if the password matches
  const [passwordError, setPasswordError] = useState<string>();
  const handlePasswordFilled = (value: string, confirmPassword: string) => {
    if (value.length > 0 && !isPasswordFilled) {
      setIsPasswordFilled(true);
    }

    if (isPasswordFilled) {
      if (value.length >= 8) {
        setShowWarning(false);
      } else {
        setShowWarning(true);
      }
    }

    if (password === confirmPassword) {
      setPasswordError("");
    } else {
      setPasswordError("Please check your password");
    }
  };

  // For Pronoun
  const [pronouns, setPronouns] = useState<string>("");
  const handlePronounChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPronouns(value);
    // handleInputChange(e);
  };

    // Years of Experience
    const inputTitle = "text-white text-xl font-manrope font-bold";
    const options = [">2", "2 ~ 5", "5 ~ 10", "10 ~ 20", "21+"];
  
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const handleClick = (index: number) => {
      setSelectedOption(index === selectedOption ? null : index);
    };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          ABOUT YOU
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-28 items-end py-4">
        <img src={StepOneActive} alt="Step One Inactive" />
        <img src={StepTwoInactive} alt="Step Two Inactive" />
        <img src={StepThreeInactive} alt="Step Three Inactive" />
        <img src={StepFourInactive} alt="Step Four Inactive" />
        <img src={StepFiveInactive} alt="Step Five Inactive" />
      </div>
      {/* the below is for the number progress bar */}
      <div className="flex justify-center pb-3">
        <img src={PageOneActive} alt="Page One Inactive" />
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
          About You
          </p>
        <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-5">
          Your Business
        </p>
        <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-5">
          Your Values
        </p>
        <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
          How You Found Us
        </p>
        <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
          Completed
        </p>
      </div>
      <img src={Underline} alt="Underline" width={98} className="ml-28" />
    </div>
    <div className="border border-white mx-auto w-[874px] px-48 py-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Name" className={labelClass}>
            Name &#42;
            </label>
          </div>
          <div className="mb-4">
          <input
           {...register("name")}
           placeholder="Type your full name"
           name="name"
           type="text"
           className={inputClass}
           value={fullName}
           onChange={handleFullNameChange}
           required
        />
            {fullNameError && <p className="text-amber-500">{fullNameError}</p>}
        </div>
        <div>
        <label htmlFor="Email" className={labelClass}>
        Email &#42;
        </label>
        </div>
        <div className="mb-4">
          <input {...register("email")}  name="email"
              autoComplete="username"
              type="text"
              placeholder="i.e. ruminate@ruminate.com"
              className={inputClass}
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
        <label htmlFor="Password" className={labelClass}>
        Create Password &#42;
            </label>
            </div>
            <div className="mb-4">
          <input
            {...register("password")}
            name="password"
              autoComplete="new-password"
              type="password"
              placeholder="**********"
              className={inputClass}
              value={password}
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

        <div className="mb-4">
        <div>
        <label htmlFor="Password" className={labelClass}>
                Confirm Password
              </label>
              </div>
            <input
           name="confirmPassword"
           autoComplete="new-password"
           type="password"
           placeholder="**********"
           className={inputClass}
           value={confirmPassword}
           onChange={(e) => {
             setConfirmPassword(e.target.value);
             handlePasswordFilled(password, e.target.value);
           }}
           required
          />
            {passwordError && (
              <p className="text-amber-500">Please check your password.</p>
            )}
        </div>
        <div>
            <label htmlFor="text" className={labelClass}>
              Preferred Pronouns &#42;
            </label>
          </div>
          <input
            {...register("pronouns")}
            name="pronouns"
            type="text"
            placeholder="him/her"
            className={inputClass}
            value={pronouns}
            onChange={handlePronounChange}
            required
          />
        <div>
          <h3 className={`${inputTitle} mt-4 mb-2`}>Years in the Industry</h3>
           {options.map((option, index) => (
            <div key={index} onClick={() => handleClick(index)}>
              {selectedOption === index ? (
                <div className="flex gap-1 items-center my-2 -ml-1">
                  <IoRadioButtonOn className="text-white rounded text-2xl" {...register("yearsInIndustry")} value={selectedOption}/>
                  <span className="text-white text-base font-manrope font-normal">
                    {option}
                  </span>
                </div>
              ) : (
                <div className="flex gap-2 items-center mb-4">
                  <IoIosRadioButtonOff className="text-white rounded" />
                  <span className="text-white text-base font-manrope font-normal">
                    {option}
                  </span>
                </div>
              )}
            </div>
          ))}
         {/*  <label>
            <div className="flex gap-1 items-center my-2 -ml-1">
            <input type="hidden" value=">2" {...register("yearsInIndustry")} />
            <IoRadioButtonOn value=">2" className="text-white rounded text-2xl" />
            <span className="text-white text-base font-manrope font-normal">
            {`>2`}
            </span>
            </div>
          </label>
          <label>
            <div>
            <input type="radio" value="2 ~ 5" {...register("yearsInIndustry")} />
            {`2 ~ 5`}
            </div>
          </label>
          <label>
            <div>
            <input type="radio" value="5 ~ 10" {...register("yearsInIndustry")} />
            {`5 ~ 10`}
            </div>
          </label>
          <label>
            <div>
            <input type="radio" value="10 ~ 20" {...register("yearsInIndustry")} />
            {`10 ~ 20`}
            </div>
          </label>
          <label>
            <div>
            <input type="radio" value="21+" {...register("yearsInIndustry")} />
            {`21+`}
            </div>
          </label> */}




        </div>

        <div className="mt-9">
          <Link to="/producer-default">
            <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
              Previous
            </button>
          </Link>
          <Link to="/producer-page-2">
            <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
              Next
            </button>
          </Link>
        </div>


        <input type="submit" />

      </form>
      </div>
    </div>
  );
}

export default TestForm;
