import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="realerdemdoruk"
          data-description="Support me on Buy me a coffee!"
          data-message=""
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>{' '}
      </Head>

      <div className="relative z-10 px-3  overflow-hidden min-h-screen antialiased font-montserrat bg-gray-900 text-white ">
        <div className="w-full h-full">
          <Header />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
