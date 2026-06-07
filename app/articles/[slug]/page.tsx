import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { getArticleBySlug, getRelatedArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

import { generatePageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return generatePageMetadata({
    title: article.title,
    description: article.description,
    path: `/articles/${article.slug}`,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    category: article.category
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get dynamic related articles
  // We need to map the full Article objects to the simpler RelatedItem interface Expected by ArticleLayout/RelatedContent
  const relatedArticlesRaw = getRelatedArticles(slug);
  const relatedContentItems = relatedArticlesRaw.map(a => ({
    title: a.title,
    description: a.description,
    link: `/articles/${a.slug}`,
    readTime: a.readTime,
    category: a.category
  }));

  return (
    <ArticleLayout
      title={article.title}
      category={article.category}
      description={article.description}
      readTime={article.readTime}
      relatedArticles={relatedContentItems}
      parentPillar={{ title: article.parentPillarTitle, slug: article.parentPillar }}
      tools={article.toolPages}
      useCases={article.useCasePages}
      publishedAt={article.publishedAt}
      updatedAt={article.updatedAt}
    >
      {/* Dynamic Content would go here. For now, we keep the static placeholder text or render a generic body */}
      <div className="lead text-xl text-slate-600 mb-8">
        This is the placeholder content for <strong>{article.title}</strong>. In a real integration, this would be fetched from a CMS or markdown file.
      </div>

      <h2>Why This Matters</h2>
      <p>
        The Model Context Protocol represents a significant step forward in how we integrate AI tools.
        Instead of building custom connectors for every service, MCP provides a standard way to expose data and functionality.
      </p>

      <h3>Key Takeaways</h3>
      <ul>
        <li>Standardization reduces integration effort</li>
        <li>Context-aware agents are more capable</li>
        <li>Security is built-in by design</li>
      </ul>

      {/* Mid-Article CTA Placeholder */}
      <div className="my-10 p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-blue-100 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to get started?</h3>
        <p className="text-slate-600 mb-6">Skip the setup headaches with our pre-configured templates.</p>
        <Link href="/start-here" className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
          Get the free MCP Quick Start Kit →
        </Link>
      </div>

      <blockquote>
        "The future of AI is not just about smarter models, but about better connected ones."
      </blockquote>

      <p>
        Stay tuned as we continue to expand this guide with more technical details and practical examples.
        We are constantly updating our resources to match the latest protocol changes.
      </p>

    </ArticleLayout>
  );
}
