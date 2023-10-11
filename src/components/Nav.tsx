import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/images/logo.svg'
import Hamburger_logo from '@/assets/images/icon-menu.svg'

const nav_link:String[] = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Nav = () => {
    return (
        <nav className='2xl:pt-[90px] pt-7 2xl:pb-7 pb-0 flex justify-between'>
            <div>
                <Image src={Logo} alt='Website logo' className='2xl:h-[40px] h-[30px] w-auto '/>
            </div>
            <div className='h-full my-auto 2xl:hidden block'>
                <Image src={Hamburger_logo} alt='Hamburger Logo' className=''/>
            </div>
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