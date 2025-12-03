import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import LeFinDailogForm from '../../../Reusable_section/ScheduleForm/LeFinDailogForm';

const FinLandingBanner = ({ }) => {
    return (
        <section className="min-h-screen flex items-center text-center bg-blue-50 bg-cover bg-center py-20 px-4" style={{ backgroundImage: "url('/images/LeFinLandingBanner.webp')" }}>
            <div className="container mx-auto">
                <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
                    Need quick funds to fulfill your next export order?
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Flexible pre-shipment and post-shipment finance. 100% digital. No branch visits.
                </p>
                <p className="text-lg md:text-xl text-gray-600 mb-10">
                    Get business loans designed for Indian exporters from 20Lakhs Onwards*
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                    <LeFinDailogForm showProductOptions={true} buttonText="Submit" defaultSelected={['trade_finance']} formTitle="Know More">
                        <Button className="text-white bg-secondary-light-color hover:bg-blue-700 text-lg p-6 rounded-lg">
                            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </LeFinDailogForm>
                </div>
            </div>
        </section>
    );
};

export default FinLandingBanner;
