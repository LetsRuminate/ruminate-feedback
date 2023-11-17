// import Hero from "./hero";
// import HeroText from "./heroText";
// import SectionOne from "./sectionOne";
// import SectionTwo from "./sectionTwo";
// import SectionThree from "./sectionThree";
// import SectionFour from "./sectionFour";
import PlayIcon from '@assets/banner/red-button/play-icon.svg'
import Sandwich from '@assets/banner/sandwich/sandwich.svg'

export default function Home() {
  return (
    <>
    {/* the below section is for the introductory banner */}
    <section className="flex bg-[#4670D9] gap-24 px-32 -skew-y-6 -mt-20 -z-[10] relative border-b-[24px] border-black">
      <div className="pt-[143px] pb-28 skew-y-6">
        <h1 className="text-white text-7xl font-anton-regular font-normal mb-4">
          Making Good Food Better
        </h1>
        <h2 className="text-[#BDF0FF] text-4xl font-anton font-normal mb-8">
          THINK LIKE A SCIENTIST. ORGANIZE LIKE AN ACTIVIST.<br/>
          MAKE SMALL BUSINESS THRIVE.
        </h2>
        <p className="text-white text-2xl font-manrope font-normal mb-14">
          Driven by more ethical, equitable, and sustainable foodways,
        </p>
        <button className='bg-[#EF4E5D] rounded-full items-center text-center flex py-4 px-7 gap-4'>
          <span className='text-5xl text-white font-anton font-normal'>GET STARTED</span>
          <img src={PlayIcon} alt="Play Icon" width={30} className='text-white h-[40px]'/>
        </button>
      </div>
      <img src={Sandwich} alt='Sandwich' width={195} className='mt-32 skew-y-6 h-[634px]'/>
    </section>
    {/* ========================================================================================= */}
    {/* the below is feedback section */}
    <section className='bg-[#FFBA49] pt-32'>
      <h1 className='text-white text-[140px] font-anton font-normal'>
        Feedback
      </h1>
    </section>
    </>
  );
}
