import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/logo.svg'

const Nav = () => {
    return (
        <nav className='flex justify-between'>
            <Image src={Logo} alt='Website logo' />
            <ul className='flex gap-10 text-end text-Dark-grayish-blue'>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    );
};

export default Nav;