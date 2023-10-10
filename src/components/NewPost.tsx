import React from 'react';

type NewsItem = {
    heading: string;
    paragraph: string;
  };
  
const news_data: NewsItem[] = [
    {
        heading: 'Hydrogen VS Electric Cars',
        paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?'
    },
    {
        heading: 'The Downsides of AI Artistry',
        paragraph: 'What are the possible adverse effects of on-demand AI image generation?'
    },
    {
        heading: 'Is VC Funding Drying Up?',
        paragraph: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
    }
]

const NewNews = () => {
    return (
        <section className='my-8 row-start-1 row-end-3 2xl:px-8 2xl:py-12 p-5 bg-Very-dark-blue'>
            <h2 className='mb-8 text-Soft-orange 2xl:text-[40px] text-3xl font-bold'>New</h2>
            <div>
                {
                    news_data.map((data, i) =>
                    <div key={i} className='flex flex-col gap-1.5'>
                        { i !== 0 ? <hr className='mt-7 mb-5 h-[0.5px] border-t-0 bg-neutral-100 opacity-30' /> : <></>}
                        <h3 className='text-Off-white text-xl font-bold'>{data.heading}</h3>
                        <p className='text-[15px] leading-7'>{data.paragraph}</p>
                    </div>  
                )}
            </div>    
        </section>
    );
};

export default NewNews;