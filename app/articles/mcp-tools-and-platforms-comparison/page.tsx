import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { LayoutGrid, Server, Monitor, Database, Github, Box, Settings, Cpu, HardDrive, Terminal } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Tools & Platforms Comparison | MCP Made Simple",
    description: "Comparing MCP server options, clients, and platforms. What to use for different needs.",
    path: "/articles/mcp-tools-and-platforms-comparison",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="MCP Tools & Platforms Comparison"
            description="Comparing MCP server options, clients, and platforms. What to use for different needs."
            category="Setup"
            readTime="10 min"
            parentPillar={{ title: 'Setup Guide', slug: '/guides/setup' }}
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                MCP is a protocol, not a product. That means choices: which servers to use, which client, which tools to connect first. This comparison guide helps you navigate the MCP ecosystem—official servers vs. community options, client choices, and how to build your optimal stack.
            </p>

            {/* 2. ECOSYSTEM OVERVIEW */}
            <h2 id="ecosystem">The MCP Ecosystem Overview</h2>
            <p className="mb-6">Understanding the three layers of the MCP stack is critical for making the right choices.</p>

            <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm mb-8">
                <div className="flex flex-col items-center gap-6">
                    <div className="w-full border border-slate-700 p-4 rounded bg-slate-800 text-center">
                        <strong className="block text-blue-400 mb-1">Layer 1: The Client (The "Brain")</strong>
                        <span className="text-slate-500">Claude Desktop, Zed Editor, Custom Apps</span>
                    </div>
                    <div className="h-6 w-0.5 bg-slate-600"></div>
                    <div className="w-full border border-slate-700 p-4 rounded bg-slate-800 text-center">
                        <strong className="block text-green-400 mb-1">Layer 2: The MCP Host (The "Bridge")</strong>
                        <span className="text-slate-500">Node.js / Python Runtime (runs locally)</span>
                    </div>
                    <div className="h-6 w-0.5 bg-slate-600"></div>
                    <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="border border-slate-700 p-3 rounded bg-slate-800 text-center">
                            <strong className="block text-purple-400 mb-1">Files</strong>
                            <span className="text-xs text-slate-500">Local Filesystem</span>
                        </div>
                        <div className="border border-slate-700 p-3 rounded bg-slate-800 text-center">
                            <strong className="block text-purple-400 mb-1">APIs</strong>
                            <span className="text-xs text-slate-500">Slack, Gmail</span>
                        </div>
                        <div className="border border-slate-700 p-3 rounded bg-slate-800 text-center">
                            <strong className="block text-purple-400 mb-1">DBs</strong>
                            <span className="text-xs text-slate-500">Postgres, SQLite</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CLIENT OPTIONS */}
            <h2 id="clients">Choosing Your Client</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="border p-6 rounded-xl bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-amber-100 p-2 rounded text-amber-700"><Monitor size={24} /></div>
                        <h3 className="font-bold text-lg text-slate-900">Claude Desktop (Official)</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 mb-4">
                        <li><strong className="text-green-600">✓ Best For:</strong> 95% of users. The standard experience.</li>
                        <li><strong className="text-green-600">✓ Pros:</strong> Native support, easiest setup, visual feedback.</li>
                        <li><strong className="text-red-500">✕ Cons:</strong> Only works with Claude models.</li>
                    </ul>
                </div>

                <div className="border p-6 rounded-xl bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-2 rounded text-blue-700"><Terminal size={24} /></div>
                        <h3 className="font-bold text-lg text-slate-900">Zed Editor (Developer)</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-slate-600 mb-4">
                        <li><strong className="text-green-600">✓ Best For:</strong> Software engineers coding daily.</li>
                        <li><strong className="text-green-600">✓ Pros:</strong> Integrated into IDE, fast context switching.</li>
                        <li><strong className="text-red-500">✕ Cons:</strong> High learning curve, developer-focused UI.</li>
                    </ul>
                </div>
            </div>

            {/* 4. SERVER COMPARISON */}
            <h2 id="servers">Server Landscape: Official vs. Community</h2>
            <p className="mb-6">The biggest choice is often between the "Official" servers and community-built alternatives.</p>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-100 border-b border-slate-200">
                            <th className="p-4 font-bold text-slate-700">Feature</th>
                            <th className="p-4 font-bold text-blue-700">Official Servers (@modelcontextprotocol)</th>
                            <th className="p-4 font-bold text-purple-700">Community Servers</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr>
                            <td className="p-4 font-medium text-slate-900">Stability</td>
                            <td className="p-4 text-slate-600">High. Maintained by Anthropic.</td>
                            <td className="p-4 text-slate-600">Variable. Check GitHub stars/activity.</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-slate-900">Setup</td>
                            <td className="p-4 text-slate-600">Standardized via `uvx` or `npx`.</td>
                            <td className="p-4 text-slate-600">Often requires manual Docker/pip steps.</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-slate-900">Capabilities</td>
                            <td className="p-4 text-slate-600">Focused set (Files, Google, Slack).</td>
                            <td className="p-4 text-slate-600">Vast range (Spotify, arXiv, Home Assistant).</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-medium text-slate-900">Security</td>
                            <td className="p-4 text-slate-600">Audited reference implementations.</td>
                            <td className="p-4 text-slate-600">Use at your own risk. Audit code.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* 5. TOP TOOL CATEGORIES */}
            <h2 id="categories">Top Tool Categories & Recommendations</h2>
            <div className="space-y-6 my-8">

                {/* Filesystem */}
                <div className="flex gap-4 items-start border-b pb-6">
                    <HardDrive className="text-slate-400 shrink-0 mt-1" size={24} />
                    <div>
                        <strong className="block text-slate-900 text-lg">1. Local Filesystem</strong>
                        <p className="text-sm text-slate-600 mb-2">Connects Claude to your folders.</p>
                        <div className="bg-slate-50 p-2 rounded text-xs font-mono text-slate-700 inline-block">npx -y @modelcontextprotocol/server-filesystem</div>
                        <p className="text-xs text-slate-500 mt-1"><strong>Verdict:</strong> Essential first install. Zero config.</p>
                    </div>
                </div>

                {/* Google Drive */}
                <div className="flex gap-4 items-start border-b pb-6">
                    <LayoutGrid className="text-blue-500 shrink-0 mt-1" size={24} />
                    <div>
                        <strong className="block text-slate-900 text-lg">2. Google Workspace</strong>
                        <p className="text-sm text-slate-600 mb-2">Access Gmail, Docs, Calendar.</p>
                        <div className="bg-slate-50 p-2 rounded text-xs font-mono text-slate-700 inline-block">npx -y @modelcontextprotocol/server-gdrive</div>
                        <p className="text-xs text-slate-500 mt-1"><strong>Verdict:</strong> Powerful but requires OAuth client ID setup. Worth the effort.</p>
                    </div>
                </div>

                {/* Developer Tools */}
                <div className="flex gap-4 items-start pb-6">
                    <Github className="text-slate-800 shrink-0 mt-1" size={24} />
                    <div>
                        <strong className="block text-slate-900 text-lg">3. Developer Tools (GitHub/Postgres)</strong>
                        <p className="text-sm text-slate-600 mb-2">Search capabilities of GitHub repo, inspect DB schemas.</p>
                        <div className="bg-slate-50 p-2 rounded text-xs font-mono text-slate-700 inline-block">npx -y @modelcontextprotocol/server-github</div>
                        <p className="text-xs text-slate-500 mt-1"><strong>Verdict:</strong> Critical for engineering workflows.</p>
                    </div>
                </div>
            </div>

            {/* 6. WHEN TO BUILD CUSTOM */}
            <h2 id="custom">When to Build Custom?</h2>
            <p className="mb-6">Sometimes the tool you need doesn't exist yet.</p>

            <div className="grid md:grid-cols-2 gap-4">
                <Link href="/articles/mcp-developer-quick-start" className="block p-5 border rounded-lg hover:border-blue-400 transition-colors group">
                    <strong className="block text-slate-900 mb-2 group-hover:text-blue-600">Internal APIs</strong>
                    <p className="text-sm text-slate-600">Connecting proprietary business data that will never have a public server.</p>
                </Link>
                <div className="block p-5 border rounded-lg">
                    <strong className="block text-slate-900 mb-2">Sensitive Data</strong>
                    <p className="text-sm text-slate-600">When you need strict control over exactly what data is exposed and how.</p>
                </div>
            </div>

            {/* 7. SUMMARY VERDICT */}
            <h2 id="summary">Summary: The Recommended Stack</h2>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-6">
                <h3 className="font-bold text-blue-900 mb-4">For Most Users (The "Productivity Stack")</h3>
                <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex gap-2">🔹 <strong>Client:</strong> Claude Desktop</li>
                    <li className="flex gap-2">🔹 <strong>Core Server:</strong> Filesystem (mapped to Documents)</li>
                    <li className="flex gap-2">🔹 <strong>Cloud Server:</strong> Google Drive (for email/docs)</li>
                    <li className="flex gap-2">🔹 <strong>Utility:</strong> Fetch (for browsing web content)</li>
                </ul>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Build Your Stack</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Get Configuration Files <Server size={18} />
                    </Link>
                    <Link href="/guides/setup" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        See Setup Guides <Settings size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
