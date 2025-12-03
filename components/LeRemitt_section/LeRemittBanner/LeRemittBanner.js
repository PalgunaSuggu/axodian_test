import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { app_url } from "../../../config/config";
import LeRemDailogForm from '../../Reusable_section/ScheduleForm/LeRemDailogForm';
import getUtmParams from "../../getUtmParams";

const LeRemittBanner = () => {
    const handleLeRemittLogin = () => {
        let utm_params = getUtmParams();
        window.open(`${app_url}/#/LoginScreens/default-login${utm_params ? '?' + utm_params : ''}`, '_blank');
    };
    return (
        <div className="h-[58vh] lg:h-screen flex flex-col justify-center items-center text-center bg-cover bg-center bg-no-repeat bg-black bg-[url('/images/LeRemBanner.webp')]">
            {/* Top Badge */}
            <div className="bg-white/10 text-[#CFDBFF] text-sm mt-0 lg:mt-12 px-4 py-2 rounded-full flex items-center gap-4 backdrop-blur-md">
                <span>Zero-FX Margin | Transparent Pricing | Hassle-Free Payments</span>
                <button onClick={handleLeRemittLogin} className="bg-[#194FFF] hover:bg-secondary-light-color text-white rounded-full px-4 py-2">
                    <MoveRight className="w-4 h-4" />
                </button>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-snug text-white mt-6">
                <span className="block">Seamless Cross-Border</span>
                <span className="mt-2 block">Payments for Exporters</span>
            </h1>

            {/* Subheading */}
            <p className="text-gray-300 text-sm sm:text-lg md:text-2xl mt-4 max-w-3xl">
                LeRemitt enables exporters to receive international payments at zero-FX margin and economical fees ensuring transparency and ease
            </p>

            {/* Call-to-Action Button */}
            <LeRemDailogForm showProductOptions={true} defaultSelected={['remittance']}>
                <Button className="p-6 px-8 mt-6 text-white text-lg font-semibold bg-gradient-to-b from-[#4D76FF] to-[#1A4FFF] rounded-lg hover:opacity-90">
                    Talk to Us
                </Button>
            </LeRemDailogForm>
        </div>
    );
};

export default LeRemittBanner;
