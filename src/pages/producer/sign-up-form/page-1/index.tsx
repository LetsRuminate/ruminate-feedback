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

export default function ProducerPage1() {
  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          PRODUCER SIGN UP
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
      <div className="border border-white mx-auto w-[874px] px-14 py-20">
        <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
          <Link to="/producer-default">Previous</Link>
        </button>
        <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
          <Link to="/producer-page-2">Next</Link>
        </button>
      </div>
    </div>
  );
}
