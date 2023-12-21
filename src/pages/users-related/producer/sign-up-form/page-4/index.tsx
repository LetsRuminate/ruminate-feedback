// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeActive from "@assets/registration/progress-bar-1/step-3/step-3-active.svg";
import StepFourActive from "@assets/registration/progress-bar-1/step-4/step-4-active.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeActive from "@assets/registration/progress-bar-2/step-3/step-3-active.svg";
import PageFourActive from "@assets/registration/progress-bar-2/step-4/step-4-active.svg";
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
  "A friend told me",
  "Instagram Ad",
  "A shared social media post",
  "Facebook Ad",
  "Instagram post by Ruminate",
  "ACS",
  "Other (if 'other', please describe to us)",
];

export default function ProducerPage4() {
  // always pull the windows to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const labelClass = "text-white text-2xl font-manrope font-bold";
  const inputClass = "w-full bg-white rounded-lg px-2 py-2 mt-2";
  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          HOW YOU FOUND US
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-28 items-end py-4">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoActive} alt="Step Two Active" />
          <img src={StepThreeActive} alt="Step Three Active" />
          <img src={StepFourActive} alt="Step Four Active" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageTwoActive} alt="Page Two Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageThreeActive} alt="Page Three Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageFourActive} alt="Page Four Active" />
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
          <p className="text-white text-sm font-manrope font-normal pl-5">
            Your Values
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-2">
            How You Found Us
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
        <div className="flex justify-end mr-60">
          <img src={Underline} alt="Underline" width={98} />
        </div>
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <section>
          <div className="mt-8">
            <h3 className={inputTitle}>How did you hear about Feedback?</h3>
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
        <section>
          <h1 className={`${labelClass} mt-8`}>
            What do you expect to get from Feedback?
          </h1>
          <textarea
            name="address"
            className={`${inputClass} h-full`}
            placeholder="i.e. I expect..."
          />
        </section>
        <div className="mt-9">
          <Link to="/producer-page-3">
            <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
              Previous
            </button>
          </Link>
          <Link to="/producer-completed">
            <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
