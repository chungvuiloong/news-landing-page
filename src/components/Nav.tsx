'use client'
import Image from 'next/image';
import React, { useState} from 'react';
import Logo from '@/assets/images/logo.svg'
import Hamburger_logo from '@/assets/images/icon-menu.svg'
import Close_logo from '@/assets/images/icon-menu-close.svg'

const nav_link:String[] = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Nav = () => {
    const [modal, setModal] = useState(false)

    return (
        <nav>                    
            {
                modal ? 
                    <div className='-pl-[17px] w-screen min-h-screen fixed flex' onClick={()=> setModal(!modal)}>
                        <div className='basis-[32%] bg-Very-dark-blue bg-opacity-60'>{" "}</div>
                        <div className='basis-[68%] bg-Off-white px-5 pt-7 '>
                            <div className='flex flex-row-reverse'>
                                <Image src={Close_logo} alt='Close logo' />
                            </div>
                            <ul className='mt-20 flex flex-col lg:hidden gap-5 text-left text-Dark-grayish-blue'>
                                {
                                    nav_link.map((nav, i)=> 
                                        <li key={i} className='hover:text-Soft-red cursor-pointer font-medium'>
                                            {nav}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                :  <></>
            }
            <div className='2xl:pt-[90px] pt-7 2xl:pb-7 pb-0 flex justify-between container mx-auto'>            
                <div>
                    <Image src={Logo} alt='Website logo' className='2xl:h-[40px] h-[30px] w-auto '/>
                </div>            
                    {
                        modal ? 
                        <></>
                         : 
                        <div className='my-auto 2xl:hidden block' onClick={()=> setModal(!modal)}>
                            <Image src={Hamburger_logo} alt='Hamburger Logo' className='cursor-pointer'/>
                        </div>
                    }
                <ul className='2xl:flex hidden gap-10 text-end text-Dark-grayish-blue'>
                    {
                        nav_link.map((nav, i)=> 
                            <li key={i} className='self-center hover:text-Soft-red cursor-pointer'>
                                {nav}
                            </li>
                        )
                    }
                </ul>
            </div>                
        </nav>
    );
};

export default Nav;