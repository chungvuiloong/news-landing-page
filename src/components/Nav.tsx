import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/logo.svg'

const Nav = () => {
    return (
        <nav className='2xl:pt-[90px] pt-7 flex justify-between'>
            <Image src={Logo} alt='Website logo' />
            <ul className='flex gap-10 text-end text-Dark-grayish-blue'>
                <li className='self-center'>Home</li>
                <li className='self-center'>New</li>
                <li className='self-center'>Popular</li>
                <li className='self-center'>Trending</li>
                <li className='self-center'>Categories</li>
            </ul>
        </nav>
    );
};

export default Nav;