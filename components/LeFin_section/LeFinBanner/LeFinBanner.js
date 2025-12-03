import { Button } from "@/components/ui/button";
import React from "react";
// import ScheduleDialog from "../../Reusable_section/ScheduleForm/ScheduleDialog";
// import LeFinDailogForm from "../../Reusable_section/ScheduleForm/LeFinDailogForm";

const LeFinBanner = ({ onApplyClick }) => {
    return (
        <div className="h-[58vh] lg:h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat bg-black bg-[url('/images/LeFinBanner.webp')]">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-snug text-white mt-6">
                <span className="md:block">Flexible Financing for Exporters</span>
                <span className="mt-2 md:block">Tailored to Your Business Needs</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-sm sm:text-lg md:text-2xl mt-4 max-w-4xl">Get access to working capital with LeFin’s customized lending solutions – from pre-shipment to post-shipment finance. </p>

            <div className="mt-8 flex gap-4">
                {/* Call-to-Action Button */}
                {/* <Button onClick={onExploreClick} className="px-6 py-3 text-black text-md font-semibold bg-gradient-to-b from-white to-white/95 rounded-full shadow-lg hover:opacity-90">
                    Explore Our Solutions
                </Button> */}

                {/* <LeFinDailogForm showProductOptions={true} buttonText="Submit" defaultSelected={['trade_finance']} formTitle="Know More"> */}
                    <Button className="p-6 text-white text-lg font-semibold bg-gradient-to-b from-[#4D76FF] to-[#1A4FFF] rounded-lg shadow-lg hover:opacity-90" onClick={onApplyClick}>
                        Apply Now
                    </Button>
                {/* </LeFinDailogForm> */}
            </div>
        </div>
    );
};

export default LeFinBanner;
