import HeadLineImage from '@/components/HeadLineImage'
import Headline from '@/components/Headline'
import NewPost from '@/components/NewPost'
import TopThree from '@/components/TopThree'


export default function Home() {
  return (
    <main>
        <div className='container mx-auto flex flex-col'>
            <div className='flex 2xl:flex-row flex-col'>
                <div className='basis-2/3'>
                    <HeadLineImage />
                    <Headline />
                </div>
                <div className='basis-1/3'>
                    <NewPost />
                </div>
            </div>
            <TopThree />
        </div>
    </main>
  )
}

// Home
// New
// Popular
// Trending
// Categories



// New 

// Hydrogen VS Electric Cars
// Will hydrogen-fueled cars ever catch up to EVs?

// The Downsides of AI Artistry
// What are the possible adverse effects of on-demand AI image generation?

// Is VC Funding Drying Up?
// Private funding by VC firms is down 50% YOY. We take a look at what that means.

