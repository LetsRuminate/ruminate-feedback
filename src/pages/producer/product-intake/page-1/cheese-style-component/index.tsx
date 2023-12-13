// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

export default function CheeseStyle() {
  const inputTitle = "text-white text-xl font-manrope font-bold";
  const inputField = "w-full bg-white p-4 rounded-lg";

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
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

  function handleClick8() {
    setChecked7(!checked7);
  }

  function handleClick9() {
    setChecked8(!checked8);
  }

  function handleClick10() {
    setChecked9(!checked9);
  }

  function handleClick11() {
    setChecked10(!checked10);
  }

  function handleClick12() {
    setChecked11(!checked11);
  }

  return (
    <div>
      <div className="mt-9">
        <h3 className={inputTitle}>Cheese Style</h3>
      </div>
      <div className="mt-4">
        <div onClick={handleClick}>
          {checked ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Alpine-Style
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Alpine-Style
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick2}>
          {checked1 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Blue
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Blue
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick3}>
          {checked2 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Cheddar-like
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Cheddar-like
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick4}>
          {checked3 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Creme
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Creme
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick5}>
          {checked4 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Fresh
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Fresh
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick6}>
          {checked5 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Gouda-like
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Gouda-like
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick7}>
          {checked6 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Grana-Grating Cheese
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Grana-Grating Cheese
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick8}>
          {checked7 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Pasta Filata (Mozzarella Type)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Pasta Filata (Mozzarella Type)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick9}>
          {checked8 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Process (Cheese spread,American Cheese)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Process (Cheese spread,American Cheese)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick10}>
          {checked9 ? (
            <div className="flex gap-2 items-center my-5">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Soft-Ripened (Brie-like)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Soft-Ripened (Brie-like)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick11}>
          {checked10 ? (
            <div className="flex gap-2 items-center">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Washed-Rind
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Washed-Rind
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
