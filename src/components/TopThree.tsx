import React from 'react'
import Image_01 from '@/assets/images/image-retro-pcs.jpg'
import Image_02 from '@/assets/images/image-top-laptops.jpg'
import Image_03 from '@/assets/images/image-gaming-growth.jpg'
import Image from 'next/image'

type TopThreeItem = {
    alt: string;
    image: typeof Image_01 | typeof Image_02 | typeof Image_03;
    header_number: string;
    header: string;
    content: string;
  };
  
  const topThree_data: TopThreeItem[] = [
    {
        alt: 'Retro Computers',
        image: Image_01,
        header_number: `01`,
        header: 'Reviving Retro PCs',
        content: 'What happens when old PCs are given modern upgrades?'
    },
    {
        alt: 'Retro Computers',
        image: Image_02,
        header_number: `02`,
        header: 'Top 10 Laptops of 2022',
        content: 'Our best picks for various needs and budgets.'
    },
    {
        alt: 'Retro Computers',
        image: Image_03,
        header_number: `03`,
        header: 'The Growth of Gaming',
        content: 'How the pandemic has sparked fresh opportunities.'
    }
]

const TopThree = () => {
    return (
        <section className='h-fit row-span-1 col-span-3'>
            <div className='flex 2xl:flex-row flex-col gap-y-8'>           
                {
                    topThree_data.map((data, index) =>
                        <div className='flex flex-row gap-7' key={index}>
                            <Image src={data.image} alt='Retro computers' height={100} width={100} />
                            <div className='flex flex-col gap-2'>
                                <h3 className='text-3xl font-extrabold'>{data.header_number}</h3>
                                <div className='text-lg text-Very-dark-blue font-bold'>{data.header}</div>
                                <div className='text-Dark-grayish-blue text-[15px]'>{data.content}</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default TopThree;