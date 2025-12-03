import React from "react";
import { Button } from "@/components/ui/button";
import LeDocDailogForm from "../../Reusable_section/ScheduleForm/LeDocDailogForm";

const LeDocBanner = () => {
    return (
        <div className="h-[64vh] lg:h-screen bg-cover bg-center text-black bg-[#B9BFFF] bg-[url('/images/LeDocBgAxodianMob.webp')] lg:bg-[url('/images/LeDocBgAxodian.webp')] flex justify-center items-center">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-black mb-6">
                    <span className="md:block mb-2">AI-powered Document & Compliance</span>
                    <span className="md:block">Management for Exporters</span>
                </h1>
                <p className="text-sm sm:text-lg md:text-2xl mb-12">
                    LeDoc automates trade documentation & compliances, <br /> ensuring accuracy and efficiency—so you can focus on growing your business.
                </p>
                <LeDocDailogForm showProductOptions={true} defaultSelected={['document_management']} formType="LeDocForm">
                    <Button className="bg-primary-color hover:bg-primary-color/90 rounded-lg text-lg text-white p-6">
                        Request a Demo
                    </Button>
                </LeDocDailogForm>
            </div>
        </div>
    );
};

export default LeDocBanner;