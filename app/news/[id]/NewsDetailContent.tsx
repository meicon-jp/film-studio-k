'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import FadeInSection from '../../components/FadeInSection';
import { News } from '@/types/microcms';

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

export default function NewsDetailContent({ news }: { news: News }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageModalOpen(false);
      }
    };

    if (isImageModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // モーダルが開いている間はスクロールを防ぐ
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isImageModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-950">
      {/* 記事コンテンツ - 全画面 */}
      <article className="w-full">
        {/* メイン画像 - 全体表示 */}
        {news.image?.url && (
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] bg-black pt-16 md:pt-20">
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setIsImageModalOpen(true)}
            >
              <Image
                src={news.image.url}
                alt={news.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* クリックで拡大のヒント
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                  <span className="text-white font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    クリックで拡大
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        )}

        {/* 記事ヘッダー */}
        <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16 relative">
          {/* 装飾的なグラデーション */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <FadeInSection>
            {/* カテゴリーと日付 */}
            <div className="flex items-center gap-4 mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-bold border ${getCategoryColor(news.category)}`}>
                {news.category}
              </span>
              <time className="text-gray-400 text-sm md:text-base">
                {formatDate(news.publishedAt)}
              </time>
            </div>

            {/* タイトル */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {news.title}
            </h1>

            {/* 説明 */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 pb-12 border-b border-white/10">
              {news.description}
            </p>
          </FadeInSection>

          {/* 本文コンテンツ */}
          <FadeInSection delay={100}>
            {news.content ? (
              <div
                className="news-content prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold prose-headings:mb-6 prose-headings:mt-10

                  prose-h1:text-4xl 
                  prose-h1:text-white

                  prose-h2:text-3xl prose-h2:border-l-4 prose-h2:border-blue-500 prose-h2:pl-6 prose-h2:py-2
                  prose-h2:bg-gradient-to-r prose-h2:from-blue-500/10 prose-h2:to-transparent prose-h2:rounded-r-lg
                  prose-h2:text-white

                  prose-h3:text-2xl prose-h3:text-white prose-h3:border-b prose-h3:border-white/10 prose-h3:pb-2

                  prose-h4:text-xl prose-h4:text-white

                  prose-h5:text-lg prose-h5:text-white

                  prose-h6:text-base prose-h6:text-white

                  prose-p:text-white prose-p:leading-relaxed prose-p:mb-6

                  prose-a:text-blue-400 prose-a:no-underline prose-a:font-semibold hover:prose-a:text-blue-300 hover:prose-a:underline
                  prose-a:transition-colors

                  prose-strong:text-white prose-strong:font-bold

                  prose-em:text-white prose-em:italic

                  prose-ul:my-6 prose-ul:list-disc prose-ul:text-white
                  prose-ol:my-6 prose-ol:list-decimal prose-ol:text-white

                  prose-li:text-white prose-li:leading-relaxed prose-li:my-2
                  prose-li::marker:text-blue-400

                  prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:pr-4
                  prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:bg-white/5
                  prose-blockquote:py-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg

                  prose-code:text-blue-300 prose-code:bg-white/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-code:font-mono prose-code:border prose-code:border-white/20

                  prose-pre:bg-neutral-900 prose-pre:text-gray-100 prose-pre:p-6 prose-pre:rounded-xl
                  prose-pre:overflow-x-auto prose-pre:border prose-pre:border-white/10 prose-pre:shadow-2xl
                  prose-pre:my-8

                  prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-10 prose-img:border prose-img:border-white/10

                  prose-hr:border-white/10 prose-hr:my-12

                  prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-lg prose-table:overflow-hidden
                  prose-thead:bg-white/10
                  prose-th:border prose-th:border-white/20 prose-th:px-6 prose-th:py-4 prose-th:text-left
                  prose-th:font-bold prose-th:text-white prose-th:text-sm prose-th:uppercase
                  prose-td:border prose-td:border-white/10 prose-td:px-6 prose-td:py-4 prose-td:text-white
                  prose-tr:transition-colors hover:prose-tr:bg-white/5
                "
                dangerouslySetInnerHTML={{ __html: news.content }}
              />
            ) : (
              <div className="text-white leading-relaxed text-lg">
                <p>{news.description}</p>
              </div>
            )}
          </FadeInSection>

          {/* 戻るリンク */}
          <FadeInSection delay={200}>
            <div className="mt-16 pt-8 border-t border-white/10">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="font-medium">お知らせ一覧に戻る</span>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </article>

      {/* 画像拡大モーダル */}
      {isImageModalOpen && news.image?.url && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsImageModalOpen(false)}
        >
          {/* 閉じるボタン */}
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20"
            onClick={() => setIsImageModalOpen(false)}
            aria-label="閉じる"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 拡大画像 */}
          <div
            className="relative w-full h-full max-w-7xl max-h-[90vh] animate-modalSlideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={news.image.url}
              alt={news.title}
              fill
              className="object-contain"
              quality={100}
            />
          </div>

          {/* 閉じるヒント */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            画像外をクリックまたはESCキーで閉じる
          </div>
        </div>
      )}
    </div>
  );
}
