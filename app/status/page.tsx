import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
    title: "System Status",
    description: "Check the status of MCP Made Simple services. (Spoiler: We have no servers to go down)",
    path: "/status",
});

export default function StatusPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-green-50">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
            <h1 className="text-4xl font-bold text-green-900 mb-4">All Systems Operational</h1>
            <p className="text-xl text-green-800 max-w-lg mx-auto mb-8 font-medium">
                No servers are down because we barely manage them. That's the beauty of MCP.
            </p>

            <Link href="/#waitlist-form">
                <Button className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-8 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all">
                    Get the Kit
                </Button>
            </Link>

            <div className="mt-12 text-sm text-green-600 opacity-60">
                <p>Uptime: 100% (It runs on your machine)</p>
            </div>
        </div>
    );
}
