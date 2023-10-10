import Image from 'next/image';
import React from 'react';
// import Mobile_Headline_Img from '@/assets/images/image-web-3-mobile.jpg'
import Desktop_Headline_Img from '@/assets/images/image-web-3-desktop.jpg'

const HeadLineImage = () => {
    return (
        <section className='mt-8 2xl:mb-0 mb-6 row-start-1 col-span-2 w-full h-full'>
            <Image src={Desktop_Headline_Img} alt='Headline Image' className=''/>
        </section>
    );
};

export default HeadLineImage;