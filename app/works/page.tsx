import { client } from '@/lib/microcms';
import { Work as WorkType } from '@/types/microcms';
import WorksContent from './WorksContent';

// サーバーコンポーネント
export default async function Works() {
  // MicroCMSから実績一覧を取得
  const data = await client.get({
    endpoint: 'works',
    queries: {
      limit: 100,
      orders: '-publishedAt',
    },
  }).catch((error) => {
    // エラー時はデフォルトデータを返す
    console.error('MicroCMS取得エラー:', error);
    return {
      contents: [
        {
          id: '1',
          title: 'ペット撮影',
          category: '動物',
          description: 'ポップなカラフル背景でのペットポートレート撮影',
          image: { url: '/images/S__5013529_0.jpg' },
          publishedAt: '2025-12-01T00:00:00.000Z',
          createdAt: '2025-12-01T00:00:00.000Z',
          updatedAt: '2025-12-01T00:00:00.000Z',
          revisedAt: '2025-12-01T00:00:00.000Z',
        },
        {
          id: '10',
          title: '海岸線の風景',
          category: 'ドローン',
          description: '美しい海岸線をドローン空撮',
          image: { url: '/images/S__5013540_0.jpg' },
          videoEmbedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1144236366?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Sample Video"></iframe></div>',
          publishedAt: '2025-11-01T00:00:00.000Z',
          createdAt: '2025-11-01T00:00:00.000Z',
          updatedAt: '2025-11-01T00:00:00.000Z',
          revisedAt: '2025-11-01T00:00:00.000Z',
        },
      ] as WorkType[],
    };
  });

  const works = data.contents;

  return <WorksContent works={works} />;
}
