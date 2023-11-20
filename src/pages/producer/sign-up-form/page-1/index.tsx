import ProgressBar2 from '@assets/registration/producer';
import DefaultProgressBar from '@assets/registration/producer/progressbar1.svg'
export default function ProducerPage1() {
    return (
        <div className='py-20 bg-[#345EC9]'>
            <div className='border border-white w-[874px] py-8 mx-auto'>
                <h1 className='text-white text-5xl font-manrope font-bold text-center'>PRODUCER SIGN UP</h1>
                <img src={DefaultProgressBar} alt="Default Progress Bar" width={648} className='mx-auto' />
                <ProgressBar2/>
                <div className='flex justify-between px-32'>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal'>About You</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-2'>Your Business</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-5'>Your Values</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-2'>How You Found Us</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal -mr-2'>Completed</p>
                </div>
            </div>
            <div></div>
        </div>
    );
}

