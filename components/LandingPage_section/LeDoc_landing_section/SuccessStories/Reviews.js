import { Marquee } from "@/components/magicui/marquee";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MessageSquareQuote, User, Star } from "lucide-react";

const reviews = [
    { name: "Jyothi Prasad Asapu", company: "@Beansoft LLP", body: "LeRemit cuts cross-border remittance costs by removing SWIFT fees, enabling real-time tracking, and ensuring fast, transparent transactions for better cash flow, compliance, and efficiency.", rating: 5 },
    { name: "", company: "@A software service Exporter", body: "Being a very small business in technology services, we understand how powerful tech can be in saving money and LeRemit has proven to be a right blend of a finance and a tech platform – we save more and receiving money hasn't been this efficient before.", rating: 5 },
    { name: "", company: "@An MSME Service Exporter", body: "As an MSME, every penny counts. We don't always have the time to keep negotiating for better rates with our RM. LeRemit has been a huge revelation for us and we've been able to save so much more.", rating: 5 },
    { name: "Uday Kumar, CEO", company: "@Deprocon Controls", body: "It is indeed a privilege to have been associated in the development of the product. The initiative is novel and an excellent one and meets the requirements of the export fraternity which has to handle multitude of documents with several stakeholders. We wish LeDoc unbound success in their venture.", rating: 5 },
    { name: "Nikhilesh K", company: "@Exporter", body: "LeDoc's centralized and indexed storage system has streamlined our document management, allowing for efficient organization and quick retrieval. LeDoc has truly simplified our compliance processes and improved our overall operational efficiency. The team is very responsive to any requirements, and we believe that the product will help us in generating all our business tracking reports.", rating: 5 },
    { name: "Shitalkumar Dagade", company: "CEO", body: "Thanks to LeRemit, I can manage my export remittances digitally without stepping into a bank. It's efficient, reliable, and tailored for small businesses.", rating: 5 },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name, company, body, rating }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-full cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:scale-105",
                "border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/20"
            )}
        >
            <Card className="relative h-full w-80 md:w-96 cursor-pointer overflow-hidden shadow-none rounded-2xl p-0 bg-transparent text-white border-0">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                
                {/* Review Content */}
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <p className="text-white/90 text-sm leading-relaxed line-clamp-4 mb-6">{body}</p>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-md bg-white text-black p-4 shadow-xl rounded-xl border-0">
                            <p className="text-sm font-medium leading-relaxed">{body}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-primary-light-color to-secondary-light-color text-white font-semibold">
                            {name ? name.trim().charAt(0).toUpperCase() : <User className="h-4 w-4" />}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <p className="text-white font-medium text-sm">{name || "Anonymous"}</p>
                        <p className="text-white/60 text-xs">{company}</p>
                    </div>
                </div>
            </Card>
        </figure>
    );
};

export function Reviews3D() {
    return (
        <div className="w-full h-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-light-color to-primary-color flex items-center justify-center shadow-xl">
                    <MessageSquareQuote className="w-7 h-7 text-white" />
                </div>
                <div>
                    <h2 className="text-white mb-1">Client Reviews</h2>
                    <p className="text-gray-400 text-sm">Real feedback from real customers</p>
                </div>
            </div>
            
            {/* Reviews Marquee */}
            <div className="relative flex h-[500px] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:1000px]">
                <div className="flex flex-row items-center gap-4"
                    style={{ transform: "translateX(-50px) translateY(0px) translateZ(-50px) rotateX(10deg) rotateY(-5deg) rotateZ(10deg)" }}>
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {firstRow.map((review, index) => (
                            <ReviewCard key={index} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
                        {secondRow.map((review, index) => (
                            <ReviewCard key={index + firstRow.length} {...review} />
                        ))}
                    </Marquee>
                    <Marquee pauseOnHover vertical className="[--duration:20s]">
                        {firstRow.map((review, index) => (
                            <ReviewCard key={index + firstRow.length * 2} {...review} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}