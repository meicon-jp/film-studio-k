'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold text-white hover:text-gray-300 transition-colors">
            Film Studio K
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          <ul className="hidden md:flex space-x-8 items-center">
            <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
            <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/works" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link href="/news" className="text-gray-300 hover:text-white transition-colors">News</Link></li>
            <li><Link href="/contact" className="bg-transparent text-white border-2 border-white px-6 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-white hover:text-gray-900 hover:-translate-y-0.5 transition-all duration-300">Contact</Link></li>
          </ul>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col items-center justify-center h-full px-8">
            <ul className="space-y-8 w-full max-w-sm">
              <li className={`transform transition-all duration-300 delay-75 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/about"
                  className="block text-2xl font-light text-gray-200 hover:text-white hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-white pl-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className={`transform transition-all duration-300 delay-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/services"
                  className="block text-2xl font-light text-gray-200 hover:text-white hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-white pl-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li className={`transform transition-all duration-300 delay-150 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/works"
                  className="block text-2xl font-light text-gray-200 hover:text-white hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-white pl-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li className={`transform transition-all duration-300 delay-200 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/news"
                  className="block text-2xl font-light text-gray-200 hover:text-white hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-white pl-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
              </li>
              <li className={`transform transition-all duration-300 delay-[275ms] ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <Link
                  href="/contact"
                  className="block text-center bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
