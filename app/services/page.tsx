'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import FadeInSection from '../components/FadeInSection';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

export default function Services() {
  return (
    <div>
      {/* ヒーローセクション - モダン3D */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        <ParticlesBackground />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Services"
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
              What We Do
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Services
            </h1>
            <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl opacity-90">
              写真・動画・ドローン撮影<br />
              トータルサポート
            </p>
          </div>
        </div>
      </section>

      {/* 写真撮影 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-bold text-gray-400 mb-2">01</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">写真撮影</h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                人生の大切な瞬間を美しく残します。七五三、成人式、結婚式、家族写真、プロフィール写真など、様々なシーンに対応します。
              </p>

              <div className="space-y-6">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">記念写真</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    七五三、成人式、入学式、卒業式など、人生の節目を記録します。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">ファミリーフォト</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    家族の温かい時間を自然な表情で撮影します。お子様の成長記録にも。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">ブライダルフォト</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    前撮り、当日撮影、フォトウェディングまで対応します。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">ペット・動物撮影</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    大切な家族の一員であるペットの撮影も承ります。
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-blue-500/10">
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-purple-500/10">
                <Image
                  src="/images/S__5013532_0.jpg"
                  alt="動画撮影"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="inline-block text-sm font-bold text-gray-400 mb-2">02</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">動画撮影</h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                企業VP、イベント記録、想いを伝えるメッセージ動画など、様々な映像制作に対応します。テレビ局勤務時代の経験を活かした高品質な映像をお届けします。
              </p>

              <div className="space-y-6">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">企業VP・プロモーション動画</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    会社紹介、商品PR、採用動画など企業の魅力を伝えます。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">イベント撮影</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    発表会、コンサート、式典など、大切なイベントを記録します。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">想いを動画で残す</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    親への想い、子供への想いなど、面と向かって恥ずかしくて言えない気持ちを動画で残します。七五三、成人式、結婚式、還暦祝いなど、人生の節目に。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">QRコード連動サービス</h3>
                  <p className="text-gray-400 text-sm md:text-base">
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block text-sm font-bold text-gray-400 mb-2">03</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">ドローン撮影</h2>
              <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg">
                地上からは見ることのできない視点で、ダイナミックで迫力のある映像を撮影します。石川県・能登の美しい景色を空から記録します。
              </p>

              <div className="space-y-6">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">風景・観光地撮影</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    能登の海岸線、白山連峰、金沢の街並みなど、石川県の魅力を空撮します。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">不動産・建築物撮影</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    物件の全貌や周辺環境を分かりやすく撮影します。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">イベント空撮</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    祭りやスポーツイベントなど、上空からの迫力ある映像を撮影します。
                  </p>
                </div>

                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-2 text-white">地域PR動画</h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    能登の伝統工芸や美しい景観を空撮で記録し、地域活性化に貢献します。
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 md:h-[600px] rounded-2xl overflow-hidden ring-2 ring-white/10 shadow-2xl shadow-cyan-500/10">
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-neutral-950 to-black text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">撮影カテゴリー</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">写真撮影</h3>
                <ul className="space-y-2 text-gray-300">
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
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">動画撮影</h3>
                <ul className="space-y-2 text-gray-300">
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
              <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">ドローン撮影</h3>
                <ul className="space-y-2 text-gray-300">
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-black via-neutral-950 to-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">対応エリア</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              石川県内すべての市町村での撮影に対応しています。<br />
              金沢市、能登エリアを中心に、県内各地の美しいロケーションでの撮影が可能です。<br />
              県外への出張撮影もご相談ください。
            </p>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
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
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

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
    </div>
  );
}
