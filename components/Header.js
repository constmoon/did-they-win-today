import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

const Header = () => {
  return (
    <>
      <NextSeo
        title="Did they win today?"
        description="우리 팀 오늘 승리했나요?"
        openGraph={{
          type: `website`,
          url: `https://didtheywin.today`,
          site_name: ``,
          description: `우리 팀 오늘 승리했나요?`,
          images: [{
            url: `https://didtheywin.today/images/ogp.png`
          }]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />
      <Head>
        <title>Did they win today?</title>
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </Head>
    </>
  )
};

export default Header;