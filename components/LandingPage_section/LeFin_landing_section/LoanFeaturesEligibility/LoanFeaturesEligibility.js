// 'use client';

// import { Button } from '@/components/ui/button';
// import { ArrowRight, Banknote, Boxes, Building2, CheckCircle, ChevronLeft, ChevronRight, ClipboardCheck, Clock, CreditCard, FileBarChart, FileText, Landmark, Shield, } from 'lucide-react';
// import { useRef } from 'react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Autoplay, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import LeFinDailogFrom from '../../../Reusable_section/ScheduleForm/LeFinDailogFrom';
// import { shipmentLoanTypes } from '../../../Data';
// import LeFinForm from '../../../Reusable_section/ScheduleForm/LeFinForm';
// import { Separator } from '@/components/ui/separator';

// const loanSlides = [
//     {
//         title: 'Pre-Shipment Finance',
//         subtitle: 'Unsecured Loans',
//         items: [
//             { text: 'GST based Loans', icon: FileBarChart },
//             { text: 'Instant OD in Quick steps', icon: Clock },
//             { text: 'Loan without Financials', icon: FileText },
//             { text: 'Working Capital & Business Loans', icon: Banknote },
//         ],
//     },
//     {
//         title: 'Pre-Shipment Finance',
//         subtitle: 'Secured Loans',
//         items: [
//             { text: 'Plant and Machinery', icon: Building2 },
//             { text: 'LC & Buyers Credit', icon: CreditCard },
//             { text: 'OD/CC', icon: ClipboardCheck },
//             { text: 'Inventory Finance', icon: Boxes },
//             { text: 'Term Loans', icon: Landmark },
//         ],
//     },
//     {
//         title: 'Post-Shipment Finance',
//         subtitle: '',
//         items: [
//             { text: 'LC Discounting', icon: CreditCard },
//             { text: 'Export Bill Discounting', icon: FileText },
//             { text: 'Export Factoring (Non recourse)', icon: Shield },
//         ],
//     },
// ];

// const eligibility = [
//     'Business vintage: 1+ year',
//     'Minimum turnover: ₹30 Lakhs',
//     'At least 2 shipments completed',
// ];

// const LoanFeaturesEligibility = () => {
//     const prevRef = useRef(null);
//     const nextRef = useRef(null);
//     const swiperRef = useRef(null);

//     return (
//         <section className="bg-gray-50 md:py-24 py-16">
//             <div className='container mx-auto'>
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Financing Solutions</h2>
//                     <p className="text-black text-lg max-w-3xl mx-auto">Flexible export financing solutions tailored for every stage—pre-shipment, secured, or post-shipment—with fast approvals, low rates, and minimal documentation.</p>
//                 </div>
//                 <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2 rounded-lg h-auto mb-20">
//                     {shipmentLoanTypes.map((loan) => (
//                         <div key={loan.id} value={loan.id} className="flex flex-col items-center text-center gap-2 bg-white py-6">
//                             <span className="p-3 bg-blue-100 rounded-full text-blue-600">
//                                 <loan.categoryIcon className="w-6 h-6" />
//                             </span>
//                             <div>
//                                 <p className="text-lg font-semibold">{loan.category}</p>
//                                 <p className="text-xl font-bold text-gray-500 mt-1">{loan.title}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                     {/* Swiper Section */}
//                     <div
//                         className="bg-secondary-light-color rounded-lg shadow-sm md:p-8 p-6 cursor-pointer"
//                         onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
//                         onMouseLeave={() => swiperRef.current?.autoplay?.start()}
//                     >
//                         <h2 className="text-3xl font-bold text-white mb-4">
//                             Finance That Works for You
//                         </h2>

//                         <Swiper
//                             pagination={{ clickable: true }}
//                             modules={[Navigation, Autoplay]}
//                             spaceBetween={30}
//                             loop={true}
//                             autoplay={{
//                                 delay: 5000,
//                                 disableOnInteraction: false,
//                                 pauseOnMouseEnter: false, // we'll handle pause manually
//                             }}
//                             navigation={{
//                                 prevEl: prevRef.current,
//                                 nextEl: nextRef.current,
//                             }}
//                             onBeforeInit={(swiper) => {
//                                 swiper.params.navigation.prevEl = prevRef.current;
//                                 swiper.params.navigation.nextEl = nextRef.current;
//                                 swiperRef.current = swiper;
//                             }}
//                         >
//                             {loanSlides.map((slide, idx) => (
//                                 <SwiperSlide key={idx}>
//                                     <div>
//                                         <p className="text-xl font-semibold text-white">{slide.title}</p>
//                                         <p className="text-blue-200 text-lg mb-6">{slide.subtitle}</p>
//                                         <ul className="space-y-3">
//                                             {slide.items.map((item, i) => {
//                                                 const Icon = item.icon;
//                                                 return (
//                                                     <li key={i} className="text-white pb-2">
//                                                         <div className="flex items-center gap-4">
//                                                             <div className="p-2 bg-blue-50 rounded-lg">
//                                                                 <Icon className="w-6 h-6 text-blue-700" />
//                                                             </div>
//                                                             <p className='text-lg mt-2 text-white font-medium'>{item.text}</p>
//                                                         </div>
//                                                     </li>
//                                                 );
//                                             })}
//                                         </ul>
//                                     </div>
//                                 </SwiperSlide>
//                             ))}
//                         </Swiper>

//                         {/* Custom Navigation Buttons */}
//                         <div className="flex justify-end items-center gap-6">
//                             <button
//                                 ref={prevRef}
//                                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
//                             >
//                                 <ChevronLeft className="w-8 h-8" />
//                             </button>
//                             <button
//                                 ref={nextRef}
//                                 className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
//                             >
//                                 <ChevronRight className="w-8 h-8" />
//                             </button>
//                         </div>

