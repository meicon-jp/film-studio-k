import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/S__5013540_0.jpg"
            alt="Film Studio K"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in">
            Film Studio K
          </h1>
          <p className="text-lg md:text-2xl mb-8 fade-in max-w-3xl mx-auto">
            「その時」「その瞬間」を切り取り<br className="md:hidden" />
            大切な思い出に残す<br />
            レンズの向こうにある笑顔を目指して
          </p>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Services
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16">サービス内容</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 写真撮影 */}
            <div className="group">
              <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/S__5013530_0.jpg"
                  alt="写真撮影"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">写真撮影</h3>
              <p className="text-gray-600 text-sm md:text-base">
                七五三、成人式、結婚式、家族写真など、人生の大切な瞬間を美しく残します。
              </p>
            </div>

            {/* 動画撮影 */}
            <div className="group">
              <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/S__5013532_0.jpg"
                  alt="動画撮影"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">動画撮影</h3>
              <p className="text-gray-600 text-sm md:text-base">
                企業VP、イベント撮影、想いを声で残すメッセージ動画など幅広く対応します。
              </p>
            </div>

            {/* ドローン撮影 */}
            <div className="group">
              <div className="relative h-64 md:h-80 mb-4 overflow-hidden rounded-lg">
                <Image
                  src="/images/S__5013540_0.jpg"
                  alt="ドローン撮影"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">ドローン撮影</h3>
              <p className="text-gray-600 text-sm md:text-base">
                ダイナミックで迫力のある空撮映像で、新しい視点をお届けします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">写真と動画、両方対応</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                一つのスタジオで写真撮影と動画撮影の両方に対応。トータルでの撮影プランをご提案します。
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">テレビ局勤務の経験</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                テレビ局勤務時代に培った技術で、その人の個性や強みを引き出す撮影を得意としています。
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                03
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">石川県内すべてのロケーション</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                県内すべての市町村に足を運び、四季折々の写真映えする場所をご提案できます。
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                04
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">想いを動画で残す</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                親に対する想い、子供への想いなど、面と向かって言えない気持ちを動画で残すサービスも提供しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 実績ギャラリー */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Works
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16">撮影実績</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/S__5013529_0.jpg"
                alt="撮影実績1"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/S__5013530_0.jpg"
                alt="撮影実績2"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/S__5013531_0.jpg"
                alt="撮影実績3"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/S__5013532_0.jpg"
                alt="撮影実績4"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/S__5013533_0.jpg"
                alt="撮影実績5"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/S__5013534_0.jpg"
                alt="撮影実績6"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/images/S__5013536_0.jpg"
                alt="撮影実績7"
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
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
              className="inline-block bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-900 hover:text-white hover:-translate-y-1 transition-all duration-300"
            >
              すべての実績を見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            お気軽にお問い合わせください
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            撮影のご相談、お見積もりなど<br className="md:hidden" />
            お気軽にご連絡ください
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gray-900 text-white border-2 border-white px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl text-lg font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
          >
            お問い合わせフォームへ
          </Link>
        </div>
      </section>
    </>
  );
}
