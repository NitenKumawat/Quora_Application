import bell from "../assets/bell.png"
import globe from "../assets/globe.png"
import group from "../assets/group.png"
import clipboard from "../assets/clipboard.png"
import edit from "../assets/edit.png"
import home from "../assets/home.png"
import quora from "../assets/quora.png"
import lens from "../assets/lens.png"
import Avatar from "react-avatar"
import { useState } from "react"
import ASKQues from "./ASKQues"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center w-full  justify-center space-x-4 sm:space-x-16 sm:pl-20 pt-3 shadow-md h-14  z-0 px-4 sm:px-20 border-b-2">
        {/* Quora Logo */}
        <NavLink to="/" className="flex-shrink-0 mr-3">
          <img className="w-24 h-7 cursor-pointer" src={quora} alt="Quora" />
        </NavLink>

        {/* Navigation Icons */}
        <div className="flex space-x-2 sm:space-x-6">
          <NavLink to="/" className="cursor-pointer">
            <img src={home} className="w-7 h-7" alt="Home" />
          </NavLink>
          <NavLink to="/" className="cursor-pointer">
            <img src={clipboard} className="w-7 h-7" alt="Clipboard" />
          </NavLink>
          <NavLink to="/addQuestion" className="cursor-pointer">
            <img src={edit} className="w-7 h-7" alt="Edit" />
          </NavLink>
          <NavLink to="/" className="cursor-pointer">
            <img src={group} className="w-7 h-7" alt="Group" />
          </NavLink>
          <NavLink to="/notification" className="cursor-pointer">
            <img src={bell} className="w-7 h-7" alt="Notifications" />
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="flex border border-spacing-1 h-9 w-72 p-1 ml-3 mr-3 hover:border-blue-500 sm:w-72">
          <img src={lens} alt="Search" className="w-3 h-3 mt-2 ml-3" />
          <input
            onChange=""
            placeholder="Search Quora"
            className="ml-2 outline-none w-full"
          />
        </div>

        {/* Profile and Try Quora+ */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <h1 className="text-sm border rounded-full pt-1 pb-1 pl-3 pr-3 hidden sm:block h-9 text-gray-500 hover:bg-gray-200">
            Try Quora+
          </h1>
          <img src={globe} alt="Globe" className="w-5 h-5 cursor-pointer" />
          <Avatar
            round
            size="30"
            className="cursor-pointer"
            name="niten"
          />
          <h1
            onClick={() => setIsOpen(true)}
            className="bg-red-700 rounded-full text-sm cursor-pointer text-white w-36 pl-6 pt-2 h-9"
          >
            Add Question
          </h1>
          {isOpen && <ASKQues isOpen={isOpen} setIsOpen={setIsOpen} initialTab={"Add Question"} />}
        </div>
      </div>
    </>
  );
}

export default Navbar;
