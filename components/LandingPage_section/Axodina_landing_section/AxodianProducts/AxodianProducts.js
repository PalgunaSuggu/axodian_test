import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { CheckCircle2, CreditCard, FileText, Rocket } from 'lucide-react';

const carouselData = [
    {
        id: 1,
        title: 'Cut document prep time',
        description: 'Pre-built templates and automated checks to reduce manual work',
        icon: <FileText className="w-12 h-12 text-white" />
    },
    {
        id: 2,
        title: 'Stay compliant',
        description: 'Guided steps and comprehensive audit history for full compliance',
        icon: <CheckCircle2 className="w-12 h-12 text-white" />
    },
    {
        id: 3,
        title: 'Payments on time',
        description: 'Track status, charges, and reconciliations in one place',
        icon: <CreditCard className="w-12 h-12 text-white" />
    },
    {
        id: 4,
        title: 'Financing when you need it',
        description: 'Faster decisions with cleaner, organized trade data',
        icon: <Rocket className="w-12 h-12 text-white" />
    }
];

const AxodianProducts = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const swiperRef = useRef(null);

    const updateNavigation = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    return (
        <section className="pb-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                            renderBullet: (_, className) => {
                                return `<span class="${className} w-3 h-3 inline-block rounded-full transition-colors mx-1"></span>`;
                            },
                        }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                            updateNavigation(swiper);
                        }}
                        onSlideChange={updateNavigation}
                        className="relative"
                    >

                        {carouselData.map((item) => (
                            <SwiperSlide key={item.id} className="relative">
                                <div className="h-full bg-primary-color rounded-xl p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 mx-auto relative group">
                                    <button className="custom-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md" disabled={isBeginning && !swiperRef.current?.params.loop}>
                                        <ChevronLeft className="w-6 h-6 text-gray-700" />
                                    </button>

                                    <div className="px-10">
                                        <div className="flex justify-center mb-6">
                                            <div className="bg-primary-color/70 backdrop-blur-md shadow-2xl rounded-full p-4 w-24 h-24 flex items-center justify-center">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <h3 className="leading-tight text-white my-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/90 text-lg">{item.description}</p>
                                    </div>

                                    <button className="custom-next absolute right-6 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-md" disabled={isEnd && !swiperRef.current?.params.loop}>
                                        <ChevronRight className="w-6 h-6 text-gray-700" />
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination !relative !mt-8 [&>.swiper-pagination-bullet]:bg-primary-color/30 [&>.swiper-pagination-bullet-active]:bg-primary-color" />
                    </Swiper>

                    <div className="mt-12 text-center">
                        <Button
                            className="bg-primary-color hover:bg-primary-color/90 text-white px-8 py-3 text-lg font-medium rounded-lg"
                            onClick={() => {
                                document.getElementById('walkthrough')?.scrollIntoView({
                                    behavior: 'smooth'
                                });
                            }}
                        >
                            Book a 20-minute walkthrough
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AxodianProducts;