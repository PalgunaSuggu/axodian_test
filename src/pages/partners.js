// Page Title: Partners
// Page URL: https://www.axodian.com/partners
// Local URL: http://localhost:3000/partners
import Partners from '../../components/Partners_section/Partners'
import SEO from '../../components/SEO'

const partners = () => {
  return (
    <div>
      <SEO
        title="Partner With Axodian | Global Trade Partnership Program"
        description="Join the Axodian Partner Program and collaborate with us to simplify global trade for exporters through innovative solutions for payments, documentation, and trade finance."
        url="https://www.axodian.com/partners"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Partner With Axodian"
      />
      <Partners />
    </div>
  )
}

export default partners