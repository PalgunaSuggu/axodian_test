import React from 'react';
import { Reviews3D } from './Reviews';
import MediaVideos from './MediaVideos';

const SuccessStories = ({ brand = "LeDoc" }) => {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-cover bg-center bg-[url('/images/SuccessBanner.webp')]"></div>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

            <div className="relative container mx-auto px-6 z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-secondary-light-color/20 to-primary-color/20 border border-secondary-light-color/30 rounded-full mb-6">
                        <span className="text-secondary-light-color font-medium text-sm">SUCCESS STORIES</span>
                    </div>
                    <h1 className="text-white leading-tight mb-6">
                        <span className="block mb-2 bg-gradient-to-r from-secondary-light-color to-primary-light-color bg-clip-text text-transparent">
                            Co-Created with Exporters,
                        </span>
                        <span className="block text-white">
                            Designed for Real-World Trade
                        </span>
                    </h1>
                    <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We built {brand} in collaboration with exporters and logistics experts to solve real documentation & compliance painpoints — so you get a solution that truly works.
                    </p>
                </div>

                {/* Content Grid - Stacked Layout */}
                <div className="space-y-16">
                    {/* Reviews Section - Top */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <Reviews3D />
                    </div>
                    
                    {/* Videos Section - Bottom */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
                        <MediaVideos />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
