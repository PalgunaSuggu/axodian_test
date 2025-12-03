// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { Skeleton } from "@/components/ui/skeleton";
// import Image from "next/image";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Head from "next/head";
// import { Card, CardContent } from "@/components/ui/card";
// import { ArrowLeft, Home } from "lucide-react"
// import ScrollToTop from "../../../components/Reusable_section/ScrollToTop/ScrollToTop";

// const BlogDetail = () => {
//     const router = useRouter();
//     const { slug } = router.query;
//     const [blog, setBlog] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [relatedBlogs, setRelatedBlogs] = useState([]);
//     const [allRelatedBlogs, setAllRelatedBlogs] = useState([]);
//     const [isLoadingRelated, setIsLoadingRelated] = useState(true);
//     const [showAllRelated, setShowAllRelated] = useState(false);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!slug) return;

//             try {
//                 setIsLoading(true);
//                 const token = 'd83825e40bf7fce2e437b6979ddb17f01e666c52642e502e6dbbfb1e8926ffe8e8cc146bea5b39a9147c3d9ca3e02b499e716d2b3ffa87cf3338641a0354a01e932ca9bf4b52be398d938d4fe2cd2c6268e0cdd8220d28f1886da78eb69ecb068e6fe3c528b662f419c0ab1cfb675865c845b903ca5a5e24d8026072d6c83a85';

//                 // Fetch the current blog post
//                 const response = await fetch(
//                     `https://strapi.leremitt.com/api/articles?sort[0]=title:asc&filters[slug][$eq]=${slug}&status=published&locale[0]=en&populate=*`,
//                     {
//                         headers: { 'Authorization': `Bearer ${token}` },
//                     }
//                 );

//                 const data = await response.json();
//                 console.log("API Response:", data); // Debugging

//                 if (data.data && data.data.length > 0) {
//                     const blogData = data.data[0];
//                     const seoData = data.data[0].blocks.find((val) => val.__component === 'shared.seo')
//                     const markdownData = data.data[0].blocks.find((val) => val.__component === 'shared.rich-text')

//                     setBlog({
//                         id: blogData.id,
//                         title: seoData.metaTitle || blogData.attributes.title,
//                         description: seoData.metaDescription || blogData.attributes.description,
//                         canonicalUrl: seoData.canonicalURL,
//                         keywords: seoData.metaKeywords,
//                         metaImageAlt: seoData.metaImageAlt,
//                         markdown: markdownData?.body || '',
//                         coverImage: blogData.cover?.formats?.thumbnail?.url || 'https://www.axodian.com/images/axodian-logo-footer.webp',
//                         contetnImage: blogData.cover?.formats?.large?.url || 'https://www.axodian.com/images/axodian-logo-footer.webp',
//                         author: blogData.author?.name || 'LeRemitt',
//                         publishedAt: new Date(blogData.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", }),
//                         blogtitle: blogData.title,
//                         category: blogData.category?.Category || 'General',
//                     });

//                     // Now fetch related blogs (same category, excluding current post)
//                     const category = blogData.category?.Category || 'General';
//                     fetchInitialRelatedBlogs(token, category, blogData.id);
//                     fetchAllRelatedBlogs(token, category, blogData.id);
//                 } else {
//                     setError('Blog not found');
//                 }
//             } catch (err) {
//                 setError('Failed to fetch blog post');
//                 console.error("Fetch error:", err);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         const fetchInitialRelatedBlogs = async (token, category, currentBlogId) => {
//             try {
//                 setIsLoadingRelated(true);
//                 const response = await fetch(
//                     `https://strapi.leremitt.com/api/articles?filters[category][Category][$eq]=${category}&filters[id][$ne]=${currentBlogId}&populate=*&pagination[limit]=3`,
//                     {
//                         headers: { 'Authorization': `Bearer ${token}` },
//                     }
//                 );

