// lib/schema.tsx — JSON-LD structured data for MCP Made Simple
// ---------------------------------------------------------------------------
// CANONICAL HOST IS WWW. Every url / @id uses https://www.mcpmadesimple.com
// to match your canonical tags (do NOT use the bare domain — that would
// reintroduce the host mismatch you fixed in Part 4).
// ---------------------------------------------------------------------------

import React from "react";

export const SITE_URL = "https://www.mcpmadesimple.com";

// Stable @id anchors so nodes can reference each other across the page graph.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const PERSON_ID = `${SITE_URL}/about#jason`;

// ---- Renderer: drop one or many JSON-LD nodes into a page --------------------
export function SchemaMarkup({ schema }: { schema: object | object[] }) {
  const nodes = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {nodes.map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Escape "<" so a stray "</script>" in any string can't break out.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(node).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

// =============================================================================
// SITE-WIDE NODES — mount once in app/layout.tsx. Independent of your content,
// so safe to ship now.
// =============================================================================

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "MCP Made Simple",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`, // TODO: confirm this path actually resolves
      width: 200, // TODO: set real logo dimensions
      height: 60,
    },
    // TODO: uncomment only when a real support inbox exists
    // contactPoint: {
    //   "@type": "ContactPoint",
    //   email: "hello@mcpmadesimple.com",
    //   contactType: "customer support",
    // },
    // TODO: add ONLY verified profile URLs (your footer socials currently point to "/")
    // sameAs: ["https://www.linkedin.com/in/...", "https://x.com/..."],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "MCP Made Simple",
    url: SITE_URL,
    publisher: { "@id": ORG_ID },
    // NOTE: SearchAction intentionally omitted. Google retired the Sitelinks
    // Search Box on 2024-11-21, so it no longer renders. Only add a
    // SearchAction if you actually ship a working /search route.
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Jason Laveglia",
    url: `${SITE_URL}/about`,
    jobTitle: "Founder, MCP Made Simple",
    worksFor: { "@id": ORG_ID },
    knowsAbout: [
      "Model Context Protocol",
      "AI automation",
      "Agentic workflows",
      "Context engineering",
    ],
    // TODO: add ONLY verified profile URLs
    // sameAs: ["https://www.linkedin.com/in/...", "https://x.com/..."],
  };
}

// =============================================================================
// PER-PAGE NODES
// =============================================================================

// Breadcrumbs — pass route paths, not full URLs. Mount on inner pages.
// e.g. breadcrumbSchema([
//   { name: "Home", path: "/" },
//   { name: "Guides", path: "/guides" },
//   { name: "What is MCP?", path: "/guides/what-is-mcp" },
// ])
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

// Article — WIRE AFTER content cleanup. Reads real frontmatter; never hardcode
// dates or titles. Covers /guides/* and /articles/* (use it for /tools/* too
// instead of SoftwareApplication).
export function articleSchema(a: {
  title: string;
  description: string;
  path: string;
  datePublished?: string; // omit if unknown — do NOT fabricate
  dateModified?: string;
  image?: string;
}) {
  const url = `${SITE_URL}${a.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    ...(a.datePublished ? { datePublished: a.datePublished } : {}),
    ...(a.dateModified ? { dateModified: a.dateModified } : {}),
    ...(a.image
      ? { image: a.image.startsWith("http") ? a.image : `${SITE_URL}${a.image}` }
      : {}),
  };
}

// =============================================================================
// WIRING
// =============================================================================
// 1) app/layout.tsx (inside <body>):
//      import { SchemaMarkup, organizationSchema, websiteSchema, personSchema } from "@/lib/schema";
//      <SchemaMarkup schema={[organizationSchema(), websiteSchema(), personSchema()]} />
//
// 2) Inner page (e.g. a guide), once content is clean:
//      <SchemaMarkup schema={[
//        breadcrumbSchema([
//          { name: "Home", path: "/" },
//          { name: "Guides", path: "/guides" },
//          { name: guide.title, path: `/guides/${slug}` },
//        ]),
//        articleSchema({
//          title: guide.title,
//          description: guide.description,
//          path: `/guides/${slug}`,
//          datePublished: guide.publishedAt,
//          dateModified: guide.updatedAt,
//          image: guide.ogImage,
//        }),
//      ]} />
//
// 3) Validate each deployed page at https://search.google.com/test/rich-results
