import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'しんじょう さんぽ | 武蔵新城3D街歩き',
  description: '武蔵新城駅南口を歩いて、お店や街の景色を楽しむ3D街歩きサンプル。',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
