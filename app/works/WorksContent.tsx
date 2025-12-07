'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import FadeInSection from '../components/FadeInSection';
import Link from 'next/link';
import Modal from '../components/Modal';
import { Work as WorkType } from '@/types/microcms';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

export default function WorksContent({ works }: { works: WorkType[] }) {
  const [selectedPetWork, setSelectedPetWork] = useState<WorkType | null>(null);
  const [selectedDroneWork, setSelectedDroneWork] = useState<WorkType | null>(null);
  const [selectedWork, setSelectedWork] = useState<WorkType | null>(null);

  return (
    <div>
      {/* ヒーローセクション - モダン3D */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        <ParticlesBackground />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Works"
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
              Portfolio
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Works
            </h1>
            <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl opacity-90">
              これまでの撮影実績を<br />
              ご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* 実績一覧 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <FadeInSection key={work.id} delay={index * 50}>
                <div
                  className="group cursor-pointer"
                  onClick={() => {
                    // カテゴリーベースで特別表示を判定
                    const isPetWork = work.category.includes('動物');
                    const isDroneWork = work.category.includes('ドローン');

                    if (isPetWork) {
                      setSelectedPetWork(work);
                    } else if (isDroneWork) {
                      setSelectedDroneWork(work);
                    } else {
                      setSelectedWork(work);
                    }
                  }}
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
                    <Image
                      src={work.image?.url || '/images/hero.png'}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-bold backdrop-blur-sm bg-white/10 px-6 py-3 rounded-full border border-white/20">
                        詳しく見る
                      </span>
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="inline-block text-xs font-bold text-gray-400 mb-2 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {work.category}
                    </span>
                    <h3 className="text-lg md:text-lg font-bold mb-2 text-white">{work.title}</h3>
                    <p className="text-sm text-gray-400">{work.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              お気軽にお問い合わせください
            </h2>
            <p className="text-lg md:text-lg mb-8 text-gray-300">
              撮影のご相談、お見積もりなど<br className="md:hidden" />
              お気軽にご連絡ください
            </p>
            <Link
              href="/contact"
              className="group relative inline-block bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-white/20 hover:border-white/50 text-md font-semibold hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <span className="relative">お問い合わせフォームへ</span>
            </Link>
          </FadeInSection>
        </div>
      </section>

{/* ペット撮影モーダル - ナチュラル＆アニマルデザイン */}
<Modal isOpen={!!selectedPetWork} onClose={() => setSelectedPetWork(null)}>
  <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 rounded-3xl overflow-hidden">

    {/* 写真表示 */}
    <div className="relative aspect-video bg-gradient-to-br from-amber-200 via-orange-200 to-stone-200">
      <Image
        src={selectedPetWork?.image?.url || '/images/S__5013529_0.jpg'}
        alt={selectedPetWork?.title || 'ペット撮影'}
        fill
        className="object-contain"
      />

      {/* 肉球背景・控えめ */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute top-5 left-5 text-white text-5xl">🐾</div>
        <div className="absolute bottom-5 right-8 text-white text-6xl rotate-12">🐾</div>
      </div>
    </div>

    {/* コンテンツ */}
    <div className="p-8 md:p-12">
      <div className="max-w-4xl mx-auto">

        {/* タイトル */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">

            {/* タグ（茶色・暖色） */}
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-400 text-white rounded-full text-sm font-bold shadow-sm">
              🐾 写真
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-400 text-white rounded-full text-sm font-bold shadow-sm">
              🐶 ペット撮影
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-stone-700">
            🐾 {selectedPetWork?.title || 'ペット撮影'}
          </h2>

          <p className="text-lg text-stone-700">
            {selectedPetWork?.description || '暖かみのある色合いで、自然で優しい雰囲気のペットポートレート。'}
          </p>
        </div>

        {/* 説明 */}
        <div className="prose prose-lg mb-8">
          <p className="text-stone-700 leading-relaxed">
            ペットは家族の大切な一員。
            温かい色合いの中で、自然体のかわいらしい表情や仕草を丁寧に撮影します。
            犬、猫、小動物など幅広く対応しています。🐶🐱🐹
          </p>
        </div>

        {/* 撮影場所ボックス */}
        {selectedPetWork?.location && (
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-amber-200 shadow-md">

            {/* 肉球デコレーション（控えめ） */}
            <div className="absolute -top-3 -left-3 text-amber-300 text-3xl rotate-[-10deg]">
              🐾
            </div>
            <div className="absolute -bottom-3 -right-3 text-amber-300 text-3xl rotate-[10deg]">
              🐾
            </div>

            <h4 className="text-xl font-bold mb-2 text-stone-800">
              撮影場所
            </h4>
            <p className="text-stone-700">
              {selectedPetWork.location}
            </p>
          </div>
        )}

        {/* CTA ボタン */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold text-lg"
            onClick={() => setSelectedPetWork(null)}
          >
            🐾 このような撮影のお問い合わせ
          </Link>
        </div>

      </div>
    </div>
  </div>
</Modal>



      {/* ドローン撮影モーダル */}
      <Modal isOpen={!!selectedDroneWork} onClose={() => setSelectedDroneWork(null)}>
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* 動画表示 */}
          <div className="relative aspect-video bg-black">
            {selectedDroneWork?.videoUrl ? (
              <video
                className="w-full h-full"
                controls
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={selectedDroneWork.videoUrl} type="video/mp4" />
                <source src={selectedDroneWork.videoUrl} type="video/quicktime" />
                お使いのブラウザは動画タグをサポートしていません。
              </video>
            ) : (
              <Image
                src={selectedDroneWork?.image?.url || '/images/hero.png'}
                alt={selectedDroneWork?.title || 'ドローン撮影'}
                fill
                className="object-contain"
              />
            )}
          </div>

          {/* モーダルコンテンツ */}
          <div className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              {/* タイトルとタグ */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm font-bold text-gray-700">
                    ドローン
                  </span>
                  <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm font-bold text-gray-700">
                    空撮
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{selectedDroneWork?.title || 'ドローン撮影'}</h2>
                <p className="text-lg text-gray-600">{selectedDroneWork?.description || '美しい海岸線をドローン空撮'}</p>
              </div>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  ドローンによる空撮で、地上からは見えない新しい視点をご提供します。
                  企業PR、イベント撮影、不動産撮影など、様々なシーンでご利用いただけます。
                </p>
              </div>

              {selectedDroneWork?.location && (
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-bold mb-2 text-gray-800">撮影場所</h4>
                  <p className="text-gray-600">
                    {selectedDroneWork.location}
                  </p>
                </div>
              )}

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg"
                  onClick={() => setSelectedDroneWork(null)}
                >
                  このような撮影のお問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* 汎用実績詳細モーダル */}
      {selectedWork && (
        <Modal isOpen={!!selectedWork} onClose={() => setSelectedWork(null)}>
          <div className="bg-white rounded-3xl overflow-hidden">
            {/* 写真全体表示 */}
            <div className="relative aspect-video bg-black">
              <Image
                src={selectedWork.image?.url || '/images/hero.png'}
                alt={selectedWork.title}
                fill
                className="object-contain"
              />
            </div>

            {/* モーダルコンテンツ */}
            <div className="p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                {/* タイトルとタグ */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm font-bold text-gray-700">
                      {selectedWork.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{selectedWork.title}</h2>
                  <p className="text-lg text-gray-600">{selectedWork.description}</p>
                </div>

                <div className="prose prose-lg mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    お客様の大切な瞬間を、丁寧に撮影させていただきました。
                    一つ一つの撮影に想いを込めて、最高の一枚をお届けします。
                  </p>
                </div>

                {selectedWork.location && (
                  <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                    <h4 className="text-xl font-bold mb-2 text-gray-800">撮影場所</h4>
                    <p className="text-gray-600">
                      {selectedWork.location}
                    </p>
                  </div>
                )}

                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg"
                    onClick={() => setSelectedWork(null)}
                  >
                    このような撮影のお問い合わせ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
