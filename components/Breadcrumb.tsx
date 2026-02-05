'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const SLUG_MAPPING: Record<string, string> = {
    // SECTIONS
    'guides': "Guides",
    'tools': "Tools",
    'use-cases': "Use Cases",
    'articles': "Articles",
    'resources': "Resources",

    // GUIDES
    'what-is-mcp': "What is MCP?",
    'is-mcp-safe': "Is MCP Safe?",
    'setup': "Setup Guide",
    'workflows': "Workflow Examples",

    // TOOLS
    'google-drive': "Google Drive",
    'google-calendar': "Google Calendar",
    'slack': "Slack",
    'notion': "Notion",
    'gmail': "Gmail",
    'dropbox': "Dropbox",
    'trello': "Trello",
    'asana': "Asana",
    'github': "GitHub",

    // USE CASES
    'solopreneurs': "Solopreneurs",
    'teams': "Teams",
    'developers': "Developers",

    // ARTICLES
    'mcp-explained-for-beginners': "MCP Explained for Beginners",
    'why-mcp-matters-in-2026': "Why MCP Matters in 2026",
    'how-mcp-changes-ai-agents': "How MCP Changes AI Agents",
    'what-problem-does-mcp-solve': "What Problem Does MCP Solve?",
    'mcp-vs-traditional-apis': "MCP vs Traditional APIs",
    'is-mcp-the-future-of-ai': "Is MCP the Future of AI?",
    'mcp-for-non-technical-people': "MCP for Non-Technical People",
    'is-mcp-secure-for-business': "Is MCP Secure for Business?",
    'mcpmadesimple-reviews-and-testimonials': "MCPMadeSimple Reviews",
    'who-should-trust-mcp': "Who Should Trust MCP?",
    'mcp-data-privacy-explained': "MCP Data Privacy Explained",
    'common-mcp-security-concerns': "Common MCP Security Concerns",
    'mcp-setup-for-solopreneurs': "MCP Setup for Solopreneurs",
    'mcp-implementation-for-operations-teams': "MCP for Operations Teams",
    'mcp-developer-quick-start': "MCP Developer Quick Start",
    'mcp-production-deployment-guide': "MCP Production Deployment",
    'connecting-ai-without-coding': "Connecting AI Without Coding",
    'mcp-setup-troubleshooting': "MCP Setup Troubleshooting",
    'first-week-with-mcp': "First Week with MCP",
    'mcp-tools-and-platforms-comparison': "MCP Tools Comparison",
    'automate-notion-gmail-slack': "Automate Notion, Gmail & Slack",
    '20-hours-saved-per-week': "20 Hours Saved Per Week",
    'email-automation-workflows': "Email Automation Workflows",
    'meeting-scheduling-automation': "Meeting Scheduling Automation",
    'document-workflow-automation': "Document Workflow Automation",
    'operations-team-workflows': "Operations Team Workflows",
    'developer-productivity-workflows': "Developer Productivity Workflows",
    '10-workflows-every-business-needs': "10 Workflows Every Business Needs",
    'reduce-manual-work-with-ai': "Reduce Manual Work with AI",
    'mcp-vs-zapier': "MCP vs Zapier",
    'mcp-vs-make': "MCP vs Make",
    'mcp-vs-custom-apis': "MCP vs Custom APIs",
    'mcp-roi-for-business': "MCP ROI for Business",
    'why-mcp-solves-integration-chaos': "Why MCP Solves Integration Chaos",
    'is-mcp-becoming-the-standard': "Is MCP Becoming the Standard?"
};

export function Breadcrumb() {
    const pathname = usePathname();

    // Split path into segments, remove empty strings
    const segments = pathname.split('/').filter(Boolean);

    // Generate Breadcrumb Items
    const breadcrumbItems = segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join('/')}`;
        // Use mapping if available, otherwise title case the segment
        const name = SLUG_MAPPING[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

        return {
            name,
            href,
            isLast: index === segments.length - 1
        };
    });

    // Add Home
    const allItems = [
        { name: 'Home', href: '/', isLast: segments.length === 0 },
        ...breadcrumbItems
    ];

    // Generate JSON-LD Schema
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://mcpmadesimple.com${item.href}` // Assuming domain
        }))
    };

    if (segments.length === 0) return null; // Don't show on homepage if desired (or show just Home)

    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <ol className="flex items-center flex-wrap gap-2 text-sm text-slate-500">
                {allItems.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight size={14} className="mx-2 text-slate-400" />
                        )}

                        {item.isLast ? (
                            <span className="font-medium text-slate-900" aria-current="page">
                                {item.name}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
