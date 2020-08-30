import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = () => {
  return (
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
  )
};

export default SEO;