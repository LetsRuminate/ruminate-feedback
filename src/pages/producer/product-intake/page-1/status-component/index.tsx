// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

export default function Status() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked7, setChecked7] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }

  function handleClick2() {
    setChecked1(!checked1);
  }

  function handleClick3() {
    setChecked2(!checked2);
  }

  function handleClick8() {
    setChecked7(!checked7);
  }

  return (
    <div>
      <div className="mt-9">
        <h3 className={inputTitle}>Raw, Thermized or Pasteurized?</h3>
      </div>
      <div className="mt-4">
        <div onClick={handleClick}>
          {checked ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Raw
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Raw
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick2}>
          {checked1 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Thermized
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Thermized
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick3}>
          {checked2 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Pasteurized
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Pasteurized
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick8}>
          {checked7 ? (
            <>
              <div className="flex gap-2 items-center text-xl mt-5 mb-4">
                <BiSolidCheckboxChecked className="text-white rounded" />
                <span className="text-white text-base font-manrope font-normal">
                  Other
                </span>
              </div>
              <input type="text" className={inputField} />
            </>
          ) : (
            <div className="flex gap-2 items-center text-xl mt-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Other
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
