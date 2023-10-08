import React from 'react';

const Headline = () => {
    return (
        <section className='flex 2xl:flex-row flex-col'>
            <h1 className='text-[40px] text-Very-dark-blue font-extrabold leading-none'>The Bright Future of Web 3.0?</h1>
            <div className='flex flex-col gap-3'>
                <p className='text-[15px] text-Dark-grayish-blue leading-[26px]'>
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?
                </p>
                <button className='w-fit text-Off-white text-sm font-[500] tracking-[0.25rem] bg-Soft-red py-3 px-8'>READ MORE</button>
            </div>
        </section>
    );
};

export default Headline;

// 

// 

// Read more