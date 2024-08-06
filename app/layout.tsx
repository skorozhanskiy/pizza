import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import '@/scss/globals.scss';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { theme } from '@/components/shared';

import { Header } from '@/components/shared';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Самая вкусная пицца',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            <Header />
            <main className="main-container">{children}</main>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
