'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    message: '',
    agreedToPrivacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitMessage('お問い合わせありがとうございます。担当者より折り返しご連絡させていただきます。');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: '',
        message: '',
        agreedToPrivacy: false,
      });
    }, 1000);
  };

  return (
    <div>
      {/* ヒーローセクション - モダン3D */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        <ParticlesBackground />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Contact"
            fill
            className="object-cover opacity-30 -scale-x-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 text-left text-white px-8 md:px-16 lg:px-24 max-w-4xl">
          <div className="">
            <p className="text-sm md:text-base mb-4 tracking-widest font-light opacity-90 fade-in">
              Get In Touch
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Contact
            </h1>
            <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl opacity-90">
              お気軽に<br />
              お問い合わせください
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 text-center">
            <p className="text-gray-300 leading-relaxed">
              撮影のご依頼、お見積もり、ご質問など、<br className="md:hidden" />
              お気軽にお問い合わせください。<br />
              担当者より2営業日以内にご連絡させていただきます。
            </p>
          </div>

          {submitMessage && (
            <div className="mb-8 p-6 backdrop-blur-sm bg-green-500/20 border border-green-400/30 rounded-2xl text-green-100">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-200 mb-2">
                お名前 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white/40 focus:border-transparent outline-none transition-all"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-200 mb-2">
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white/40 focus:border-transparent outline-none transition-all"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-200 mb-2">
                電話番号 <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white/40 focus:border-transparent outline-none transition-all"
                placeholder="090-1234-5678"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-200 mb-2">
                お問い合わせ内容 <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-white/40 focus:border-transparent outline-none transition-all resize-vertical"
                placeholder="撮影希望日、撮影内容、ご予算などをご記入ください"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreedToPrivacy"
                name="agreedToPrivacy"
                checked={formData.agreedToPrivacy}
                onChange={handleChange}
                required
                className="w-5 h-5 rounded border-white/30 bg-white/10 text-white focus:ring-2 focus:ring-white/40 flex-shrink-0"
              />
              <label htmlFor="agreedToPrivacy" className="ml-3 text-sm text-gray-300">
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline font-bold"
                >
                  プライバシーポリシー
                </a>
                に同意します <span className="text-red-400">*</span>
              </label>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group relative w-full md:w-auto px-12 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white border-2 border-white/30 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-white/10 hover:border-white/50 text-lg font-semibold transition-all duration-300 overflow-hidden ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-1'
                }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative">{isSubmitting ? '送信中...' : '送信する'}</span>
              </button>
            </div>
          </form>

          <div className="mt-16 pt-16 border-t border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Company Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">Film Studio K</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  〒920-0000<br />
                  石川県金沢市三口町金9-12
                </p>
              </div>

              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-2">Follow Us</h3>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
