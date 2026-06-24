import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ScrollToTop from './Reusable_section/ScrollToTop/ScrollToTop';
import { Inter } from "next/font/google";
import { useRouter } from 'next/router';

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-inter",
    display: "swap",
});

const Layout = ({ children }) => {
    const router = useRouter();

    // Define routes that should NOT have Header and Footer
    const noLayoutRoutes = ['/404', '/export-simplified', '/export-finance-loan-india', '/thank-you', '/export-simplified-lp', '/trade-simplified', '/export-compliance-edpms-ebrc-lp', '/book-15-min-call', '/onedoc-export-simplified-lp', '/trade-finance-solution'];

    const hideLayout = noLayoutRoutes.includes(router.pathname);

    return (
        <div className="layout">
            {!hideLayout && <Header />}
            <main className={`${inter.variable} font-sans`}>{children}</main>
            {!hideLayout && <Footer />}
            <ScrollToTop />
        </div>
    );
};

export default Layout; 