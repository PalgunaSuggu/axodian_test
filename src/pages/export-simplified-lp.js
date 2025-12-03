import Link from "next/link";
import LandingPage from "../../components/LandingPage_section/LeDoc_landing_section/DocLandingPage";
import SEO from "../../components/SEO";
import { Button } from "@/components/ui/button"; // ShadCN button
import { MessageCircle } from "lucide-react"; // Lucide WhatsApp-style icon

export default function LeDocLp() {
    return (
        <>
            <SEO
                title="LeDoc: Simplify Export Documentation & Stay Compliant"
                description="Manage, share & track all export documents in one secure platform. Stay compliant with regulations."
                url="https://www.axodian.com/export-simplified-lp"
                image="https://www.axodian.com/images/articaldata-02.webp"
                imageAlt="LeDocLanding"
            />
            <LandingPage formType="LeDocFormLp" />

            {/* WhatsApp Floating Button */}
            <Link
                href="https://wa.me/918050087594"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 z-50 block md:hidden"
            >
                <Button className="bg-green-500 hover:bg-green-600 text-white shadow-lg gap-2 px-4 py-2 rounded-sm">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </Button>
            </Link>
        </>
    );
}
