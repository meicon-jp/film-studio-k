import Image from 'next/image';
import FadeInSection from '../components/FadeInSection';

export const metadata = {
  title: '会社概要 | Film Studio K',
  description: 'Film Studio Kの企業理念、ビジョン、代表プロフィールをご紹介します。',
};

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* ヘッダー */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-300">会社概要</p>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Company Info</h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="space-y-6">
            <div className="flex flex-col md:flex-row border-b pb-6">
              <dt className="md:w-1/3 font-bold text-gray-700 mb-2 md:mb-0">会社名</dt>
              <dd className="md:w-2/3 text-gray-600">Film Studio K</dd>
            </div>
            
            <div className="flex flex-col md:flex-row border-b pb-6">
              <dt className="md:w-1/3 font-bold text-gray-700 mb-2 md:mb-0">所在地</dt>
              <dd className="md:w-2/3 text-gray-600">〒920-0000 石川県金沢市三口町金9-12</dd>
            </div>
            
            <div className="flex flex-col md:flex-row border-b pb-6">
              <dt className="md:w-1/3 font-bold text-gray-700 mb-2 md:mb-0">設立</dt>
              <dd className="md:w-2/3 text-gray-600">2025年5月</dd>
            </div>
            
            <div className="flex flex-col md:flex-row border-b pb-6">
              <dt className="md:w-1/3 font-bold text-gray-700 mb-2 md:mb-0">事業内容</dt>
              <dd className="md:w-2/3 text-gray-600">
                動画撮影<br />
                写真撮影<br />
                ドローン撮影
              </dd>
            </div>
            
            <div className="flex flex-col md:flex-row pb-6">
              <dt className="md:w-1/3 font-bold text-gray-700 mb-2 md:mb-0">代表</dt>
              <dd className="md:w-2/3 text-gray-600">芝田 敬</dd>
            </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 企業理念 */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Philosophy</h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">企業概念</h3>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                「その時」「その瞬間」を切り取り、大切な思い出に残すことが出来る写真や動画。
              </p>
              
              <p>
                その人の内面を引き出し、キラリと光る個性をとどめる…
              </p>
              
              <p>
                なにげない日常にこそ幸せがあり、撮影を通してそんなお手伝いが出来ることを願います。
              </p>
              
              <p className="text-xl md:text-2xl font-bold text-center my-8">
                レンズの向こうにある笑顔を目指して…<br />
                あなたの心に寄り添います
              </p>
              
              <p>
                これからは個人が活躍する世の中になっていくと思いますので、撮影を通してその人が持っている内面をより深く引き出せるようにお手伝いが出来ればと思っております。
              </p>
              
              <p>
                写真や映像はその時その瞬間を切り取り大切な思い出となり残るものです。
              </p>
              
              <p className="font-bold text-lg">
                みんなが優しく幸せになれる社会を目指します
              </p>
            </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ビジョン */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Vision</h2>
          </FadeInSection>

          <div className="space-y-12">
            <FadeInSection delay={100}>
              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4">人×地域×社会</h3>
                <p className="text-gray-700 leading-relaxed">
                  社会貢献では企業や町とタッグを組んでよりその地域を活性させるための撮影などを行いたいと思います。
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4">能登の魅力を伝える</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  今能登の人口が減少しつつある中で、人が集まりたくなるコンテンツを作ります。輪島塗りなど残さないといけない伝統芸能においては、職人の良さが伝わる写真や動画などを作り積極的にPRしていきたいと思います。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  能登には地震で失った場所もありますが、まだ残したい景色がたくさんあります。
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4">共生社会の実現</h3>
                <p className="text-gray-700 leading-relaxed">
                  障害者と健常者が一緒に地域に溶け込める偏見のない社会が出来ることが目標であり、絵が得意な人、もの作りが得意な人、それぞれができる個性を活かした写真や動画を作り、個展などで動画など流せたらと思います。理解ある世の中にしたいです。
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 代表プロフィール */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Profile</h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src="/images/S__5013538_0.jpg"
                  alt="芝田 敬"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">芝田 敬</h3>
                <p className="text-gray-600 mb-6">
                  映像総合プロデューサー<br />
                  動画クリエイター<br />
                  フォトグラファー
                </p>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
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
