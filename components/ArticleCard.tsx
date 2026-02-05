'use client';

import Link from 'next/link';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ArticleCardProps {
    title: string;
    description: string;
    slug: string;
    readTime: string;
    category?: string;
    featured?: boolean;
}

// Category Color Mapping (Matches RelatedContent)
const CATEGORY_COLORS: Record<string, string> = {
    'Fundamentals': 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    'Security': 'bg-green-100 text-green-700 hover:bg-green-200',
    'Setup': 'bg-purple-100 text-purple-700 hover:bg-purple-200',
    'Workflows': 'bg-orange-100 text-orange-700 hover:bg-orange-200',
    'Comparison': 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    'default': 'bg-slate-100 text-slate-700 hover:bg-slate-200'
};

export function ArticleCard({ title, description, slug, readTime, category = 'Article', featured = false }: ArticleCardProps) {
    const badgeColor = CATEGORY_COLORS[category] || CATEGORY_COLORS['default'];
    const articleUrl = `/articles/${slug}`;

    if (featured) {
        return (
            <Link href={articleUrl} className="group block h-full md:col-span-2">
                <div className="h-full bg-slate-900 rounded-2xl border border-slate-800 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-700/50 flex flex-col relative overflow-hidden">

                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-6">
                            <Badge className={`border-none font-bold px-3 py-1 ${badgeColor}`}>
                                {category}
                            </Badge>
                            <div className="flex items-center text-xs text-blue-200 font-medium px-2 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
                                <Star size={12} className="mr-1 text-yellow-400 fill-yellow-400" />
                                Featured Article
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-blue-200 transition-colors">
                            {title}
                        </h3>

                        <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl line-clamp-3">
                            {description}
                        </p>

                        <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-800">
                            <div className="flex items-center text-sm text-slate-500 font-medium">
                                <Clock size={14} className="mr-2" />
                                {readTime}
                            </div>
                            <div className="flex items-center text-blue-400 text-base font-bold group-hover:text-blue-300 transition-colors">
                                Read Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link href={articleUrl} className="group block h-full">
            <div className="h-full bg-white rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:border-blue-300 hover:shadow-md flex flex-col">

                {/* Header: Badge & Read Time */}
                <div className="flex items-center justify-between mb-4">
                    <Badge className={`border-none font-medium px-2.5 py-0.5 ${badgeColor}`}>
                        {category}
                    </Badge>
                    <div className="flex items-center text-xs text-slate-400 font-medium">
                        <Clock size={12} className="mr-1" />
                        {readTime}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* Footer: Arrow */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-50/50">
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider group-hover:text-blue-200 transition-colors">Read Article</span>
                    <ArrowRight size={16} className="text-blue-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                </div>
            </div>
        </Link>
    );
}
