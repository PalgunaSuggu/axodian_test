import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { podcastData, articleData, pressReleaseData } from "../Data";
import ScrollToTop from "../Reusable_section/ScrollToTop/ScrollToTop";

const Media = () => {
    const categories = ["All", "Articles", "Podcasts", "Press Releases"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [showAllData, setShowAllData] = useState(false);
    const [filteredData, setFilteredData] = useState([...pressReleaseData, ...articleData, ...podcastData]);

    // Filter data based on active category
    useEffect(() => {
        let data = [];
        switch (activeCategory) {
            case "Articles":
                data = articleData;
                break;
            case "Podcasts":
                data = podcastData;
                break;
            case "Press Releases":
                data = pressReleaseData;
                break;
            default: // "All"
                data = [...pressReleaseData, ...articleData, ...podcastData];
        }
        setFilteredData(data);
        setShowAllData(false); // Reset show all when category changes
    }, [activeCategory]);

    // Toggle show all data
    const toggleShowAllData = () => {
        setShowAllData(!showAllData);
    };

    // Handle category change
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setShowAllData(false); // Reset show all when category changes
    };

    return (
        <div className="py-16 md:py-24 bg-[#EFEFEF]">
        <div className="container mx-auto">
            {/* Header Section */}
            <div className="mb-6 mt-8 md:my-10">
                <h1 className="leading-snug text-blue-600 mt-6">Media Mentions, Stories & Announcements</h1>
                <p className="text-gray-600 text-md md:text-lg mt-6 w-1/1">
                    From product innovations to partnerships and thought leadership, explore how LeRemitt is making headlines. This is your go-to space for press coverage, company updates, and the conversations we’re part of in the global trade and fintech ecosystem.
                </p>
            </div>

            <Separator className="my-4 bg-gray-300 h-[2px]" />

            {/* Search & Categories */}
            <div>
                <Input placeholder="Search ..." className="w-full md:w-1/2 border border-black bg-white text-black px-4 py-2 rounded-[6px]" />
                <div className="flex gap-2 md:gap-6 flex-wrap mt-6">
                    {categories.map((category, index) => (
                        <Button variant="outline" key={index} onClick={() => handleCategoryChange(category)} className={`text-sm px-4 py-2 rounded-[6px] bg-white hover:bg-white transition-all duration-200 ${activeCategory === category ? "bg-blue-100 hover:bg-blue-100 hover:text-blue-500 text-blue-700 border-solid border-blue-600" : ""}`}>
                            {category}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Data Sections */}
            <div className="mt-6">
                <div className="flex justify-between items-center">
                    <h5 className="leading-snug">{activeCategory}</h5>

                    {/* Show "Show more" button if there are more than 3 Data */}
                    {filteredData.length > 3 && (
                        <div className="flex justify-center">
                            <Button variant="link" className="text-blue-600" onClick={toggleShowAllData}>
                                {showAllData ? "Show less" : "Show more"}
                            </Button>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Show only 3 Data by default, or all Data if "Show more" is clicked */}
                    {(showAllData ? filteredData : filteredData.slice(0, 6)).map((data) => (
                        <Card key={data.id} className="overflow-hidden bg-white rounded-lg shadow-none">
                            <div className="px-6 pt-6 pb-3">
                                {/* Tooltip for the title */}
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <h5 className="truncate cursor-pointer">{data.title}</h5>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-sm bg-blue-50 text-black p-4 shadow-lg rounded-lg">
                                            <p>{data.title}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                {/* Tooltip for the description */}
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <p className="text-md md:text-lg pt-1 line-clamp-3 md:line-clamp-2 cursor-pointer text-gray-600">{data.description}</p>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-sm bg-blue-50 text-black p-4 shadow-lg rounded-lg">
                                            <p>{data.description}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                                <Button className="p-0 bg-transparent text-blue-700 text-md md:text-lg hover:bg-transparent shadow-none">
                                    <Link href={data.link} target="_blank" rel="noopener noreferrer">
                                        Read More
                                    </Link>
                                </Button>
                            </div>
                            <Image src={data.image} alt={data.title} width={600} height={500} className="w-full h-60 object-cover" />
                        </Card>
                    ))}
                </div>
            </div>

            {filteredData.length > 3 && (
                <div className="flex justify-center mt-12">
                    <Button className="text-white bg-blue-700 hover:bg-blue-800 p-6 text-md md:text-lg rounded-lg" onClick={toggleShowAllData}>
                        {showAllData ? "Show less" : "Show more"}
                    </Button>
                </div>
            )}

            {/* Scroll-to-Top Button */}
            <ScrollToTop />
        </div>
        </div>
    );
};

export default Media;

