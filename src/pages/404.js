// Page Title: 404 Not Found
// Page URL: https://www.axodian.com/404
// Local URL: http://localhost:3000/404
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Custom404 = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/');
        }, 2000); // 4000ms = 4 seconds

        return () => clearTimeout(timer); // Cleanup if component unmounts
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center px-6">
                <h1 className="text-gray-900 mb-4">404-error</h1>
                <p className="text-gray-600 text-lg max-w-3xl mb-2">Page Not Found</p>
                <p className="text-gray-600 text-lg max-w-3xl mb-8">Your search has ventured beyond the known universe.</p>
                <Link href="/">
                    <Button className="bg-primary-color hover:bg-primary-color/90 text-white px-8 py-3 rounded-lg">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Custom404

