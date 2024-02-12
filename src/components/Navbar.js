import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo_new from "../assets/logo_new.png";

const NavItem = ({ to, text, onClick }) => {
  const location = useLocation();
  const isSelected = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block font-onest px-3 lg:inline-block text-base-xl lg:mt-0 mr-4 lg:mr-8 py-2 ${
        isSelected
          ? "rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white"
          : "hover:rounded-xl hover:bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:text-white"
      }`}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false); // Set the initial state to false

  const handleNavItemClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="flex items-center font-onest w-full justify-between flex-wrap pl-2 text-[16px] backdrop-blur-sm bg-[#050520]/60 fixed top-0 z-[1000]">
      <Link
        to="/"
        className="mr-3 inline-flex items-center lg:h-[22%] lg:w-[15%] h-[35%] w-[30%]"
      >
        <img src={logo_new} alt="Logo"></img>
      </Link>
      <div className="block lg:hidden h-14">
        <button
          className="flex items-center px-3 py-2 border rounded mt-2 text-white hover:bg-white"
          onClick={handleNavItemClick}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          open ? "" : "hidden"
        }`}
      >
        <div className="lg:flex-grow mt-4 lg:text-center text-lg font-semibold subtext mb-4 lg:ml-[-17%]">
          <NavItem to="/blogs/all" text="Blogs" />
          <NavItem to="/projects" text="Projects" />
          <NavItem to="/about" text="About Us" />
          <NavItem to="/ourteam/" text="Our Team" />
          <NavItem to="/achievements" text="Achievements" />
          <NavItem to="/events/data-2-knowledge" text="Events" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import dropdown from "../assets/dropdown.svg";
// import "./Home/Home.css";
// import logo_new from "../assets/logo_new.png"

// const NavItem = ({ to, text, onClick }) => {
//   const location = useLocation();
//   const isSelected = location.pathname === to;

//   return (
//     <Link
//       to={to}
//       className={`block font-onest px-3 lg:inline-block text-base-xl lg:mt-0 mr-4 lg:mr-8 py-2 ${
//         isSelected ? "rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white" : "hover:rounded-xl hover:bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:text-white"
//       }`}
//       onClick={onClick}
//     >
//       {text}
//     </Link>
//   );
// };

// const Navbar = () => {
//   const [open, setOpen] = useState(true);

//   const handleNavItemClick = () => {
//     setOpen(!open);
//   };

//   return (
//     <nav className="flex items-center font-onest w-full justify-between flex-wrap pl-2 text-[16px] backdrop-blur-sm bg-[#050520]/60 fixed top-0 z-[1000] ">
//       <Link to="/" className="mr-3 inline-flex items-center h-[22%] w-[15%]">
//          <img src={logo_new}></img>
//        </Link>
//       <div className="block lg:hidden">
//         <button
//           className="flex items-center px-3 py-2 border rounded border-black text-white  hover:bg-white"
//           onClick={handleNavItemClick}
//         >
//           <ion-icon name={open ? "close" : "menu"}></ion-icon>
//         </button>
//       </div>
//       <div
//         className={`w-full block flex-grow  lg:flex lg:items-center lg:w-auto ${open ? "" : "hidden"}`}
//       >
//         <div className="lg:flex-grow mt-4 lg:text-center text-lg font-semibold subtext mb-4 lg:ml-[-17%]">
//           <NavItem to="/blogs/all" text="Blogs" />
//           <NavItem to="/projects" text="Projects" />
//           <NavItem to="/about" text="About Us" />
//           <NavItem to="/ourteam" text="Our Team" />
//           <NavItem to="/achievements" text="Achievements" />
//           <NavItem to="/events/data-2-knowledge" text="Events" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import logo from '../assets/Logo.svg'
// import dropdown from '../assets/dropdown.svg'

// const Navbar = () => {

//   let [open, setOpen] = useState(true);
//   let [open1, setOpen1] = useState(false);

