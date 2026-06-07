import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Server, Terminal, Code2, Database, Network, Cpu, Settings, ExternalLink } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    publishedTime: "2026-02-05T07:24:32-07:00",
    modifiedTime: "2026-06-05T14:38:48-07:00",
title: "MCP Developer Quick Start Guide | MCP Made Simple",
    description: "Technical guide to the Model Context Protocol. Architecture, APIs, and how to build your first custom server.",
    path: "/articles/mcp-developer-quick-start",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout publishedAt="2026-02-05T07:24:32-07:00" updatedAt="2026-06-05T14:38:48-07:00"
            title="MCP Developer Quick Start Guide"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                You're a developer. You don't need the hand-holding. You need architecture, APIs, and code examples. This is the technical quick start: how MCP works under the hood, how to use existing servers, and how to build your own.
            </p>

            {/* 2. ARCHITECTURE */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose font-mono text-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 font-sans"><Network className="text-blue-600" /> Architecture Overview</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
                    <div className="border-2 border-slate-300 rounded p-4 bg-white shadow-sm w-full md:w-auto">
                        <strong className="block text-slate-900">MCP Client</strong>
                        <span className="text-xs text-slate-500">(e.g., Claude Desktop, IDE)</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-xs text-slate-400">JSON-RPC 2.0</span>
                        <ArrowRight size={20} className="text-slate-400 rotate-90 md:rotate-0" />
                        <span className="text-xs text-slate-400">Stdio / SSE</span>
                    </div>
                    <div className="border-2 border-blue-500 rounded p-4 bg-blue-50 shadow-sm w-full md:w-auto">
                        <strong className="block text-blue-900">MCP Server</strong>
                        <span className="text-xs text-blue-600">(Your Process)</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="text-xs text-slate-400">API Calls</span>
                        <ArrowRight size={20} className="text-slate-400 rotate-90 md:rotate-0" />
                        <span className="text-xs text-slate-400">HTTP/SQL</span>
                    </div>
                    <div className="border-2 border-slate-300 border-dashed rounded p-4 bg-slate-50 w-full md:w-auto">
                        <strong className="block text-slate-700">Experience</strong>
                        <span className="text-xs text-slate-500">(Database, SaaS, API)</span>
                    </div>
                </div>
                <p className="mt-4 text-slate-600 font-sans">
                    The protocol defines a standard way for the Client and Server to handshake, negotiate capabilities, and exchange messages. The mostly widely used transport today is <code>stdio</code> (standard input/output), meaning the Client spawns the Server as a subprocess.
                </p>
            </div>

            {/* 3. CORE PRIMITIVES */}
            <h2 id="primitives">The 3 Primitives</h2>
            <p>
                MCP exposes three main capabilities to the LLM.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-6">
                <div className="border border-slate-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 font-bold mb-2 text-slate-900"><Database size={18} className="text-blue-500" /> Resources</div>
                    <p className="text-sm text-slate-600 mb-2"><strong>"Read-only Data"</strong></p>
                    <p className="text-xs text-slate-500">File contents, database rows, API responses. The server provides a URI scheme (e.g. <code>postgres://</code>) and the client reads it.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 font-bold mb-2 text-slate-900"><Code2 size={18} className="text-green-500" /> Tools</div>
                    <p className="text-sm text-slate-600 mb-2"><strong>"Executable Functions"</strong></p>
                    <p className="text-xs text-slate-500">Functions the LLM can call. They take JSON arguments and return text/image results. (e.g. <code>execute_sql_query</code>).</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-lg">
                    <div className="flex items-center gap-2 font-bold mb-2 text-slate-900"><Terminal size={18} className="text-purple-500" /> Prompts</div>
                    <p className="text-sm text-slate-600 mb-2"><strong>"Reusable Context"</strong></p>
                    <p className="text-xs text-slate-500">Pre-written prompt templates that help users use your server effectively (e.g. "Analyze Database Schema").</p>
                </div>
            </div>

            {/* 4. CONFIGURATION */}
            <h2 id="config">Configuration</h2>
            <p>
                Clients (like Claude Desktop) need to know how to start your server. This is done via <code>claude_desktop_config.json</code>.
            </p>
            <div className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto my-4">
                {`{
  "mcpServers": {
    "my-custom-server": {
      "command": "node",
      "args": ["/absolute/path/to/build/index.js"],
      "env": {
        "API_KEY": "secret_key"
      }
    }
  }
}`}
            </div>

            {/* 5. BUILDING YOUR FIRST SERVER */}
            <h2 id="build">Building a Hello World Server</h2>
            <p>
                The easiest way to start is using the TypeScript SDK.
            </p>
            <div className="bg-slate-100 p-4 rounded-lg border border-slate-200 my-4">
                <p className="font-mono text-xs text-slate-500 mb-2"># 1. Scaffold a project</p>
                <code className="block bg-white p-2 rounded border border-slate-200 text-sm mb-4">
                    npm create @modelcontextprotocol/server@latest
                </code>

                <p className="font-mono text-xs text-slate-500 mb-2"># 2. Define a Tool (index.ts)</p>
                <div className="bg-slate-900 text-slate-50 p-3 rounded text-xs font-mono overflow-x-auto">
                    {`server.tool(
    "calculate_sum", 
    { a: z.number(), b: z.number() },
    async ({ a, b }) => {
        return {
            content: [{ type: "text", text: String(a + b) }]
        };
    }
);`}
                </div>
            </div>
            <p>
                When you run this server and connect it to Claude, the model will see a tool named <code>calculate_sum</code> and know how to use it structurally.
            </p>

            {/* 6. DEBUGGING */}
            <h2 id="debugging">Debugging & Inspector</h2>
            <p>
                Because MCP runs over stdio, you can't just <code>console.log</code> to debug (it will break the JSON protocol).
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm my-4">
                <li><strong>Use Stderr:</strong> <code>console.error()</code> logs will show up in the Claude logs without breaking the protocol.</li>
                <li><strong>MCP Inspector:</strong> Use the official inspector to test your server in the browser without Claude.</li>
            </ul>
            <div className="bg-slate-100 p-2 rounded border border-slate-200 font-mono text-sm inline-block">
                npx @modelcontextprotocol/inspector node build/index.js
            </div>

            {/* 7. NEXT STEPS */}
            <h2 id="resources">Resources</h2>
            <p>
                Ready to go deeper?
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <a href="https://modelcontextprotocol.io/docs" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
                    <div className="bg-slate-100 p-2 rounded group-hover:bg-white text-slate-600"><Settings size={20} /></div>
                    <div>
                        <strong className="block text-slate-900 flex items-center gap-1">Official Docs <ExternalLink size={12} /></strong>
                        <span className="text-xs text-slate-500">Full API reference</span>
                    </div>
                </a>
                <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors group">
                    <div className="bg-slate-100 p-2 rounded group-hover:bg-white text-slate-600"><Code2 size={20} /></div>
                    <div>
                        <strong className="block text-slate-900 flex items-center gap-1">Example Servers <ExternalLink size={12} /></strong>
                        <span className="text-xs text-slate-500">Open source reference implementations</span>
                    </div>
                </a>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Build the Future of Context</h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    We are just scratching the surface of what's possible. Join the community and build the next great integration.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        View GitHub Repo <Code2 size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
