'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FadeInSection from '../components/FadeInSection';
import { News } from '@/types/microcms';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

// カテゴリーの色を取得
const getCategoryColor = (category: string) => {
  switch (category) {
    case 'お知らせ':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'イベント':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    case 'サービス':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

// 日付のフォーマット
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export default function NewsContent({ newsData }: { newsData: News[] }) {
  return (
    <div>
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        <ParticlesBackground />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="News"
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
              Latest Updates
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              News
            </h1>
            <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl opacity-90">
              最新のお知らせや<br />
              イベント情報をお届けします
            </p>
          </div>
        </div>
      </section>

      {/* お知らせ一覧 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              お知らせ一覧
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {newsData.map((news, index) => (
              <FadeInSection key={news.id} delay={index * 100}>
                <Link href={`/news/${news.id}`} className="block h-full">
                  <div className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 h-full flex flex-col cursor-pointer">
                    {/* サムネイル画像 */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={news.image?.url || '/images/hero.png'}
                        alt={news.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    {/* コンテンツ */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* 日付とカテゴリー */}
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-sm text-gray-400">{formatDate(news.publishedAt)}</time>
                        <span className={`text-xs px-3 py-1 rounded-full border ${getCategoryColor(news.category)}`}>
                          {news.category}
                        </span>
                      </div>

                      {/* タイトル */}
                      <h3 className="text-lg font-bold mb-3 text-white group-hover:text-gray-200 transition-colors line-clamp-2">
                        {news.title}
                      </h3>

                      {/* 説明 */}
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                        {news.description}
                      </p>

                      {/* 詳細リンク */}
                      <div className="flex items-center text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span>詳細を見る</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
