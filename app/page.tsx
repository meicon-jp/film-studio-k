'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FadeInSection from './components/FadeInSection';

const ParticlesBackground = dynamic(() => import('./components/ParticlesBackground'), { ssr: false });
const FloatingShapes = dynamic(() => import('./components/FloatingShapes'), { ssr: false });

export default function Home() {
  return (
    <>
      {/* ヒーローセクション - モダン3D */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        {/* 3Dパーティクル背景 */}
        <ParticlesBackground />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main_hero.png"
            alt="Film Studio K"
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
              Photographer Film Studio K
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Film Studio K
            </h1>
            <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl opacity-90">
              光と瞬間を切り取る<br />
              映像制作スタジオ
            </p>
          </div>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white relative overflow-hidden">
        {/* 背景装飾 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-center text-gray-400 mb-12 md:mb-16">サービス内容</p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 写真撮影 */}
            <FadeInSection delay={100}>
              <div className="group h-full">
                <div className="relative h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src="/images/S__5013530_0.jpg"
                      alt="写真撮影"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">写真撮影</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      七五三、成人式、結婚式、家族写真など、人生の大切な瞬間を美しく残します。
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* 動画撮影 */}
            <FadeInSection delay={200}>
              <div className="group h-full">
                <div className="relative h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src="/images/S__5013532_0.jpg"
                      alt="動画撮影"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">動画撮影</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      企業VP、イベント撮影、想いを声で残すメッセージ動画など幅広く対応します。
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            {/* ドローン撮影 */}
            <FadeInSection delay={300}>
              <div className="group h-full">
                <div className="relative h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src="/images/S__5013540_0.jpg"
                      alt="ドローン撮影"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">ドローン撮影</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      ダイナミックで迫力のある空撮映像で、新しい視点をお届けします。
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white relative overflow-hidden">
        {/* 3D浮遊要素 */}
        <div className="absolute inset-0 opacity-40">
          <FloatingShapes />
        </div>

        {/* 背景グロー効果 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Our Strengths
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <FadeInSection delay={100}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-start backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-300 text-black rounded-2xl flex items-center justify-center font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    01
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">写真と動画、両方対応</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    一つのスタジオで写真撮影と動画撮影の両方に対応。トータルでの撮影プランをご提案します。
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-start backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-300 text-black rounded-2xl flex items-center justify-center font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    02
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">テレビ局勤務の経験</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    テレビ局勤務時代に培った技術で、その人の個性や強みを引き出す撮影を得意としています。
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-start backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-300 text-black rounded-2xl flex items-center justify-center font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    03
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">石川県内すべてのロケーション</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    県内すべての市町村に足を運び、四季折々の写真映えする場所をご提案できます。
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-start backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-300 text-black rounded-2xl flex items-center justify-center font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    04
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">想いを動画で残す</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    親に対する想い、子供への想いなど、面と向かって言えない気持ちを動画で残すサービスも提供しています。
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>

      {/* 実績ギャラリー */}
      <section className="py-16 md:py-24">
        {/* 背景装飾 */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-center text-gray-400 mb-12 md:mb-16">撮影実績</p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { src: '/images/S__5013529_0.jpg', alt: '撮影実績1' },
                { src: '/images/S__5013530_0.jpg', alt: '撮影実績2' },
                { src: '/images/S__5013531_0.jpg', alt: '撮影実績3' },
                { src: '/images/S__5013532_0.jpg', alt: '撮影実績4' },
                { src: '/images/S__5013533_0.jpg', alt: '撮影実績5' },
                { src: '/images/S__5013534_0.jpg', alt: '撮影実績6' },
                { src: '/images/S__5013536_0.jpg', alt: '撮影実績7' },
                { src: '/images/S__5013537_0.jpg', alt: '撮影実績8' },
              ].map((image, index) => (
                <div key={index} className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm bg-white/5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 ring-2 ring-white/0 group-hover:ring-white/20 rounded-2xl transition-all duration-500"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/works"
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white border-2 border-white/20 px-10 py-4 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-white/10 hover:border-white/40 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                <span className="relative font-semibold">すべての実績を見る</span>
                <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
      </section>

    </>
  );
}
