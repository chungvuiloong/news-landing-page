'use client'
import Image from 'next/image';
import React, { useState} from 'react';
import Logo from '@/assets/images/logo.svg'
import Hamburger_logo from '@/assets/images/icon-menu.svg'

const nav_link:String[] = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Nav = () => {
    const [modal, setModal] = useState(false)

    return (
        <nav>                    
            {
                modal ? 
                    <div className='-pl-[17px] w-screen min-h-screen fixed flex' onClick={()=> setModal(!modal)}>
                        <div className='basis-[32%] bg-Very-dark-blue bg-opacity-60'>{" "}</div>
                        <div className='basis-[68%] bg-Off-white'>
                            Test
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
                {/* <div className='h-full my-auto 2xl:hidden block' onClick={()=> setModal(!modal)}>
                    {
                        modal ? <div className='min-h-screen fixed bg-Soft-red'>Open</div> : 
                            <Image src={Hamburger_logo} alt='Hamburger Logo' className='cursor-pointer'/>
                    }
                    <Image src={Hamburger_logo} alt='Hamburger Logo' className='cursor-pointer'/>
                </div> */}
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