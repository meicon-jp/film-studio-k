import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from './components/FadeInSection';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション - ダーク・スタイリッシュ */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main_hero.png"
            alt="Film Studio K"
            fill
            className="object-cover opacity-40 -scale-x-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 text-left text-white px-8 md:px-16 lg:px-24 max-w-4xl">
          <p className="text-sm md:text-base mb-4 tracking-widest font-light opacity-80 fade-in">
            Photographer Film Studio K
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight">
            Film Studio K
          </h1>
          <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl">
            光と瞬間を切り取る<br />
            映像制作スタジオ
          </p>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Services
            </h2>
            <p className="text-center text-gray-400 mb-12 md:mb-16">サービス内容</p>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 写真撮影 */}
            <FadeInSection delay={100}>
              <div className="group">
                <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg border border-gray-800">
                  <Image
                    src="/images/S__5013530_0.jpg"
                    alt="写真撮影"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">写真撮影</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  七五三、成人式、結婚式、家族写真など、人生の大切な瞬間を美しく残します。
                </p>
              </div>
            </FadeInSection>

            {/* 動画撮影 */}
            <FadeInSection delay={200}>
              <div className="group">
                <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg border border-gray-800">
                  <Image
                    src="/images/S__5013532_0.jpg"
                    alt="動画撮影"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">動画撮影</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  企業VP、イベント撮影、想いを声で残すメッセージ動画など幅広く対応します。
                </p>
              </div>
            </FadeInSection>

            {/* ドローン撮影 */}
            <FadeInSection delay={300}>
              <div className="group">
                <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg border border-gray-800">
                  <Image
                    src="/images/S__5013540_0.jpg"
                    alt="ドローン撮影"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">ドローン撮影</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  ダイナミックで迫力のある空撮映像で、新しい視点をお届けします。
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <FadeInSection delay={100}>
              <div className="flex flex-col items-start border-l-2 border-gray-700 pl-6">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mb-4">
                  01
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">写真と動画、両方対応</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  一つのスタジオで写真撮影と動画撮影の両方に対応。トータルでの撮影プランをご提案します。
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="flex flex-col items-start border-l-2 border-gray-700 pl-6">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mb-4">
                  02
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">テレビ局勤務の経験</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  テレビ局勤務時代に培った技術で、その人の個性や強みを引き出す撮影を得意としています。
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="flex flex-col items-start border-l-2 border-gray-700 pl-6">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mb-4">
                  03
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">石川県内すべてのロケーション</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  県内すべての市町村に足を運び、四季折々の写真映えする場所をご提案できます。
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="flex flex-col items-start border-l-2 border-gray-700 pl-6">
                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold mb-4">
                  04
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">想いを動画で残す</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  親に対する想い、子供への想いなど、面と向かって言えない気持ちを動画で残すサービスも提供しています。
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 実績ギャラリー */}
      <section className="py-16 md:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
              Gallery
            </h2>
            <p className="text-center text-gray-400 mb-12 md:mb-16">撮影実績</p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013529_0.jpg"
                  alt="撮影実績1"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013530_0.jpg"
                  alt="撮影実績2"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013531_0.jpg"
                  alt="撮影実績3"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013532_0.jpg"
                  alt="撮影実績4"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013533_0.jpg"
                  alt="撮影実績5"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013534_0.jpg"
                  alt="撮影実績6"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013536_0.jpg"
                  alt="撮影実績7"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-800">
                <Image
                  src="/images/S__5013537_0.jpg"
                  alt="撮影実績8"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/works"
                className="inline-block bg-neutral-900 text-white border-2 border-white px-8 py-4 rounded-lg shadow-md hover:shadow-xl hover:bg-white hover:text-neutral-900 hover:-translate-y-1 transition-all duration-300"
              >
                すべての実績を見る
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

    </>
  );
}
