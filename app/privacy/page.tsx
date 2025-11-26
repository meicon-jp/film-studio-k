'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import FadeInSection from '../components/FadeInSection';

const ParticlesBackground = dynamic(() => import('../components/ParticlesBackground'), { ssr: false });

export default function Privacy() {
  return (
    <div>
      {/* ヒーローセクション - モダン3D */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
        <ParticlesBackground />

        <div className="absolute inset-0 z-0">
          <Image
            src="/images/S__5013531_0.jpg"
            alt="Privacy Policy"
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
              Legal
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 fade-in leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-base md:text-xl mb-12 fade-in font-light leading-relaxed max-w-2xl opacity-90">
              個人情報保護方針を<br />
              ご確認ください
            </p>
          </div>
        </div>
      </section>

      {/* プライバシーポリシー本文 */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeInSection>
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <div className="prose prose-lg max-w-none prose-invert">
                <p className="text-gray-300 mb-8">
                  Film Studio K（以下「当スタジオ」といいます。）は、お客様の個人情報保護の重要性について認識し、
                  個人情報の保護に関する法律（以下「個人情報保護法」といいます。）を遵守すると共に、
                  以下のプライバシーポリシー（以下「本ポリシー」といいます。）に従い、
                  適切な取扱い及び保護に努めます。
                </p>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第1条(個人情報の定義)</h2>
                  <p className="text-gray-300 leading-relaxed">
                    本ポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、
                    すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                    特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                    それにより特定の個人を識別することができることとなるものを含みます。）を指すものとします。
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第2条（個人情報の収集方法）</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    当スタジオは、お客様が以下の場合に個人情報を提供いただきます。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>お問い合わせフォームからのお問い合わせ時</li>
                    <li>撮影サービスのご予約・ご利用時</li>
                    <li>メールやお電話でのお問い合わせ時</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第3条（個人情報の利用目的）</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    当スタジオは、お客様から収集した個人情報を以下の目的で利用します。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>お問い合わせへの対応・回答のため</li>
                    <li>撮影サービスの提供のため</li>
                    <li>撮影データのお届けのため</li>
                    <li>サービスに関するご案内・お知らせのため</li>
                    <li>お客様からのご要望、お問い合わせに対応するため</li>
                    <li>当スタジオのサービス向上・改善のため</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第4条（個人情報の第三者提供）</h2>
                  <p className="text-gray-300 leading-relaxed">
                    当スタジオは、次に掲げる場合を除いて、あらかじめお客様の同意を得ることなく、
                    第三者に個人情報を提供することはありません。
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体又は財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
                    <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、お客様の同意を得ることが困難であるとき</li>
                    <li>国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、お客様の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                  </ul>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第5条（個人情報の安全管理）</h2>
                  <p className="text-gray-300 leading-relaxed">
                    当スタジオは、個人情報の紛失、破壊、改ざん及び漏洩などのリスクに対して、
                    個人情報の安全管理が図られるよう、当スタジオの従業員に対し、必要かつ適切な監督を行います。
                    また、当スタジオは、個人情報の取扱いの全部又は一部を委託する場合は、
                    委託先において個人情報の安全管理が図られるよう、必要かつ適切な監督を行います。
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第6条（個人情報の開示・訂正・削除等）</h2>
                  <p className="text-gray-300 leading-relaxed">
                    当スタジオは、お客様から、個人情報保護法の定めに基づき個人情報の開示を求められたときは、
                    お客様ご本人からのご請求であることを確認の上で、お客様に対し、遅滞なく開示を行います
                    （当該個人情報が存在しないときにはその旨を通知いたします。）。
                    ただし、個人情報保護法その他の法令により、当スタジオが開示の義務を負わない場合は、この限りではありません。
                    なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめご了承ください。
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第7条（本ポリシーの変更）</h2>
                  <p className="text-gray-300 leading-relaxed">
                    本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、
                    お客様に通知することなく、変更することができるものとします。
                    当スタジオが別途定める場合を除いて、変更後のプライバシーポリシーは、
                    本ウェブサイトに掲載したときから効力を生じるものとします。
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 text-white">第8条（お問い合わせ窓口）</h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                  </p>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-lg">
                    <p className="text-white font-bold mb-2">Film Studio K</p>
                    <p className="text-gray-300">住所：〒920-0000 石川県金沢市三口町金9-12</p>
                    <p className="text-gray-300">お問い合わせフォーム：<a href="/contact" className="text-blue-400 hover:text-blue-300 hover:underline">こちら</a></p>
                  </div>
                </section>

                <p className="text-right text-gray-400 mt-12">制定日：2025年11月15日</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
