import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomLink from "../CustomLink/CustomLink";

export function Testimonials({ reviews = [],  duration="", titleOne, titleTwo, subHeading, isHomePage, mediaFeatures, withImgReviews, withoutImgReviews }) {

    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section>
            <div className="bg-white py-16 md:py-24">
                <div className="text-center mb-12">
                    {/* <div className="inline-block text-[#0461F0] bg-[#F5F9FF] px-4 py-1 rounded-lg text-md font-semibold mb-4">{tag}</div> */}
                    <h1 className="text-gray-900 leading-tight">
                        <span className="md:block">{titleOne}</span>
                        <span className="md:block">{titleTwo}</span>
                    </h1>
                    <p className="text-lg md:text-2xl max-w-2xl lg:max-w-4xl my-6 mx-auto text-black">{subHeading}</p>
                </div>

                {/* Conditionally render this section only on the Img Reviews */}
                {withImgReviews && (
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:30s]">
                            {reviews.map((review) => (
                                <Card key={review.id} className="relative h-96 w-80 md:w-[300px] cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform">
                                    <Image src={review.image || "/images/placeimg.webp"} alt={review.name} fill className="object-cover w-full h-full" />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 flex flex-col justify-end">
                                        <div className="text-white">
                                            <p className="text-sm font-semibold">{review.name}</p>
                                            <p className="text-sm text-gray-300 mb-2">{review.company}</p>

                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <p className="text-sm line-clamp-3">{review.body}</p>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="max-w-sm bg-white text-black p-4 shadow-md rounded-md">
                                                        <p>{review.body}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                    </div>
                                </Card>

                            ))}
                        </Marquee>

                        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
                    </div>
                )}

                {withoutImgReviews && (
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className={`[--duration:${duration}]`}>
                            {reviews.map((review) => (
                                <Card key={review.id} className="relative h-full w-80 md:w-[500px] cursor-pointer overflow-hidden shadow-none rounded-lg  p-6 bg-[#F9FAFB] hover:bg-[#663399]/5 transition-colors border hover:border-solid hover:border-[#663399]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Avatar className="h-14 w-14">
                                            {review.image ? (
                                                <Image src={review.image} width={200} height={200} alt={review.name} className="h-full w-full object-cover" />
                                            ) : (
                                                <AvatarFallback className="bg-primary-light-color text-2xl text-white font-semibold">
                                                    {review.name ? review.name.trim().charAt(0).toUpperCase() : <User className="h-8 w-8 text-white" />}
                                                </AvatarFallback>
                                            )}
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <p className="text-lg font-semibold">{review.name}</p>
                                            <p className="text-md text-muted-foreground">{review.company}</p>
                                        </div>
                                    </div>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <p className="text-md md:text-lg text-gray-700 line-clamp-4">{review.body}</p>
                                            </TooltipTrigger>
                                            <TooltipContent className="max-w-sm bg-white text-black p-4 shadow-md rounded-md">
                                                <p>{review.body}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Card>
                            ))}
                        </Marquee>
                    </div>
                )}
            </div>

            {/* Conditionally render this section only on the homepage */}
            {isHomePage && (
                <div className="py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
                    <div className="text-center mb-12">
                        {/* <div className="inline-block text-white bg-white/10 px-6 py-1 rounded-lg text-md font-semibold mb-4">Resources</div> */}
                        <h1 className="text-white leading-tight">In The News</h1>
                        <p className="text-lg md:text-2xl max-w-2xl lg:max-w-4xl mb-6 mx-auto text-gray-100 mt-2">Latest updates on our products, capabilities, and industry impact.</p>
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
                                    {feature.link ? (
                                        <CustomLink href={feature.link} target="_blank" rel="noopener noreferrer">
                                            <Card className="h-full flex flex-col bg-transparent border border-solid border-white/25 shadow-none">
                                                <div className="h-[220px] w-full">
                                                    <Image src={feature.image} alt={feature.alt} width={300} height={300} className="rounded-md w-full h-full object-cover" />
                                                </div>
                                                <div className="text-white text-center md:text-left flex-1 flex flex-col justify-center p-4">
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
                                    ) : (
                                        <Card className="h-full flex flex-col bg-transparent border border-solid border-white/25 shadow-none">
                                            <div className="h-[220px] w-full">
                                                <Image src={feature.image} alt={feature.alt} width={300} height={300} className="rounded-md w-full h-full object-cover" />
                                            </div>
                                            <div className="text-white text-center md:text-left flex-1 flex flex-col justify-center p-4">
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <h1 className="text-lg font-medium line-clamp-2 cursor-default">{feature.title}</h1>
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
                                    )}
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Navigation Buttons */}
                        <div className="flex justify-end items-center gap-6 mt-4">
                            <button id="custom-prev" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition">
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button id="custom-next" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition">
                                <ChevronRight className="w-8 h-8" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

