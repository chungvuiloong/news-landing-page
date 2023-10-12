import Footer from '@/components/Footer'
import HeadLineImage from '@/components/HeadLineImage'
import Headline from '@/components/Headline'
import Nav from '@/components/Nav'
import NewPost from '@/components/NewPost'
import TopThree from '@/components/TopThree'


export default function Home() {
  return (
    <main>
        <Nav />
        <div className='container mx-auto'>
            <div className='2xl:pb-[8rem] pb-[5rem] 2xl:grid grid-cols-3 flex flex-col 2xl:gap-8 gap-0'>
                <HeadLineImage />
                <Headline />
                <NewPost />
                <TopThree /> 
            </div>
        </div>
        <Footer />
    </main>
  )
}
