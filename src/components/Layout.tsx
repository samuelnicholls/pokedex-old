import { FC } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export type LayoutProps = {
  children: JSX.Element;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col py-8 lg:py-20 text-center bg-gray-800">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;