import { Card, CardContent } from "@/components/ui/card";
import { oneComplianceSolves } from "../../../Data";

const OneComplianceSolves = () => {
    return (
        <div className="text-white py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="leading-tight text-white">What One Compliance Solves</h1>
                    <p className="mt-4 text-lg md:text-2xl">With One Compliance, EDPMS recon and EBRC issuance becomes easy & , trackable.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    {oneComplianceSolves.map((oneComplianceSolve) => (
                        <div key={oneComplianceSolve.id} className="border-2 border-white/10 border-solid shadow-none bg-transparent text-white p-6 rounded-lg">
                            <div className="flex items-center gap-3 mb-3">
                                <oneComplianceSolve.icon className="w-12 h-12 text-secondary-light-color bg-white p-2 rounded-lg" />
                                <h5 className="leading-tight">{oneComplianceSolve.title}</h5>
                            </div>
                            <p className="text-md md:text-lg opacity-75">{oneComplianceSolve.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OneComplianceSolves;
