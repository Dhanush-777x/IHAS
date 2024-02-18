// Navbar.js
import React, { useState, useEffect } from "react";
import './Navbar.css';
import logo from '../Assets/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < window.innerHeight;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 z-10 w-full py-7 bg-secondary ${isScrolled ? 'lg:bg-secondary shadow-lg' : 'lg:bg-transparent'}`}>
      <div className="flex items-center justify-between w-full mx-auto px-4">
        <Link to="/" className="flex items-center text-gray-700 hover:text-black"> {/* Use Link instead of anchor tag */}
          <img className="h-12 w-auto mx-3 pr-2" src={logo} alt="Logo" />
          <span className="text-xl font-semibold">IHAS</span>
        </Link>
        <div className="hidden lg:flex items-center justify-center flex-1">
          <HashLink to="/home#Section1" className="py-3 px-5 text-center text-gray-600 hover:text-black">Home</HashLink>
          <Link to="/diseases" className="py-3 px-5 text-center text-gray-600 hover:text-black">Patient's Corner</Link>
          <Link to="/diseases" className="py-3 px-5 text-center text-gray-600 hover:text-black">Healthcare Providers</Link>
          <Link to="/medical-centers" className="py-3 px-5 text-center text-gray-600 hover:text-black">Medical Centers</Link>
          <Link to="/research-papers" className="py-3 px-5 text-center text-gray-600 hover:text-black">Researchers</Link>
          <HashLink to="/news#NewsSection" className="py-3 px-5 text-center text-gray-600 hover:text-black">News</HashLink>
          <Link to="/government-schemes" className="py-3 px-5 text-center text-gray-600 hover:text-black">Schemes</Link>
          <HashLink to="/faq#faqSection" className="py-3 px-5 text-center text-gray-600 hover:text-black">FAQ</HashLink>
          <HashLink to="/contact-us#footerSection" className="py-3 px-5 text-center text-gray-600 hover:text-black">Contact Us</HashLink>
          </div>
        <button 
          onClick={toggleMenu}
          className="text-gray-700 hover:text-black focus:outline-none lg:hidden shadow-lg"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg 
            className="w-6 h-6" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <Link to="/chat" className="glassmorphism-button hidden lg:block ml-4">
          <FontAwesomeIcon icon={faComments} className="mr-2" />
          Chat with Prakriti
        </Link>
      </div>
      <div className={`flex flex-col lg:flex-row w-full lg:w-auto p-10 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
        <Link to="/home" className="py-2 pl-3 pr-4 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black">Home</Link> 
        <Link to="/" className="py-2 pl-3 pr-4 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black">Patient's Corner</Link>
        <Link to="/" className="py-2 pl-3 pr-4 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black">Healthcare Providers</Link>   
        <Link to="/medical-centers" className="py-2 pl-3 pr-4 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black">Medical Centers</Link> 
        <Link to="/research-papers" className="py-2 pl-3 pr-4 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black">Researchers</Link> 
        <Link to="/" className="py-2 pl-3 pr-4 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black">Schemes</Link>
        <HashLink to="/contact-us#footerSection" className="py-2 pl-3 pr-4 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black">Contact Us</HashLink> 
        <Link to="" className="glassmorphism-button py-2 mx-10 text-center text-gray-700 hover:text-black lg:border-b lg:border-gray-100 lg:hover:bg-transparent lg:hover:black" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faComments} className="mr-2" />
          Chat with Prakriti
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
