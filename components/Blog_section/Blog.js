import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useEffect, useState } from "react";
import CustomLink from "../Reusable_section/CustomLink/CustomLink";
import ScrollToTop from "../Reusable_section/ScrollToTop/ScrollToTop";

const Blog = () => {
    const categories = ["All Blog Posts", "EXIM Landscape", "Remittance", "Trade Documentation", "Trade Finance", "Founder's Desk"];
    const [activeCategory, setActiveCategory] = useState("All Blog Posts");
    const [showAllBlogs, setShowAllBlogs] = useState({});
    const [blogData, setBlogData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setShowAllBlogs({});
    };

    // Check localStorage for selected category on component mount
    useEffect(() => {
        const storedCategory = localStorage.getItem('selectedBlogCategory');
        if (storedCategory && categories.includes(storedCategory)) {
            setActiveCategory(storedCategory);
            // Clear the localStorage after setting the category
            localStorage.removeItem('selectedBlogCategory');
        }
    }, []);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoading(true);
                const token = 'd83825e40bf7fce2e437b6979ddb17f01e666c52642e502e6dbbfb1e8926ffe8e8cc146bea5b39a9147c3d9ca3e02b499e716d2b3ffa87cf3338641a0354a01e932ca9bf4b52be398d938d4fe2cd2c6268e0cdd8220d28f1886da78eb69ecb068e6fe3c528b662f419c0ab1cfb675865c845b903ca5a5e24d8026072d6c83a85';
                const response = await fetch('https://strapi.leremitt.com/api/articles?populate=*&sort=createdAt:desc&pagination[start]=0&pagination[limit]=500', {
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                const data = await response.json();
                const filteredData = data.data.map(blog => ({
                    id: blog.id,
                    title: blog.title,
                    slug: blog.slug,
                    image: blog.cover?.formats?.medium?.url || blog.cover?.formats?.thumbnail?.url,
                    category: blog.category?.Category || '',
                }));

                setBlogData(filteredData);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const toggleShowAllBlogs = (category) => {
        setShowAllBlogs((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const BlogCardSkeleton = () => (
        <Card className="overflow-hidden bg-white rounded-lg shadow-none flex flex-col h-full">
            <Skeleton className="w-full h-[220px] rounded-none" />
            <CardContent className="p-4 flex flex-col flex-grow">
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="mt-auto"><Skeleton className="h-4 w-20" /></div>
            </CardContent>
        </Card>
    );

    return (
        <div className="py-16 md:py-24 bg-[#EFEFEF]">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="my-6 md:my-10">
                    <h1 className="leading-snug text-blue-600 mt-6">
                        <span className="md:block">Where Global Trade Meets </span>
                        <span className="md:block">Real-World Ideas</span>
                    </h1>
                    <p className="text-gray-600 text-md md:text-lg mt-6">
                        Dive into stories, trends, and strategies shaping the future of cross-border business. From navigating regulations to simplifying documentation and unlocking growth, our blog is your window into smarter global trade.
                    </p>
                </div>

                <Separator className="my-4 bg-gray-300 h-[2px]" />

                {/* Categories */}
                <div className="flex gap-6 flex-wrap mt-6 md:mt-10">
                    {categories.map((category, index) => (
                        <Button variant="outline" key={index} onClick={() => handleCategoryClick(category)} className={`text-sm px-4 py-2 rounded-[6px] bg-white hover:bg-white transition-all duration-200 ${activeCategory === category ? "bg-blue-100 hover:bg-blue-100 hover:text-blue-500 text-blue-700 border-solid border-blue-600" : ""}`}>
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Blog List */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {[...Array(6)].map((_, index) => (
                            <BlogCardSkeleton key={index} />
                        ))}
                    </div>
                ) : (
                    (() => {
                        const category = activeCategory;
                        const filteredBlogs = category === "All Blog Posts" ? blogData : blogData.filter((blog) => blog.category === category);

                        return (
                            <div className="mt-6">
                                {filteredBlogs.length > 0 && (
                                    <>
                                        <div className="flex justify-between items-center">
                                            <h5 className="leading-snug mb-4">{category}</h5>

                                            {filteredBlogs.length > 6 && (
                                                <div className="flex justify-center">
                                                    <Button variant="link" className="text-blue-600" onClick={() => toggleShowAllBlogs(category)}>
                                                        {showAllBlogs[category] ? "Show less" : "Show more"}
                                                    </Button>
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {(showAllBlogs[category] ? filteredBlogs : filteredBlogs.slice(0, 6)).map((blog) => (
                                                <CustomLink key={blog.id} href={`/blogs/${blog.slug}`}>
                                                    <Card className="overflow-hidden bg-white rounded-lg shadow-none flex flex-col h-full">
                                                        <CardContent className="p-4 flex flex-col flex-grow">
                                                            <h5 className="leading-tight text-md md:text-lg font-normal">{blog.title}</h5>
                                                            <div className="mt-auto">
                                                                <CustomLink href={`/blogs/${blog.slug}`}>
                                                                    <Button className="p-0 bg-transparent text-blue-700 text-md md:text-lg hover:bg-transparent hover:underline shadow-none">
                                                                        Read More
                                                                    </Button>
                                                                </CustomLink>
                                                            </div>
                                                        </CardContent>
                                                        <Image src={`https://strapi.leremitt.com${blog.image}`} alt={blog.title} width={400} height={400} className="w-full h-[240px] object-cover" />
                                                    </Card>
                                                </CustomLink>
                                            ))}
                                        </div>

                                        {filteredBlogs.length > 6 && (
                                            <div className="flex justify-end mt-4">
                                                <Button className="bg-blue-50 hover:bg-blue-100 text-blue-700 border border-solid border-blue-600 shadow-none" onClick={() => toggleShowAllBlogs(category)}>
                                                    {showAllBlogs[category] ? "Show less" : "Show more"}
                                                </Button>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })()
                )}

                <ScrollToTop />
            </div>
        </div>
    );
};

export default Blog;
