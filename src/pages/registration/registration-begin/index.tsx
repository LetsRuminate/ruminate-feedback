import Producer from '@assets/registration/landing-page/producer.svg'
import ColourfulProducer from '@assets/registration/landing-page/coloured-producer.svg'
import Evaluator from '@assets/registration/landing-page/evaluator.svg'
import ColourfulEvaluator from '@assets/registration/landing-page/coloured-evaluator.svg'

import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Registration() {
    const [hover, setHover] = useState(false);
    const handleHover = () => {
        setHover(!hover);
     }

     const [hover2, setHover2] = useState(false);
     const handleHover2 = () => {
         setHover2(!hover2);
      }

    return (
        <div className="py-9 px-14 bg-[#345EC9]">
            <p className='text-white'>Please note that this is a temporary version of design for Registration Landing Page.</p>
            <h1 className="text-center text-6xl text-white font-anton font-normal py-20">
                I am interested in...
            </h1>
            <div className='flex gap-32 justify-center'>
            <Link to='/producer-default'>
            <div className="bg-white hover:bg-[#DD9E5B] hover:ease-in-out hover:duration-300 rounded-3xl pb-40 w-fit">
                <h1 className="pt-8 text-4xl font-manrope font-normal px-8">Becoming a Producer</h1>
                <div className='pt-28' onMouseEnter={handleHover}
                   onMouseLeave={handleHover}>
                    {hover ? <img src={ColourfulProducer} alt="Colourful Producer" className='mx-auto' /> : <img src={Producer} alt="Producer Body" className='mx-auto' />}
                </div>
            </div>
            </Link>
            <div className='border border-white'></div>
            <Link to='/evaluator-default'>
            <div className="bg-white hover:bg-[#459AFF] hover:ease-in-out hover:duration-300 rounded-3xl pb-40 w-fit">
                <h1 className="pt-8 text-4xl font-manrope font-normal px-8">Becoming an Evaluator</h1>
                <div className='pt-28' onMouseEnter={handleHover2} onMouseLeave={handleHover2}>
                    {hover2 ? <img src={ColourfulEvaluator} alt="Coloured Evaluator Body" className='mx-auto' /> : <img src={Evaluator} alt="Evaluator Body" className='mx-auto' />}
                </div>
            </div>
            </Link>
            </div>
            <div className='flex gap-72 px-32'>
            <div className='border border-white w-96 mt-28'></div>
            <div className='border border-white w-96 mt-28'></div>
            </div>
            <div className='text-center text-[#A87855]'>
            <button className='mt-20 py-7 px-8 rounded-full bg-white'>Join Administration Team</button>
            </div>
            <div className='py-10 text-white text-center'>By using Feedback, you agree to the Terms and Conditions and Privacy Policy</div>
        </div>
    );
}

