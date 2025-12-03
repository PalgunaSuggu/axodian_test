import { Button } from "@/components/ui/button";
import React from "react";

const AboutBanner = ({ onExploreClick }) => {
    return (
        <div className="min-h-[66vh] md:min-h-screen bg-cover bg-center flex items-center justify-center text-white px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-900 bg-[url('/images/AboutBannerAxodian.webp')]">
            {/* Content */}
            <div className="text-center">
                {/* <span className="text-gray-300 bg-white/15 border-2 border-solid border-gray-500 px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg">ABOUT US</span> */}

                <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mt-6">
                    <span className="md:block mb-2">Reimagining Global Trade for Businesses</span>
                </h1>

                <p className="text-sm sm:text-lg md:text-2xl mt-2 sm:mt-4 max-w-4xl mx-auto text-gray-300 px-2">
                    <span className="md:block mb-2">At <span className="font-extrabold">Axodian</span>, we simplify international trade through a trusted portfolio of solutions that automate documentation and compliance, streamline payments, and enable access to intelligent financing.</span>
                </p>

                <Button onClick={onExploreClick} className="p-6 text-[#663399] text-md md:text-lg font-semibold rounded-lg bg-white hover:bg-white/90 shadow-lg mt-6">
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default AboutBanner;
