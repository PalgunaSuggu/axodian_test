import { Card, CardContent } from '@/components/ui/card';
import LeDocForm from '../../../Reusable_section/ScheduleForm/LeDocForm';
import LeDocFormLp from '../../../Reusable_section/ScheduleForm/LeDocFormLp';
import { useRouter } from 'next/router';

const DocLandingBanner = () => {
    const router = useRouter()
    const path = router.pathname
    return (
        <section className="min-h-screen flex items-center justify-center bg-blue-50 bg-cover bg-center py-20 px-4" style={{ backgroundImage: "url('/images/DocLandingBanner.webp')" }}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <div className="text-center mt-6 md:mt-0 md:text-left">
                    <h1 className="leading-tight text-gray-900 mb-6">
                        The Smartest Way to Manage Export Documents & Compliance
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-700 mb-8 mx-auto md:mx-0">
                        LeDoc is an AI-powered platform designed to simplify trade documentation, ensure compliance, and accelerate global exports—All in One Place
                    </p>
                </div>

                <div className="flex justify-center">
                    <Card className="w-full max-w-lg bg-white/55 backdrop-blur-md border border-solid border-gray-200 shadow-none rounded-lg">
                        <CardContent className="p-6">
                            <h4 className="leading-tight text-gray-800 mb-6">Schedule a Demo</h4>
                            {path === '/export-simplified' && <LeDocForm defaultSelected={['document_management']} buttonText='Talk to us' />}
                            {path === '/export-simplified-lp' && <LeDocFormLp defaultSelected={['document_management']} buttonText='Talk to us' />}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default DocLandingBanner;