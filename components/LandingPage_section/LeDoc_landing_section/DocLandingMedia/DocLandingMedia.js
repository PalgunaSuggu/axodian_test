import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import { mediaFeatures } from "../../../Data";
import CustomLink from "../../../Reusable_section/CustomLink/CustomLink";

const DocLandingMedia = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);
    return (
        <div className="py-16 md:py-24 bg-slate-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-black">In The News</h2>
                <p className="text-lg md:text-2xl max-w-2xl lg:max-w-4xl mb-6 mx-auto text-gray-600 mt-2">Discover the tools and advantages that drive secure, scalable, and compliant trade documentation.</p>
            </div>

            <div className="container mx-auto" onMouseEnter={() => swiperRef.current?.autoplay?.stop()} onMouseLeave={() => swiperRef.current?.autoplay?.start()}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    navigation={{
                        prevEl: "#custom-prev",
                        nextEl: "#custom-next",
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="w-full"
                >
                    {mediaFeatures.map((feature) => (
                        <SwiperSlide key={feature.id} className="cursor-pointer h-[450px]">
                            <CustomLink href={feature.link} target="_blank" rel="noopener noreferrer">
                                <Card className="h-full flex flex-col bg-transparent border border-dashed border-black/25 shadow-none">
                                    <div className="h-[220px] w-full">
                                        <Image src={feature.image} alt={feature.alt} width={300} height={300} className="rounded-md w-full h-full object-cover" />
                                    </div>
                                    <div className="text-black text-center md:text-left flex-1 flex flex-col justify-center p-4">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <h1 className="text-lg font-medium line-clamp-2 cursor-pointer">{feature.title}</h1>
                                                </TooltipTrigger>
                                                <TooltipContent className="max-w-sm bg-blue-50 text-black p-4 shadow-lg rounded-lg">
                                                    <p>{feature.title}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <p className="mt-4 text-base font-normal">{feature.source}</p>
                                        <p className="text-sm mt-1 font-light">{feature.date}</p>
                                    </div>
                                </Card>
                            </CustomLink>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="flex justify-end items-center gap-6 mt-4">
                    <button
                        id="custom-prev"
                        className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        id="custom-next"
                        className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DocLandingMedia