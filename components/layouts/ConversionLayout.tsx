import Link from 'next/link';
import { ReactNode } from 'react';
import { Lock } from 'lucide-react';

interface ConversionLayoutProps {
    children: ReactNode;
    publishedAt?: string;
    updatedAt?: string;
}

export function ConversionLayout({ children }: ConversionLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            {/* Minimal Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="group flex items-center gap-2 no-underline">
                        <span className="text-[20px] text-[#0f172a] tracking-tight group-hover:text-[#2563eb] transition-colors">
                            MCPMade<span className="font-extrabold">Simple</span>
                        </span>
                    </Link>
                    <div className="text-sm text-slate-500 hidden sm:block">
                        Free Quickstart Kit
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full pt-28 pb-16">
                <div className="max-w-3xl mx-auto px-6">
                    {children}
                </div>
            </main>

            {/* Minimal Footer */}
            <footer className="border-t border-slate-100 py-8 text-center text-slate-500 text-sm">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
                    <p>© 2026 MCP Made Simple.</p>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <Lock size={12} />
                            <span>Secure & Private</span>
                        </div>
                        <Link href="/privacy" className="hover:text-slate-900 underline">Privacy</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
