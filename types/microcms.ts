import { MicroCMSImage, MicroCMSListResponse } from 'microcms-js-sdk';

// MicroCMSの基本型
export type MicroCMSContentBase = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// お知らせの型定義
export type News = {
  title: string;
  category: string;
  description: string;
  image?: MicroCMSImage;
  content?: string;
} & MicroCMSContentBase;

export type NewsListResponse = MicroCMSListResponse<News>;

// 実績の型定義
export type Work = {
  title: string;
  category: string;
  description: string;
  image: MicroCMSImage;
  content?: string;
  location?: string;
  videoUrl?: string; // ドローン撮影用の動画URL
  videoEmbedCode?: string; // Vimeo等の埋め込みコード
} & MicroCMSContentBase;

export type WorkListResponse = MicroCMSListResponse<Work>;
