"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold hover:text-blue-200">
            CPAN144 Assignment
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Home
            </Link>
            <Link href="/counter" className="hover:text-blue-200 transition-colors">
              Counter
            </Link>
            <Link href="/todo" className="hover:text-blue-200 transition-colors">
              Todo List
            </Link>
            <Link href="/profile" className="hover:text-blue-200 transition-colors">
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-blue-500 py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/counter" 
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Counter
              </Link>
              <Link 
                href="/todo" 
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Todo List
              </Link>
              <Link 
                href="/profile" 
                className="hover:text-blue-200 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}