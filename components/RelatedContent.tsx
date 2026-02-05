'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface RelatedItem {
    title: string;
    description: string;
    link: string;
    readTime?: string;
    category?: string;
}

interface RelatedContentProps {
    heading: string;
    items: RelatedItem[];
}

// Category Color Mapping
const CATEGORY_COLORS: Record<string, string> = {
    'Fundamentals': 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    'Security': 'bg-green-100 text-green-700 hover:bg-green-200',
    'Setup': 'bg-purple-100 text-purple-700 hover:bg-purple-200',
    'Workflows': 'bg-orange-100 text-orange-700 hover:bg-orange-200',
    'Comparison': 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    'default': 'bg-slate-100 text-slate-700 hover:bg-slate-200'
};

export function RelatedContent({ heading, items }: RelatedContentProps) {
    if (!items || items.length === 0) return null;

    return (
        <section className="w-full pb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{heading}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => {
                    const badgeColor = CATEGORY_COLORS[item.category || 'default'] || CATEGORY_COLORS['default'];

                    return (
                        <Link
                            key={index}
                            href={item.link}
                            className="group block h-full"
                        >
                            <div className="h-full bg-white rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:border-blue-300 hover:shadow-md flex flex-col">

                                {/* Header: Badge & Read Time */}
                                <div className="flex items-center justify-between mb-4">
                                    {item.category && (
                                        <Badge className={`border-none font-medium px-2.5 py-0.5 ${badgeColor}`}>
                                            {item.category}
                                        </Badge>
                                    )}
                                    {item.readTime && (
                                        <div className="flex items-center text-xs text-slate-400 font-medium">
                                            <Clock size={12} className="mr-1" />
                                            {item.readTime}
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Footer: Arrow */}
                                <div className="mt-6 flex items-center text-blue-600 text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                                    Read Article <ArrowRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
