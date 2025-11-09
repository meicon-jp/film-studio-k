import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '../components/FadeInSection';

export const metadata = {
  title: '事業内容 | Film Studio K',
  description: '写真撮影、動画撮影、ドローン撮影など、Film Studio Kのサービス内容をご紹介します。',
};

export default function Services() {
  return (
    <div className="pt-16 md:pt-20">
      {/* ヘッダー */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Services</h1>
          <p className="text-lg md:text-xl text-gray-300">事業内容</p>
        </div>
      </section>

      {/* 写真撮影 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-bold text-gray-500 mb-2">01</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">写真撮影</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
                人生の大切な瞬間を美しく残します。七五三、成人式、結婚式、家族写真、プロフィール写真など、様々なシーンに対応します。
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">記念写真</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    七五三、成人式、入学式、卒業式など、人生の節目を記録します。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">ファミリーフォト</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    家族の温かい時間を自然な表情で撮影します。お子様の成長記録にも。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">ブライダルフォト</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    前撮り、当日撮影、フォトウェディングまで対応します。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">ペット・動物撮影</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    大切な家族の一員であるペットの撮影も承ります。
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/S__5013530_0.jpg"
                  alt="写真撮影"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 動画撮影 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/S__5013532_0.jpg"
                  alt="動画撮影"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="inline-block text-sm font-bold text-gray-500 mb-2">02</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">動画撮影</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
                企業VP、イベント記録、想いを伝えるメッセージ動画など、様々な映像制作に対応します。テレビ局勤務時代の経験を活かした高品質な映像をお届けします。
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">企業VP・プロモーション動画</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    会社紹介、商品PR、採用動画など企業の魅力を伝えます。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">イベント撮影</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    発表会、コンサート、式典など、大切なイベントを記録します。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">想いを動画で残す</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    親への想い、子供への想いなど、面と向かって恥ずかしくて言えない気持ちを動画で残します。七五三、成人式、結婚式、還暦祝いなど、人生の節目に。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">QRコード連動サービス</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    動画をQRコードにして写真アルバムに貼り付け、思い出をより深く残します。
                  </p>
                </div>
              </div>
            </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ドローン撮影 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-bold text-gray-500 mb-2">03</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">ドローン撮影</h2>
              <p className="text-gray-700 leading-relaxed mb-8 text-base md:text-lg">
                地上からは見ることのできない視点で、ダイナミックで迫力のある映像を撮影します。石川県・能登の美しい景色を空から記録します。
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">風景・観光地撮影</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    能登の海岸線、白山連峰、金沢の街並みなど、石川県の魅力を空撮します。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">不動産・建築物撮影</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    物件の全貌や周辺環境を分かりやすく撮影します。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">イベント空撮</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    祭りやスポーツイベントなど、上空からの迫力ある映像を撮影します。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">地域PR動画</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    能登の伝統工芸や美しい景観を空撮で記録し、地域活性化に貢献します。
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/S__5013540_0.jpg"
                  alt="ドローン撮影"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* カテゴリー別実績 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">撮影カテゴリー</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">写真撮影</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 記念写真(七五三、成人式、入学式)</li>
                  <li>• ファミリーフォト</li>
                  <li>• ブライダルフォト</li>
                  <li>• プロフィール写真</li>
                  <li>• ペット撮影</li>
                  <li>• 商品撮影</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">動画撮影</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 企業VP・プロモーション</li>
                  <li>• イベント記録</li>
                  <li>• 想いを伝える動画</li>
                  <li>• ウェディングムービー</li>
                  <li>• 採用動画</li>
                  <li>• 商品紹介動画</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold mb-4">ドローン撮影</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 風景・観光地撮影</li>
                  <li>• 不動産空撮</li>
                  <li>• イベント空撮</li>
                  <li>• 地域PR動画</li>
                  <li>• 建築物撮影</li>
                  <li>• 能登の景観記録</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 対応エリア */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">対応エリア</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              石川県内すべての市町村での撮影に対応しています。<br />
              金沢市、能登エリアを中心に、県内各地の美しいロケーションでの撮影が可能です。<br />
              県外への出張撮影もご相談ください。
            </p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mt-8">
            <div>金沢市</div>
            <div>七尾市</div>
            <div>輪島市</div>
            <div>珠洲市</div>
            <div>加賀市</div>
            <div>羽咋市</div>
            <div>かほく市</div>
            <div>白山市</div>
            <div>能美市</div>
            <div>野々市市</div>
            <div>川北町</div>
            <div>津幡町</div>
            <div>内灘町</div>
            <div>志賀町</div>
            <div>宝達志水町</div>
            <div>中能登町</div>
            <div>穴水町</div>
            <div>能登町</div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              撮影のご相談はお気軽に
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              お客様のご要望に合わせた最適なプランをご提案いたします
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-900 text-white border-2 border-white px-8 py-4 rounded-lg shadow-lg hover:shadow-2xl text-lg font-semibold hover:bg-white hover:text-gray-900 hover:scale-105 transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
