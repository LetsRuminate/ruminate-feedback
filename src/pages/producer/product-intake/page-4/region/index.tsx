// React Icons
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { useState } from "react";

export default function Region() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  // const [selected, setSelected] = useState(0);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked5, setChecked5] = useState(false);
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

  function handleClick4() {
    setChecked3(!checked3);
  }

  function handleClick6() {
    setChecked5(!checked5);
  }

  function handleClick8() {
    setChecked7(!checked7);
  }

  return (
    <div>
      <div>
        <h3 className={inputTitle}>
          Which regions would you like your evaluators to be located at for
          potential matching?
        </h3>
      </div>
      <div className="mt-4">
        <div onClick={handleClick}>
          {checked ? (
            <div className="flex gap-2 items-center">
              <MdOutlineRadioButtonChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The Northeast (ME, NH, VT, MA, RI, CT, NY, NJ, & PA)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <MdOutlineRadioButtonUnchecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The Northeast (ME, NH, VT, MA, RI, CT, NY, NJ, & PA)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick2}>
          {checked1 ? (
            <div className="flex gap-2 items-center my-5">
              <MdOutlineRadioButtonChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The Midwest (OH, MI, IN, WI, IL, MN, IA, MO, ND, SD, NE, & KS)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <MdOutlineRadioButtonUnchecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The Midwest (OH, MI, IN, WI, IL, MN, IA, MO, ND, SD, NE, & KS)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick3}>
          {checked2 ? (
            <div className="flex gap-2 items-start text-xl">
              <MdOutlineRadioButtonChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The South (DE, MD, VA, WV, KY, NC, SC, TN, GA, FL, AL, MI, AK,
                LA, TX, & OK)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-start text-xl">
              <MdOutlineRadioButtonUnchecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The South (DE, MD, VA, WV, KY, NC, SC, TN, GA, FL, AL, MI, AK,
                LA, TX, & OK)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick4}>
          {checked3 ? (
            <div className="flex gap-2 items-center my-5">
              <MdOutlineRadioButtonChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The West (MT, ID, WY, CO, NM, AZ, UT, NV, CA, OR, WA)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <MdOutlineRadioButtonUnchecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                The West (MT, ID, WY, CO, NM, AZ, UT, NV, CA, OR, WA)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick6}>
          {checked5 ? (
            <div className="flex gap-2 items-center my-5">
              <MdOutlineRadioButtonChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Fair Labor Practices and Community Benefits
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <MdOutlineRadioButtonUnchecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Fair Labor Practices and Community Benefits
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick8}>
          {checked7 ? (
            <>
              <div className="flex gap-2 items-center mt-5 mb-4">
                <MdOutlineRadioButtonChecked className="text-white rounded" />
                <span className="text-white text-base font-manrope font-normal">
                  Other
                </span>
              </div>
              <input type="text" className={inputField} />
            </>
          ) : (
            <div className="flex gap-2 items-center mt-5">
              <MdOutlineRadioButtonUnchecked className="text-white rounded" />
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
