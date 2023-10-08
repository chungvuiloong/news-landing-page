import React from 'react'
import Image_01 from '@/assets/images/image-retro-pcs.jpg'
import Image from 'next/image'

const TopThree = () => {
    return (
        <section>
            <div className='flex flex-row gap-7'>
                <Image src={Image_01} alt='Retro computers' />
                <div className='flex flex-col gap-2'>
                    <div className='text-3xl font-bold'>01</div>
                    <div className='text-lg text-Very-dark-blue font-bold'>Reviving Retro PCs</div>
                    <div className='text-Dark-grayish-blue'>What happens when old PCs are given modern upgrades?</div>
                </div>
            </div>
        </section>
    );
};

export default TopThree;

// 01
// 
// 

// 02
// Top 10 Laptops of 2022
// Our best picks for various needs and budgets.

// 03
// The Growth of Gaming
// How the pandemic has sparked fresh opportunities.