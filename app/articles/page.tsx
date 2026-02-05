import { HubLayout } from '@/components/layouts/HubLayout';
import { ArticleCard } from '@/components/ArticleCard';
import { ARTICLES, getArticlesByCategory } from '@/lib/articles';
import Link from 'next/link';

// Helper for category counts
const getCategoryCount = (category?: string) => {
    if (!category) return ARTICLES.length;
    return ARTICLES.filter(a => a.category === category).length;
}

const FILTER_TABS = [
    { label: 'All', value: undefined, color: 'bg-slate-100 text-slate-700 hover:bg-slate-200' },
    { label: 'Fundamentals', value: 'Fundamentals', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
    { label: 'Security', value: 'Security', color: 'bg-green-100 text-green-700 hover:bg-green-200' },
    { label: 'Setup', value: 'Setup', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
    { label: 'Workflows', value: 'Workflows', color: 'bg-orange-100 text-orange-700 hover:bg-orange-200' },
    { label: 'Comparison', value: 'Comparison', color: 'bg-gray-100 text-gray-700 hover:bg-gray-200' },
];

interface ArticlesPageProps {
    searchParams: { category?: string };
}

export default function ArticlesPage({ searchParams }: ArticlesPageProps) {
    const currentCategory = searchParams.category;

    // Filter logic
    const displayedArticles = currentCategory
        ? getArticlesByCategory(currentCategory)
        : ARTICLES;

    // Sort: Featured first if displaying all
    // If filtered, just default order is fine.
    // Note: getArticlesByCategory returns filtered list.
    // If displaying all, ARTICLES already has Featured ones where they are in the list.
    // But we want Featured to be prominent if All.
    // Let's rely on the `featured` prop in the article object.

    // Logic for "No featured treatment when filtering"
    // We will override the featured prop to false if a category is selected.

    return (
        <HubLayout
            title="Articles & Insights"
            description="Deep dives, tutorials, and analysis on the future of AI integration."
        >
            {/* Filter Tabs */}
            <div className="mb-12">
                <div className="flex flex-wrap gap-2 md:gap-3">
                    {FILTER_TABS.map((tab) => {
                        const isActive = currentCategory === tab.value;
                        const count = getCategoryCount(tab.value);

                        // Active Style vs Inactive Style
                        // If active, we might want a stronger border or ring. 
                        // Requirement: "Active tab should be visually highlighted"

                        return (
                            <Link
                                key={tab.label}
                                href={tab.value ? `/articles?category=${tab.value}` : '/articles'}
                                scroll={false}
                                className={`
                                    px-4 py-2 rounded-full text-sm font-semibold transition-all border-2
                                    flex items-center gap-2
                                    ${tab.color}
                                    ${isActive ? 'border-slate-900 ring-2 ring-slate-200' : 'border-transparent opacity-80 hover:opacity-100'}
                                `}
                            >
                                {tab.label}
                                <span className="bg-white/50 px-1.5 py-0.5 rounded-md text-xs min-w-[20px] text-center">
                                    {count}
                                </span>
                            </Link>
                        )
                    })}
                </div>

                <div className="mt-6 text-slate-500 text-sm font-medium">
                    Showing {displayedArticles.length} articles {currentCategory && `in ${currentCategory}`}
                </div>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedArticles.map((article, index) => (
                    <ArticleCard
                        key={index}
                        {...article}
                        // Override featured status if filtering
                        featured={currentCategory ? false : article.featured}
                    />
                ))}
            </div>

            {displayedArticles.length === 0 && (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                    <p className="text-slate-500">No articles found in this category.</p>
                </div>
            )}
        </HubLayout>
    );
}
