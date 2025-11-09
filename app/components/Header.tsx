'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
            Film Studio K
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-900 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-gray-900 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          <ul className="hidden md:flex space-x-8 items-center">
            <li><Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link></li>
            <li><Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</Link></li>
            <li><Link href="/works" className="text-gray-700 hover:text-gray-900 transition-colors">Works</Link></li>
            <li><Link href="/contact" className="bg-white text-gray-900 border-2 border-gray-900 px-6 py-2 rounded-lg shadow-sm hover:shadow-md hover:bg-gray-900 hover:text-white hover:-translate-y-0.5 transition-all duration-300">Contact</Link></li>
          </ul>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-4">
              <li><Link href="/" className="block text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" className="block text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link href="/services" className="block text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
              <li><Link href="/works" className="block text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setIsMenuOpen(false)}>Works</Link></li>
              <li><Link href="/contact" className="block bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 rounded-lg shadow-sm hover:shadow-md text-center hover:bg-gray-900 hover:text-white transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
