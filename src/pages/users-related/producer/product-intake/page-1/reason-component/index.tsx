// React Icons
import { RiCheckboxBlankLine } from "react-icons/ri";
import { BiSolidCheckboxChecked } from "react-icons/bi";
import { useState } from "react";

export default function Reason() {
  const inputTitle = "text-white text-xl font-manrope font-bold";

  // const [selected, setSelected] = useState(0);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
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

  return (
    <div>
      <div>
        <h3 className={inputTitle}>
          Why are you looking to evaluate this product?
        </h3>
        <span className="text-base text-white font-manrope font-normal">
          (Select all that apply)
        </span>
      </div>
      <div className="mt-4">
        <div onClick={handleClick}>
          {checked ? (
            <div className="flex gap-2 items-center -ml-1">
              <BiSolidCheckboxChecked className="text-white rounded text-xl" />
              <span className="text-white text-base font-manrope font-normal">
                Developing a new product
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Developing a new product
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick2}>
          {checked1 ? (
            <div className="flex gap-2 items-center my-5 -ml-1">
              <BiSolidCheckboxChecked className="text-white rounded text-xl" />
              <span className="text-white text-base font-manrope font-normal">
                Experimenting with new receipe
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Experimenting with new receipe
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick3}>
          {checked2 ? (
            <div className="flex gap-2 items-center -ml-1">
              <BiSolidCheckboxChecked className="text-white rounded text-xl" />
              <span className="text-white text-base font-manrope font-normal">
                Refining an old favorite
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Refining an old favorite
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick4}>
          {checked3 ? (
            <div className="flex gap-2 items-center my-5 -ml-1">
              <BiSolidCheckboxChecked className="text-white rounded text-xl" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to figure out why the product isn’t selling as hoped
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center my-5">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to figure out why the product isn’t selling as hoped
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick5}>
          {checked4 ? (
            <div className="flex gap-2 items-center -ml-1">
              <BiSolidCheckboxChecked className="text-white rounded text-xl" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to break into a new geographic market
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to break into a new geographic market
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick6}>
          {checked5 ? (
            <div className="flex gap-2 items-start my-5">
              <BiSolidCheckboxChecked className="text-white rounded text-3xl" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to jumpstart sales in a new part of the distribution
                chain (ex: independent retailers, grocery, distribution)
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-start my-5">
              <RiCheckboxBlankLine className="text-white rounded text-3xl" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to jumpstart sales in a new part of the distribution
                chain (ex: independent retailers, grocery, distribution)
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick7}>
          {checked6 ? (
            <div className="flex gap-2 items-start text-2xl">
              <BiSolidCheckboxChecked className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to get more information about how a product is perceived
                by industry professionals
              </span>
            </div>
          ) : (
            <div className="flex gap-2 items-start text-2xl">
              <RiCheckboxBlankLine className="text-white rounded" />
              <span className="text-white text-base font-manrope font-normal">
                Trying to get more information about how a product is perceived
                by industry professionals
              </span>
            </div>
          )}
        </div>
        <div onClick={handleClick8}>
          {checked7 ? (
            <>
              <div className="flex gap-2 items-center text-base mt-5 mb-4">
                <BiSolidCheckboxChecked className="text-white rounded" />
                <span className="text-white text-base font-manrope font-normal">
                  Other
                </span>
              </div>
              <input
                type="text"
                className="w-full bg-white p-4 rounded-lg h-full"
              />
            </>
          ) : (
            <div className="flex gap-2 items-center text-base mt-5">
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
