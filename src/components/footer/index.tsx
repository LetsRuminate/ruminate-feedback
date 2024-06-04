// Footer images in .svg
import EnterButton from '@assets/footer/enter-button.svg'
import BrandLogo from '@assets/brand/brand-logo.svg'

import { Link } from 'react-router-dom';

// React Icons
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#000000] border-t-[24px] border-black pt-16 pb-14 -mt-4 relative z-50 px-14">
      <label className="text-white text-5xl font-anton font-normal">
        Join Our Newsletter
      </label>
      <div>
      <h1 className='py-4 text-white text-xl font-manrope font-bold'>Email</h1>
      <input type="text" placeholder="Type your email" className='w-[496px] px-1 py-1 relative rounded mb-9' />
      <img src={EnterButton} alt="Enter Button image" width={30} height={30} className='text-black absolute ml-[460px] -mt-16' />
      </div>
      <div className='justify-between flex items-start'>
        <div>
          <h1 className='text-white text-2xl font-manrope font-bold'>
            Our Story
          </h1>
          <div>
              <div>
            <button className='text-white text-base font-manrope font-normal pt-4'><Link to='/about-us'>About Us</Link></button>
              </div>
              <div>
            <button className='text-white text-base font-manrope font-normal py-4'><Link to='/how-it-works'>How It Works</Link></button>
              </div>
              <div>
            <button className='text-white text-base font-manrope font-normal'><Link to='/pricing'>Pricing</Link></button>
              </div>
          </div>
        </div>
        <div>
          <h1 className='text-white text-2xl font-manrope font-bold'>
            Resources
          </h1>
          <div className='gap-4'>
              <div>
            <button className='text-white text-base font-manrope font-normal pt-4'><Link to='/'>FAQ</Link></button>
              </div>
              <div>
            <button className='text-white text-base font-manrope font-normal py-4'><Link to='/'>Get Started</Link></button>
              </div>
              <div>
            <button className='text-white text-base font-manrope font-normal'><Link to='/'>Contact</Link></button>
              </div>
          </div>
        </div>
        <div>
          <h1 className='text-white text-2xl font-manrope font-bold'>
            Legal
          </h1>
          <div className='gap-4'>
              <div>
            <button className='text-white text-base font-manrope font-normal pt-4'><Link to='/'>Terms</Link></button>
              </div>
              <div>
            <button className='text-white text-base font-manrope font-normal py-4'><Link to='/'>Privacy Policy</Link></button>
              </div>
              <div>
            <button className='text-white text-base font-manrope font-normal'><Link to='/'>Cookies</Link></button>
              </div>
          </div>
        </div>
        <div>
          <img src={BrandLogo} alt="Brand Logo" className='text-3xl text-white shrink-0 pb-8' />
          <div className='flex gap-4 justify-end'>
           <FaFacebookF className="text-[#EEE4BA] w-10 h-10" />
           <FaInstagram className="text-[#EEE4BA] w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}


