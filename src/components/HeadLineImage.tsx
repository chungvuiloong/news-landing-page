import Image from 'next/image';
import React from 'react';
// import Mobile_Headline_Img from '@/assets/images/image-web-3-mobile.jpg'
import Desktop_Headline_Img from '@/assets/images/image-web-3-desktop.jpg'

const HeadLineImage = () => {
    return (
        <section className='col-span-2'>
            <Image src={Desktop_Headline_Img} alt='Headline Image' />
        </section>
    );
};

export default HeadLineImage;