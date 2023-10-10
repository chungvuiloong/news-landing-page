import HeadLineImage from '@/components/HeadLineImage'
import Headline from '@/components/Headline'
import Nav from '@/components/Nav'
import NewPost from '@/components/NewPost'
import TopThree from '@/components/TopThree'


export default function Home() {
  return (
    <main>
        <div className='container mx-auto'>
            <Nav />
            <div className='2xl:grid grid-cols-3 flex flex-col 2xl:gap-8 gap-0'>
                <HeadLineImage />
                <Headline />
                <NewPost />
                <TopThree />
            </div>
        </div>
    </main>
  )
}
