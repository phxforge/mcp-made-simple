import { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/articles';

const SITE_URL = 'https://www.mcpmadesimple.com';

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Core Static Pages
    const staticPages = [
        { url: `${SITE_URL}`, priority: 1.0, changeFrequency: 'daily' as const },
        { url: `${SITE_URL}/start-here`, priority: 0.9, changeFrequency: 'weekly' as const },
        { url: `${SITE_URL}/mastery`, priority: 0.7, changeFrequency: 'weekly' as const },
        { url: `${SITE_URL}/about`, priority: 0.5, changeFrequency: 'monthly' as const },
        { url: `${SITE_URL}/guides`, priority: 0.8, changeFrequency: 'weekly' as const },
        { url: `${SITE_URL}/articles`, priority: 0.8, changeFrequency: 'weekly' as const },
        { url: `${SITE_URL}/tools`, priority: 0.6, changeFrequency: 'monthly' as const },
        { url: `${SITE_URL}/use-cases`, priority: 0.6, changeFrequency: 'monthly' as const },
    ];

    // 2. Guides Details
    const guides = ['is-mcp-safe', 'setup', 'what-is-mcp', 'workflows'].map(slug => ({
        url: `${SITE_URL}/guides/${slug}`,
        priority: 0.8,
        changeFrequency: 'weekly' as const,
    }));

    // 3. Articles Details
    const articles = ARTICLES.map(a => ({
        url: `${SITE_URL}/articles/${a.slug}`,
        priority: 0.8,
        changeFrequency: 'weekly' as const,
    }));

    // 4. Tools Details
    const tools = [
        'asana', 'dropbox', 'github', 'gmail', 'google-calendar',
        'google-drive', 'notion', 'slack', 'trello'
    ].map(slug => ({
        url: `${SITE_URL}/tools/${slug}`,
        priority: 0.6,
        changeFrequency: 'monthly' as const,
    }));

    // 5. Use Cases Details
    const useCases = ['developers', 'solopreneurs', 'teams'].map(slug => ({
        url: `${SITE_URL}/use-cases/${slug}`,
        priority: 0.6,
        changeFrequency: 'monthly' as const,
    }));

    // Combine all and add lastModified
    const allRoutes = [
        ...staticPages,
        ...guides,
        ...articles,
        ...tools,
        ...useCases
    ];

    return allRoutes.map(route => ({
        url: route.url,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
