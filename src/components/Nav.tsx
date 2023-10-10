import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/logo.svg'

const Nav = () => {
    return (
        <nav className='2xl:pt-[90px] pt-7 flex justify-between'>
            <Image src={Logo} alt='Website logo' className='h-auto 2xl:w-auto w-[50%]'/>
            <ul className='flex gap-10 text-end text-Dark-grayish-blue'>
                <li className='self-center hover:text-Soft-red cursor-pointer'>Home</li>
                <li className='self-center hover:text-Soft-red  cursor-pointer'>New</li>
                <li className='self-center hover:text-Soft-red  cursor-pointer'>Popular</li>
                <li className='self-center hover:text-Soft-red  cursor-pointer'>Trending</li>
                <li className='self-center hover:text-Soft-red  cursor-pointer'>Categories</li>
            </ul>
        </nav>
    );
};

export default Nav;