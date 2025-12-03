// import React from "react";

// const Definition = ({ tag, title, subtitle, highlight, description1, description2, description3 }) => {
//     return (
//         <div className="container mx-auto py-16">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
//                 {/* Left Section (Spanning 3 Columns) */}
//                 <div className="lg:col-span-3 space-y-4">
//                     {/* <span className="bg-[#F5F9FF] text-[#1E77FF] px-4 py-1 text-sm font-semibold rounded-lg">{tag}</span> */}
//                     <h2 className="text-3xl md:text-4xl font-bold text-black">
//                         {title} <span className="text-blue-500">{highlight}</span>
//                     </h2>
//                     <p className="text-gray-500 text-lg">{subtitle}</p>
//                 </div>

//                 {/* Right Section (Spanning 3 Columns) */}
//                 <div className="lg:col-span-3 text-gray-500 lg:text-lg">
//                     <p className="mb-4">{description1}</p>
//                     <p className="mb-4">{description2}</p>
//                     <p>{description3}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Definition;


// import Image from "next/image";
// import React from "react";

// const Definition = ({
//     tag,
//     title,
//     subtitle,
//     highlight,
//     description1,
//     description2,
//     description3,
// }) => {
//     return (
//         <section className="relative py-16 px-6 sm:px-12 md:px-24 bg-gray-50">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
//                 {/* Left: Image and Tag */}
//                 <div className="relative flex justify-center md:justify-start">
//                     {tag && (
//                         <span className="absolute top-4 left-4 bg-secondary-light-color text-white text-xs font-semibold px-4 py-2 rounded-full uppercase shadow-lg">
//                             {tag}
//                         </span>
//                     )}
//                     <Image
//                         src="/images/docs.webp"
//                         width={600}
//                         height={400}
//                         alt="Docs"
//                         className="rounded-lg shadow-lg object-cover w-full h-auto"
//                     />
//                 </div>

//                 {/* Right: Title and Descriptions */}
//                 <div className="space-y-8">
//                     <div>
//                         <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
//                             {title}{" "}
//                             {highlight && (
//                                 <span className="inline-block bg-secondary-light-color text-white px-3 py-1 rounded-md ml-2">
//                                     {highlight}
//                                 </span>
//                             )}
//                         </h2>
//                         {subtitle && (
//                             <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
//                         )}
//                     </div>

//                     {/* Descriptions */}
//                     {[description1, description2, description3].map((desc, index) =>
//                         desc ? (
//                             <div
//                                 key={index}
//                                 className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//                             >
//                                 <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
//                                     {desc}
//                                 </p>
//                             </div>
//                         ) : null
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Definition;
import Image from "next/image";
import React from "react";

const Definition = ({ title, subtitle, highlight, description1, description2, description3, image, highlightBg, highlightText }) => {
    return (
        <section className="py-16 md:py-24 container mx-auto bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Image */}
                <div className="flex justify-center">
                    <Image src={image} width={600} height={400} alt="Docs" className="rounded-lg object-cover w-full h-auto" />
                </div>

                {/* Right: Title and Descriptions */}
                <div className="flex flex-col justify-center space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        {title}
                        {highlight && (
                          <span className={`inline-block ${highlightBg} ${highlightText} px-3 py-1 rounded-lg ml-2`}>
                                {highlight}
                            </span>
                        )}
                    </h2>

                    {subtitle && (
                        <p className="text-lg text-gray-600">{subtitle}</p>
                    )}

                    {/* Descriptions */}
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