//   return (
//     <nav className="flex items-center justify-between flex-wrap bg-white border-b-[1.5px] border-black p-2 text-[16px]">
//       <Link to="/" className="mr-4 inline-flex items-center">
//         <img src={logo}></img>
//       </Link>
//       <div className="block lg:hidden">
//         <button className="flex items-center px-3 py-2 border rounded border-black text-white bg-[#4051A3] hover:text-black hover:bg-white" onClick={() => setOpen(!open)}>
//           <ion-icon name={open ? "close" : "menu"}></ion-icon>
//         </button>
//       </div>
//       <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${open ? '' : 'hidden'}`}>
//         <div className="text-sm lg:flex-grow mt-4 lg:text-center font-[Montserrat] font-extrabold">
//           <Link to="/projects" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Projects</span>
//           </Link>
//           {/* <Link to="/" id="dropdown" className="relative block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8" onClick={() => setOpen1(!open1)}>
//             <div className='flex'>
//               <span className=''>Events</span>
//               <img className='w-6 h-6 ml-1' src={dropdown} alt="" />
//             </div>
//             <div className={`absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open1 ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//               <div className="py-1" role="none">
//                 <Link to="/" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-0">Events</Link>
//                 <Link to="/events/blogs/all" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-1">Blogs</Link>
//               </div>
//             </div>
//           </Link> */}
//           <Link to="/events/blogs/all" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Blogs</span>
//           </Link>
//           <Link to="/ourteam" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Our Team</span>
//           </Link>
//           <Link to="/beginner's-guide" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Beginner's Guide</span>
//           </Link>
//           <Link to="/about" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>About Us</span>
//           </Link>
//           <Link to="/events/data-2-knowledge" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Data 2 Knowledge</span>
//           </Link>
//         </div>
//         {/* <div>
//           <Link href="/" className="inline-block text-sm py-4 px-12 leading-none border rounded-xl text-white bg-[#4051A3] border-black hover:bg-white hover:text-black mt-4 lg:mt-0 font-[Ubuntu] font-light">Sign In</Link>
//         </div> */}
//       </div>
//     </nav>
//   )

// }

// export default Navbar

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
// import logo from '../assets/Logo.svg'
// import dropdown from '../assets/dropdown.svg'

// const Navbar = () => {

//   let [open, setOpen] = useState(true);
//   let [open1, setOpen1] = useState(false);

//   return (
//     <nav className="flex items-center justify-between flex-wrap bg-white border-b-[1.5px] border-black p-2 text-[16px]">
//       <Link to="/" className="mr-4 inline-flex items-center">
//         <img src={logo}></img>
//       </Link>
//       <div className="block lg:hidden">
//         <button className="flex items-center px-3 py-2 border rounded border-black text-white bg-[#4051A3] hover:text-black hover:bg-white" onClick={() => setOpen(!open)}>
//           <ion-icon name={open ? "close" : "menu"}></ion-icon>
//         </button>
//       </div>
//       <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${open ? '' : 'hidden'}`}>
//         <div className="text-sm lg:flex-grow mt-4 lg:text-center font-[Montserrat] font-extrabold">
//           <Link to="/projects" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Projects</span>
//           </Link>
//           {/* <Link to="/" id="dropdown" className="relative block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8" onClick={() => setOpen1(!open1)}>
//             <div className='flex'>
//               <span className=''>Events</span>
//               <img className='w-6 h-6 ml-1' src={dropdown} alt="" />
//             </div>
//             <div className={`absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${open1 ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
//               <div className="py-1" role="none">
//                 <Link to="/" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-0">Events</Link>
//                 <Link to="/events/blogs/all" className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200 p-2 hover:rounded-full" role="menuitem" tabindex="-1" id="menu-item-1">Blogs</Link>
//               </div>
//             </div>
//           </Link> */}
//           <Link to="/events/blogs/all" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Blogs</span>
//           </Link>
//           <Link to="/ourteam" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Our Team</span>
//           </Link>
//           <Link to="/beginner's-guide" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Beginner's Guide</span>
//           </Link>
//           <Link to="/about" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>About Us</span>
//           </Link>
//           <Link to="/events/data-2-knowledge" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
//             <span>Data 2 Knowledge</span>
//           </Link>
//         </div>
//         {/* <div>
//           <Link href="/" className="inline-block text-sm py-4 px-12 leading-none border rounded-xl text-white bg-[#4051A3] border-black hover:bg-white hover:text-black mt-4 lg:mt-0 font-[Ubuntu] font-light">Sign In</Link>
//         </div> */}
//       </div>
//     </nav>
//   )

// }

// export default Navbar
