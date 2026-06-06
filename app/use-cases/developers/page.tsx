import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Code, Terminal, GitBranch, Database, Shield, Cpu, Layers, Workflow, Server } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "MCP for Developers: Build AI Faster",
  description: "How developers use MCP to build AI-powered tools and automate workflows. Skip the boilerplate and ship features that matter.",
  path: "/use-cases/developers",
  type: "article"
});

export default function Page() {
  return (
    <StandardLayout
      title="MCP for Developers"
      description="Build AI-powered integrations faster. Skip the boilerplate. Ship features that matter."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">

        {/* HERO INTRO */}
        <p className="lead text-xl text-slate-600 mb-8">
          MCP gives you a standardized way to connect Claude to external tools and data sources. Instead of building custom integrations for every API, you work with a common protocol. Whether you're adding AI features to your product or automating your own dev workflow, MCP eliminates weeks of integration work.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 not-prose rounded-r-lg">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
              <Terminal size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">Accelerate Development</h3>
              <p className="text-blue-800 m-0">Developers report <strong>60-80% reduction</strong> in integration development time using MCP vs. custom API implementations.</p>
            </div>
          </div>
        </div>

        {/* 2. WHY DEVELOPERS CHOOSE MCP */}
        <h2 id="benefits">Why Developers Choose MCP</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Layers className="text-blue-600" size={20} />
              Standardized Protocol
            </h3>
            <p className="text-slate-600 text-sm">One pattern for connecting AI to any tool. Learn it once, apply it everywhere. No more reinventing authentication and data formatting for each integration.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Code className="text-blue-600" size={20} />
              Open Source
            </h3>
            <p className="text-slate-600 text-sm">MCP is an open protocol. Inspect the code, understand the architecture, contribute improvements. No black boxes.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Server className="text-blue-600" size={20} />
              Local-First Architecture
            </h3>
            <p className="text-slate-600 text-sm">MCP servers run on your machine. Your data flows directly from tools to Claude. No additional cloud services in the middle.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Workflow className="text-blue-600" size={20} />
              Composable Design
            </h3>
            <p className="text-slate-600 text-sm">Connect multiple MCP servers simultaneously. Claude can work across GitHub, your database, and your deployment tools in a single conversation.</p>
          </div>
        </div>

        {/* 3. WHAT YOU CAN BUILD */}
        <h2 id="use-cases">What You Can Build</h2>
        <div className="space-y-8">
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><GitBranch size={20} className="text-slate-500" /> For Your Own Workflow</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-2 text-sm text-slate-600">
                <CheckCircle className="text-green-500 shrink-0" size={16} />
                Connect Claude to your codebase for AI-assisted navigation
              </li>
              <li className="flex gap-2 text-sm text-slate-600">
                <CheckCircle className="text-green-500 shrink-0" size={16} />
                Automate issue triage and PR reviews
              </li>
              <li className="flex gap-2 text-sm text-slate-600">
                <CheckCircle className="text-green-500 shrink-0" size={16} />
                Generate documentation from code
              </li>
              <li className="flex gap-2 text-sm text-slate-600">
                <CheckCircle className="text-green-500 shrink-0" size={16} />
                Search across repos, Slack, and docs simultaneously
              </li>
            </ul>
          </div>

          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Cpu size={20} className="text-slate-500" /> For Your Products</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex gap-2 text-sm text-slate-600">
                <CheckCircle className="text-green-500 shrink-0" size={16} />
                Add AI capabilities that interact with user data
              </li>
              <li className="flex gap-2 text-sm text-slate-600">
                <CheckCircle className="text-green-500 shrink-0" size={16} />
                Build conversational interfaces to complex systems
              </li>
              <li className="flex gap-2 text-sm text-slate-600">
                <CheckCircle className="text-green-500 shrink-0" size={16} />
                Create AI assistants that can take actions, not just chat
              </li>
            </ul>
          </div>
        </div>

        {/* 4. TECHNICAL ARCHITECTURE */}
        <h2 id="architecture">Technical Architecture</h2>
        <div className="bg-slate-900 text-slate-100 p-8 rounded-xl not-prose my-8 overflow-x-auto">
          <pre className="font-mono text-sm leading-relaxed text-center">
            {`┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Claude    │────▶│ MCP Server  │────▶│  Your Tool  │
│  (Client)   │◀────│  (Local)    │◀────│   (API)     │
└─────────────┘     └─────────────┘     └─────────────┘
      ▲                    ▲                    ▲
      │                    │                    │
  User Prompt        JSON-RPC 2.0         Native API
  "Check DB"         over Stdio           Calls`}
          </pre>
        </div>
        <p className="text-slate-600 text-sm">
          MCP uses JSON-RPC 2.0 messages transport over standard input/output (stdio) for local connections, making it easy to implement in any language.
        </p>

        {/* 5. GETTING STARTED */}
        <h2 id="start">Start Building</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
          <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors group">
            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">Quick Start</h3>
            <p className="text-sm text-slate-600 mb-4">Set up your first MCP server in 5 minutes using our starter template.</p>
            <Link href="/articles/mcp-developer-quick-start" className="text-blue-600 font-bold text-sm hover:underline">View Guide →</Link>
          </div>
          <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors group">
            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">Example Workflows</h3>
            <p className="text-sm text-slate-600 mb-4">See real-world code for automating PR reviews, issue triage, and more.</p>
            <Link href="/articles/developer-productivity-workflows" className="text-blue-600 font-bold text-sm hover:underline">View Examples →</Link>
          </div>
          <div className="border border-slate-200 rounded-xl p-6 hover:border-blue-300 transition-colors group">
            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600">MCP vs API</h3>
            <p className="text-sm text-slate-600 mb-4">Understand the technical differences between MCP and traditional API integration.</p>
            <Link href="/articles/mcp-vs-traditional-apis" className="text-blue-600 font-bold text-sm hover:underline">Read Comparison →</Link>
          </div>
        </div>

        {/* 6. FAQ */}
        <h2 id="faq">Developer FAQ</h2>
        <div className="space-y-4">
          <details className="group border-b border-slate-200 pb-4">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
              What languages can I use?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600">Any language that can read from stdin and write to stdout. There are official SDKs for TypeScript and Python, making those the easiest starting points.</p>
          </details>
          <details className="group border-b border-slate-200 pb-4">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
              How is authentication handled?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600">Auth is handled by the MCP server instance running locally. You provide API keys via environment variables to the server, so Claude never sees your credentials directly.</p>
          </details>
          <details className="group border-b border-slate-200 pb-4">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
              Does this work with remote servers?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600">Yes, while local stdio is the default, MCP supports remote connections via SSE (Server-Sent Events) for deploying servers to cloud infrastructure.</p>
          </details>
        </div>

        {/* 7. CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Get the Developer Operations Kit. Includes boilerplate code, CI/CD templates, and a library of pre-built MCP servers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-here" className="inline-block bg-white text-slate-900 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
              Get the Dev Kit
            </Link>
            <Link href="/mastery" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
              Advanced Training →
            </Link>
          </div>
        </div>

      </div>
    </StandardLayout>
  );
}

function CheckCircle({ className, size }: { className?: string, size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  )
}
