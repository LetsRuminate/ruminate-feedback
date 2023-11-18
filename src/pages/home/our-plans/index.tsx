// OUR PLANS section - images in .svg
import Plan from '@assets/our-plans/plans.svg'
import PlayIcon from '@assets/banner/red-button/play-icon.svg'
import CheckMark from '@assets/how-it-works/checkmark.svg'
import MoreInfo from '@assets/our-plans/more-info.svg'

export default function Plans() {
  return (
    <>
    {/* ========================================================================================= */}
    {/* the below is our plans section */}
    <section className='bg-[#4670D9] -skew-y-3 -mt-20 border-t-[24px] border-black pt-48 pb-48'>
      <section className='skew-y-3'>
        <h1 className='text-white text-[140px] font-anton font-normal text-right pr-44 relative z-[11]'>
          Our Plans
        </h1>
        <div className='gap-6 flex justify-center -mt-16 relative -z-10'>
          <div className='bg-[#10212B] w-[400px]'>
            <h1>Explore</h1>
              <p className='text-[#B3E6FF] text-center'>Sense check your product-think field testing with friends... if your friends were experts</p>
              <img src={Plan} alt="Our Plans Decoration" width={201} className='h-28 py-7 mx-auto'/>
              <div className='flex gap-1 items-baseline justify-center'>
                <h2 className='text-white text-4xl'>$ 199</h2>
                <p className='text-white'>/ year</p>
              </div>
              <button className='bg-[#EF4E5D] rounded-full items-center text-center flex my-4 py-4 px-7 gap-4 mx-auto'>
                <span className='text-5xl text-white font-anton font-normal'>GET STARTED</span>
                <img src={PlayIcon} alt="Play Icon" width={30} className='text-white h-[40px]'/>
              </button>
              <div>
                <div className='flex gap-2 items-start pl-5'>
                  <img src={CheckMark} alt="Check Mark" width={28} className='text-[#0090B2]' />
                  <p className='text-white w-60'>Use of our evaluation matrix, tailored to YOUR product</p>
                </div>
                <div className='flex gap-2 items-start pl-5 py-8'>
                  <img src={CheckMark} alt="Check Mark" width={28} className='text-[#0090B2]' />
                  <p className='text-white w-60'>1 product evaluated</p>
                </div>
                <div className='flex gap-2 items-start pl-5'>
                  <img src={CheckMark} alt="Check Mark" width={28} className='text-[#0090B2]' />
                  <p className='text-white w-60'>Ability to exclude one U.S region for evaluations/shipment</p>
                </div>
              </div>
              <img src={MoreInfo} alt="More Info" width={110} className='mx-auto pt-8 pb-16' />
          </div>
          <div className='bg-[#10212B] w-[400px] h-[691px]'>
            <p>.</p>
          </div>
          <div className='bg-[#10212B] w-[400px] h-[691px]'>
            <p>.</p>
          </div>
        </div>
      </section>
    </section>
    </>
  );
}


