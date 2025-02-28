// components/Navbar.js
import Link from 'next/link';
import { motion } from 'framer-motion';

// import { useState } from 'react';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
//       {/* Mobile menu button */}
//       {/* <button
//         className="md:hidden" 
//         onClick={() => setIsMenuOpen(!isMenuOpen)}
//       >
//         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>

//       {/* Navigation links */}
//       <div className="hidden md:flex items-center space-x-12">
//         <Link href="/" className="font-bold text-lg">
//           HOME
//         </Link>
//         <Link href="/shop" className="font-bold text-lg">
//           SHOP
//         </Link>
//       </div>

//       {/* Logo */}
//       <div className="absolute left-1/2 transform -translate-x-1/2">
//         <Link href="/" className="font-extrabold text-2xl">
//           12AM
//         </Link>
//       </div>

//       {/* Right navigation */}
//       <div className="hidden md:flex items-center space-x-12">
//         <Link href="/contact" className="font-bold text-lg">
//           CONTACT
//         </Link>
//         <Link href="/cart" className="font-bold text-lg">
//           CART
//         </Link>
//       </div>

//       {/* User icon */}
//       <Link href="/account" className="rounded-full bg-white p-1">
//         <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
//           <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//         </svg>
//       </Link>

//       {/* Mobile menu, shown/hidden based on menu state */}
//       {/* {isMenuOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full bg-black z-50 py-4">
//           <div className="flex flex-col items-center space-y-4">
//             <Link href="/" className="font-bold text-lg">HOME</Link>
//             <Link href="/shop" className="font-bold text-lg">SHOP</Link>
//             <Link href="/contact" className="font-bold text-lg">CONTACT</Link>
//             <Link href="/cart" className="font-bold text-lg">CART</Link>
//           </div>
//         </div>
//       )} */}
//     </nav>
//   );


// };


export default function Nav() {
  return (
    
     <div className="nav-container w-[1200px] h-[88.4px] relative mx-auto px-4 bg-black">
      <div className="w-[75.53px] h-[76.44px] bg-[#000] rounded-[38.22px] absolute top-0 left-[45px] z-[9]">
        <div className="w-[44.59px] h-[44.59px] bg-[url(https://static.codia.ai/image/2025-02-28/fa8d9b43-95a1-4a96-9557-8fb9d5807f31.png)] bg-cover bg-no-repeat relative overflow-hidden z-10 mt-[18.2px] mr-0 mb-0 ml-[15.47px]" />
      </div>
      <div className="w-[5.25%] h-[86.47%] bg-[url(https://static.codia.ai/image/2025-02-28/ebd9d5bd-9e8a-4a36-a0d2-c8f2a1f5127f.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[9.05%] left-[91.81%] z-[11]" />
      {/* <div className="w-[1200px] h-[80px] bg-[url(https://static.codia.ai/image/2025-02-28/e556e843-1af6-4cdc-9748-ecc774c84649.png)] bg-cover bg-no-repeat absolute top-[8.4px] left-0 z-[8]" /> */}
      <span className="flex h-[50px] justify-start items-start font-['Aka-AcidGR-Compacta'] text-[47.31999969482422px] font-normal leading-[49.743px] text-[#fff] tracking-[3.31px] absolute top-[26px] left-[678px] text-left whitespace-nowrap z-[12]">
        12AM
      </span>
      <span className="flex h-[26.39px] justify-start items-start font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-[#000] absolute top-[56px] left-[921px] text-left whitespace-nowrap z-[5]">
        CONTACT
      </span>
      <span className="flex h-[26px] justify-start items-start font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-[#000] absolute top-[56px] left-[449px] text-left whitespace-nowrap z-[3]">
        SHOP
      </span>
      <span className="flex h-[18px] justify-start items-start font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-[#000] absolute top-[56px] left-[286px] text-left whitespace-nowrap z-[1]">
        HOME
      </span>
      <span className="flex h-[18px] justify-start items-start font-['Bronx'] text-[22.75px] font-normal leading-[17.927px] text-[#000] absolute top-[56px] left-[1123px] text-left whitespace-nowrap z-[7]">
        cart
      </span>
    </div>
    
  );
}
