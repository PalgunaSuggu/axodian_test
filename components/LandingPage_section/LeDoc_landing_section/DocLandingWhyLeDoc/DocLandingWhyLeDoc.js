import { Button } from '@/components/ui/button'
import { CheckCircle, Search, Share2, ShieldCheck, Users } from 'lucide-react'
import LeDocDailogForm from '../../../Reusable_section/ScheduleForm/LeDocDailogForm'

const features = [
    {
        icon: ShieldCheck,
        title: 'Organised Shipment Documents',
        description: 'Digitally store and manage all trade documents securely.',
    },
    {
        icon: Search,
        title: 'Search at the Click of a Button',
        description: 'Search through Data or Documents for Audit/Compliances.',
    },
    {
        icon: Share2,
        title: 'Seamless Sharing & Collaboration',
        description: 'Instantly share documents with banks, buyers & other partners.',
    },
    {
        icon: Users,
        title: 'Real-Time Collaboration',
        description: 'Collaborate in real time on shipping documents.',
    },
    {
        icon: CheckCircle,
        title: 'Automated Compliance Checks',
        description: 'Reduce errors and avoid costly penalties.',
    },
]

const DocLandingWhyLeDoc = ({ formType }) => {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-center">
                    <span className="md:block mb-2"> LeDoc Automates, Secures & Simplifies</span>
                    <span className="md:block">Your Trade Documents!</span>
                </h1>
                <p className="text-center md:text-lg text-md text-gray-600 max-w-4xl mx-auto mt-6 mb-12">
                    Managing export documentation shouldn’t be complex and time-consuming. LeDoc is an AI-powered platform designed to streamline your trade documentation, eliminate manual errors, and ensure 100% compliance—all in one place.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                            <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="text-lg md:text-xl font-semibold mb-1">{feature.title}</h4>
                                <p className="text-md md:text-lg text-gray-600">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-8'>
                    <LeDocDailogForm defaultSelected={['document_management']} formType={formType}>
                        <Button className=" mt-2 text-white text-md font-semibold bg-gradient-to-b from-[#234fdf] to-[#1A4FFF] rounded-lg hover:opacity-90">
                            Request a Demo
                        </Button>
                    </LeDocDailogForm>
                </div>
            </div>
        </section>
    )
}

export default DocLandingWhyLeDoc
