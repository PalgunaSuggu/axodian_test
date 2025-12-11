// Page Title: Blogs
// Page URL: https://www.axodian.com/blogs
// Local URL: http://localhost:3000/blogs
import Blog from "../../components/Blog_section/Blog";
import SEO from "../../components/SEO";

const blogs = () => {
    return (
        <>
            <SEO
                title="LeRemitt | Knowledge Hub For International Trade"
                description="Get news & articles on payments, banking & business growth. LeRemitt Blogs empower your financial journey & business success."
                url="https://www.axodian.com/blogs"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="LeRemitt Blogs"
            />
            <Blog />
        </>
    );
}

export default blogs
