import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ReactNode } from 'react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedContent, RelatedItem } from '@/components/RelatedContent';
import { CTASection } from '@/components/CTASection';

interface StandardLayoutProps {
    children: ReactNode;
    title?: string;
    description?: string;
    publishedAt?: string;
    updatedAt?: string;
}

const formatDate = (isoString?: string) => {
    if (!isoString) return "";
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC'
    });
};

const DEFAULT_RELATED: RelatedItem[] = [
    { title: "What is MCP?", description: "Learn the fundamentals of the Model Context Protocol.", link: "/guides/what-is-mcp", readTime: "8 min", category: "Fundamentals" },
    { title: "Is MCP Safe?", description: "Security, privacy, and compliance explained.", link: "/guides/is-mcp-safe", readTime: "6 min", category: "Security" },
    { title: "Workflow Examples", description: "Real automation workflows you can build today.", link: "/guides/workflows", readTime: "10 min", category: "Workflows" }
];

import { PageSchema } from '@/components/PageSchema';

export function StandardLayout({ children, title, description, publishedAt, updatedAt }: StandardLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1 w-full pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-6">
                    <PageSchema
                        title={title || ''}
                        description={description || ''}
                        datePublished={publishedAt}
                        dateModified={updatedAt}
                    />

                    {/* Breadcrumb */}
                    <Breadcrumb hideSchema={true} />

                    {/* Header Area */}
                    {(title || description) && (
                        <div className="mb-12 max-w-4xl">
                            {title && <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h1>}
                            {description && <p className="text-xl text-slate-600 leading-relaxed mb-6">{description}</p>}
                            
                            {updatedAt && (
                                <div className="flex flex-col gap-2 text-sm text-slate-500 border-t border-b border-slate-100 py-4">
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                                        <span className="font-semibold text-slate-800">By Jason Laveglia</span>
                                        {publishedAt && (
                                            <>
                                                <span>·</span>
                                                <span>Published {formatDate(publishedAt)}</span>
                                            </>
                                        )}
                                        <span>·</span>
                                        <span>Updated {formatDate(updatedAt)}</span>
                                    </div>
                                    <p className="text-slate-500 text-xs m-0">
                                        Jason builds production MCP systems on <a href="https://fighthoa.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">FightHOA</a> daily.
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Main Content */}
                    <div className="w-full">
                        {children}
                    </div>

                    {/* Related Content */}
                    <div className="mt-20 pt-12 border-t border-slate-100">
                        <RelatedContent heading="Related Guides" items={DEFAULT_RELATED} />
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 -mx-6 md:-mx-0">
                        <CTASection variant="default" />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
