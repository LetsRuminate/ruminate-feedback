import LastStep from '@assets/registration/progress-bar-1/step5.svg'
import FinalStep from "@assets/registration/progress-bar-2/page-5"

import { Link } from 'react-router-dom';

export default function ProductCompleted() {
    return (
        <div className='py-20 bg-[#345EC9]'>
        <div className='border border-white w-[874px] py-8 mx-auto'>
            <h1 className='text-white text-5xl font-manrope font-bold text-center'>PRODUCT INTAKE FORM</h1>
            <img src={LastStep} alt="Default Progress Bar" width={648} className='mx-auto' />
            <FinalStep/>
            <div className='flex justify-between px-32'>
            <p className='text-white text-sm font-manrope font-normal'>Product Info</p>
            <p className='text-white text-sm font-manrope font-normal -ml-10'>Preferred Communication</p>
            <p className='text-white text-sm font-manrope font-normal -ml-12'>Shipment</p>
            <p className='text-white text-sm font-manrope font-normal'>Form Review</p>
            <p className='text-white text-sm font-manrope font-normal'>Completed</p>
            </div>
        </div>
        <div className='border border-white mx-auto w-[874px] px-14 py-20'>
           <h1 className='text-white text-2xl font-manrope font-normal'>Your application has been submitted!</h1>
           <p className='text-white text-base font-manrope font-medium pt-6 pb-12'>
           Thank you for submitting your application! As you are reading this, we are reaching out to evaluators. Once evaluators have signed on to your evaluation, we’ll post their shipping addresses (and your next steps) in your dashboard.<br/><br/>Click below to access your Producer Dashboard!
           </p>
            <button className='text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl'><Link to='/producer'>Dashboard</Link></button>
        </div>
    </div>
    );
}