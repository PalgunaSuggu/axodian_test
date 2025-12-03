"use client";

import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamFounders, teamMembers } from '../../Data';
import CustomLink from "../../Reusable_section/CustomLink/CustomLink";

const Team = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="py-16 md:py-24 bg-white text-center">
            <div className="container mx-auto">
                <div className="mb-8">
                    {/* <span className="text-[#0461F0] font-semibold uppercase text-sm bg-[#F5F9FF] px-4 py-1 rounded-lg">Our Team</span> */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                        Meet the Brains Behind Axodian
                    </h2>
                </div>
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
                        {teamFounders.map((member) => (
                            <div key={member.id} className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>

                                <div className="relative z-10 flex flex-col md:flex-row h-full">
                                    {/* Image container */}
                                    <div className="md:w-3/5 relative h-64 md:h-auto">
                                        <div className="absolute w-full inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Image src={member.image} alt={member.fullName} fill className="object-cover" />
                                    </div>

                                    {/* Content */}
                                    <div className="md:w-3/5 p-4 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.fullName}</h3>
                                            <span className="inline-block text-sm font-medium text-[#663399] mb-4">{member.role}</span>
                                            <div className="h-1 w-20 bg-[#663399] my-4 rounded-full"></div>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <p className="text-gray-600 mb-6 md:line-clamp-3 text-md md:text-lg cursor-pointer">{member.description}</p>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="max-w-xs bg-white text-black p-4 shadow-lg rounded-sm">
                                                        <p>{member.description}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex space-x-2">
                                                <span className="text-sm text-gray-500">Connect:</span>
                                            </div>
                                            <CustomLink
                                                href={member.inlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#663399]/10 text-[#663399] hover:bg-blue-100 transition-colors duration-200 group-hover:bg-[#663399] group-hover:text-white"
                                                aria-label={`Connect with ${member.fullName} on LinkedIn`}
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </CustomLink>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover effect border */}
                                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 rounded-lg pointer-events-none transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative mt-8 md:mt-20">
                    <button
                        className="hidden md:block absolute left-[-2rem] lg:left-[-6rem] top-1/2 -translate-y-1/2 z-10 bg-primary-color/10 border-2 border-solid border-primary-color/25 h-full p-2 rounded-lg"
                        id="custom-prev"
                    >
                        <ChevronLeft className="w-6 h-6 text-primary-color" />
                    </button>
                    <button
                        className="hidden md:block absolute right-[-2rem] lg:right-[-6rem] top-1/2 -translate-y-1/2 z-10 bg-primary-color/10 border-2 border-solid border-primary-color/25 h-full p-2 rounded-lg"
                        id="custom-next"
                    >
                        <ChevronRight className="w-6 h-6 text-primary-color" />
                    </button>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        slidesPerGroup={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                            1024: {
                                slidesPerView: 4,
                                slidesPerGroup: 2,
                            },
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        navigation={{
                            prevEl: "#custom-prev",
                            nextEl: "#custom-next",
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="w-full"
                    >
                        {teamMembers.map((item) => (
                            <SwiperSlide key={item.id} className="cursor-pointer">
                                <Card className="relative shadow-sm border-cyan-200 rounded-lg bg-white">
                                    <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center rounded-md bg-gradient-to-r from-[#663399] to-[#663399]/60 text-white p-4 m-4">
                                        <div className="text-left">
                                            <p className="text-lg font-semibold">{item.fullName}</p>
                                            <p className="text-sm">{item.role}</p>
                                        </div>
                                        <CustomLink href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-500 hover:text-blue-700">
                                            <Linkedin className="w-5 h-5 inline-block text-white" />
                                        </CustomLink>
                                    </div>
                                    <Image src={item.image} alt={item.name} width={600} height={400} className="w-full h-96 object-cover rounded-lg" />
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Team;



