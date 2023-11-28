import Default from '@assets/registration/progress-bar-1/default.svg'
import DefaultStep from '@assets/registration/progress-bar-2/default-page';

import { Link } from 'react-router-dom';

export default function EvaluationDefault() {
    return (
        <div className='py-20 bg-[#345EC9]'>
            <div className='border border-white w-[874px] py-8 mx-auto'>
                <h1 className='text-white text-5xl font-manrope font-bold text-center'>PRODUCT EVALUATION FORM</h1>
                <img src={Default} alt="Default Progress Bar" width={648} className='mx-auto' />
                <DefaultStep/>
                <div className='flex justify-between px-32'>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Personal Info</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal -ml-4'>Unboxing</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Senses</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal ml-5'>Overall</p>
                <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Completed</p>
                </div>
            </div>
            <div className='border border-white mx-auto w-[874px] px-14 py-20'>
                <button className='text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5'><Link to='/evaluator'>Previous</Link></button>
                <button className='text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl'><Link to='/evaluation-page-1'>Next</Link></button>
            </div>
        </div>
    );
}

