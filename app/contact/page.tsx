'use client';

import { useState } from 'react';

// metadata は server component でのみ使用可能なため削除

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
    
    // フォーム送信のシミュレーション
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
    <div className="pt-16 md:pt-20">
      {/* ヘッダー */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact</h1>
          <p className="text-lg md:text-lg text-gray-300">お問い合わせ</p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-gray-700 leading-relaxed">
              撮影のご依頼、お見積もり、ご質問など、<br className="md:hidden" />
              お気軽にお問い合わせください。<br />
              担当者より2営業日以内にご連絡させていただきます。
            </p>
          </div>

          {submitMessage && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg text-green-800">
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* お名前 */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="example@email.com"
              />
            </div>

            {/* 電話番号 */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="090-1234-5678"
              />
            </div>

            {/* お問い合わせ内容 */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-vertical"
                placeholder="撮影希望日、撮影内容、ご予算などをご記入ください"
              />
            </div>

            {/* プライバシーポリシー同意 */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreedToPrivacy"
                name="agreedToPrivacy"
                checked={formData.agreedToPrivacy}
                onChange={handleChange}
                required
                className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-2 focus:ring-gray-900 flex-shrink-0"
              />
              <label htmlFor="agreedToPrivacy" className="ml-3 text-sm text-gray-700">
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-bold"
                >
                  プライバシーポリシー
                </a>
                に同意します <span className="text-red-500">*</span>
              </label>
            </div>

            {/* 送信ボタン */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-12 py-4 bg-white text-gray-900 border-2 border-gray-900 rounded-lg shadow-md text-lg font-semibold transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-900 hover:text-white hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>

          {/* 会社情報 */}
          <div className="mt-16 pt-16 border-t border-gray-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-700 mb-2">Film Studio K</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  〒920-0000<br />
                  石川県金沢市三口町金9-12
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">Follow Us</h3>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
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
