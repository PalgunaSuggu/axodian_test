// Page Title: About Us
// Page URL: https://www.axodian.com/about
// Local URL: http://localhost:3000/about
import React from 'react'
import SEO from '../../components/SEO'
import About from '../../components/About_section/About'

const about = () => {
  return (
    <>
      <SEO
        title="Know About LeRemitt"
        description="Learn about LeRemitt's mission and team, committed to making international trade for MSMEs fast, secure, and affordable."
        url="https://www.axodian.com/about"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="About LeRemitt"
      />
      <About />
    </>
  )
}

export default about

