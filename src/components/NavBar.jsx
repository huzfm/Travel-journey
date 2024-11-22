


// import { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//       const [isOpen, setIsOpen] = useState(false);
//       const [dropdownOpen, setDropdownOpen] = useState(false);

//       return (
//             <nav className="bg-emerald-950 border-gray-200">
//                   <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
//                         {/* Logo and Brand */}
//                         <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//                               <span className="text-4xl font-semibold whitespace-nowrap dark:text-white">Kashmir</span>
//                         </a>

//                         {/* Mobile Menu Button */}
//                         <button
//                               onClick={() => setIsOpen(!isOpen)}
//                               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-black dark:focus:ring-gray-600"
//                               aria-expanded={isOpen}
//                         >
//                               <span className="sr-only">Open main menu</span>
//                               <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//                                     <path
//                                           stroke="currentColor"
//                                           strokeLinecap="round"
//                                           strokeLinejoin="round"
//                                           strokeWidth="2"
//                                           d="M1 1h15M1 7h15M1 13h15"
//                                     />
//                               </svg>
//                         </button>

//                         {/* Navigation Links */}
//                         <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
//                               <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">

//                                     {/* Home Dropdown with Mouseover/Mouseleave */}
//                                     <li
//                                           className="relative"
//                                           onMouseEnter={() => setDropdownOpen(true)} // Show dropdown on mouse enter
//                                           onMouseLeave={() => setDropdownOpen(false)} // Hide dropdown on mouse leave
//                                     >
//                                           <Link
//                                                 to="/"
//                                                 className="flex items-center space-x-2 text-lg block py-2 px-3 text-white rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green dark:bg-green-600 md:dark:bg-transparent"
//                                           >
//                                                 <span>Home</span>
//                                                 {/* Arrow Indicator */}
//                                                 <span className={`text-lg ${dropdownOpen ? 'rotate-180' : ''} transition-transform duration-200`}>
//                                                       ▼
//                                                 </span>
//                                           </Link>

//                                           {/* Dropdown Menu */}
//                                           {dropdownOpen && (
//                                                 <div className="absolute left-0 mt-2 space-y-2 bg-white text-black rounded-lg shadow-md w-40">
//                                                       <Link
//                                                             to="/#about"
//                                                             className="block py-2 px-4 text-gray-800 hover:bg-green-100 rounded"
//                                                       >
//                                                             About
//                                                       </Link>
//                                                       <Link
//                                                             to="/#contact"
//                                                             className="block py-2 px-4 text-gray-800 hover:bg-green-100 rounded"
//                                                       >
//                                                             Contact
//                                                       </Link>
//                                                 </div>
//                                           )}
//                                     </li>

//                                     {/* Other Links */}
//                                     <li>
//                                           <Link
//                                                 to="/places"
//                                                 className="text-lg block py-2 px-3 text-gray-900 rounded hover:bg-green md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent"
//                                           >
//                                                 Places
//                                           </Link>
//                                     </li>

//                               </ul>
//                         </div>
//                   </div>
//             </nav>
//       );
// }

// export default Navbar;



import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
      const [isOpen, setIsOpen] = useState(false);
      const [dropdownOpen, setDropdownOpen] = useState(false);

      return (
            <nav className="bg-emerald-950 border-gray-200 z-100
            ">
                  <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
                        {/* Logo and Brand */}
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                              <span className="text-4xl font-semibold whitespace-nowrap dark:text-white">Kashmir</span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-black dark:focus:ring-gray-600"
                              aria-expanded={isOpen}
                        >
                              <span className="sr-only">Open main menu</span>
                              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                    <path
                                          stroke="currentColor"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M1 1h15M1 7h15M1 13h15"
                                    />
                              </svg>
                        </button>

                        {/* Navigation Links */}
                        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
                                    onClick={() => setIsOpen(!isOpen)}
                              >

                                    {/* Home Dropdown with Mouseover/Mouseleave */}
                                    <li
                                          className="relative z-10"
                                          onMouseEnter={() => setDropdownOpen(true)} // Show dropdown on mouse enter
                                          onMouseLeave={() => setDropdownOpen(false)} // Hide dropdown on mouse leave


                                    >
                                          <Link
                                                to="/"
                                                className="flex items-center space-x-2 text-lg block py-2 px-3 text-white rounded hover:bg-gray-700 md:hover:bg-transparent"
                                          >
                                                <span>Home</span>
                                                {/* Arrow Indicator */}
                                                <span className={`text-lg ${dropdownOpen ? 'rotate-180' : ''} transition-transform duration-200`}>
                                                      ▼
                                                </span>
                                          </Link>

                                          {/* Dropdown Menu */}
                                          {dropdownOpen && (
                                                <div className="absolute left-0 mt-0 space-y-0 bg-white text-black rounded-lg shadow-md w-40">
                                                      <a
                                                            href="#about"
                                                            className="block py-2 px-4 text-gray-800 hover:bg-green-100 rounded"
                                                      >
                                                            About
                                                      </a>
                                                      <a
                                                            href="#contact"
                                                            className="block py-2 px-4 text-gray-800 hover:bg-green-100 rounded"
                                                      >
                                                            Contact
                                                      </a>
                                                </div>
                                          )}
                                    </li>

                                    {/* Other Links */}
                                    <li>
                                          <Link
                                                to="/places"
                                                className="text-lg block py-2 px-3 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent dark:text-white"
                                          >
                                                Places
                                          </Link>
                                    </li>

                              </ul>
                        </div>
                  </div>
            </nav>
      );
}

export default Navbar;
