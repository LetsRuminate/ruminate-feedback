// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

export default function MilkType() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  const [checked11, setChecked11] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }

  function handleClick2() {
    setChecked1(!checked1);
  }

  function handleClick3() {
    setChecked2(!checked2);
  }

  function handleClick12() {
    setChecked11(!checked11);
  }

  return (
    <div>
      <div className="mt-9">
        <h3 className={inputTitle}>Milk Type</h3>
      </div>
      <div className="mt-4">
        <div onClick={handleClick}>
          {checked ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Goat
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Goat
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick2}>
          {checked1 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Cow
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Cow
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick3}>
          {checked2 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Ship
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Ship
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick12}>
          {checked11 ? (
            <>
              <div className="flex gap-2 items-center mt-5 mb-4">
                <BiSolidCheckboxChecked className="text-white rounded" />
                <span className="text-white text-base font-manrope font-normal">
                  Other
                </span>
              </div>
              <input type="text" className={inputField} />
            </>
          ) : (
            <div className="flex gap-2 items-center mt-5">
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
