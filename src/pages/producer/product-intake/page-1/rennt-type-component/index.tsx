// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

export default function RenntType() {
  const inputTitle = "text-white text-xl font-manrope font-bold";

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }

  function handleClick2() {
    setChecked1(!checked1);
  }

  function handleClick3() {
    setChecked2(!checked2);
  }

  return (
    <div>
      <div className="mt-9">
        <h3 className={inputTitle}>Rennt Type</h3>
      </div>
      <div className="mt-4">
        <div onClick={handleClick}>
          {checked ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Plant-based
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Plant-based
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick2}>
          {checked1 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Animal-based
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Animal-based
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick3}>
          {checked2 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Microbial
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Microbial
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
