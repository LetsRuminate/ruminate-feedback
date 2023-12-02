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

export default function EvaluatorPage4() {
  return (
    <div className="py-20 bg-[#345EC9]">
      <div className="border border-white w-[874px] py-8 mx-auto">
        <h1 className="text-white text-5xl font-manrope font-bold text-center">
          EVALUATOR SIGN UP
        </h1>
        {/* the below is for the sandwich */}
        <div className="flex justify-between px-32 items-end py-7">
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
            Personal Info
          </p>
          <p className="text-white text-sm font-manrope font-normal">
            Professional Info
          </p>
          <p className="text-white text-sm font-manrope font-normal">
            Qualifications
          </p>
          <p className="text-white text-sm font-manrope font-normal pl-2">
            Contact & Shipment
          </p>
          <p className="text-[#ffffff80] text-sm font-manrope font-normal -mr-2">
            Completed
          </p>
        </div>
        <div className="flex justify-end mr-60">
          <img src={Underline} alt="Underline" width={98} />
        </div>
      </div>
      <div className="border border-white mx-auto w-[874px] px-14 py-14">
        <form>
          <h4 className="text-white text-2xl font-manrope font-bold pb-8">
            This is the address that will be used for product shipment. We will
            always reach out to re-confirm your shipping address prior to each
            evaluation!
          </h4>
          <h1 className="text-white text-xl font-manrope font-bold pb-4">
            Street Address &#42;
          </h1>
          <input
            name="address"
            type="text"
            className="w-full bg-transparent text-white border-b border-white"
            placeholder="Address 1"
            required
          />
          <div className="flex gap-1">
            <h4 className="text-white text-xl font-manrope font-bold py-4">
              Apartment or Unit Number
            </h4>
            <span className="text-white text-base font-manrope pt-5">
              (optional)
            </span>
          </div>
          <input
            name="address"
            type="text"
            className="w-full bg-transparent text-white border-b border-white"
            placeholder="Address 2"
          />
          <div className="grid grid-cols-2 gap-5">
            <div>
              <h4 className="text-white text-xl font-manrope font-bold py-4">
                City &#42;
              </h4>
              <input
                name="address"
                type="text"
                className="w-full bg-transparent text-white border-b border-white"
                placeholder="New York City"
                required
              />
              <h4 className="text-white text-xl font-manrope font-bold py-4">
                State &#42;
              </h4>
              <input
                name="address"
                type="text"
                className="w-full bg-transparent text-white border-b border-white"
                placeholder="New York"
                required
              />
            </div>
            <div>
              <h4 className="text-white text-xl font-manrope font-bold py-4">
                ZIP CODE &#42;
              </h4>
              <input
                name="address"
                type="text"
                className="w-full bg-transparent text-white border-b border-white"
                placeholder="10001"
                required
              />
              <h4 className="text-white text-xl font-manrope font-bold py-4">
                Region &#42;
              </h4>
              <input
                name="address"
                type="text"
                className="w-full bg-transparent text-white border-b border-white mb-8"
                placeholder="New York"
                required
              />
            </div>
          </div>
        </form>
        <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
          <Link to="/evaluator-page-3">Previous</Link>
        </button>
        <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
          <Link to="/evaluator-completed">Next</Link>
        </button>
      </div>
    </div>
  );
}
