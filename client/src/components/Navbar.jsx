import React, { useState, useRef, useEffect } from 'react';
import { HiMenuAlt4, HiSearch } from 'react-icons/hi'; // Importing necessary icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false); // State to control search visibility

  const searchBarRef = useRef(null); // Ref to the search bar
  const searchIconRef = useRef(null); // Ref to the search icon button

  // Toggle search bar visibility
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // Close search bar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close search bar if clicked outside of search bar or search icon
      if (
        searchBarRef.current && !searchBarRef.current.contains(event.target) &&
        searchIconRef.current && !searchIconRef.current.contains(event.target)
      ) {
        setSearchVisible(false);
      }
    };

    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-transparent p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        {/* Navigation links (Desktop) */}
        <div className="space-x-8 hidden md:flex">
          <a href="/" className="text-black hover:text-gray-300">Home</a>
          <a href="/about" className="text-black hover:text-gray-300">Shop</a>
          <a href="/services" className="text-black hover:text-gray-300">expert</a>
          <a href="/projects" className="text-black hover:text-gray-300">calculation</a>
          <a href="/Shop" className="text-black hover:text-gray-300">Shop</a>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300">
            Search
          </button>
        </div>

        {/* Search Bar (Mobile) - Initially hidden, shows when toggled */}
        <div
          ref={searchBarRef}
          className={`${searchVisible ? 'block' : 'hidden'} lg:hidden absolute top-16 left-0 w-full bg-white p-4`}
        >
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full p-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            ref={searchIconRef} 
            onClick={toggleSearch} 
            className="text-black"
          >
            <HiSearch size={24} />
          </button>
        </div>



        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
            <HiMenuAlt4 size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {menuOpen && (
        <div className="md:hidden bg-red-600 p-4">
          <ul className="space-y-4 text-white">
            <li><a href="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/about" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="/services" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="/projects" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="/Shop" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Shop</a></li>
            
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
