import { Video, Play, ExternalLink, Clock, Eye } from 'lucide-react';
import React, { useState } from 'react';

const videos = [
    {
        title: 'Our Journey – Full Story',
        url: 'https://www.youtube.com/embed/RI2-JCYwHkc',
        thumbnail: 'https://img.youtube.com/vi/RI2-JCYwHkc/maxresdefault.jpg',
        duration: '5:23',
        views: '12.5K'
    },
    {
        title: 'Hear From Our Clients – Short Version',
        url: 'https://www.youtube.com/embed/J5HdsSlNf2Q',
        thumbnail: 'https://img.youtube.com/vi/J5HdsSlNf2Q/maxresdefault.jpg',
        duration: '2:45',
        views: '8.2K'
    },
    {
        title: 'LeRemitt – Product Overview',
        url: 'https://www.youtube.com/embed/x9kfM7tAAGU',
        thumbnail: 'https://img.youtube.com/vi/x9kfM7tAAGU/maxresdefault.jpg',
        duration: '3:18',
        views: '15.7K'
    },
];

const VideoCard = ({ title, url, thumbnail, duration, views }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const id = url.split('/embed/')[1];
    
    const handleLoadVideo = () => {
        setIsLoaded(true);
    };

    return (
        <div 
            className="group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden rounded-2xl bg-gray-900 aspect-video" onClick={handleLoadVideo}>
                {!isLoaded ? (
                    <>
                        <img 
                            src={thumbnail} 
                            alt={title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        {/* Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`} />
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-light-color to-primary-color flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:from-secondary-color group-hover:to-primary-light-color shadow-2xl">
                                <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                        </div>
                        
                        {/* Duration Badge */}
                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {duration}
                        </div>
                        
                        {/* Views Badge */}
                        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {views}
                        </div>
                    </>
                ) : (
                    <iframe
                        src={`${url}?autoplay=1&mute=0&loop=1&controls=1&modestbranding=1&playlist=${id}`}
                        title={title}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full object-cover"
                    ></iframe>
                )}
            </div>
            
            {/* Video Info */}
            <div className="mt-4">
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {title}
                </h3>
                <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{views} views</span>
                    <a 
                        href={`https://www.youtube.com/watch?v=${id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink className="w-4 h-4" />
                        Watch on YouTube
                    </a>
                </div>
            </div>
        </div>
    );
};

const MediaVideos = () => (
    <div className="w-full h-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary-light-color to-secondary-color flex items-center justify-center shadow-xl">
                <Video className="w-7 h-7 text-white" />
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white mb-1">Success Stories</h2>
                <p className="text-gray-400 text-sm">See how we're transforming businesses</p>
            </div>
        </div>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, i) => (
                <VideoCard key={i} {...video} />
            ))}
        </div>
    </div>
);

export default MediaVideos;
