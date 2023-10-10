import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/logo.svg'

const nav_link:String[] = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Nav = () => {
    return (
        <nav className='2xl:pt-[90px] pt-7 flex justify-between'>
            <Image src={Logo} alt='Website logo' className='h-auto 2xl:w-auto w-[50%]'/>
            <ul className='2xl:flex hidden gap-10 text-end text-Dark-grayish-blue'>
                {
                    nav_link.map((nav, i)=> 
                        <li key={i} className='self-center hover:text-Soft-red cursor-pointer'>
                            {nav}
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;