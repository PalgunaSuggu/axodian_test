import { Card, CardContent } from '@/components/ui/card';
import LeDocForm from '../../../Reusable_section/ScheduleForm/LeDocForm';
import { useRouter } from 'next/router';

const OneDocLandingBanner = () => {
    const router = useRouter()
    const path = router.pathname
    return (
        <section className="min-h-screen flex items-center justify-center bg-blue-50 bg-cover bg-center py-20" style={{ backgroundImage: "url('/images/DocLandingBanner.webp')" }}>
            <div className="container mx-auto grid grid-cols-1 gap-6 items-center">
                <div className="text-center">
                    <h1 className="leading-tight text-gray-900 mb-4 max-w-4xl mx-auto">
                        The Smartest Way to Manage Export Documents & Compliance
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-700 mb-4 max-w-4xl mx-auto">
                        OneDoc is an AI-powered platform designed to simplify trade documentation, ensure compliance, and accelerate global exports—All in One Place
                    </p>
                </div>

                <Card className="p-6 bg-white/40 backdrop-blur-md border border-solid border-gray-300 rounded-lg">
                    <LeDocForm defaultSelected={['document_management']} buttonText='Talk to us' />
                </Card>
            </div>
        </section>
    );
};

export default OneDocLandingBanner;