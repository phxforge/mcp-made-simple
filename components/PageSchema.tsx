'use client';

import { usePathname } from 'next/navigation';
import { SchemaMarkup, breadcrumbSchema, articleSchema } from '@/lib/schema';

interface PageSchemaProps {
    title: string;
    description?: string;
    datePublished?: string;
    dateModified?: string;
}

// Helper to convert visual dates to ISO dates (e.g. "Feb 1, 2026" -> "2026-02-01")
function parseVisualDate(dateStr?: string): string | undefined {
    if (!dateStr) return undefined;
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return undefined;
    
    // Parse using local time components to match local-timezone date string parsing
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function PageSchema({
    title,
    description = '',
    datePublished,
    dateModified
}: PageSchemaProps) {
    const pathname = usePathname();

    // Only render schemas on detail pages under /guides/*, /articles/*, /tools/*, /use-cases/*, and /mastery
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length < 2 && pathname !== '/mastery') {
        return null;
    }

    const firstSegment = segments[0];
    if (!['guides', 'articles', 'tools', 'mastery', 'use-cases'].includes(firstSegment)) {
        return null;
    }

    // Build breadcrumbs dynamically from the path hierarchy
    // Home -> Section -> Page
    const crumbs = [{ name: 'Home', path: '/' }];
    
    let sectionName = '';
    if (firstSegment === 'guides') sectionName = 'Guides';
    else if (firstSegment === 'articles') sectionName = 'Articles';
    else if (firstSegment === 'tools') sectionName = 'Tools';
    else if (firstSegment === 'mastery') sectionName = 'Mastery';
    else if (firstSegment === 'use-cases') sectionName = 'Use Cases';

    if (firstSegment !== 'mastery') {
        crumbs.push({ name: sectionName, path: `/${firstSegment}` });
        crumbs.push({ name: title, path: pathname });
    } else {
        crumbs.push({ name: sectionName, path: pathname });
    }

    const breadcrumbData = breadcrumbSchema(crumbs);

    const parsedDatePublished = parseVisualDate(datePublished);
    const parsedDateModified = parseVisualDate(dateModified);

    const articleData = articleSchema({
        title,
        description,
        path: pathname,
        datePublished: parsedDatePublished,
        dateModified: parsedDateModified,
        image: "/og-image.png"
    });

    return <SchemaMarkup schema={[breadcrumbData, articleData]} />;
}
