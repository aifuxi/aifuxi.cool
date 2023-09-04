import { Metadata } from 'next';

import { AnalyticsProvider, Navbar } from '@/components/client';
import { Footer } from '@/components/rsc';
import { WEBSITE } from '@/constants';
import '@/styles/global.scss';
import { cn } from '@/utils';

export const metadata: Metadata = {
  title: {
    template: `%s - ${WEBSITE}`,
    default: `${WEBSITE}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        {/* 防止切换主题时闪烁 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
              window.matchMedia('(prefers-color-scheme: dark)').matches)
          ) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      `,
          }}
        />
        {/* 打开外部链接时，以新开tab的方式打开 */}
        <base target="_blank" />
      </head>
      <body className={cn('debug-screens antialiased', 'bg-white text-black')}>
        <AnalyticsProvider>
          <Navbar />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
