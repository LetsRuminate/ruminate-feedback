import FeedbackIs from '@assets/feedback-section/Shadow.svg' 


export default function Feedback() {
  return (
    <section className='bg-[#F9BCAC] pt-40 pb-52 -mt-20 -z-[11] relative'>
    <section>
    <div className='pt-3 pb-10 pl-[570px]'>
          <img src={FeedbackIs} alt="Text that says Feedback Is..." width={803}/>
        </div>
    </section>

{/* Essential Question section */}
      <section>
      <div className='flex justify-center -z-[15] relative'>
        <div className='w-[479px] bg-[#790E4A] rounded-tl-3xl rounded-bl-3xl boxshadow z-10'></div>
        <div className='py-20 p-8 bg-white w-[641px] rounded-tr-3xl rounded-br-3xl boxshadow z-0'>
        
          <h1 className='text-black text-5xl header1 relative'>EVERY ESSENTIAL QUESTION,</h1>
          <h1 className='text-black text-5xl header2 text-[60px] pt-2'>ANSWERED.</h1>
          
          <p className='text-black text-2xl font-manrope font-medium pt-3'>
            Industrial food uses big budgets to learn how to maximize sales. Get the data you need at a fraction of the cost. 
          </p>
        </div>
      </div>
      </section>

{/* No more echo section */}
      <section>
      <div className='flex -z-[15] relative mt-12 justify-center'>
        <div className='py-20 p-8 w-[641px] bg-white rounded-tl-3xl rounded-bl-3xl boxshadow z-10'>

        <h1 className='text-black text-5xl header2 text-[60px] relative'>NO MORE</h1>
          <h1 className='text-black text-5xl header1 pt-2'>ECHO CHAMBERS.</h1>
          
          <p className='text-black text-2xl font-manrope font-medium pt-3 '>
          The praise you hear from your fans feels good, but it doesn’t explain why your sales won’t grow. Feedback recruits passionate professionals with years of experience selling products just like yours. 
          </p>

        </div>
        <div className='py-20 p-8 bg-[#790E4A] w-[479px] rounded-tr-3xl rounded-br-3xl boxshadow z-0'>
        </div>
      </div>
      </section>

{/* Save Money section */}
      <section>
      <div className='flex -z-[15] relative mt-12 justify-center'>
        <div className='w-[479px] bg-[#790E4A] rounded-tl-3xl rounded-bl-3xl boxshadow z-10'></div>
        <div className='py-20 p-8 bg-white w-[641px] rounded-tr-3xl rounded-br-3xl boxshadow z-0'>
        
          <h1 className='text-black text-5xl header1 relative inline text-[60px]'>SAVE</h1>
          <h1 className='text-black text-5xl header2 relative inline ml-5 text-[60px]'>MONEY,</h1><br/>
          <h1 className='text-black text-5xl header1 relative inline text-[60px]'>MAKE</h1>
          <h1 className='text-black text-5xl header2 relative inline ml-5 text-[60px]'>MONEY.</h1>
          
          <p className='text-black text-2xl font-manrope font-medium pt-3 '>
            Industrial food uses big budgets to learn how to maximize sales. Get the data you need at a fraction of the cost. 
          </p>
        </div>
      </div>
      </section>

{/* Everywhere section */}
      <section>
      <div className='flex -z-[15] relative mt-12 justify-center'>
        <div className='py-20 p-8 w-[641px] bg-white rounded-tl-3xl rounded-bl-3xl boxshadow z-10'>

        <h1 className='text-black text-5xl header1 relative'>BECAUSE YOU'RE ALREADY</h1>
          <h1 className='text-black text-5xl header2 text-[60px] pt-2'>EVERYWHERE.</h1>
          
          <p className='text-black text-2xl font-manrope font-medium pt-3 '>
          The praise you hear from your fans feels good, but it doesn’t explain why your sales won’t grow. Feedback recruits passionate professionals with years of experience selling products just like yours.
          </p>

        </div>
        <div className='py-20 p-8 bg-[#790E4A] w-[479px] rounded-tr-3xl rounded-br-3xl boxshadow z-0'>
        </div>
      </div>
      </section>
    </section>
  );
}


