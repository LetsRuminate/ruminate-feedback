import StepOne from '@assets/registration/progress-bar-1/step1.svg'
import FirstStep from "@assets/registration/progress-bar-2/page-1"

import Underline from '@assets/registration/progress-underline/underline.svg'

import { Link } from 'react-router-dom';

export default function EvaluatorPage1() {
    return (
        <div className='py-20 bg-[#345EC9]'>
        <div className='border border-white w-[874px] py-8 mx-auto'>
            <h1 className='text-white text-5xl font-manrope font-bold text-center'>EVALUATOR SIGN UP</h1>
            <img src={StepOne} alt="Default Progress Bar" width={648} className='mx-auto' />
            <FirstStep/>
            <div className='flex justify-between px-32'>
            <p className='text-white text-sm font-manrope font-normal -ml-2'>Personal Info</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal ml-3'>Professional Info.</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Qualifications</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Contact & Shipment</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Completed</p>
            </div>
            <img src={Underline} alt="Underline" width={98} className='ml-28'/>
        </div>
        <div className='border border-white mx-auto w-[874px] px-14 py-20'>
            <button className='text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5'><Link to='/evaluator-default'>Previous</Link></button>
            <button className='text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl'><Link to='/evaluator-page-2'>Next</Link></button>
        </div>
    </div>
    );
}

