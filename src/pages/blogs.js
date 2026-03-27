// Page Title: Blogs
// Page URL: https://www.axodian.com/blogs
// Local URL: http://localhost:3000/blogs
import Blog from "../../components/Blog_section/Blog";
import SEO from "../../components/SEO";

const blogs = () => {
    return (
        <>
            <SEO
                title="Axodian Blogs | Insights on Global Trade & Export Finance"
                description="Explore Axodian Blogs for insights on global trade, cross-border payments, export documentation, and trade finance to help businesses grow internationally."
                url="https://www.axodian.com/blogs"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="Axodian Blogs"
            />
            <Blog />
        </>
    );
}

export default blogs