//                 const data = await response.json();
//                 const related = data.data.map(blog => ({
//                     id: blog.id,
//                     title: blog.title,
//                     slug: blog.slug,
//                     image: blog.cover?.formats?.medium?.url || blog.cover?.formats?.thumbnail?.url,
//                     category: blog.category?.Category || '',
//                 }));
//                 setRelatedBlogs(related);
//             } catch (err) {
//                 console.error("Error fetching related blogs:", err);
//             } finally {
//                 setIsLoadingRelated(false);
//             }
//         };

//         const fetchAllRelatedBlogs = async (token, category, currentBlogId) => {
//             try {
//                 const response = await fetch(
//                     `https://strapi.leremitt.com/api/articles?filters[category][Category][$eq]=${category}&filters[id][$ne]=${currentBlogId}&populate=*`,
//                     {
//                         headers: { 'Authorization': `Bearer ${token}` },
//                     }
//                 );

//                 const data = await response.json();
//                 const allRelated = data.data.map(blog => ({
//                     id: blog.id,
//                     title: blog.title,
//                     slug: blog.slug,
//                     image: blog.cover?.formats?.medium?.url || blog.cover?.formats?.thumbnail?.url,
//                     category: blog.category?.Category || '',
//                     publishedAt: new Date(blog.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", }),
//                 }));
//                 setAllRelatedBlogs(allRelated);
//             } catch (err) {
//                 console.error("Error fetching all related blogs:", err);
//             }
//         };

//         fetchBlog();
//     }, [slug]);

//     const toggleShowAllRelated = () => {
//         setShowAllRelated(!showAllRelated);
//     };

//     if (isLoading) {
//         return (
//             <div className="container mx-auto py-32 px-4 max-w-4xl">
//                 <Skeleton className="h-10 w-3/4 mb-6" />
//                 <Skeleton className="h-6 w-full mb-4" />
//                 <Skeleton className="h-6 w-full mb-4" />
//                 <Skeleton className="h-6 w-5/6 mb-4" />
//                 <Skeleton className="h-96 w-full mb-6" />
//                 <div className="space-y-3">
//                     {[...Array(8)].map((_, i) => (
//                         <Skeleton key={i} className="h-4 w-full" />
//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="container mx-auto py-32 px-4 text-center">
//                 <h1 className="text-2xl font-bold text-red-600">{error}</h1>
//                 <Button onClick={() => router.push('/blogs')} className="mt-4 px-4 py-2 bg-secondary-light-color hover:bg-blue-700 text-white">
//                     Back to Blogs
//                 </Button>
//             </div>
//         );
//     }

//     if (!blog) {
//         return (
//             <div className="container mx-auto py-32 px-4 text-center">
//                 <h1 className="text-2xl font-bold">Blog Not Found</h1>
//                 <Button onClick={() => router.push('/blogs')} className="mt-4 px-4 py-2 bg-secondary-light-color hover:bg-blue-700 text-white">
//                     Back to Blogs
//                 </Button>
//             </div>
//         );
//     }

//     return (
//         <>
//             {/* SEO Metadata */}
//             <Head>
//                 <title>{blog?.title || 'Blog Post'}</title>
//                 <meta name="description" content={blog?.description || ''} />
//                 <meta name="keywords" content={blog?.keywords || ''} />
//                 <link rel="canonical" href={`https://www.leremitt.com/blogs/${blog?.canonicalUrl || slug || ''}`} />
//                 <meta property="og:title" content={blog?.title || ''} />
//                 <meta property="og:description" content={blog?.description || ''} />
//                 <meta property="og:type" content="article" />
//                 <meta property="og:url" content={`https://www.leremitt.com/blogs/${blog?.canonicalUrl || slug || ''}`} />
//                 <meta property="og:image" content={blog?.coverImage?.startsWith('http') ? blog.coverImage : `https://strapi.leremitt.com${blog?.coverImage || ''}`} />
//                 <meta name="twitter:image" content={blog?.coverImage?.startsWith('http') ? blog.coverImage : `https://strapi.leremitt.com${blog?.coverImage || ''}`} />
//                 <meta property="og:image:alt" content={blog?.metaImageAlt || blog?.title || ''} />
//                 <meta property="og:locale" content="en_US" />
//                 <meta property="og:site_name" content="LeRemitt" />
//                 <meta property="og:logo" content="https://www.leremitt.com/Assets/Reusable_section/LeRemitt_logo_Re.svg" />
//                 <meta property="fb:app_id" content="723572916540331" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1" />
//                 <meta name="robots" content="index, follow" />
//                 <meta name="author" content={blog?.author || 'LeRemitt'} />
//             </Head>

