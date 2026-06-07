import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Database, Lock, Eye, Server, RefreshCw, FileText, Globe, Key } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-02T01:50:32Z",
title: "MCP Data Privacy Explained | MCP Made Simple",
    description: "How MCP handles your data. Clear explanation of data flows, storage, and privacy protections.",
    path: "/articles/mcp-data-privacy-explained",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout updatedAt="2026-02-02T01:50:32Z"
            title="MCP Data Privacy Explained"
            description="How MCP handles your data. Clear explanation of data flows, storage, and privacy protections."
            category="Security"
            readTime="9 min"
            parentPillar={{ title: 'Is MCP Safe?', slug: '/guides/is-mcp-safe' }}
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                When you connect Claude to your email and files, where does that data actually go? Who can see it? How long is it kept? This article explains exactly how MCP handles your data—no vague reassurances, just clear answers about data flows, storage, and privacy.
            </p>

            {/* 2. DATA FLOW */}
            <h2 id="flow">The Data Flow: Step by Step</h2>
            <p>
                To understand privacy, you must follow the data. Let's trace what happens when you ask Claude to "Summarize my unread emails".
            </p>

            <div className="space-y-6 my-8">
                <div className="relative border-l-2 border-slate-200 pl-8 pb-8 last:pb-0">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white ring-2 ring-slate-100"></span>
                    <strong className="block text-slate-900 mb-1">Step 1: Your Request</strong>
                    <p className="text-sm text-slate-600">You type a prompt in Claude Desktop. This prompt is sent to Claude's API.</p>
                </div>
                <div className="relative border-l-2 border-slate-200 pl-8 pb-8 last:pb-0">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white ring-2 ring-slate-100"></span>
                    <strong className="block text-slate-900 mb-1">Step 2: Tool Invocation</strong>
                    <p className="text-sm text-slate-600">Claude determines it needs to access Gmail and sends a request <strong>back to your computer</strong> (the local MCP server).</p>
                </div>
                <div className="relative border-l-2 border-slate-200 pl-8 pb-8 last:pb-0">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-2 border-white ring-2 ring-slate-100"></span>
                    <strong className="block text-slate-900 mb-1">Step 3: Local Access</strong>
                    <p className="text-sm text-slate-600">The MCP server running on <strong>your machine</strong> uses <strong>your local credentials</strong> to access Gmail and retrieve the emails.</p>
                </div>
                <div className="relative border-l-2 border-slate-200 pl-8 pb-8 last:pb-0">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-2 border-white ring-2 ring-slate-100"></span>
                    <strong className="block text-slate-900 mb-1">Step 4: Processing</strong>
                    <p className="text-sm text-slate-600">The email content is sent to Anthropic's API for processing. Claude generates the summary.</p>
                </div>
                <div className="relative border-l-2 border-slate-200 pl-8">
                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white ring-2 ring-slate-100"></span>
                    <strong className="block text-slate-900 mb-1">Step 5: Response</strong>
                    <p className="text-sm text-slate-600">The summary is displayed in your Claude Desktop.</p>
                </div>
            </div>

            <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto my-6">
                <pre>{`
Your Tools (Gmail, Drive)
  ↓ [Your credentials]
MCP Server (Your computer)
  ↓ [Data for processing]
Claude API (Anthropic)
  ↓ [Response]
Claude Desktop (Your computer)
        `}</pre>
            </div>
            <p className="text-sm bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-100">
                <strong>Key Insight:</strong> Your data touches three places: your tools, your computer, and Anthropic's API. There is no "MCP Cloud" storing your data in the middle.
            </p>

            {/* 3. STORAGE */}
            <h2 id="storage">Where is Data Stored?</h2>
            <p>It's important to distinguish between <strong>processing</strong> and <strong>storage</strong>.</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-slate-200 p-5 rounded-lg">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-2"><Database size={20} className="text-slate-400" /> On Your Computer</h3>
                    <p className="text-sm text-slate-600 mb-2"><strong>Permanent Storage.</strong></p>
                    <p className="text-sm text-slate-600">Your configuration files, API tokens, and local logs live here. The MCP servers themselves run here. This is why you must secure your device.</p>
                </div>
                <div className="border border-slate-200 p-5 rounded-lg">
                    <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-2"><Globe size={20} className="text-slate-400" /> On Anthropic's Servers</h3>
                    <p className="text-sm text-slate-600 mb-2"><strong>Temporary Processing & History.</strong></p>
                    <p className="text-sm text-slate-600">The conversation history (including data fetched from tools) is stored to sync across your devices, unless configured otherwise.</p>
                </div>
            </div>

            {/* 4. RETENTION */}
            <h2 id="retention">Data Retention Policies</h2>
            <p>How long does Anthropic keep the data sent via MCP?</p>
            <div className="space-y-4 my-6">
                <div className="flex gap-4 items-start">
                    <RefreshCw className="text-blue-600 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">30-Day Retention (Default)</strong>
                        <p className="text-sm text-slate-600">By default, Anthropic retains API inputs/outputs for 30 days to identify abuse, after which they are deleted.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <Shield className="text-green-600 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">Zero Retention (Enterprise)</strong>
                        <p className="text-sm text-slate-600">Enterprise customers can qualify for zero-retention policies where data is not stored after processing.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <Lock className="text-indigo-600 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">No Training on Data</strong>
                        <p className="text-sm text-slate-600">For Claude Pro and API users, Anthropic <strong>does not</strong> use your data to train their generative models.</p>
                    </div>
                </div>
            </div>

            {/* 5. ENCRYPTION */}
            <h2 id="encryption">Encryption & Security</h2>
            <p>How is data protected while moving?</p>
            <ul className="list-disc pl-5 my-4 text-slate-600 space-y-2">
                <li><strong>In Transit:</strong> All communication between your computer and Anthropic's API is encrypted via TLS 1.2+.</li>
                <li><strong>At Rest:</strong> Data stored on Anthropic's servers is encrypted at rest (AES-256).</li>
                <li><strong>Local Communication:</strong> The connection between Claude Desktop and local MCP servers happens over <code className="text-sm bg-slate-100 px-1 rounded">stdio</code> (standard input/output) pipes on your machine, not over the network. This means local traffic is isolated within your device.</li>
            </ul>

            {/* 6. THIRD PARTY RISK */}
            <h2 id="third-party">The Third-Party Variable</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl my-6">
                <h3 className="flex items-center gap-2 font-bold text-yellow-900 mb-2"><Eye size={20} /> Important Warning</h3>
                <p className="text-slate-800 text-sm mb-4">
                    MCP is an open protocol. Anyone can build an MCP server.
                </p>
                <p className="text-slate-800 text-sm">
                    If you install a <strong>Community</strong> or <strong>Third-Party</strong> MCP server, you are running their code on your machine. That code <em>could</em> theoretically have vulnerabilities or malicious logic (like sending your data to a different server).
                </p>
                <div className="mt-4 font-bold text-sm text-yellow-900">
                    Best Practice: Only install MCP servers from trusted sources (like official Anthropic repos or verified vendors). Audit the code if you are unsure.
                </div>
            </div>

            {/* 7. USER CONTROLS */}
            <h2 id="controls">Your Controls</h2>
            <p>You are not powerless. You have specific controls over your privacy:</p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="border p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">1. Connection Choice</strong>
                    <p className="text-xs text-slate-600">You choose exactly which tools to connect. Don't want Claude reading email? Don't connect Gmail.</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">2. Invocation Approval</strong>
                    <p className="text-xs text-slate-600">Claude cannot access data in the background. It only acts when you prompt it.</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">3. Deletion</strong>
                    <p className="text-xs text-slate-600">You can delete conversation history from Claude, which removes the associated context data.</p>
                </div>
                <div className="border p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">4. Local Config</strong>
                    <p className="text-xs text-slate-600">You can uninstall an MCP server at any time by editing your config file.</p>
                </div>
            </div>

            {/* 8. SUMMARY */}
            <h2 id="summary">The Bottom Line</h2>
            <p>
                MCP does not create a "magic cloud" that sucks up all your data. It creates a bridge between your local tools and the Claude API.
            </p>
            <p>
                <strong>Your data is safe if:</strong>
            </p>
            <ul className="list-disc pl-5 mb-6 text-slate-600 space-y-1">
                <li>You trust Anthropic (Claude).</li>
                <li>You trust the specific MCP servers you installed.</li>
                <li>You secure your own computer.</li>
            </ul>
            <p>
                If you are comfortable using Claude via the web interface, using it via MCP implies very similar privacy characteristics—just with more capabilities.
            </p>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Privacy Questions Answered?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/articles/is-mcp-secure-for-business" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Business Security Guide <Shield size={18} />
                    </Link>
                    <Link href="/articles/who-should-trust-mcp" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        Take Privacy Quiz <FileText size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
