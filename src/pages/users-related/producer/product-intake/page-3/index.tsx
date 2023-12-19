// Default Stage
// The Sandwich
import StepOneActive from "@assets/registration/progress-bar-1/step-1/step-1-active.svg";
import StepTwoActive from "@assets/registration/progress-bar-1/step-2/step-2-active.svg";
import StepThreeActive from "@assets/registration/progress-bar-1/step-3/step-3-active.svg";
import StepFourInactive from "@assets/registration/progress-bar-1/step-4/step-4-inactive.svg";
import StepFiveInactive from "@assets/registration/progress-bar-1/step-5/step-5-inactive.svg";
// The Number Progress
import PageOneActive from "@assets/registration/progress-bar-2/step-1/step-1-active.svg";
import PageTwoActive from "@assets/registration/progress-bar-2/step-2/step-2-active.svg";
import PageThreeActive from "@assets/registration/progress-bar-2/step-3/step-3-active.svg";
import PageFourInactive from "@assets/registration/progress-bar-2/step-4/step-4-inactive.svg";
import PageFiveInactive from "@assets/registration/progress-bar-2/step-5/step-5-inactive.svg";

import Connector from "@assets/registration/progress-bar-2/progress-bar-connector/inactive.svg";
import ConnectorActive from "@assets/registration/progress-bar-2/progress-bar-connector/active.svg";

import Underline from "@assets/registration/progress-underline/underline.svg";
import { Link } from "react-router-dom";
import Certificate from "./certification-type";
import { useEffect } from "react";

export default function ProductPage3() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          PRODUCT VALUES
        </h1>
        <div className="flex justify-between px-32 items-end py-7">
          <img src={StepOneActive} alt="Step One Active" />
          <img src={StepTwoActive} alt="Step Two Active" />
          <img src={StepThreeActive} alt="Step Three Active" />
          <img src={StepFourInactive} alt="Step Four Inactive" />
          <img src={StepFiveInactive} alt="Step Five Inactive" />
        </div>
        {/* the below is for the number progress bar */}
        <div className="flex justify-center pb-3">
          <img src={PageOneActive} alt="Page One Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageTwoActive} alt="Page Two Active" />
          <img src={ConnectorActive} alt="Connector" />
          <img src={PageThreeActive} alt="Page Three Active" />
          <img src={Connector} alt="Connector" />
          <img src={PageFourInactive} alt="Page Four Inactive" />
          <img src={Connector} alt="Connector" />
          <img src={PageFiveInactive} alt="Page Five Inactive" />
        </div>
        <div className="flex justify-between px-32">
          <p className="text-white text-sm font-manrope font-normal -ml-3">
            Product Detail
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-4">
            Your Goal
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-5">
            Product Value
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Communication
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal pl-2">
            Completed
          </p>
        </div>
        <img src={Underline} alt="Underline" width={98} className="mx-auto" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-48 py-20">
        <Certificate />
        <div className="mt-9">
          <h3 className={inputTitle}>
            Are there any other ethical, equitable, and/or environmentally
            sustainable practices involved in the production of this particular
            product other than the traits listed above?
          </h3>
          <textarea name="describe" className={inputField}></textarea>
        </div>
        <div className="justify-between flex items-center mt-12">
          <div>
            <Link to="/product-intake-2">
              <button
                className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5"
                type="button"
              >
                Previous
              </button>
            </Link>
            <Link to="/product-intake-4">
              <button
                className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl"
                type="button"
              >
                Next
              </button>
            </Link>
          </div>
          <button className="text-white" type="button">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
}
