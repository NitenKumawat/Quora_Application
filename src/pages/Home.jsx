import SearchQA from '../components/SearchQA'
import Filter from '../components/Filter'
import Navbar from '../components/Navbar'
import PostSection from '../components/PostSection'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='bg-gray-100 flex justify-center'>
        <div className='w-full max-w-screen-xl h-full grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-4  -ml-16'>
          {/* Left Column - Filter Section */}
          <div className='col-span-1'>
            <Filter />
          </div>

          {/* Middle Column - Search and Posts Section */}
          <div className='col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-3'>
            <div>
              <SearchQA />
            </div>
            <div>
              <PostSection />
            </div>
          </div>

          {/* Right Column - Add more sections here if needed */}
          <div className='col-span-1'>
            {/* You can add another component here */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
