import Image from 'next/image';
import React from 'react';
import Headline_Img from '@/assets/images/image-web-3-mobile.jpg'

const HeadLineImage = () => {
    return (
        <section>
            <Image src={Headline_Img} alt='Headline Image' />
        </section>
    );
};

export default HeadLineImage;