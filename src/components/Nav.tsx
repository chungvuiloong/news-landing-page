'use client'
import Image from 'next/image';
import React, { useState} from 'react';
import Logo from '@/assets/images/logo.svg'
import Hamburger_logo from '@/assets/images/icon-menu.svg'

const nav_link:String[] = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Nav = () => {
    const [modal, setModal] = useState(false)

    return (
        // <section className='2xl:pt-[90px] pt-7 2xl:pb-7 pb-0'>
        <section>
            <div className='min-h-screen fixed bg-Soft-red' onClick={()=> setModal(!modal)}>
                Open
            </div>
            <nav className='2xl:pt-[90px] pt-7 2xl:pb-7 pb-0 flex justify-between'>            
                <div>
                    <Image src={Logo} alt='Website logo' className='2xl:h-[40px] h-[30px] w-auto '/>
                </div>            
                    {
                        modal ? 
                        <div className='' onClick={()=> setModal(!modal)}>
                            Open
                        </div>
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
            </nav>                


        </section>

    );
};

export default Nav;