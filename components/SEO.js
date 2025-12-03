import Head from 'next/head'
import React from 'react'

const SEO = ({ title, description, keywords, url, image, imageAlt }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical Tag */}
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="LeRemitt" />
      <meta property="og:logo" content="https://www.axodian.com/images/axodian-logo-footer.webp" />

      {/* Facebook App ID */}
      <meta property="fb:app_id" content="723572916540331" />
    </Head>
  )
}

export default SEO