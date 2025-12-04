import Image from "next/image";

const Definition = ({ title, subtitle, highlight, description1, description2, description3, image, highlightBg, highlightText }) => {
    return (
        <section className="py-16 md:py-24 container mx-auto bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-center">
                    <Image src={image} width={600} height={400} alt="Docs" className="rounded-lg object-cover w-full h-auto" />
                </div>

                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="font-semibold text-gray-900">
                        {title}
                        {highlight && (
                            <span className={`inline-block ${highlightBg} ${highlightText} px-3 py-1 rounded-lg ml-2`}>{highlight}</span>
                        )}
                    </h2>

                    {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}

                    {[description1, description2, description3].map((desc, index) =>
                        desc ? (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                                <p className="text-gray-700 text-md md:text-lg">{desc}</p>
                            </div>
                        ) : null
                    )}
                </div>
            </div>
        </section>
    );
};

export default Definition;
