import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-black via-neutral-950 to-black text-white border-t border-white/10 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="group">
            <div className="relative backdrop-blur-s transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0  transition-opacity duration-500"></div>
              <h3 className="relative text-xl md:text-2xl font-bold mb-4 tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Film Studio K
              </h3>
              <p className="relative text-gray-300 text-sm leading-relaxed">
                〒920-0000<br />
                石川県金沢市三口町金9-12
              </p>
            </div>
          </div>

          <div className="group">
            <div className="relative backdrop-blur-s transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0  transition-opacity duration-500"></div>
              <h4 className="relative font-bold mb-4 text-lg tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Menu
              </h4>
              <ul className="relative space-y-3 text-sm">
                <li>
                  <Link href="/" className="group/link relative text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover/link:w-4 transition-all duration-300"></span>
                    トップ
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="group/link relative text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover/link:w-4 transition-all duration-300"></span>
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group/link relative text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover/link:w-4 transition-all duration-300"></span>
                    事業内容
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="group/link relative text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover/link:w-4 transition-all duration-300"></span>
                    実績
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="group/link relative text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-green-400 to-cyan-400 group-hover/link:w-4 transition-all duration-300"></span>
                    お知らせ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="group/link relative text-gray-300 hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover/link:w-4 transition-all duration-300"></span>
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="group">
            <div className="relative backdrop-blur-s transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent rounded-2xl opacity-0  transition-opacity duration-500"></div>
              <h4 className="relative font-bold mb-4 text-lg tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Follow Us
              </h4>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/social relative inline-flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 text-sm backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-white/30 hover:bg-white/10 hover:scale-105"
              >
                <svg className="w-6 h-6 group-hover/social:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 pt-8 text-center">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <p className="text-sm text-gray-400 font-light">&copy; 2025 Film Studio K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
