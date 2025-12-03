import React from 'react';
import { Reviews3D } from './Reviews';
import MediaVideos from './MediaVideos';

const SuccessStories = () => {
    return (
        <section className="relative py-16 md:py-24 bg-black">
            {/* Background Image */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-cover bg-center bg-[url('/images/SuccessBanner.webp')]">
                    <div className="w-full h-full bg-black/30" /> {/* Overlay */}
                </div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                        <span className="block mb-2">Co-Created with Exporters,</span>
                        <span className="block">Designed for Real-World Trade Challenges</span>
                    </h2>
                    <p className="mt-6 text-md md:text-lg text-white/75 max-w-2xl md:max-w-3xl mx-auto">
                        We built LeDoc in collaboration with exporters and logistics experts to solve real documentation & compliance painpoints — so you get a solution that truly works.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <Reviews3D />
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <MediaVideos />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
