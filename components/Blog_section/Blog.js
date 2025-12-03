// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { MoveUp } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// const Blog = () => {
//     const categories = ["All Blog Posts", "EXIM Landscape", "Remittance", "Trade Documentation", "Trade Finance", "Founder's Desk"];
//     const [activeCategory, setActiveCategory] = useState("All Blog Posts");
//     const [showAllBlogs, setShowAllBlogs] = useState(false);
//     const [showScrollToTop, setShowScrollToTop] = useState(false);
//     const [blogData, setBlogData] = useState([]);

//     const categoryRefs = useRef({});

//     const handleCategoryClick = (category) => {
//         setActiveCategory(category);
//         setShowAllBlogs(false);

//         if (categoryRefs.current[category]) {
//             const offset = 100;
//             const elementPosition = categoryRefs.current[category].offsetTop;
//             const offsetPosition = elementPosition - offset;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: "smooth"
//             });
//         }
//     };

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             const token = 'd83825e40bf7fce2e437b6979ddb17f01e666c52642e502e6dbbfb1e8926ffe8e8cc146bea5b39a9147c3d9ca3e02b499e716d2b3ffa87cf3338641a0354a01e932ca9bf4b52be398d938d4fe2cd2c6268e0cdd8220d28f1886da78eb69ecb068e6fe3c528b662f419c0ab1cfb675865c845b903ca5a5e24d8026072d6c83a85';
//             const response = await fetch('https://strapi.leremitt.com/api/articles?populate=*&sort=createdAt:desc&pagination[start]=0&pagination[limit]=500', {
//                 headers: { 'Authorization': `Bearer ${token}` },
//             });

//             const data = await response.json();
//             const filteredData = data.data.map(blog => ({
//                 id: blog.id,
//                 title: blog.title,
//                 slug: blog.slug,
//                 image: blog.cover?.formats?.medium?.url || blog.cover?.formats?.thumbnail?.url,
//                 category: blog.category?.Category || '',
//             }));

//             setBlogData(filteredData);
//         };

//         fetchBlogs();
//     }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowScrollToTop(window.scrollY > 300);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     const toggleShowAllBlogs = () => {
//         setShowAllBlogs(!showAllBlogs);
//     };

//     return (
//         <div className="container mx-auto py-16 bg-[#EFEFEF]">
//             {/* Header Section */}
//             <div className="my-16">
//                 <h1 className="text-5xl max-w-2xl font-medium leading-tight text-blue-600">
//                     Welcome to Our Finance Insights Blog
//                 </h1>
//                 <p className="text-gray-600 text-xl mt-6">
//                     Our Finance Insights Blog is dedicated to bringing you the latest news, expert advice, and actionable strategies to help you navigate the complexities of personal and business finance.
//                 </p>
//             </div>

//             <Separator className="my-4 bg-gray-300 h-[2px]" />

//             {/* Search & Categories */}
//             <div>
//                 <Input placeholder="Search for Blogs..." className="w-full md:w-1/2 border border-black bg-white text-black px-4 py-2 rounded-[6px]" />
//                 <div className="flex gap-6 flex-wrap mt-6">
//                     {categories.map((category, index) => (
//                         <Button
//                             variant="outline"
//                             key={index}
//                             onClick={() => handleCategoryClick(category)}
//                             className={`text-sm px-4 py-2 rounded-[6px] bg-white hover:bg-white transition-all duration-200 ${activeCategory === category ? "bg-blue-100 text-blue-600 border-blue-600 outline outline-4 outline-blue-600" : ""}`}>
//                             {category}
//                         </Button>
//                     ))}
//                 </div>
//             </div>

//             {/* Blog Sections */}
//             {categories.map((category, index) => {
//                 const filteredBlogs = category === "All Blog Posts"
//                     ? blogData
//                     : blogData.filter(blog => blog.category === category);

//                 return (
//                     <div key={index} className="mt-6" ref={(el) => (categoryRefs.current[category] = el)}>
//                         {filteredBlogs.length > 0 && (
//                             <>
//                                 <div className="flex justify-between items-center">
//                                     <h2 className={`text-xl font-semibold mb-2 ${activeCategory === category ? 'bg-white text-blue-600 px-4 py-2 rounded-md' : ''}`}>
//                                         {category}
//                                     </h2>

//                                     {filteredBlogs.length > 3 && (
//                                         <div className="flex justify-center">
//                                             <Button variant="link" className="text-blue-600" onClick={toggleShowAllBlogs}>
//                                                 {showAllBlogs ? "Show less" : "Show more"}
//                                             </Button>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                                     {(showAllBlogs ? filteredBlogs : filteredBlogs.slice(0, 3)).map((blog) => (
//                                         <Card key={blog.id} className="overflow-hidden bg-white rounded-lg shadow-none flex flex-col h-full">
//                                             {/* Content Section */}
//                                             <CardContent className="p-4 flex flex-col flex-grow">
//                                                 <h1 className="text-lg">{blog.title}</h1>
//                                                 <div className="mt-auto">
//                                                     <Link href={`/blogs/${blog.slug}`}>
//                                                         <Button className="p-0 bg-transparent text-black hover:bg-transparent shadow-none">
//                                                             Read More
//                                                         </Button>
//                                                     </Link>
//                                                 </div>
//                                             </CardContent>

//                                             {/* Image Section */}
//                                             <Image
//                                                 src={`https://strapi.leremitt.com${blog.image}`}
//                                                 alt={blog.title}
//                                                 width={360}
//                                                 height={300}
//                                                 className="w-full h-[220px] object-cover"
//                                             />
//                                         </Card>
//                                     ))}
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 );
//             })}

//             {/* Scroll-to-Top Button */}
//             {showScrollToTop && (
//                 <Button onClick={scrollToTop} className="fixed bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-secondary-light-color hover:bg-blue-700 text-white shadow-lg">
//                     <MoveUp className="w-5 h-5" />
//                 </Button>
//             )}
//         </div>
//     );
// };

// export default Blog;
// import { Button } from "@/components/ui/button";
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
                <div className="mt-auto">
                    <Skeleton className="h-4 w-20" />
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="py-16 md:py-24 bg-[#EFEFEF]">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="my-6 md:my-10">
                    <h1 className="text-3xl sm:text-5xl font-bold tracking-wider leading-snug text-blue-600 mt-6">
                        <span className="md:block mb-2">Where Global Trade Meets </span>
                        <span className="md:block mb-2">Real-World Ideas</span>
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
                                            <h2 className="text-xl font-semibold mb-2 py-2 rounded-md">
                                                {category}
                                            </h2>

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
                                                            <h1 className="text-md md:text-lg font-normal">{blog.title}</h1>
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
