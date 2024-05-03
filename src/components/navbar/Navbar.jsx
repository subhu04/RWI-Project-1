import React, { useState } from "react";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CgProfile } from "react-icons/cg";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  let Links = [
    { name: "Home", link: "/" },
    {name:"All Products",link:"/allproducts" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
    { name: "Signup", link: "/loginSignup" },
   
  ];
  let [open, setOpen] = useState(false);
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top when a link is clicked
};

  return (
    <div className="shadow-md w-full sticky z-50 bottom-0 left-0 ... top-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <BookOpenIcon className="w-7 h-7 text-red-600" />
          <span>Exclusive</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              {/* Use Link component */}
              <Link
                to={link.link}
                className={`text-gray-800 hover:text-red-600 duration-500 ${window.location.pathname === link.link ?  'border-b-2 border-red-600 text-red-600' : ''}`
              }
              onClick={handleClick}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <div className="relative ml-0 md:ml-10">
            <input
              type="text"
              className="border-2 border-black-300 rounded-md pl-10 pr-4 py-2"
              placeholder="What are you looking for?"
            />
            <svg
              className="absolute left-3 top-2 h-5 w-5 text-gray-400 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>

          <div className=" flex  gap-6 mr-3 ml-3 mt-3 md:mt-0">
            {/* Use Link component */}
            <Link to="/account" onClick={handleClick} className={`hover:text-red-600 ${window.location.pathname === '/account' ? 'text-red-600' : ''}`}>
              <CgProfile />
            </Link>
            {/* Use Link component */}
            <Link to="/cart" onClick={handleClick} className={`hover:text-red-600 ${window.location.pathname === '/cart' ? 'text-red-600' : ''}`}>
              <FaCartArrowDown />
            </Link>
            {/* Use Link component */}
            <Link to="/wishlist" onClick={handleClick} className={`hover:text-red-600 ${window.location.pathname === '/wishlist' ? 'text-red-600' : ''}`}>
              <FaRegHeart />
            </Link>
          </div>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
