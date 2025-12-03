import Image from "next/image";

const Investors = () => {
    return (
        <div className="text-center py-16 md:py-24 bg-cover bg-center bg-white  bg-[url('/images/InvestorsBg.webp')]">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                    <span className="md:block">Powered by Strong Backers and </span>
                    <span className="md:block mt-4">the Trade Ecosystem.</span>
                </h2>
            </div>
            <div className="flex justify-center items-center gap-10 mt-16 md:mt-20">
                <Image src="/images/IBDICLogo.webp" alt="IBDIC Logo" width={180} height={80} className="object-contain rounded-lg" />
                <Image src="/images/Axilor.webp" alt="Axilor Logo" width={180} height={80} className="object-contain rounded-lg" />
                <Image src="/images/Capital.webp" alt="Capital Logo" width={180} height={80} className="object-contain rounded-lg" />
            </div>
        </div>
    );
};

export default Investors;
