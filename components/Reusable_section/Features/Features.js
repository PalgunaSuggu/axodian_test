import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Features = ({ title, description, features }) => {
    return (
        <div className="bg-cover bg-center text-white bg-blue-100 bg-[url('/images/comboColor.webp')] py-16 md:py-24">
            <div className="container mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center">
                    {title}
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl lg:max-w-4xl mx-auto my-4 sm:my-6 text-center text-black">
                    {description}
                </p>

                {/* Cards Section */}
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mt-10">
                    {features.map((feature, index) => (
                        <Card key={index} className="bg-white text-center px-4 py-8 shadow-none rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm">
                            <CardContent className='p-0'>
                                {feature.icon ? (
                                    <div className="flex items-center justify-center">
                                        {React.cloneElement(feature.icon, {
                                            className: "w-12 h-12 bg-secondary-light-color p-2 rounded-lg text-white",
                                        })}
                                    </div>
                                ) : (
                                    <h2 className="text-4xl font-bold text-primary-color">{feature.percentage}</h2>
                                )}
                                <h3 className="text-xl font-semibold text-gray-900 mt-2">{feature.title}</h3>
                                <p className="text-gray-700 mt-8 text-lg">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
