import Default from '@assets/registration/progress-bar-1/default.svg'
import DefaultStep from '@assets/registration/progress-bar-2/default-page';

import { Link } from 'react-router-dom';

export default function DefaultPage() {
    return (
        <div className='py-20 bg-[#345EC9]'>
            <div className='border border-white w-[874px] py-8 mx-auto'>
                <h1 className='text-white text-5xl font-manrope font-bold text-center'>PRODUCER SIGN UP</h1>
                <img src={Default} alt="Default Progress Bar" width={648} className='mx-auto' />
                <DefaultStep/>
                <div className='flex justify-between px-32'>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal'>About You</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-2'>Your Business</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-5'>Your Values</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal pl-2'>How You Found Us</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal -mr-2'>Completed</p>
                </div>
            </div>
            <div className='border border-white mx-auto w-[874px] px-14 pb-14'>
                <div className='py-14'>
                    <h3 className='text-white text-2xl font-manrope font-bold'>Taking Your Products to the Next Level!</h3>
                    <p className='text-white text-base font-manrope font-normal py-6'>
                    We'll explore your background, your business, and your core values. This information will provide us with a deeper understanding of your profile and business, allowing us to assess compatibility more effectively.
                    </p>
                    <p className='pb-14 text-white'>
                    Click “Sign up” below to get started!
                    </p>
                </div>
                <button className='text-[#345EC9] text-base font-manrope font-semibold bg-white px-32 py-3 rounded-3xl'><Link to='/producer-page-1'>Sign Up</Link></button>
            </div>
        </div>
    );
}

