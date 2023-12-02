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

// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function EvaluatorPage2() {
  const [selected, setSelected] = useState(0);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }

  function handleClick2() {
    setChecked1(!checked1);
  }

  function handleClick3() {
    setChecked2(!checked2);
  }

  function handleClick4() {
    setChecked3(!checked3);
  }

  function handleClick5() {
    setChecked4(!checked4);
  }

  function handleClick6() {
    setChecked5(!checked5);
  }

  function handleClick7() {
    setChecked6(!checked6);
  }

  // Can anyone please tell me why refactoring the handleClick was not working?
  // const [items, setItems] = useState([
  //   { id: 1, checked: false },
  //   { id: 2, checked: false },
  //   { id: 3, checked: false },
  //   { id: 4, checked: false },
  //   { id: 5, checked: false },
  // ]);

  // function toggleCheck(id: number) {
  //   const newItems = items.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, checked: !item.checked };
  //     }
  //     setItems(newItems);
  //     return item;
  //   });
  // }

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
            Personal Info
          </p>
          <p className="text-white text-sm font-manrope font-normal">
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
        <img src={Underline} alt="Underline" width={98} className="ml-64" />
      </div>
      <div className="border border-white mx-auto w-[874px] px-14 py-20">
        <form>
          <div>
            <h4 className="text-white text-2xl font-manrope font-bold">
              Years working in the specialty food industry &#42;
            </h4>
          </div>
          <div className="flex border-b border-white gap-2 items-center pb-1">
            <select
              value={selected}
              onChange={(e) => setSelected(parseInt(e.target.value))}
              className="bg-[#D9D9D9] px-1 py-1 rounded-lg"
              required
            >
              {[...Array(51)].map((_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, "0")}
                </option>
              ))}
            </select>
            <p className="text-3xl text-white font-manrope font-medium uppercase">
              YEARS
            </p>
          </div>
          <div className="my-8">
            <h4 className="text-white text-2xl font-manrope font-bold">
              What industry sector, within food, do you currently work in? &#42;
            </h4>
            <br />
            <span className="text-white text-sm font-manrope font-medium">
              Select all that apply
            </span>

            <div className="mt-4 grid grid-cols-3 gap-5">
              <div onClick={handleClick}>
                {checked ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Retail
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Retail
                    </span>
                  </div>
                )}
              </div>
              <div onClick={handleClick2}>
                {checked1 ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Consulting
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Consulting
                    </span>
                  </div>
                )}
              </div>
              <div onClick={handleClick3}>
                {checked2 ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Events
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Events
                    </span>
                  </div>
                )}
              </div>
              <div onClick={handleClick4}>
                {checked3 ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Food Producer
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Food Producer
                    </span>
                  </div>
                )}
              </div>
              <div onClick={handleClick5}>
                {checked4 ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Distribution
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Distribution
                    </span>
                  </div>
                )}
              </div>
              <div onClick={handleClick6}>
                {checked5 ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Media
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Media
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div onClick={handleClick7}>
              {checked6 ? (
                <div className="flex gap-2 items-center">
                  <BiSolidCheckboxChecked className="text-white rounded" />
                  <span className="text-white text-base font-manrope font-normal">
                    Other
                  </span>
                </div>
              ) : (
                <div className="flex gap-2 items-center mt-5">
                  <RiCheckboxBlankLine className="text-white rounded" />
                  <span className="text-white text-base font-manrope font-normal">
                    Other
                  </span>
                </div>
              )}
              <input
                type="text"
                placeholder="do tell..."
                className="rounded w-full px-2 py-2 bg-transparent border-b border-white"
              />
            </div>
            {/* ======================================================= */}
            {/* I am still not sure why the below refactoring was not working */}
            {/* {items.map((item) => (
              <div
                className="mt-4 grid grid-cols-3 gap-5"
                key={item.id}
                onClick={() => toggleCheck(item.id)}
              >
                {item.checked ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Retail
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Retail
                    </span>
                  </div>
                )}
                {item.checked ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Consulting
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Consulting
                    </span>
                  </div>
                )}
                {item.checked ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Events
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Events
                    </span>
                  </div>
                )}
                {item.checked ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Food Producer
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Food Producer
                    </span>
                  </div>
                )}
                {item.checked ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Distribution
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Distribution
                    </span>
                  </div>
                )}
                {item.checked ? (
                  <div className="flex gap-2 items-center">
                    <BiSolidCheckboxChecked className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Media
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <RiCheckboxBlankLine className="text-white rounded" />
                    <span className="text-white text-base font-manrope font-normal">
                      Media
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div>
              <div className="flex gap-2 items-center mt-5">
                <RiCheckboxBlankLine className="text-white rounded" />
                <span className="text-white text-base font-manrope font-normal">
                  Other
                </span>
              </div>
              <input
                type="text"
                placeholder="do tell..."
                className="rounded w-full px-2 py-2 bg-transparent border-b border-white"
              />
            </div> */}
            {/* ====================================================================== */}
            {/*  */}
            {/*  */}
            {/* I'm not too sure if the following question is supposed to be here, so I am not going to code for now. */}
            {/* <h4
            htmlFor="text"
            className="text-white text-2xl font-manrope font-bold"
          >
            If you're a food producer, what do you produce?
          </h4> */}
          </div>
        </form>
        <button className="text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5">
          <Link to="/evaluator-page-1">Previous</Link>
        </button>
        <button className="text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl">
          <Link to="/evaluator-page-3">Next</Link>
        </button>
      </div>
    </div>
  );
}
