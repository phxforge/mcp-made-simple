import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Wrench, Users, BookOpen } from 'lucide-react';

import { Breadcrumb } from '@/components/Breadcrumb';
import { RelatedContent, RelatedItem } from '@/components/RelatedContent';
import { CTASection } from '@/components/CTASection';

interface ArticleLayoutProps {
    children: ReactNode;
    title: string;
    description?: string;
    category?: string;
    publishDate?: string;
    readTime?: string;
    relatedArticles?: RelatedItem[];
    parentPillar?: { title: string; slug: string };
    tools?: string[];
    useCases?: string[];
}

const DEFAULT_RELATED: RelatedItem[] = [
    { title: "MCP vs Zapier", description: "Why direct LLM context beats traditional automation.", link: "/articles/mcp-vs-zapier", readTime: "5 min", category: "Comparison" },
    { title: "Developer Quick Start", description: "Build your first server in Python or Node.js.", link: "/articles/mcp-developer-quick-start", readTime: "12 min", category: "Setup" },
    { title: "Is MCP Secure?", description: "Addressing common concerns for enterprise teams.", link: "/articles/is-mcp-secure-for-business", readTime: "7 min", category: "Security" }
];

// Helper to title case slugs
const formatSlug = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export function ArticleLayout({
    children,
    title,
    description,
    category = "Article",
    publishDate,
    readTime,
    relatedArticles,
    parentPillar,
    tools = [],
    useCases = []
}: ArticleLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-1 w-full pt-28 pb-24">
                <article className="max-w-3xl mx-auto px-6">

                    {/* Breadcrumb */}
                    <Breadcrumb />

                    {/* Article Header */}
                    <header className="mb-10">
                        <Badge variant="secondary" className="mb-4 text-blue-600 bg-blue-50 hover:bg-blue-100">
                            {category}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
                            {title}
                        </h1>
                        {description && (
                            <p className="text-xl text-slate-600 leading-relaxed mb-6">
                                {description}
                            </p>
                        )}
                        <div className="flex items-center gap-4 text-sm text-slate-500 border-t border-b border-slate-100 py-4">
                            <span>{publishDate || "Feb 1, 2026"}</span>
                            <span>•</span>
                            <span>{readTime || "5 min read"}</span>
                        </div>
                    </header>

                    {/* Parent Pillar Callout */}
                    {parentPillar && (
                        <div className="mb-10 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                            <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="text-sm text-slate-600 mb-1">
                                    This article is part of our <span className="font-semibold text-slate-900">{category}</span> series.
                                </p>
                                <Link href={`/guides/${parentPillar.slug}`} className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                                    Read the complete guide: {parentPillar.title} <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Main Content (Prose) */}
                    <div className="prose prose-slate prose-lg max-w-none">
                        {children}
                    </div>

                    {/* Bottom Sections Container */}
                    <div className="mt-16 space-y-12">

                        {/* Tools Section */}
                        {tools.length > 0 && (
                            <section>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
                                    <Wrench className="w-5 h-5 text-slate-400" />
                                    Tools Mentioned
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {tools.map(tool => (
                                        <Link
                                            key={tool}
                                            href={`/tools/${tool}`}
                                            className="inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-blue-300 hover:shadow-md transition-all text-slate-700 font-medium"
                                        >
                                            {formatSlug(tool)}
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Use Cases Section */}
                        {useCases.length > 0 && (
                            <section>
                                <h3 className="flex items-center gap-2 text-xl font-bold text-slate-900 mb-6">
                                    <Users className="w-5 h-5 text-slate-400" />
                                    Related Use Cases
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {useCases.map(uc => (
                                        <Link
                                            key={uc}
                                            href={`/use-cases/${uc}`}
                                            className="block p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
                                        >
                                            <div className="font-bold text-slate-900 group-hover:text-blue-700">
                                                {formatSlug(uc)}
                                            </div>
                                            <div className="text-sm text-slate-500 mt-1 flex items-center">
                                                View Use Case <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Related Articles */}
                    <div className="mt-16 pt-12 border-t border-slate-100">
                        <RelatedContent heading="Continue Reading" items={relatedArticles || DEFAULT_RELATED} />
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-16 -mx-6 md:-mx-0">
                        <CTASection variant="minimal" />
                    </div>

                </article>
            </main>

            <Footer />
        </div>
    );
}
