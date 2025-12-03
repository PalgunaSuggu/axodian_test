import { Video } from 'lucide-react';
import React from 'react';

const videos = [
    {
        title: 'LeRemitt – Product Overview',
        url: 'https://www.youtube.com/embed/x9kfM7tAAGU',
    },
    {
        title: 'Hear From Our Clients – Short Version',
        url: 'https://www.youtube.com/embed/J5HdsSlNf2Q',
    },
    {
        title: '🌟 Our Journey – Full Story',
        url: 'https://www.youtube.com/embed/RI2-JCYwHkc',
    },
];


const YouTubeCard = ({ title, url }) => {
    const id = url.split('/embed/')[1];
    return (
        <div className="flex flex-col space-y-2">
            <div className="relative group overflow-hidden rounded-lg border border-gray-700 hover:shadow-xl transition-all aspect-video">
                <iframe
                    src={`${url}?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=${id}`}
                    title={title}
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                ></iframe>
                <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-lg font-semibold px-4 text-center text-white">{title}</p>
                </div>
            </div>
            {/* Text below the video */}
            <p className="text-start text-white text-base font-medium">{title}</p>
        </div>
    );
};

const MediaVideos = () => (
    <div className="w-full h-full">
        <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 min-w-[2rem] min-h-[2rem] rounded-lg bg-white flex items-center justify-center shadow-md">
                <Video className="w-8 h-8 text-[#1E77FF]" />
            </div>
            <h2 className="text-2xl text-white/75 font-bold">Client Stories & More</h2>
        </div>
        {/* First row: two videos side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {videos.slice(0, 2).map((video, i) => (
                <YouTubeCard key={i} {...video} />
            ))}
        </div>

        {/* Second row: one full-width video */}
        <div>
            <YouTubeCard {...videos[2]} />
        </div>
    </div>
);




export default MediaVideos;