//                         <Separator className="bg-blue-300 my-4" />

//                         {/* Eligibility Section */}
//                         <div>
//                             <h2 className="text-3xl font-bold text-white mb-4">
//                                 Minimum Eligibility Criteria
//                             </h2>
//                             <ul className="space-y-5">
//                                 {eligibility.map((item, index) => (
//                                     <li key={index} className="flex gap-3 items-center text-gray-700">
//                                         <CheckCircle className="w-5 h-5 text-white" />
//                                         <p className='text-lg text-white'>{item}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>

//                     {/* Eligibility Section */}
//                     <div className="bg-white rounded-lg shadow-sm md:p-8 p-6">
//                         <LeFinForm defualtedSelected={['trade_finance']} />
//                     </div>
//                 </div>
//             </div>
//         </section >
//     );
// };

// export default LoanFeaturesEligibility;

'use client';

import { Banknote, Boxes, Building2, CheckCircle, ChevronLeft, ChevronRight, ClipboardCheck, Clock, CreditCard, FileBarChart, FileText, Landmark, Shield } from 'lucide-react';
import { useRef } from 'react';

import { Separator } from '@/components/ui/separator';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { shipmentLoanTypes } from '../../../Data';
import LeFinForm from '../../../Reusable_section/ScheduleForm/LeFinForm';

const loanSlides = [
    {
        title: 'Pre-Shipment Finance',
        subtitle: 'Unsecured Loans',
        items: [
            { text: 'GST based Loans', icon: FileBarChart },
            { text: 'Instant OD in Quick steps', icon: Clock },
            { text: 'Loan without Financials', icon: FileText },
            { text: 'Working Capital & Business Loans', icon: Banknote },
        ],
    },
    {
        title: 'Pre-Shipment Finance',
        subtitle: 'Secured Loans',
        items: [
            { text: 'Plant and Machinery', icon: Building2 },
            { text: 'LC & Buyers Credit', icon: CreditCard },
            { text: 'OD/CC', icon: ClipboardCheck },
            { text: 'Inventory Finance', icon: Boxes },
            { text: 'Term Loans', icon: Landmark },
        ],
    },
    {
        title: 'Post-Shipment Finance',
        subtitle: '',
        items: [
            { text: 'LC Discounting', icon: CreditCard },
            { text: 'Export Bill Discounting', icon: FileText },
            { text: 'Export Factoring (Non recourse)', icon: Shield },
        ],
    },
];

const eligibility = [
    'Business vintage: 1+ year',
    'Minimum turnover: ₹30 Lakhs',
    'At least 2 shipments completed',
];

const LoanFeaturesEligibility = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    return (
        <section className="bg-cover bg-center py-16 md:py-24 text-white bg-slate-800" style={{ backgroundImage: "url('/images/FinLandingWhyLeFin.webp')" }}>
            {/* <section className="bg-gray-50 md:py-24 py-16"> */}
            <div className='container mx-auto'>
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Financing Solutions</h2>
                    <p className="text-gray-200 text-lg max-w-3xl mx-auto">Flexible export financing solutions tailored for every stage—pre-shipment, secured, or post-shipment—with fast approvals, low rates, and minimal documentation.</p>
                </div>
                <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-2 rounded-lg h-auto my-12">
                    {shipmentLoanTypes.map((loan) => (
                        <div key={loan.id} value={loan.id} className="flex flex-col items-center text-center gap-2 backdrop-blur-lg bg-white/5 border border-solid border-white/10 py-6">
                            <span className="p-3 bg-black/15 rounded-full text-blue-300">
                                <loan.categoryIcon className="w-6 h-6" />
                            </span>
                            <div>
                                <p className="text-lg font-semibold">{loan.category}</p>
                                <p className="text-xl font-bold text-gray-300 mt-1">{loan.title}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Swiper Section */}
                    <div
                        className="backdrop-blur-sm bg-white/5 border border-solid border-white/10 rounded-lg shadow-sm md:p-8 p-6 cursor-pointer"
                        onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
                        onMouseLeave={() => swiperRef.current?.autoplay?.start()}
                    >
                        <h2 className="text-3xl font-bold text-white mb-2">
                            Finance That Works for You
                        </h2>

                        <Swiper
                            pagination={{ clickable: true }}
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false, // we'll handle pause manually
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiperRef.current = swiper;
                            }}
                        >
                            {loanSlides.map((slide, idx) => (
                                <SwiperSlide key={idx}>
                                    <div>
                                        <p className="text-xl font-semibold text-white">{slide.title}</p>
                                        <p className="text-gray-200 text-lg mb-4">{slide.subtitle}</p>
                                        <ul className="space-y-2">
                                            {slide.items.map((item, i) => {
                                                const Icon = item.icon;
                                                return (
                                                    <li key={i} className="text-white">
                                                        <div className="flex items-center gap-4">
                                                            <div className="p-2 bg-black/15 rounded-lg">
                                                                <Icon className="w-6 h-6 text-blue-300" />
                                                            </div>
                                                            <p className='text-lg text-white font-medium'>{item.text}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <div className="flex justify-end items-center gap-6">
                            <button
                                ref={prevRef}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                ref={nextRef}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>

                        <Separator className="bg-blue-300 my-4" />

                        {/* Eligibility Section */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Minimum Eligibility Criteria
                            </h2>
                            <ul className="space-y-3">
                                {eligibility.map((item, index) => (
                                    <li key={index} className="flex gap-2 items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-white" />
                                        <p className='text-lg text-white'>{item}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Eligibility Section */}
                    <div className="bg-white text-black rounded-lg shadow-sm md:p-8 p-6">
                        <LeFinForm defualtedSelected={['trade_finance']} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoanFeaturesEligibility;

