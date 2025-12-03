import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import CustomLink from '../../components/Reusable_section/CustomLink/CustomLink';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 2000); // 4000ms = 4 seconds

        return () => clearTimeout(timer); // Cleanup if component unmounts
    }, [router]);

    return (
        <div className="h-screen flex justify-center items-center bg-black bg-cover bg-center bg-[url('/images/RegisterLaning.webp')] flex-col">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-gray-100">404-error</h1>
                <p className="text-2xl mt-4 text-gray-300">Page Not Found</p>
                <p className="text-xl mt-4 text-gray-100">Your search has ventured beyond the known universe.</p>
                <CustomLink href="/" rel="noopener noreferrer" passHref>
                    <Button className="mt-6 px-6 py-2 text-lg bg-white text-black rounded-lg hover:bg-white/90 transition">
                        Back To Home
                    </Button>
                </CustomLink>
            </div>
        </div>
    );
}
