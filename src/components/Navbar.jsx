
import globe from "../assets/globe.png";
import quora from "../assets/quora.png";
import lens from "../assets/lens.png";
import Avatar from "react-avatar";
import { useState } from "react";
import ASKQues from "./ASKQues";
import { NavLink } from "react-router-dom";
import NitenImg from '../assets/niten.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Reusable styles for navigation links
  const navLinkStyles = ({ isActive }) =>
    `relative flex items-center justify-center w-7 h-7 transition duration-200 ${
      isActive
        ? "border-b-4  rounded border-red-600 text-red-600 pb-2 "
        : "text-gray-500 hover:text-red-400 pb-3"
    }`;

    

  return (
    <>
      <div className="flex items-center w-full justify-center space-x-4 sm:space-x-16 sm:pl-20 pt-3 shadow-md h-14 z-0 px-4 sm:px-20 border-b-2 ">
        {/* Quora Logo */}
        <NavLink to="/" className="flex-shrink-0 mr-3 mb-3">
          <img className="w-24 h-7 cursor-pointer" src={quora} alt="Quora" />
        </NavLink>

        {/* Navigation Icons */}
        <div className="flex space-x-2 sm:space-x-6">
          <NavLink to="/" className={navLinkStyles}>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg>
          </NavLink>
          <NavLink to="/clipboard" className={navLinkStyles}>
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 2048 2048"><path fill="currentColor" d="M1792 256v1792H256V256h512q0-53 20-99t55-82t81-55t100-20q53 0 99 20t82 55t55 81t20 100h512zM640 512h768V384h-256V256q0-27-10-50t-27-40t-41-28t-50-10q-27 0-50 10t-40 27t-28 41t-10 50v128H640v128zm1024-128h-128v256H512V384H384v1536h1280V384zM768 896h768v128H768V896zm0 384h768v128H768v-128zm0 384h768v128H768v-128zM512 896h128v128H512V896zm0 384h128v128H512v-128zm0 384h128v128H512v-128z"/></svg>
          </NavLink>
          <NavLink to="/answer" className={navLinkStyles}>
        
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>

          </NavLink>
          <NavLink to="/group" className={navLinkStyles}>
           
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 28 28"><path fill="currentColor" d="M8.5 3.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5ZM4.75 5.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0ZM2 12.982C2 11.887 2.887 11 3.982 11h5.6a4.728 4.728 0 0 0-.326 1.5H3.982a.482.482 0 0 0-.482.482v.393c0 .172.002 1.213.607 2.197c.52.844 1.554 1.759 3.753 1.907a2.993 2.993 0 0 0-1.136 1.368c-2.005-.371-3.207-1.372-3.894-2.49C2 15.01 2 13.618 2 13.378v-.395ZM18.417 11c.186.468.3.973.326 1.5h5.275c.266 0 .482.216.482.482v.393c0 .172-.002 1.213-.608 2.197c-.519.844-1.552 1.759-3.752 1.907c.505.328.904.805 1.136 1.368c2.005-.371 3.207-1.372 3.894-2.49c.83-1.348.83-2.74.83-2.98v-.395A1.982 1.982 0 0 0 24.018 11h-5.6ZM19.5 3.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5Zm-3.75 2.25a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0ZM7.5 19.982C7.5 18.887 8.387 18 9.482 18h9.036c1.095 0 1.982.887 1.982 1.982v.395c0 .24 0 1.632-.83 2.98C18.8 24.773 17.106 26 14 26s-4.8-1.228-5.67-2.642c-.83-1.349-.83-2.74-.83-2.981v-.395Zm1.982-.482a.482.482 0 0 0-.482.482v.393c0 .172.002 1.213.607 2.197c.568.922 1.749 1.928 4.393 1.928c2.644 0 3.825-1.006 4.392-1.928c.606-.983.608-2.025.608-2.197v-.393a.482.482 0 0 0-.482-.482H9.482Zm2.268-6.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0ZM14 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 14 9Z"/></svg>

          </NavLink>
          <NavLink to="/notification" className={navLinkStyles}>
         
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
</svg>
          </NavLink>
        </div>

        {/* Search Bar */}
        <div className="flex border border-spacing-1 h-9 w-72 p-1 mx-3 mb-3 hover:border-blue-500 sm:w-72">
          <img src={lens} alt="Search" className="w-3 h-3 mt-2 ml-3" />
          <input
            placeholder="Search Quora"
            className="ml-2 outline-none w-full"
          />
        </div>

        {/* Profile and Try Quora+ */}
        <div className="flex items-center space-x-3 sm:space-x-6 mb-3">
          <h1 className="text-sm border rounded-full pt-1 pb-1 pl-3 pr-3 hidden sm:block h-9 text-gray-500 hover:bg-gray-200">
            Try Quora+
          </h1>
          <img src={globe} alt="Globe" className="w-5 h-5 cursor-pointer hover:text-red-400 " />
          <Avatar src={NitenImg} round size="30" className="cursor-pointer " name="niten" />
          <h1
            onClick={() => setIsOpen(true)}
            className="bg-red-700 rounded-full text-sm cursor-pointer  text-white w-36 pl-6 pt-2 h-9"
          >
            Add Question
          </h1>
          {isOpen && (
            <ASKQues
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              initialTab={"Add Question"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