//             {/* Navigation Buttons */}
//             <div className="container mx-auto pt-20 px-4">
//                 <div className="flex gap-4 mb-4">
//                     <Button onClick={() => router.back()} variant="outline" className="flex items-center gap-2">
//                         <ArrowLeft className="h-5 w-5" />
//                         Back
//                     </Button>
//                     <Link href="/" passHref>
//                         <Button variant="outline" className="flex items-center gap-2">
//                             <Home className="h-5 w-5" />
//                             Home
//                         </Button>
//                     </Link>
//                 </div>
//             </div>

//             <div className="container mx-auto py-4 rounded-lg bg-[#EFEFEF]">
//                 <article>
//                     <div className="mb-4 flex justify-between items-center">
//                         <p className="bg-blue-50 text-blue-600 font-semibold uppercase text-sm rounded-lg px-3 py-1">{blog?.category}</p>
//                         <div>
//                             <span className="mx-2 text-gray-400">•</span>
//                             <span className="text-sm text-gray-500">
//                                 Published: {blog?.publishedAt}
//                             </span>
//                         </div>
//                     </div>

//                     <div className="prose max-w-none">
//                         <ReactMarkdown
//                             remarkPlugins={[remarkGfm]}
//                             rehypePlugins={[rehypeRaw]}
//                             components={{
//                                 h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
//                                 h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
//                                 h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
//                                 h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
//                                 p: ({ children }) => <p className="text-base mb-4 leading-relaxed">{children}</p>,
//                                 a: ({ href, children }) => (
//                                     <Link href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
//                                         {children}
//                                     </Link>
//                                 ),
//                                 img: ({ src, alt }) => {
//                                     if (!src) return null;
//                                     return (
//                                         <div className="my-4 flex justify-center">
//                                             <div className="relative w-full max-w-2xl">
//                                                 <Image src={src} alt={alt || ''} width={800} height={450} className="rounded-lg" />
//                                             </div>
//                                         </div>
//                                     );
//                                 },
//                                 ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
//                                 ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
//                                 li: ({ children }) => <li className="mb-1">{children}</li>,
//                                 blockquote: ({ children }) => (
//                                     <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
//                                         {children}
//                                     </blockquote>
//                                 ),
//                                 code: ({ children }) => (
//                                     <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
//                                         {children}
//                                     </code>
//                                 ),
//                                 pre: ({ children }) => (
//                                     <pre className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
//                                         {children}
//                                     </pre>
//                                 ),
//                                 strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
//                                 em: ({ children }) => <em className="italic">{children}</em>,
//                                 del: ({ children }) => <del className="line-through">{children}</del>,
//                             }}
//                         >
//                             {blog?.markdown || ''}
//                         </ReactMarkdown>
//                     </div>
//                 </article>
//             </div>

//             <div className="container mx-auto py-4 rounded-lg bg-white">
//                 {/* Related Blogs Section */}
//                 <div className="mt-10">
//                     <h2 className="text-2xl font-bold mb-6">More from {blog?.category || 'Our Blog'}</h2>

