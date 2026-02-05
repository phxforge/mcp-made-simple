import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ReactNode } from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { CTASection } from '@/components/CTASection';

interface HubLayoutProps {
    children: ReactNode;
    title: string;
    description: string;
}

export function HubLayout({ children, title, description }: HubLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 w-full pt-20">
                {/* Hub Hero */}
                <div className="bg-white border-b border-slate-200 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="flex justify-center mb-6">
                            <Breadcrumb />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">{title}</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">{description}</p>

                        {/* Optional Filters Placeholder */}
                        <div className="mt-10 flex justify-center gap-2">
                            <span className="px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium">All</span>
                            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-slate-300">Popular</span>
                            <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-slate-300">Newest</span>
                        </div>
                    </div>
                </div>

                {/* Directory Content */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    {children}
                </div>

                {/* Cleanup/CTA Section */}
                <CTASection variant="upgrade" />

            </main>

            <Footer />
        </div>
    );
}
