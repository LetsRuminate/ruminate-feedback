import { Link } from "react-router-dom";
import { useState } from "react";
import Peppers from '@assets/banner/peppers/image 57.png'
import BlackArrow from '@assets/banner/arrow/black-arrow.svg'

export default function Banner() {
  return (
    <>
    {/* the below section is for the introductory banner */}
      <section className="flex bg-[#790E4A] gap-52 -skew-y-6 -mt-20 -z-[10] relative border-b-[24px] border-black justify-center">
        <div className="pt-40 pb-28 skew-y-6 ml-[130px] -z-[8] w-full">
          <h1 className="text-white text-[81px] header1 mb-4 inline">
            MAKING GOOD FOOD 
          </h1>
          <h1 className="text-white text-[81px] header2 mb-4 inline ml-6 tracking-widest">
            BETTER 
          </h1>
        <h2 className="text-[#B9EDD6] text-[40px] -mb-4 header1 tracking-wide">
            THINK LIKE A SCIENTIST. ORGANIZE LIKE AN ACTIVIST.
        </h2>
        <h2 className="text-[#B9EDD6] text-[40px] mb-8 header1 tracking-wide">
            MAKE SMALL BUSINESS THRIVE.
        </h2>
        <p className="text-white text-2xl font-manrope font-normal mb-14">
            Driven by more ethical, equitable, and sustainable foodways.
        </p>
        <Link to="/registration">
        <button 
          className="bg-[#F9BCAC] hover:buttonhover rounded-full items-center text-center flex py-4 px-7 gap-4 buttonshadow"> 
          <span className='text-4xl text-black header1 pt-3'>GET STARTED</span>
          <img src={BlackArrow} alt="Arrow Icon" width={30}/>
        </button>
        </Link>
        </div>
        <div className='ml-[950px] absolute -z-[9]'><img src={Peppers} alt="Peppers"/></div>
      </section>
    </>
  );
}