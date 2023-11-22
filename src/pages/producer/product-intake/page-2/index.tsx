import StepTwo from '@assets/registration/progress-bar-1/step2.svg'
import SecondStep from "@assets/registration/progress-bar-2/page-2"

import { Link } from 'react-router-dom';

export default function ProductPage2() {
    return (
        <div className='py-20 bg-[#345EC9]'>
        <div className='border border-white w-[874px] py-8 mx-auto'>
            <h1 className='text-white text-5xl font-manrope font-bold text-center'>PRODUCT INTAKE FORM</h1>
            <img src={StepTwo} alt="Default Progress Bar" width={648} className='mx-auto' />
            <SecondStep/>
            <div className='flex justify-between px-32'>
            <p className='text-white text-sm font-manrope font-normal'>Product Info</p>
            <p className='text-white text-sm font-manrope font-normal -ml-10'>Preferred Communication</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal -ml-12'>Shipment</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Form Review</p>
            <p className='text-[#ffffff80] text-sm font-manrope font-normal'>Completed</p>
            </div>
        </div>
        <div className='border border-white mx-auto w-[874px] px-14 py-20'>
            <button className='text-white text-base font-manrope font-medium rounded-3xl border border-white px-9 py-3 mr-5'><Link to='/product-intake-1'>Previous</Link></button>
            <button className='text-[#345EC9] text-base font-manrope font-semibold bg-white px-11 py-3 rounded-3xl'><Link to='/product-intake-3'>Next</Link></button>
        </div>
    </div>
    );
}

