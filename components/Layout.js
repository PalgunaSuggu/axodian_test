import React from 'react';
import Footer from './Footer';
import Header from './Header';

import { Poppins } from "next/font/google";
import { useRouter } from 'next/router';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

const Layout = ({ children }) => {
    const router = useRouter();

    // Define routes that should NOT have Header and Footer
    const noLayoutRoutes = ['/export-simplified', '/export-finance-loan-india', '/thank-you', '/export-simplified-lp', '/trade-simplified'];

    const hideLayout = noLayoutRoutes.includes(router.pathname);

    return (
        <div className="layout">
            {!hideLayout && <Header />}
            <main className={`${poppins.variable} font-sans`}>{children}</main>
            {!hideLayout && <Footer />}
        </div>
    );
};

export default Layout; 