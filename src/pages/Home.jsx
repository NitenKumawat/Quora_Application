import SearchQA from '../components/SearchQA';
import Filter from '../components/Filter';
import Navbar from '../components/Navbar';
import PostSection from '../components/PostSection';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 flex lg:-ml-10 md:-ml-8 sm:-ml-0  justify-center w-full ">
        <div className="w-full max-w-screen-xl h-full flex  ">
          {/* Left Column - Filter Section */}
          <div className=" lg:flex flex-col w-1/4 p-2 ">
            <Filter />
          </div>

          {/* Middle Column - Search and Posts Section */}
          <div className="flex-1 ">
            <div className="mb-3">
              <SearchQA />
            </div>
            <div>
              <PostSection />
            </div>
          </div>

          {/* Right Column - Optional Component */}
          <div className="lg:flex flex-col w-1/4 bg-white p-4  mx-2 mt-3 shadow-md rounded">
            <div>
              <h2 className="text-lg font-semibold">Right Column</h2>
              <p className="text-gray-600">Content for the right column goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
