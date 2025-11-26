'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import FadeInSection from '../components/FadeInSection';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

export default function About() {
  return (
    <div>
      {/* ヒーローセクション - モダン3D */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        <ParticlesBackground />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="About Us"
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
              Company Profile
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl opacity-90">
              私たちの想いと<br />
              理念をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Company Info</h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row border-b border-white/10 pb-6">
                  <dt className="md:w-1/3 font-bold text-gray-300 mb-2 md:mb-0">会社名</dt>
                  <dd className="md:w-2/3 text-gray-400">Film Studio K</dd>
                </div>

                <div className="flex flex-col md:flex-row border-b border-white/10 pb-6">
                  <dt className="md:w-1/3 font-bold text-gray-300 mb-2 md:mb-0">所在地</dt>
                  <dd className="md:w-2/3 text-gray-400">〒920-0000 石川県金沢市三口町金9-12</dd>
                </div>

                <div className="flex flex-col md:flex-row border-b border-white/10 pb-6">
                  <dt className="md:w-1/3 font-bold text-gray-300 mb-2 md:mb-0">設立</dt>
                  <dd className="md:w-2/3 text-gray-400">2025年5月</dd>
                </div>

                <div className="flex flex-col md:flex-row border-b border-white/10 pb-6">
                  <dt className="md:w-1/3 font-bold text-gray-300 mb-2 md:mb-0">事業内容</dt>
                  <dd className="md:w-2/3 text-gray-400">
                    動画撮影<br />
                    写真撮影<br />
                    ドローン撮影
                  </dd>
                </div>

                <div className="flex flex-col md:flex-row pb-6">
                  <dt className="md:w-1/3 font-bold text-gray-300 mb-2 md:mb-0">代表</dt>
                  <dd className="md:w-2/3 text-gray-400">芝田 敬</dd>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Philosophy</h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">企業概念</h3>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  「その時」「その瞬間」を切り取り、大切な思い出に残すことが出来る写真や動画。
                </p>

                <p>
                  その人の内面を引き出し、キラリと光る個性をとどめる…
                </p>

                <p>
                  なにげない日常にこそ幸せがあり、撮影を通してそんなお手伝いが出来ることを願います。
                </p>

                <p className="text-xl md:text-2xl font-bold text-center my-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  レンズの向こうにある笑顔を目指して…<br />
                  あなたの心に寄り添います
                </p>

                <p>
                  これからは個人が活躍する世の中になっていくと思いますので、撮影を通してその人が持っている内面をより深く引き出せるようにお手伝いが出来ればと思っております。
                </p>

                <p>
                  写真や映像はその時その瞬間を切り取り大切な思い出となり残るものです。
                </p>

                <p className="font-bold text-lg text-white">
                  みんなが優しく幸せになれる社会を目指します
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ビジョン */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Vision</h2>
          </FadeInSection>

          <div className="space-y-12">
            <FadeInSection delay={100}>
              <div className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">人×地域×社会</h3>
                <p className="relative text-gray-300 leading-relaxed">
                  社会貢献では企業や町とタッグを組んでよりその地域を活性させるための撮影などを行いたいと思います。
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">能登の魅力を伝える</h3>
                <div className="relative space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    今能登の人口が減少しつつある中で、人が集まりたくなるコンテンツを作ります。輪島塗りなど残さないといけない伝統芸能においては、職人の良さが伝わる写真や動画などを作り積極的にPRしていきたいと思います。
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    能登には地震で失った場所もありますが、まだ残したい景色がたくさんあります。
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">共生社会の実現</h3>
                <p className="relative text-gray-300 leading-relaxed">
                  障害者と健常者が一緒に地域に溶け込める偏見のない社会が出来ることが目標であり、絵が得意な人、もの作りが得意な人、それぞれができる個性を活かした写真や動画を作り、個展などで動画など流せたらと思います。理解ある世の中にしたいです。
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 代表プロフィール */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Profile</h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 hover:border-white/20 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden ring-2 ring-white/10">
                  <Image
                    src="/images/S__5013538_0.jpg"
                    alt="芝田 敬"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">芝田 敬</h3>
                  <p className="text-gray-400 mb-6">
                    映像総合プロデューサー<br />
                    動画クリエイター<br />
                    フォトグラファー
                  </p>

                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      テレビ局勤務時代には数多くの人物撮影を手がけ、その人の個性や強みを引き出すことを得意としています。
                    </p>

                    <p>
                      石川県内すべての市町村に足を運び、四季折々の美しいロケーションでの撮影をご提案します。
                    </p>

                    <p>
                      「大切な人への想いを形に残したい」そんな思いに寄り添い、心に残る作品づくりを心がけています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
