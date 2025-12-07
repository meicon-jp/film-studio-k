import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          お知らせが見つかりません
        </h2>
        <p className="text-gray-400 mb-8">
          お探しのお知らせは削除されたか、URLが間違っている可能性があります。
        </p>
        <Link
          href="/news"
          className="inline-block bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
        >
          お知らせ一覧に戻る
        </Link>
      </div>
    </div>
  );
}
