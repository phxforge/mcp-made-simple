import { Metadata } from 'next';
import { siteConfig } from './siteConfig';

interface PageMetaProps {
    title: string;
    description: string;
    path: string; // e.g., "/articles/mcp-vs-zapier"
    type?: "website" | "article";
    publishedTime?: string; // for articles
    category?: string; // for articles
}

export function generatePageMetadata({
    title,
    description,
    path,
    type = "website",
    publishedTime,
    category
}: PageMetaProps): Metadata {
    const fullTitle = `${title} | ${siteConfig.siteName}`;
    const url = `${siteConfig.siteUrl}${path}`;

    return {
        title: fullTitle,
        description: description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description: description,
            url: url,
            siteName: siteConfig.siteName,
            type: type,
            images: [
                {
                    url: siteConfig.defaultOgImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            ...(type === 'article' && {
                publishedTime: publishedTime,
                section: category,
            }),
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: description,
            images: [siteConfig.defaultOgImage],
            creator: siteConfig.twitterHandle,
        },
    };
}
