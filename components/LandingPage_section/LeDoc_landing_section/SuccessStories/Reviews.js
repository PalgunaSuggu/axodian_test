import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MessageSquareQuote, User } from "lucide-react";

const reviews = [
    { name: "Jyothi Prasad Asapu", company: "@Beansoft LLP", body: "LeRemit cuts cross-border remittance costs by removing SWIFT fees, enabling real-time tracking, and ensuring fast, transparent transactions for better cash flow, compliance, and efficiency." },
    { name: "", company: "@A software service Exporter", body: "Being a very small business in technology services, we understand how powerful tech can be in saving money and LeRemit has proven to be a right blend of a finance and a tech platform – we save more and receiving money hasn’t been this efficient before." },
    { name: "", company: "@An MSME Service Exporter", body: "As an MSME, every penny counts. We don’t always have the time to keep negotiating for better rates with our RM. LeRemit has been a huge revelation for us and we’ve been able to save so much more." },
    { name: "Uday Kumar, CEO", company: "@Deprocon Controls", body: "It is indeed a privilege to have been associated in the development of the product. The initiative is novel and an excellent one and meets the requirements of the export fraternity which has to handle multitude of documents with several stakeholders. We wish LeDoc unbound success in their venture." },
    { name: "Nikhilesh K", company: "@Exporter", body: "LeDoc's centralized and indexed storage system has streamlined our document management, allowing for efficient organization and quick retrieval. LeDoc has truly simplified our compliance processes and improved our overall operational efficiency. The team is very responsive to any requirements, and we believe that the product will help us in generating all our business tracking reports." },
    { name: "Shitalkumar Dagade", company: "CEO", body: "Thanks to LeRemit, I can manage my export remittances digitally without stepping into a bank. It's efficient, reliable, and tailored for small businesses." },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ name, company, body }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-full cursor-pointer overflow-hidden rounded-lg border p-4",
                "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
            )}
        >
            <Card className="relative h-full w-80 md:w-96 cursor-pointer overflow-hidden shadow-none rounded-lg p-4 bg-transparent text-white">
                <div className="flex flex-row items-center gap-4 md:mb-6">
                    <Avatar>
                        <AvatarFallback>
                            {name ? name.trim().charAt(0).toUpperCase() : <User className="h-4 w-4 text-muted-foreground" />}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <p className="text-lg font-medium">{name || "Anonymous"}</p>
                        <p className="text-md">{company}</p>
                    </div>
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <p className="mt-2 text-lg font-semibold line-clamp-3">{body}</p>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-md bg-white text-black p-4 shadow-md rounded-md">
                            <p className="text-md font-medium">{body}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </Card>
        </figure>
    );
};

export function Reviews3D() {
    return (
        <>
            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 min-w-[2rem] min-h-[2rem] rounded-lg bg-white flex items-center justify-center shadow-md">
                    <MessageSquareQuote className="w-8 h-8 text-[#1E77FF]" />
                </div>
                <h2 className="text-2xl text-white/75 font-bold">In Their Words</h2>
            </div>
            <div className="relative flex h-[70vh] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:400px]">
                <div className="flex flex-row items-center gap-4"
                    style={{ transform: "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)", }}>
                    <Marquee pauseOnHover vertical className="[--duration:10s]">
                        {firstRow.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:10s]" vertical>
                        {secondRow.map((review, index) => (
                            <ReviewCard key={index + firstRow.length} {...review} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:10s]">
                        {firstRow.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </>
    );
}