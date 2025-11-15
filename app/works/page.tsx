'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeInSection from '../components/FadeInSection';
import Link from 'next/link';
import Modal from '../components/Modal';

interface Work {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

export default function Works() {
  const [isPetModalOpen, setIsPetModalOpen] = useState(false);
  const [isDroneModalOpen, setIsDroneModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const works = [
    {
      id: 1,
      image: '/images/S__5013529_0.jpg',
      title: 'ペット撮影',
      category: '写真',
      description: 'ポップなカラフル背景でのペットポートレート撮影',
    },
    {
      id: 2,
      image: '/images/S__5013530_0.jpg',
      title: 'ファミリーフォト',
      category: '写真',
      description: '家族の温かな時間を自然な表情で撮影',
    },
    {
      id: 3,
      image: '/images/S__5013531_0.jpg',
      title: '金魚撮影',
      category: '写真',
      description: '美しいボケ感を活かした芸術的な撮影',
    },
    {
      id: 4,
      image: '/images/S__5013532_0.jpg',
      title: 'コンサート撮影',
      category: '動画・写真',
      description: '音楽イベントでの臨場感あふれる撮影',
    },
    {
      id: 5,
      image: '/images/S__5013533_0.jpg',
      title: '和装前撮り',
      category: '写真',
      description: '紅葉の中での美しい和装フォトウェディング',
    },
    {
      id: 6,
      image: '/images/S__5013534_0.jpg',
      title: 'ファミリーフォト',
      category: '写真',
      description: '教会での家族写真撮影',
    },
    {
      id: 7,
      image: '/images/S__5013535_0.jpg',
      title: '住宅撮影',
      category: '写真',
      description: '温かみのある木造住宅のインテリア撮影',
    },
    {
      id: 8,
      image: '/images/S__5013536_0.jpg',
      title: '和装ロケーション',
      category: '写真',
      description: '金沢の街並みでの和装撮影',
    },
    {
      id: 9,
      image: '/images/S__5013537_0.jpg',
      title: '入学式記念撮影',
      category: '写真',
      description: '桜の季節の入学式記念撮影',
    },
    {
      id: 10,
      image: '/images/S__5013540_0.jpg',
      title: '海岸線の風景',
      category: 'ドローン',
      description: '美しい海岸線をドローン空撮',
    },
    {
      id: 11,
      image: '/images/S__5013541_0.jpg',
      title: '灯籠流し撮影',
      category: '写真',
      description: '夜の川面に浮かぶ幻想的な灯籠の風景',
    },
  ];

  return (
    <div>
      {/* ヒーローセクション - ダーク・スタイリッシュ */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Works"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-left text-white px-8 md:px-16 lg:px-24 max-w-4xl">
          <p className="text-sm md:text-base mb-4 tracking-widest font-light opacity-80 fade-in">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight">
            Works
          </h1>
          <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl">
            これまでの撮影実績を<br />
            ご紹介します
          </p>
        </div>
      </section>

      {/* 実績一覧 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <FadeInSection key={work.id} delay={index * 50}>
                <div
                  className="group cursor-pointer"
                  onClick={() => {
                    if (work.title === 'ペット撮影') {
                      setIsPetModalOpen(true);
                    } else if (work.category === 'ドローン') {
                      setIsDroneModalOpen(true);
                    } else {
                      setSelectedWork(work);
                    }
                  }}
                >
                  <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-bold">
                        詳しく見る
                      </span>
                    </div>
                  </div>
                  <div className="px-2">
                    <span className="inline-block text-xs font-bold text-gray-500 mb-2">
                      {work.category}
                    </span>
                    <h3 className="text-lg md:text-lg font-bold mb-2">{work.title}</h3>
                    <p className="text-sm text-gray-600">{work.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              お気軽にお問い合わせください
            </h2>
            <p className="text-lg md:text-lg mb-8 text-gray-300">
              撮影のご相談、お見積もりなど<br className="md:hidden" />
              お気軽にご連絡ください
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white border-2 border-white px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl text-md font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
            >
              お問い合わせフォームへ
            </Link>
          </FadeInSection>
        </div>
      </section>

{/* ペット撮影モーダル - ナチュラル＆アニマルデザイン */}
<Modal isOpen={isPetModalOpen} onClose={() => setIsPetModalOpen(false)}>
  <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-stone-100 rounded-3xl overflow-hidden">

    {/* 写真表示 */}
    <div className="relative aspect-video bg-gradient-to-br from-amber-200 via-orange-200 to-stone-200">
      <Image
        src="/images/S__5013529_0.jpg"
        alt="ペット撮影"
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
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-stone-500 text-white rounded-full text-sm font-bold shadow-sm">
              📍 石川県
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-stone-700">
            🐾 ペット撮影
          </h2>

          <p className="text-lg text-stone-700">
            暖かみのある色合いで、自然で優しい雰囲気のペットポートレート。
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
            スタジオまたは石川県内の屋外ロケーションで撮影可能です。
          </p>
        </div>

        {/* CTA ボタン */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold text-lg"
            onClick={() => setIsPetModalOpen(false)}
          >
            🐾 このような撮影のお問い合わせ
          </Link>
        </div>

      </div>
    </div>
  </div>
</Modal>



      {/* ドローン撮影モーダル */}
      <Modal isOpen={isDroneModalOpen} onClose={() => setIsDroneModalOpen(false)}>
        <div className="bg-white rounded-3xl overflow-hidden">
          {/* 動画表示 */}
          <div className="relative aspect-video bg-black">
            <video
              className="w-full h-full"
              controls
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/784885731.920631.mp4" type="video/mp4" />
              <source src="/images/784885731.920631.mp4" type="video/quicktime" />
              お使いのブラウザは動画タグをサポートしていません。
            </video>
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
                  <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm font-bold text-gray-700">
                    石川県
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">ドローン撮影</h2>
                <p className="text-lg text-gray-600">美しい海岸線をドローン空撮</p>
              </div>

              <div className="prose prose-lg mb-8">
                <p className="text-gray-700 leading-relaxed">
                  ドローンによる空撮で、地上からは見えない新しい視点をご提供します。
                  企業PR、イベント撮影、不動産撮影など、様々なシーンでご利用いただけます。
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-bold mb-2 text-gray-800">撮影場所</h4>
                <p className="text-gray-600">
                  石川県内の海岸線、山間部、都市部など幅広いロケーションで空撮
                </p>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg"
                  onClick={() => setIsDroneModalOpen(false)}
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
                src={selectedWork.image}
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
                    <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-sm font-bold text-gray-700">
                      石川県
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

                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h4 className="text-xl font-bold mb-2 text-gray-800">撮影場所</h4>
                  <p className="text-gray-600">
                    石川県内の最適なロケーションで撮影
                  </p>
                </div>

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
