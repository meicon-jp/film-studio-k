import Image from 'next/image';
import FadeInSection from '../components/FadeInSection';

export const metadata = {
  title: '実績 | Film Studio K',
  description: 'Film Studio Kのこれまでの撮影実績をご紹介します。',
};

export default function Works() {
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
    <div className="pt-16 md:pt-20">
      {/* ヘッダー */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Works</h1>
          <p className="text-lg md:text-lg text-gray-300">撮影実績</p>
        </div>
      </section>

      {/* 実績一覧 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <FadeInSection key={work.id} delay={index * 50}>
                <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-bold">
                      View
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
    </div>
  );
}
