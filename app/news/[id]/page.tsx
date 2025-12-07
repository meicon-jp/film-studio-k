import { client } from '@/lib/microcms';
import { News } from '@/types/microcms';
import NewsDetailContent from './NewsDetailContent';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;

  // MicroCMSからお知らせ詳細を取得
  const news = await client.get({
    endpoint: 'news',
    contentId: id,
  }).catch(() => {
    return null;
  });

  if (!news) {
    notFound();
  }

  return <NewsDetailContent news={news as News} />;
}

// 静的生成のためのパスを生成
export async function generateStaticParams() {
  const data = await client.get({
    endpoint: 'news',
    queries: {
      limit: 100,
    },
  }).catch(() => {
    return { contents: [] };
  });

  return data.contents.map((news: News) => ({
    id: news.id,
  }));
}
