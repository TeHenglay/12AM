// components/Navbar.js
import Link from 'next/link';
// import { useState } from 'react';

const Navbar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Mobile menu button */}
      {/* <button
        className="md:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button> */}

      {/* Navigation links */}
      <div className="hidden md:flex items-center space-x-12">
        <Link href="/" className="font-bold text-lg">
          HOME
        </Link>
        <Link href="/shop" className="font-bold text-lg">
          SHOP
        </Link>
      </div>

      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="font-extrabold text-2xl">
          12AM
        </Link>
      </div>

      {/* Right navigation */}
      <div className="hidden md:flex items-center space-x-12">
        <Link href="/contact" className="font-bold text-lg">
          CONTACT
        </Link>
        <Link href="/cart" className="font-bold text-lg">
          CART
        </Link>
      </div>

      {/* User icon */}
      <Link href="/account" className="rounded-full bg-white p-1">
        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </Link>

      {/* Mobile menu, shown/hidden based on menu state */}
      {/* {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black z-50 py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/" className="font-bold text-lg">HOME</Link>
            <Link href="/shop" className="font-bold text-lg">SHOP</Link>
            <Link href="/contact" className="font-bold text-lg">CONTACT</Link>
            <Link href="/cart" className="font-bold text-lg">CART</Link>
          </div>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;