import { Button } from '@/components/ui/button';
import { MoveUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <div>
            {/* Scroll-to-Top Button */}
            {showScrollToTop && (
                <Button onClick={scrollToTop} className="fixed bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-secondary-light-color hover:bg-blue-700 text-white shadow-lg">
                    <MoveUp className="w-5 h-5" />
                </Button>
            )}
        </div>
    )
}

export default ScrollToTop