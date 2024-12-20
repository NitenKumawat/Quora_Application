


import React, { useState,useEffect } from "react";


const ASKQues = ({ isOpen, setIsOpen,initialTab }) => {
  const [tab, setTab] = useState(initialTab);
  

  useEffect(() => {
    if (initialTab) {
      setTab(initialTab); // Update the tab whenever the modal is reopened
    }
  }, [initialTab]);

  if (!isOpen) return  null ; // If not open, render nothing

  return (

   
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
  <div className="bg-white rounded-lg w-full max-w-4xl max-h-screen h-4/5 shadow-lg m-16 relative">
    <div>
      <button className="text-gray-500 ml-8 mt-5 text-2xl hover:text-gray-700" onClick={() => setIsOpen(false)} // Close the modal
      >
        &times;
      </button>
    </div>

    {/* Header with Tabs */}
    <div className="flex items-center  z-10 justify-between border-b-2 px-4 w-full">
      <div className="flex w-full">
        <button
          className={`px-4 py-2 flex-1 font-semibold ${
            tab === "Add Question" ? "text-blue-500 border-b-4 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setTab("Add Question")}
        >
          Add Question
        </button>
        <button
          className={`px-4 py-2 font-semibold flex-1 ${
            tab === "Create Post" ? "text-blue-500 border-b-4 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setTab("Create Post")}
        >
          Create Post
        </button>
      </div>
    </div>

    {/* Add Question Tab */}
    {tab === "Add Question" && (
      <>
        <div className="bg-blue-100 p-4 mt-3 pl-10">
          <h3 className="text-blue-600 font-semibold mb-2">Tips on getting good answers quickly</h3>
          <ul className="list-disc text-blue-700 text-sm space-y-1">
            <li>Make sure your question has not been asked already</li>
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </ul>
        </div>

        <div className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <span className="rounded-full bg-gray-300 h-6 w-6">N</span>
            <select
              className="text-gray-600 border rounded-full px-2 py-1 text-sm hover:bg-gray-100"
              defaultValue="Public"
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
          <div className="px-2 pb-4">
            <textarea
              placeholder='Start your question with "What", "How", "Why", etc.'
              className="w-full text-gray-700 outline-none resize-none border-b border-gray-300 hover:border-blue-500 leading-normal h-8"
            ></textarea>
          </div>
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 w-full flex justify-end border-t p-4 space-x-2 bg-white">
          <button className="px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">Cancel</button>
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600">Add question</button>
        </div>
      </>
    )}

    {/* Create Post Tab */}
    {tab === "Create Post" && (
      <>
        <div className="flex items-center px-4 py-3 space-x-3">
          <img
            src="https://via.placeholder.com/40" // Replace with actual profile image
            alt="Profile"
            className="rounded-full w-10 h-10"
          />
          <div>
            <h4 className="font-semibold text-gray-800">Niten Kumawat</h4>
            <select className="text-sm border rounded-full px-2 py-1 hover:bg-gray-100">
              <option value="Jobner">lives in Jobner</option>
              <option value="Other">Other Location</option>
            </select>
          </div>
        </div>

        <div className="px-4 pb-4">
          <textarea
            placeholder={"Say something...."}
            className="w-full p-2 text-gray-700 outline-none resize-none "
          ></textarea>

          <div className="absolute bottom-0 left-0 w-full flex justify-between border-t p-4 bg-white">
            <div className="flex space-x-3 text-gray-500">
              <button className="hover:text-blue-500">
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/?size=100&id=57278&format=png&color=000000"
                  alt="Add Location"
                />
              </button>
              <button className="hover:text-blue-500">
                <img src="https://img.icons8.com/ios/20/image.png" alt="Add Media" />
              </button>
            </div>
            <button className="px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">Post</button>
          </div>
        </div>
      </>
    )}
  </div>
</div>

  );
};



  
  export default ASKQues
  