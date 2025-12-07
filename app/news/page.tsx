import { client } from '@/lib/microcms';
import { News } from '@/types/microcms';
import NewsContent from './NewsContent';

// サーバーコンポーネント
export default async function NewsPage() {
  // MicroCMSからお知らせ一覧を取得
  const data = await client.get({
    endpoint: 'news',
    queries: {
      limit: 100,
      orders: '-publishedAt',
    },
  }).catch(() => {
    // エラー時はデフォルトデータを返す
    return {
      contents: [
        {
          id: '1',
          title: 'Film Studio K ウェブサイトをリニューアルしました',
          category: 'お知らせ',
          description: 'より使いやすく、見やすいサイトにリニューアルいたしました。今後とも宜しくお願いいたします。',
          publishedAt: '2025-12-01T00:00:00.000Z',
          createdAt: '2025-12-01T00:00:00.000Z',
          updatedAt: '2025-12-01T00:00:00.000Z',
          revisedAt: '2025-12-01T00:00:00.000Z',
        },
      ] as News[],
    };
  });

  const newsData = data.contents;

  return <NewsContent newsData={newsData} />;
}
