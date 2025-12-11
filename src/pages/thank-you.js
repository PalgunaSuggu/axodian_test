// Page Title: Thank You
// Page URL: https://www.axodian.com/thank-you
// Local URL: http://localhost:3000/thank-you
import { CheckCircle } from 'lucide-react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import CustomLink from '../../components/Reusable_section/CustomLink/CustomLink'

const ThankYouPage = () => {
    const router = useRouter()
    const [content, setContent] = useState({
        heading: 'Thank You!',
        message: "We appreciate your submission. We'll get back to you shortly.",
        subtext: 'Return to the homepage using the button below.',
        button: 'Back to Home',
    })

    useEffect(() => {
        if (router.isReady) {
            const { heading, message, subtext, button } = router.query

            setContent({
                heading: heading || 'Thank You!',
                message: message || "We appreciate your submission. We'll get back to you shortly.",
                subtext: subtext || 'Return to the homepage using the button below.',
                button: button || 'Back to Home',
            })

            // Clean the query parameters from the URL
            const cleanUrl = window.location.pathname
            window.history.replaceState(null, '', cleanUrl)
        }
    }, [router.isReady, router.query])

    return (
        <>
            <Head>
                <title>Thank You | LeRemitt</title>
                <meta name="robots" content="noindex" />
            </Head>

            <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-blue-50 bg-[url('/images/LandingBanner.webp')] px-4 py-12">
                <div className="bg-white/60 p-8 rounded-lg text-center max-w-2xl w-full border border-dashed border-blue-300">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h1 className="leading-tight text-gray-800 mb-2">{content.heading}</h1>
                    <p className="text-gray-600 text-md md:text-xl mb-2">{content.message}</p>
                    <p className="text-gray-500 text-sm md:text-lg mb-6">{content.subtext}</p>
                    <CustomLink href="/" className="inline-block bg-secondary-light-color text-white px-6 py-3 rounded-full text-lg font-semibold transition hover:bg-secondary-light-color">
                        {content.button}
                    </CustomLink>
                </div>
            </div>
        </>
    )
}

export default ThankYouPage

