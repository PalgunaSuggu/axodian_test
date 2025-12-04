import { Card } from "@/components/ui/card";
import Image from "next/image";
import LeFinForm from "../../Reusable_section/ScheduleForm/LeFinForm";

const LoanApplication = () => {
    return (
        <div className="container mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch pt-10 md:pb-24">
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
                <h2 className="leading-tight mb-4">
                    Apply for <span className="text-blue-600 font-bold">Import-Export Loans</span>
                </h2>
                <p className="text-gray-600 mb-8 text-md md:text-lg">
                    {`Get in touch with our friendly team and we'll get in touch within short time.`}
                </p>

                <Card className="p-4 border border-solid border-gray-200 flex-grow">
                    <LeFinForm defualtedSelected={['trade_finance']} />
                </Card>
            </div>

            <div className="col-span-12 md:col-span-6">
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                    <Image src="/images/lefinLoneImg.webp" alt="Loan Illustration" fill className="object-cover" />
                </div>
            </div>
        </div>
    );
};

export default LoanApplication;
