import ItWorks from '@assets/how-it-works/how-it-works.svg'
import FlyingToast from '@assets/how-it-works/image 56.png'
import Steps from '@assets/how-it-works/howitworks-steps-new.svg'

export default function Works() {
  return (
    <section className='bg-[#E4DD67] skew-y-3 -mt-10 border-t-[24px] border-black pt-[120px] pb-56'>
      <section className='-skew-y-3'>
        <div>
        <h1 className='text-black text-[140px] header1 pl-28 inline z-10 relative'>
          HOW IT 
        </h1>
        <h1 className='text-black text-[140px] header2 ml-8 inline z-10 relative'>
          WORKS
        </h1>
        </div>
        <div className='z-0 absolute ml-[590px] -mt-[600px]'>
          <img src={FlyingToast} alt="Photograph of flying avocado and toast." width={990}/>
        </div>
        <div className='bg-[#000000] w-[1205px] py-48 pl-24 mx-auto rounded-3xl'>
          <img src={Steps} alt="Step titles for how it works."/>
        </div>
      </section>
    </section>
  );
}

