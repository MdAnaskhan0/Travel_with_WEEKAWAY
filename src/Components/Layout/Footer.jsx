import React from 'react';
import { BsChatSquareDots } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='border-t-4'>
            <div className='flex flex-col md:flex-row justify-between items-center max-w-[1400px] w-full py-8 m-auto'>
                <div className='flex justify-center items-center mb-4 md:mb-0'>
                    <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2' />
                    <h1 className='text-xl font-bold text-gray-700'>
                        <a href="/">WEEKAWAY</a>
                    </h1>
                </div>
                <div className='flex justify-center mb-4 md:mb-0'>
                    <FaFacebookF className='mx-4 text-xl' />
                    <FaTwitter className='mx-4 text-xl' />
                    <FaInstagram className='mx-4 text-xl' />
                    <FaGooglePlusG className='mx-4 text-xl' />
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-center'>Copyright@2024 Md Anas Khan. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