//                     {isLoadingRelated ? (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {[...Array(3)].map((_, index) => (
//                                 <Card key={index} className="overflow-hidden bg-white rounded-lg shadow-none">
//                                     <Skeleton className="w-full h-[200px]" />
//                                     <CardContent className="p-4">
//                                         <Skeleton className="h-6 w-full mb-2" />
//                                         <Skeleton className="h-4 w-3/4 mb-4" />
//                                         <Skeleton className="h-4 w-20" />
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </div>
//                     ) : (
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {(showAllRelated ? allRelatedBlogs : relatedBlogs).map((blog) => (
//                                 <Card key={blog.id} className="overflow-hidden border border-solid border-gray-100 bg-white rounded-lg">
//                                     {blog.image && (
//                                         <div className="relative h-[240px]">
//                                             <Image src={blog.image.startsWith('http') ? blog.image : `https://strapi.leremitt.com${blog.image}`} alt={blog.title} fill className="object-cover" />
//                                         </div>
//                                     )}
//                                     <CardContent className="p-4">
//                                         <h3 className="text-lg font-semibold mb-2 line-clamp-2">{blog.title}</h3>
//                                         <div className="flex justify-between items-center mb-4">
//                                             <span className="text-xs text-gray-500">{blog.publishedAt}</span>
//                                         </div>
//                                         <Link href={`/blogs/${blog.slug}`} passHref>
//                                             <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
//                                                 Read More
//                                             </Button>
//                                         </Link>
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </div>
//                     )}

//                     {allRelatedBlogs.length > 3 && (
//                         <div className="mt-8 text-center">
//                             <Button
//                                 onClick={toggleShowAllRelated}
//                                 className="bg-secondary-light-color hover:bg-blue-700 text-white"
//                             >
//                                 {showAllRelated ? "Show Less" : "View All Related Posts"}
//                             </Button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Scroll-to-Top Button */}
//             <ScrollToTop />
//         </>
//     );
// };

// export default BlogDetail;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Home } from "lucide-react";
import ScrollToTop from "../../../components/Reusable_section/ScrollToTop/ScrollToTop";

const token = 'd83825e40bf7fce2e437b6979ddb17f01e666c52642e502e6dbbfb1e8926ffe8e8cc146bea5b39a9147c3d9ca3e02b499e716d2b3ffa87cf3338641a0354a01e932ca9bf4b52be398d938d4fe2cd2c6268e0cdd8220d28f1886da78eb69ecb068e6fe3c528b662f419c0ab1cfb675865c845b903ca5a5e24d8026072d6c83a85';

export async function getServerSideProps(context) {
    const { slug } = context.params;

    try {
        // Fetch the current blog post
        const blogResponse = await fetch(
            `https://strapi.leremitt.com/api/articles?sort[0]=title:asc&filters[slug][$eq]=${slug}&status=published&locale[0]=en&populate=*`,
            {
                headers: { 'Authorization': `Bearer ${token}` },
            }
        );

        const blogData = await blogResponse.json();

        if (!blogData.data || blogData.data.length === 0) {
            return {
                notFound: true,
            };
        }

        const blog = blogData.data[0];
        const seoBlock = blog.blocks?.find((val) => val.__component === 'shared.seo') || {};
        const markdownBlock = blog.blocks?.find((val) => val.__component === 'shared.rich-text') || {};

        // Set default values if SEO data is missing
        const defaultTitle = blog.title || 'Blog Post';
        const defaultDescription = markdownBlock.body
            ? markdownBlock.body.substring(0, 160) + '...'
            : 'Read this interesting blog post on LeRemitt';

        const formattedBlog = {
            id: blog.id,
            title: seoBlock.metaTitle || defaultTitle,
            description: seoBlock.metaDescription || defaultDescription,
            canonicalUrl: seoBlock.canonicalURL || slug,
            keywords: seoBlock.metaKeywords || '',
            metaImageAlt: seoBlock.metaImageAlt || defaultTitle,
            markdown: markdownBlock.body || '',
            coverImage: blog.cover?.formats?.thumbnail?.url || 'https://www.axodian.com/images/axodian-logo-footer.webp',
            contentImage: blog.cover?.formats?.large?.url || 'https://www.axodian.com/images/axodian-logo-footer.webp',
            author: blog.author?.name || 'LeRemitt',
            publishedAt: new Date(blog.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
            blogTitle: blog.title,
            category: blog.category?.Category || 'General',
        };

        // Fetch related blogs
        const category = blog.category?.Category || 'General';
        const relatedResponse = await fetch(
            `https://strapi.leremitt.com/api/articles?filters[category][Category][$eq]=${category}&filters[id][$ne]=${blog.id}&populate=*&pagination[limit]=3`,
            {
                headers: { 'Authorization': `Bearer ${token}` },
            }
        );

        const relatedData = await relatedResponse.json();
        const relatedBlogs = relatedData.data?.map(item => ({
            id: item.id,
            title: item.title,
            slug: item.slug,
            image: item.cover?.formats?.medium?.url || item.cover?.formats?.thumbnail?.url,
            category: item.category?.Category || '',
            publishedAt: new Date(item.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
        })) || [];

        return {
            props: {
                blog: formattedBlog,
                relatedBlogs,
            },
        };
    } catch (error) {
        console.error("Error in getServerSideProps:", error);
        return {
            notFound: true,
        };
    }
}

const BlogDetail = ({ blog, relatedBlogs }) => {
    const router = useRouter();
    const [allRelatedBlogs, setAllRelatedBlogs] = useState([]);
    const [isLoadingRelated, setIsLoadingRelated] = useState(false);
    const [showAllRelated, setShowAllRelated] = useState(false);

    useEffect(() => {
        if (!blog?.id || !blog?.category || relatedBlogs.length === 0) return;

        const fetchAllRelatedBlogs = async () => {
            try {
                setIsLoadingRelated(true);
                const response = await fetch(
                    `https://strapi.leremitt.com/api/articles?filters[category][Category][$eq]=${blog.category}&filters[id][$ne]=${blog.id}&populate=*`,
                    {
                        headers: { 'Authorization': `Bearer ${token}` },
                    }
                );

                const data = await response.json();
                const allRelated = data.data?.map(item => ({
                    id: item.id,
                    title: item.title,
                    slug: item.slug,
                    image: item.cover?.formats?.medium?.url || item.cover?.formats?.thumbnail?.url,
                    category: item.category?.Category || '',
                    publishedAt: new Date(item.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
                })) || [];
                setAllRelatedBlogs(allRelated);
            } catch (err) {
                console.error("Error fetching all related blogs:", err);
            } finally {
                setIsLoadingRelated(false);
            }
        };

        if (showAllRelated) {
            fetchAllRelatedBlogs();
        }
    }, [showAllRelated, blog?.id, blog?.category, relatedBlogs?.length]);

    const toggleShowAllRelated = () => {
        setShowAllRelated(!showAllRelated);
    };

    if (router.isFallback) {
        return (
            <div className="container mx-auto py-32 px-4 max-w-4xl">
                <Skeleton className="h-10 w-3/4 mb-6" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-6 w-5/6 mb-4" />
                <Skeleton className="h-96 w-full mb-6" />
                <div className="space-y-3">
                    {[...Array(8)].map((_, i) => (
                        <Skeleton key={i} className="h-4 w-full" />
                    ))}
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="container mx-auto py-32 px-4 text-center">
                <h1 className="text-2xl font-bold">Blog Not Found</h1>
                <Button onClick={() => router.push('/blogs')} className="mt-4 px-4 py-2 bg-secondary-light-color hover:bg-blue-700 text-white">
                    Back to Blogs
                </Button>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <meta name="description" content={blog.description} />
                <meta name="keywords" content={blog.keywords} />
                <link rel="canonical" href={`https://www.axodian.com/blogs/${blog.canonicalUrl}`} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://www.axodian.com/blogs/${blog.canonicalUrl}`} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.description} />
                <meta property="og:image" content={
                    blog.coverImage.startsWith('http')
                        ? blog.coverImage
                        : `https://strapi.leremitt.com${blog.coverImage}`
                } />
                <meta property="og:image:alt" content={blog.metaImageAlt} />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.description} />
                <meta name="twitter:image" content={
                    blog.coverImage.startsWith('http')
                        ? blog.coverImage
                        : `https://strapi.leremitt.com${blog.coverImage}`
                } />
                <meta name="twitter:image:alt" content={blog.metaImageAlt} />

                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="LeRemitt" />
                <meta name="author" content={blog.author} />
                <meta name="robots" content="index, follow" />
            </Head>

            {/* Navigation Buttons */}
            <div className="container mx-auto px-0 pt-20">
                <div className="flex gap-4 my-4">
                    <Button onClick={() => router.back()} variant="outline" className="flex items-center gap-2">
                        <ArrowLeft className="h-5 w-5" />
                        Back
                    </Button>
                    <Link href="/" passHref>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Home className="h-5 w-5" />
                            Home
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Blog Content */}
            <div className="container mx-auto py-4 rounded-lg bg-[#EFEFEF]">
                <article>
                    <div className="mb-4 flex justify-between items-center">
                        <p className="bg-blue-50 text-blue-600 font-semibold uppercase text-sm rounded-lg px-3 py-1">
                            {blog.category}
                        </p>
                        <div>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-sm text-gray-500">
                                Published: {blog.publishedAt}
                            </span>
                        </div>
                    </div>

                    <div className="prose max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                                h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
                                h4: ({ children }) => <h4 className="text-lg font-bold mt-4 mb-2">{children}</h4>,
                                p: ({ children }) => <p className="text-base mb-4 leading-relaxed">{children}</p>,
                                a: ({ href, children }) => (
                                    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                                        {children}
                                    </Link>
                                ),
                                img: ({ src, alt }) => {
                                    if (!src) return null;
                                    return (
                                        <figure className="my-4 flex justify-center">
                                            <Image
                                                src={src.startsWith('http') ? src : `https://strapi.leremitt.com${src}`}
                                                alt={alt || blog.metaImageAlt}
                                                width={800}
                                                height={450}
                                                className="rounded-lg"
                                            />
                                        </figure>
                                    );
                                },
                                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                                ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                                li: ({ children }) => <li className="mb-1">{children}</li>,
                                blockquote: ({ children }) => (
                                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
                                        {children}
                                    </blockquote>
                                ),
                                code: ({ children }) => (
                                    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                                        {children}
                                    </code>
                                ),
                                pre: ({ children }) => (
                                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto my-4">
                                        {children}
                                    </pre>
                                ),
                                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                                em: ({ children }) => <em className="italic">{children}</em>,
                                del: ({ children }) => <del className="line-through">{children}</del>,
                            }}
                        >
                            {blog.markdown}
                        </ReactMarkdown>
                    </div>
                </article>
            </div>

            {/* Related Blogs Section */}
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-6">More from {blog.category}</h2>

                {isLoadingRelated ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, index) => (
                            <Card key={index} className="overflow-hidden bg-white rounded-lg shadow-none">
                                <Skeleton className="w-full h-[200px]" />
                                <CardContent className="p-4">
                                    <Skeleton className="h-6 w-full mb-2" />
                                    <Skeleton className="h-4 w-3/4 mb-4" />
                                    <Skeleton className="h-4 w-20" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(showAllRelated ? allRelatedBlogs : relatedBlogs).map((relatedBlog) => (
                                <Card key={relatedBlog.id} className="overflow-hidden border border-solid border-gray-200 shadow-none bg-white rounded-lg">
                                    {relatedBlog.image && (
                                        <div className="relative h-[240px]">
                                            <Image
                                                src={relatedBlog.image.startsWith('http') ? relatedBlog.image : `https://strapi.leremitt.com${relatedBlog.image}`}
                                                alt={relatedBlog.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                    <CardContent className="p-4">
                                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{relatedBlog.title}</h3>
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-xs text-gray-500">{relatedBlog.publishedAt}</span>
                                            <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                                                {relatedBlog.category}
                                            </span>
                                        </div>
                                        <Link href={`/blogs/${relatedBlog.slug}`} passHref>
                                            <Button variant="link" className="p-0 text-blue-600 hover:text-blue-700">
                                                Read More
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {allRelatedBlogs.length > 0 && allRelatedBlogs.length > relatedBlogs.length && (
                            <div className="mt-8 text-center">
                                <Button
                                    onClick={toggleShowAllRelated}
                                    className="bg-secondary-light-color hover:bg-blue-700 text-white"
                                >
                                    {showAllRelated ? "Show Less" : "View All Related Posts"}
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Scroll-to-Top Button */}
            <ScrollToTop />
        </>
    );
};

export default BlogDetail;