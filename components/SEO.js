import Head from 'next/head'
import React from 'react'

const SEO = ({ title, description, keywords, url, image, imageAlt, noindex }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical Tag */}
      <link rel="canonical" href={url} />

      {/* Robots Meta Tag */}
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Axodian" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:logo" content="https://www.axodian.com/images/axodian-logo-footer.webp" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Facebook App ID */}
      <meta property="fb:app_id" content="723572916540331" />
    </Head>
  )
}

export default SEO