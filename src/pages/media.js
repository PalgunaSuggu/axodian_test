import Media from "../../components/Media_Section/Media";
import SEO from "../../components/SEO";

export default function MediaPage() {
    return (
        <>
            <SEO
                title="Media Coverage | LeRemitt"
                description="Explore LeRemitt's latest media coverage including podcasts, press releases, and featured articles. Stay updated on how we're revolutionizing cross-border payments."
                url="https://www.axodian.com/media"
                image="https://www.axodian.com/images/axodian-logo-footer.webp"
                imageAlt="LeRemitt Media"
            />
            <Media />
        </>
    );
}
