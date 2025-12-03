// import { Card, CardContent } from "@/components/ui/card";

// const Benefits = ({ tag, subtitleOne, subtitleTwo, benefits }) => {
//     return (
//         <div className="text-white py-16 bg-cover bg-center bg-black/90 bg-[url('/images/newbg03.webp')]">
//             <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">

//                 {/* LEFT SIDE: Heading */}
//                 <div className="md:col-span-5 flex justify-center items-center text-center md:text-left">
//                     <div>
//                         <div className="inline-block uppercase bg-[#1E77FF] px-4 py-1 rounded-lg text-md font-semibold mb-6">
//                             {tag}
//                         </div>
//                         <h1 className="text-3xl sm:text-4xl md:text-[2.9rem] font-bold text-white max-w-3xl">
//                             <span className="block pb-4">{subtitleOne}</span>
//                             <span className="block pb-2">{subtitleTwo}</span>
//                         </h1>
//                         <p className="mt-2">Discover the tools and advantages that drive secure, scalable, and compliant trade documentation.</p>
//                     </div>
//                 </div>

//                 {/* RIGHT SIDE: Benefits Grid */}
//                 <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-4">
//                     {benefits.map((benefit) => (
//                         <Card key={benefit.id} className="border-none shadow-none bg-transparent text-white">
//                             <CardContent className="p-2">
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <benefit.icon className="w-10 h-10 text-[#1E77FF] bg-white p-2 rounded-[5px]" />
//                                     <h3 className="text-xl font-semibold">{benefit.title}</h3>
//                                 </div>
//                                 <p className="text-md opacity-65">{benefit.description}</p>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Benefits;
import { Card, CardContent } from "@/components/ui/card";

const Benefits = ({ tag, subtitleOne, subtitleTwo, benefits }) => {
    return (
        <div className="text-white py-16 md:py-24 bg-cover bg-center bg-black/90 bg-[url('/images/LeDocBenefitsAxodian.webp')]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* LEFT: Heading */}
                <div className="md:col-span-5 flex items-center text-center md:text-left">
                    <div>
                        {/* <div className="inline-block uppercase bg-[#1E77FF] px-4 py-1 rounded-lg text-md font-semibold mb-6">
                            {tag}
                        </div> */}
                        <h1 className="text-3xl sm:text-4xl md:text-[2.9rem] font-bold text-white max-w-3xl">
                            <span className="md:block pb-4">{subtitleOne}</span>
                            <span className="md:block pb-2">{subtitleTwo}</span>
                        </h1>
                        <p className="mt-2 text-md md:text-lg">
                            Discover the tools and advantages that drive secure,<br /> scalable, and compliant trade documentation.
                        </p>
                    </div>
                </div>

                {/* RIGHT: Benefit Cards */}
                <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12">
                    {[0, 1].map((col) => (
                        <div key={col} className="flex flex-col justify-center">
                            {benefits.slice(col === 0 ? 0 : 3, col === 0 ? 3 : benefits.length).map((benefit, index, arr) => (
                                <div
                                    key={benefit.id}
                                    className={`py-6 md:py-8 ${index < arr.length - 1 ? "border-b border-dashed border-white/20" : ""}`}
                                >
                                    <Card className="border-none shadow-none bg-transparent text-white">
                                        <CardContent className="p-0">
                                            <div className="flex items-center gap-3 mb-3">
                                                <benefit.icon className="w-10 h-10 text-[#1E77FF] bg-white p-2 rounded-[5px]" />
                                                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                                            </div>
                                            <p className="text-md md:text-lg opacity-65">{benefit.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Benefits;
