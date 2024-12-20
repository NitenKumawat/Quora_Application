import React from 'react'
import Navbar from '../components/Navbar'

const Notification = () => {
  return (
    <div className=''>
     <Navbar/>  
     <div className="flex h-screen  bg-white  ">
      {/* Sidebar */}
      <div className=" p-6">
      <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Filters</h2>
        </div>
        <div className="w-44 mt-6 border-t pt-4">
        <ul className="space-y-4 ">
          <li className="font-semibold rounded-sm text-red-700 bg-red-100 hover:bg-red-200   pl-4" >All Notifications</li>

         
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Stories</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Questions</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Spaces</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">People updates</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Comments and mentions</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Upvotes</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Your content</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Your profile</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Announcements</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Earnings</li>
          <li className=" rounded-sm text-gray-600  hover:bg-red-200   pl-4">Subscriptions</li>
        </ul>
        </div>
      
      </div>

      {/* Notifications */}
      <div className="flex-1 bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Notifications</h2>
          <button className="text-sm text-gray-500">Settings</button>
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex items-center space-x-4">
            <div className="h-10 w-10 rounded-full bg-yellow-300 flex items-center justify-center">
              {/* Placeholder for icon */}
              <span className="font-bold text-white">?</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">
                <span className="text-gray-700">Human Psychology Facts</span> ·
                Posted in a Space you might like · <span className="text-gray-400">Wed</span>
              </p>
              <p className="text-base font-semibold mt-1">What surprised you today?</p>
            </div>
            <button className="text-gray-500">
              <span className="text-xl">•••</span>
            </button>
          </div>
        </div>
      </div>
    </div>

     </div>
  )
}

export default Notification
