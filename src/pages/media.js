// Page Title: Media
// Page URL: https://www.axodian.com/media
// Local URL: http://localhost:3000/media
import Media from "../../components/Media_Section/Media";
import SEO from "../../components/SEO";

const media = () => {
    return (
        <>
            <SEO
                title="Axodian in the Media | Press Releases, Podcasts & Articles"
                description="Explore Axodian's latest media coverage including podcasts, press releases, and featured articles. Stay updated on how Axodian is transforming global trade, cross-border payments, and export documentation."
                url="https://www.axodian.com/media"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="Axodian Media"
            />
            <Media />
        </>
    );
}

export default media