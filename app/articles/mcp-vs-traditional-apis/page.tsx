import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Network, Server, Globe, Database, ArrowRight, Share2, Box, Code, Lock, RefreshCw, Layers } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP vs Traditional APIs | MCP Made Simple",
    description: "How MCP differs from REST APIs and webhooks. Technical comparison for integration architects.",
    path: "/articles/mcp-vs-traditional-apis",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="MCP vs Traditional APIs"
            description="How MCP differs from REST APIs and webhooks. Technical comparison for integration architects."
            category="Comparison"
            readTime="9 min"
            parentPillar={{ title: 'What is MCP?', slug: '/guides/what-is-mcp' }}
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                REST APIs, Webhooks, GraphQL. These are the integration patterns we have built the web on. MCP is something different—an open protocol specifically designed for AI-to-tool communication. This article explains how MCP differs architecturally from traditional patterns, and why those differences matter for building AI agents.
            </p>

            {/* 2. OVERVIEW */}
            <h2 id="patterns">Integration Patterns Overview</h2>
            <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-3"><Globe size={20} className="text-blue-500" /> REST APIs</h3>
                    <p className="text-sm text-slate-600 mb-2"><strong>Stateless & Request-Based</strong></p>
                    <p className="text-xs text-slate-500">The standard for web services. Client sends a request, server responds. Good for CRUD operations.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-3"><Share2 size={20} className="text-purple-500" /> Webhooks</h3>
                    <p className="text-sm text-slate-600 mb-2"><strong>Event-Driven Push</strong></p>
                    <p className="text-xs text-slate-500">Service calls you when something happens. Best for real-time updates and async workflows.</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-3"><Box size={20} className="text-green-500" /> MCP</h3>
                    <p className="text-sm text-slate-600 mb-2"><strong>Session-Based Context</strong></p>
                    <p className="text-xs text-slate-500">Persistent connection providing context and capabilities to an AI model.</p>
                </div>
            </div>
            <p className="mb-8">
                MCP isn't replacing these patterns. Instead, it creates a standard way for AI models to <em>consume</em> these underlying APIs without custom glue code.
            </p>

            {/* 3. ARCHITECTURE */}
            <h2 id="architecture">Architecture Comparison</h2>
            <p>The fundamental difference lies in the topology.</p>

            <div className="space-y-8 my-8">
                {/* Traditional */}
                <div className="border rounded-xl p-6">
                    <strong className="block text-slate-900 mb-4 text-lg">Traditional API Architecture</strong>
                    <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                        <pre>{`Your App (Client)
  ↓ HTTP Request
API Server (Cloud)
  ↓ Database Query
Database / Service`}</pre>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Communications happen over public internet (usually)</li>
                        <li>• Authentication via headers (Bearer tokens)</li>
                        <li>• Stateless (new connection per request)</li>
                    </ul>
                </div>

                {/* MCP */}
                <div className="border rounded-xl p-6 bg-blue-50/30 border-blue-100">
                    <strong className="block text-blue-900 mb-4 text-lg">MCP Architecture</strong>
                    <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                        <pre>{`Claude Desktop (Host)
  ↓ stdio / SSE
MCP Server (Local Process)
  ↓ Direct API Call
External Service (Gmail/Slack/etc)`}</pre>
                    </div>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>• Communications often local (stdio) or private network</li>
                        <li>• Persistent connection (session-based)</li>
                        <li>• <strong>AI-First:</strong> Exposes "Prompts", "Resources", and "Tools"</li>
                    </ul>
                </div>
            </div>

            {/* 4. KEY DIFFERENCES */}
            <h2 id="differences">Key Technical Differences</h2>

            <div className="space-y-6 my-8">
                <div className="flex gap-4 items-start">
                    <Layers className="text-blue-600 shrink-0 mt-1" size={24} />
                    <div>
                        <strong className="block text-slate-900 text-lg">1. Discovery vs. Documentation</strong>
                        <p className="text-sm text-slate-700 mt-1">
                            <strong>REST:</strong> You read Swagger/OpenAPI docs to learn endpoints. You code the integration manually.<br />
                            <strong>MCP:</strong> The protocol has built-in discovery. The client asks <code>tools/list</code> and the server replies with JSON schemas defining what it can do. The AI reads this schema dynamically.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <RefreshCw className="text-purple-600 shrink-0 mt-1" size={24} />
                    <div>
                        <strong className="block text-slate-900 text-lg">2. Context vs. Data</strong>
                        <p className="text-sm text-slate-700 mt-1">
                            <strong>REST:</strong> Returns raw data (JSON arrays). The client must know how to render or use it.<br />
                            <strong>MCP:</strong> Can return "Resources" (files, logs, docs) meant for <em>context window insertion</em>. It's designed to feed an LLM, not just a UI.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <Lock className="text-green-600 shrink-0 mt-1" size={24} />
                    <div>
                        <strong className="block text-slate-900 text-lg">3. Local Security Model</strong>
                        <p className="text-sm text-slate-700 mt-1">
                            <strong>REST:</strong> API keys travel over the wire. OAuth is handled by a redirect server.<br />
                            <strong>MCP:</strong> Credentials stay on the local machine. The MCP server process holds the tokens and makes the calls. The host application (Claude) never sees the raw API keys.
                        </p>
                    </div>
                </div>
            </div>

            {/* 5. WHEN TO USE WHICH */}
            <h2 id="decision">When to Use Which?</h2>
            <p className="mb-6">For an integration architect, the choice depends on component boundaries.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border p-5 rounded-lg">
                    <strong className="block text-slate-900 text-lg mb-3">Use Traditional APIs When:</strong>
                    <ul className="text-sm text-slate-600 space-y-2 list-disc pl-5">
                        <li>Building a web or mobile application UI.</li>
                        <li>High-volume programmatic data sync.</li>
                        <li>Service-to-service communication (microservices).</li>
                        <li>You need strict, static type safety.</li>
                    </ul>
                </div>
                <div className="border p-5 rounded-lg bg-blue-50/50 border-blue-100">
                    <strong className="block text-blue-900 text-lg mb-3">Use MCP When:</strong>
                    <ul className="text-sm text-blue-800 space-y-2 list-disc pl-5">
                        <li>Exposing capabilities to an LLM/AI Agent.</li>
                        <li>You want "plug-and-play" tool access for Claude.</li>
                        <li>Building local developer tools or CLI wrappers.</li>
                        <li>Providing dynamic context (logs, active file) to an AI.</li>
                    </ul>
                </div>
            </div>

            {/* 6. HYBRID ARCHITECTURE */}
            <h2 id="hybrid">The Hybrid Future</h2>
            <p>
                The most powerful patterns combine both. Imagine a customer support system:
            </p>
            <ul className="my-6 space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                    <span className="font-bold bg-slate-100 px-2 py-1 rounded">REST</span>
                    <span>Your dashboard fetches ticket data via standard REST API to show tables and charts to humans.</span>
                </li>
                <li className="flex gap-3">
                    <span className="font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">MCP</span>
                    <span>Your AI assistant uses an MCP server to read specific ticket details and draft replies using the same underlying API context.</span>
                </li>
            </ul>
            <p className="text-slate-600 italic border-l-4 border-slate-300 pl-4 py-2">
                "MCP creates the 'Agent Interface' for your API, while REST remains the 'Application Interface'."
            </p>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Start Architecting with MCP</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/articles/mcp-developer-quick-start" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Developer Quick Start <Code size={18} />
                    </Link>
                    <Link href="/articles/mcp-vs-custom-apis" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        MCP vs Custom APIs <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
