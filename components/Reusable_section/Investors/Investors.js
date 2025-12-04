import Image from "next/image";

const   Investors = () => {
    return (
        <div className="text-center py-16 md:py-24 bg-cover bg-center bg-white  bg-[url('/images/InvestorsBg.webp')]">
            <div className="text-center mb-12">
                <h1 className="text-black leading-tight">
                    <span className="md:block">Powered by Strong Backers and </span>
                    <span className="md:block">the Trade Ecosystem.</span>
                </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-16 md:mt-20">
                <Image src="/images/IBDICLogo.webp" alt="IBDIC Logo" width={180} height={80} className="object-contain rounded-lg my-2 md:my-0" />
                <Image src="/images/Axilor.webp" alt="Axilor Logo" width={180} height={80} className="object-contain rounded-lg my-2 md:my-0" />
                <Image src="/images/Capital.webp" alt="Capital Logo" width={180} height={80} className="object-contain rounded-lg my-2 md:my-0" />
            </div>
        </div>
    );
};

export default Investors;
