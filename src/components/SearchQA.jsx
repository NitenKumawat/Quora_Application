import Avatar from "react-avatar";
import { useState } from "react";
import ASKQues from "./ASKQues";
import question from "../assets/question.png";
import pen from "../assets/pen.png";
import edit from "../assets/edit.png";
import NitenImg from '../assets/niten.jpeg'
const SearchQA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("Add Question"); // Track the current tab for the modal

  const openModal = (selectedTab) => {
    setTab(selectedTab); // Set the desired tab
    setIsOpen(true); // Open the modal
  };

  return (
    <div className="bg-white p-2 m-3 h-22 border border-spacing-1 rounded-lg">
      <div className="flex mt-1.5">
        <Avatar round size="25" className="mt-0.5 ml-2 cursor-pointer" src={NitenImg} name="niten" />
        <input
          type="text"
          className="bg-gray-100 p-1 ml-4 placeholder-gray-400 border border-spacing-1 rounded-full w-full"
          placeholder="What do you want to ask or share?"
        />
      </div>
      <div className="flex pt-2 text-gray-700">
        {/* Ask Button */}
        <div
          onClick={() => openModal("Add Question")}
          className="flex-1 ml-1 mr-1 flex items-center justify-center text-sm rounded-full h-7 hover:bg-gray-200 cursor-pointer"
        >
          <img src={question} alt="" className="w-5 h-5" />
          <h1 className="ml-2">Ask</h1>
        </div>
        <h1>|</h1>

        {/* Answer Button */}
        <div
          onClick={() => openModal("Create Post")}
          className="flex-1 ml-1 mr-1 flex items-center justify-center text-sm rounded-full h-7 hover:bg-gray-200 cursor-pointer"
        >
          <img src={edit} alt="" className="w-5 h-5" />
          <h1 className="ml-2">Answer</h1>
        </div>
        <h1>|</h1>

        {/* Post Button */}
        <div
          onClick={() => openModal("Create Post")}
          className="flex-1 ml-1 mr-1 flex items-center justify-center text-sm rounded-full h-7 hover:bg-gray-200 cursor-pointer"
        >
          <img src={pen} alt="" className="w-5 h-5" />
          <h1 className="ml-2">Post</h1>
        </div>
      </div>

      {/* ASKQues Modal */}
      {isOpen && <ASKQues isOpen={isOpen} setIsOpen={setIsOpen} initialTab={tab} />}
    </div>
  );
};

export default SearchQA;
