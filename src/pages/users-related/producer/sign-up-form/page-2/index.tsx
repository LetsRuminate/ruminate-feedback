// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeInactive from "@assets/registration/progress-bar-1/step-3/step-3-inactive.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeInactive from "@assets/registration/progress-bar-2/step-3/step-3-inactive.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// React-icons
import { IoIosRadioButtonOff } from "react-icons/io";
import { IoRadioButtonOn } from "react-icons/io5";

const options = [
  "Baked Goods / Breads",
  "Confections / Sweet",
  "Preserved fish and seafood",
  "Salumi (raw, cooked, and cured meats)",
  "Beverages",
  "Jams, Jellies, + Preserves",
  "Pickled goods or ferments",
  "Pantry Items (condiments, sauces)",
  "Cheese",
  "Chocolate",
  "Nuts",
  "Snacks",
  "Other",
];

export default function ProducerPage2() {
  // always pull the windows to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const labelClass = "text-white text-2xl font-manrope font-bold";
  const inputClass = "w-full bg-white rounded-lg px-2 py-2 mt-2";

  // You get to check if the user typed a name of the business.
  // You may also validate the business.
  const [business, setBusiness] = useState("");
  const [businessError, setBusinessError] = useState("");

  const validateBusiness = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setBusinessError("A business name needs to be longer than 2 characters.");
      return false;
    }

    setBusinessError("");
    return true;
  };

  // You get to check if the user typed an address
  // You get to check if the address is valid
  const [address, setAddress] = useState("");
  const [inputError, setInputError] = useState("");

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setInputError("Please enter a valid house address.");
      return false;
    }

    if (!/^\d/.test(value)) {
      setInputError("Please start the address with a number.");
      return false;
    }

    if (!/^\d/.test(value.slice(1))) {
      setInputError("Please enter a valid house address.");
      return false;
    }

    setInputError("");
    return true;
  };

  // You can check if the user has typed information about city
  // You can check if the user has typed only letters in city
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");

  const validateCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setCityError("The name of the city needs to be longer than 2 letters.");
      return false;
    }

    setCityError("");
    return true;

    // It is possible that you might need to add a function that validates the name of the city depending on the region.
  };

  // You can check if the user has typed information about ZIP CODE
  // You can check if the user has typed proper ZIP CODE
  const [zipcode, setZipcode] = useState("");
  const [zipcodeError, setZipcodeError] = useState("");

  const validateZipcode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 5) {
      setZipcodeError(
        "The name of the city needs to be longer than 2 letters."
      );
      return false;
    }

    if (!/^\d+$/.test(value)) {
      setZipcodeError("Zip Code can only be in numbers.");
      return false;
    }

    setZipcodeError("");
    return true;
  };

  // Same for the State
  // You can check if the user has typed information about ZIP CODE
  // You can check if the user has typed proper ZIP CODE
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");

  const validateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setStateError("The name of the state needs to be longer than 2 letters.");
      return false;
    }

    setStateError("");
    return true;

    // It is possible that you might need to add a function that validates the name of the city depending on the region.
  };

  // Same for the region
  // You can check if the user has typed information about ZIP CODE
  // You can check if the user has typed proper ZIP CODE
  const [region, setRegion] = useState("");
  const [regionError, setRegionError] = useState("");

  const validateRegion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setRegionError(
        "The name of the region needs to be longer than 2 letters."
      );
      return false;
    }

    setRegionError("");
    return true;

    // It is possible that you might need to add a function that validates the name of the city depending on the region.
  };

  // You get to check if the user typed a proper website.
  const [website, setWebsite] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  const validateWebsite = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length < 2) {
      setWebsiteError("Please enter a website address.");
      return false;
    }

    if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
      setInputError("Please enter a valid website name");
      return false;
    }

    setWebsiteError("");
    return true;
  };

  // Multiple Selection
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const [checkedOptions, setCheckedOptions] = useState(
    Array(options.length).fill(false)
  );

  const handleOptionClick = (index: number) => {
    const newCheckedOptions = [...checkedOptions];
    newCheckedOptions[index] = !newCheckedOptions[index];
    setCheckedOptions(newCheckedOptions);
  };

  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          YOUR BUSINESS
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-28 items-end py-4">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoActive} alt="Step Two Active" />
          <img src={StepThreeInactive} alt="Step Three Inactive" />
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageTwoActive} alt="Page Two Active" />
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
          <p className="text-white text-sm font-manrope font-normal pl-5">
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
        <img src={Underline} alt="Underline" width={98} className="ml-64" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <form>
          <div className="mb-4">
            <h1 className={labelClass}>Business Name &#42;</h1>
            <input
              name="address"
              type="text"
              className={inputClass}
              value={business}
              onChange={(e) => {
                setBusiness(e.target.value);
                validateBusiness(e);
              }}
              placeholder="i.e. Mama Lee's Chicken"
              required
            />
            {businessError && (
              <p className="mb-8 text-amber-500">{businessError}</p>
            )}
          </div>
          <h1 className={labelClass}>Street Address &#42;</h1>
          <input
            name="address"
            type="text"
            className={inputClass}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              validateInput(e);
            }}
            placeholder="Address 1"
            required
          />
          {inputError && <p className="mb-8 text-amber-500">{inputError}</p>}
          <div className="flex gap-1 items-end mt-4">
            <h4 className={labelClass}>Apartment or Unit Number</h4>
            <span className="text-white text-base font-manrope">
              (optional)
            </span>
          </div>
          <input
            name="address"
            type="text"
            className={inputClass}
            placeholder="Address 2"
          />
          <div className="grid grid-cols-2 gap-5">
            <div className="mt-4">
              <h4 className={labelClass}>City &#42;</h4>
              <input
                name="city"
                type="text"
                className={inputClass}
                value={city}
                placeholder="New York City"
                onChange={(e) => {
                  setCity(e.target.value);
                  validateCity(e);
                }}
                required
              />
              {cityError && <p className="mb-8 text-amber-500">{cityError}</p>}
              <h4 className={`${labelClass} mt-4`}>State &#42;</h4>
              <input
                name="address"
                type="text"
                className={inputClass}
                value={state}
                onChange={(e) => {
                  setState(e.target.value);
                  validateState(e);
                }}
                placeholder="New York"
                required
              />
              {stateError && (
                <p className="mb-8 text-amber-500">{stateError}</p>
              )}
            </div>
            <div className="mt-4">
              <h4 className={labelClass}>ZIP CODE &#42;</h4>
              <input
                name="address"
                type="text"
                className={inputClass}
                value={zipcode}
                onChange={(e) => {
                  setZipcode(e.target.value);
                  validateZipcode(e);
                }}
                placeholder="10001"
                required
              />
              {zipcodeError && (
                <p className="mb-8 text-amber-500">{zipcodeError}</p>
              )}
              <h4 className={`${labelClass} mt-4`}>Region &#42;</h4>
              <input
                name="address"
                type="text"
                className={inputClass}
                value={region}
                onChange={(e) => {
                  setRegion(e.target.value);
                  validateRegion(e);
                }}
                placeholder="New York"
                required
              />
              {regionError && (
                <p className="mb-8 text-amber-500">{regionError}</p>
              )}
            </div>
          </div>
          <h1 className={`${labelClass} mt-4`}>Website &#42;</h1>
          <input
            name="address"
            type="text"
            className={`${inputClass} mb-4`}
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
              validateWebsite(e);
            }}
            placeholder="https://"
            required
          />
          {websiteError && (
            <p className="mb-8 text-amber-500">{websiteError}</p>
          )}
        </form>
        <section>
          <div className="mt-8">
            <h3 className={inputTitle}>What types of products do you sell?</h3>
            <span className="text-base text-white font-manrope font-normal">
              (Select all that apply)
            </span>
          </div>
          <div className="mt-4">
            {options.map((option, index) => (
              <div key={index} onClick={() => handleOptionClick(index)}>
                {checkedOptions[index] ? (
                  <>
                    <div className="flex gap-2 items-center my-5">
                      <IoRadioButtonOn className="text-white rounded text-xl -ml-1" />
                      <span className="text-white text-base font-manrope font-normal">
                        {option}
                      </span>
                    </div>
                    {index === options.length - 1 && (
                      <input type="text" className={inputField} />
                    )}
                  </>
                ) : (
                  <div className="flex gap-2 items-center my-5">
                    <IoIosRadioButtonOff className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      {option}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <div className="mt-9">
          <Link to="/producer-page-1">
            <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
              Previous
            </button>
          </Link>
          <Link to="/producer-page-3">
            <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
