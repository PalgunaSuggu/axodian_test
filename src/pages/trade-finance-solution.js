// Page Title: Trade Finance Solution (Discontinued)
// Page URL: https://www.axodian.com/trade-finance-solution
// Local URL: http://localhost:3000/trade-finance-solution
import SEO from '../../components/SEO'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const tradeFinanceSolution = () => {
  return (
    <>
      <SEO
        title="Service No Longer Offered | Axodian"
        description="This service is no longer offered by Axodian. Explore our other solutions for documentation, compliance, and payments."
        url="https://www.axodian.com/trade-finance-solution"
        image="https://www.axodian.com/images/axodian-logo-footer.webp"
        imageAlt="Axodian"
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center px-6">
          <h1 className="text-gray-900 mb-4">Service No Longer Offered</h1>
          <p className="text-gray-600 text-lg max-w-3xl mb-8">
            This service is no longer available. Explore our other solutions for documentation, compliance, and cross-border payments.
          </p>
          <Link href="/">
            <Button className="bg-primary-color hover:bg-primary-color/90 text-white px-8 py-3 rounded-lg">
              Explore Our Solutions
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default tradeFinanceSolution
