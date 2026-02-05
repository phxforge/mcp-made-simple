import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertTriangle, Terminal, Settings, RefreshCw, FileCode, HelpCircle, AlertOctagon } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Setup Troubleshooting Guide | MCP Made Simple",
    description: "Fix common MCP setup issues: connection errors, config problems, and tool access not working.",
    path: "/articles/mcp-setup-troubleshooting",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="MCP Setup Troubleshooting Guide"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Something's not working. Don't panic—most MCP issues have simple fixes. This guide covers the most common problems and their solutions. Find your issue, follow the fix, and get back to work.
            </p>

            {/* 2. QUICK DIAGNOSTIC */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><CheckCircle size={20} className="text-green-600" /> The Quick Diagnostic</h2>
                <p className="text-sm text-slate-600 mb-4">Before diving into complex fixes, check these 4 basics. 90% of issues are here.</p>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-slate-100">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-sm text-slate-800">Is <strong>Claude Desktop</strong> running? (The website claude.ai doesn't support MCP yet)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-slate-100">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-sm text-slate-800">Did you <strong>restart Claude</strong> after editing the config file? (Required for changes to apply)</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-slate-100">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-sm text-slate-800">Is your config file in the <strong>right folder</strong>?</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white p-3 rounded border border-slate-100">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-sm text-slate-800">Is the config file valid <strong>JSON</strong>? (No missing commas or brackets)</span>
                    </div>
                </div>
            </div>

            {/* 3. ISSUE: TOOLS NOT SHOWING */}
            <h2 id="tools-missing" className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="text-orange-500" /> Issue: Claude Doesn't Show My Tools
            </h2>
            <p className="mb-4">
                <strong>Symptoms:</strong> You added code to the config file, but when you open Claude, there's no "plug" icon, or it doesn't know about your tools.
            </p>

            <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-slate-900">Fix 1: Restart Claude Desktop Completely</h3>
                    <p className="text-sm text-slate-600">Minimizing isn't enough. You must fully quit the application.</p>
                    <ul className="text-sm text-slate-600 mt-2 list-disc pl-5">
                        <li><strong>Mac:</strong> Click Claude in the menu bar → Quit Claude (Cmd+Q)</li>
                        <li><strong>Windows:</strong> Right-click the Claude icon in the system tray (bottom right) → Quit</li>
                    </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-slate-900">Fix 2: Verify Config File Location</h3>
                    <p className="text-sm text-slate-600">Ensure the file is named exactly <code>claude_desktop_config.json</code> and is in:</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-2">
                        <div className="bg-slate-100 p-3 rounded text-xs font-mono">
                            <strong className="block text-slate-500 mb-1">MacOS</strong>
                            ~/Library/Application Support/Claude/
                        </div>
                        <div className="bg-slate-100 p-3 rounded text-xs font-mono">
                            <strong className="block text-slate-500 mb-1">Windows</strong>
                            %APPDATA%\Claude\
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 italic">Pro Tip: Run <code>code %APPDATA%\Claude</code> in terminal to open it quickly.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-slate-900">Fix 3: JSON Syntax Errors</h3>
                    <p className="text-sm text-slate-600">A single missing comma will break the entire file. Copy-paste your config into a validator like <a href="https://jsonlint.com" target="_blank" className="text-blue-600 underline">jsonlint.com</a> to check it.</p>
                </div>
            </div>

            {/* 4. ISSUE: CONNECTION FAILED */}
            <h2 id="connection-error" className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <AlertOctagon className="text-red-500" /> Issue: "Connection Refused" / Red Error Icon
            </h2>
            <p className="mb-4">
                <strong>Symptoms:</strong> You see a red plug icon or an error message saying Claude couldn't connect to the server.
            </p>

            <div className="space-y-6 mb-8">
                <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-slate-900">Fix 1: Install Node.js</h3>
                    <p className="text-sm text-slate-600">
                        Most MCP servers need Node.js to run. If you skipped this step, nothing will work.
                    </p>
                    <div className="bg-slate-100 p-3 rounded mt-2 flex items-center justify-between">
                        <code className="text-sm font-mono text-slate-800">node --version</code>
                        <span className="text-xs text-slate-500">Run this in terminal to check</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-2">If it says "command not found", download from <a href="https://nodejs.org" className="text-blue-600 underline">nodejs.org</a>.</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-slate-900">Fix 2: Use "Absolute Paths"</h3>
                    <p className="text-sm text-slate-600">
                        Sometimes Claude doesn't know where `npx` or `node` is installed. Try using the full path in your config.
                    </p>
                    <div className="mt-2 text-xs font-mono bg-slate-900 text-slate-300 p-3 rounded">
                        <div className="text-red-400 opacity-50 mb-1">// Instead of "command": "npx"</div>
                        <div className="text-green-400">"command": "C:/Program Files/nodejs/npx.cmd" (Windows)</div>
                        <div className="text-green-400">"command": "/usr/local/bin/npx" (Mac)</div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2">You can find the path by running <code>where npx</code> (Windows) or <code>which npx</code> (Mac) in terminal.</p>
                </div>
            </div>

            {/* 5. ISSUE: AUTHENTICATION LOOPS */}
            <h2 id="auth-loop" className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <RefreshCw className="text-blue-500" /> Issue: Constant "Sign In" Requests
            </h2>
            <p className="mb-4">
                <strong>Symptoms:</strong> Every time you restart Claude, it asks you to sign in to Google/Slack again, or the sign-in page doesn't open.
            </p>

            <div className="space-y-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-bold text-sm text-slate-900">The Fix: Check Browser Defaults</h3>
                    <p className="text-sm text-slate-600 mt-1">
                        The MCP server tries to open your default browser to authenticate. If you use a strict browser (like Arc or Brave) or have pop-up blockers, it might fail. temporarily set Chrome or Safari as default to complete the setup.
                    </p>
                </div>
            </div>


            {/* 6. ADVANCED DEBUGGING */}
            <h2 id="logs" className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Terminal className="text-slate-700" /> Advanced: Checking Logs
            </h2>
            <p className="mb-4">
                If you're still stuck, Claude processes have logs. Here is how to find them.
            </p>
            <div className="bg-slate-900 text-slate-300 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                <div className="mb-2"># Mac Logs</div>
                <div className="mb-4 text-white">tail -f ~/Library/Logs/Claude/mcp.log</div>
                <div className="mb-2"># Windows Logs</div>
                <div className="text-white">Get-Content -Path "$env:APPDATA\Claude\logs\mcp.log" -Wait</div>
            </div>

            {/* CTA */}
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold text-yellow-900 mb-4">Still Stuck?</h2>
                <p className="text-yellow-800 mb-8 max-w-xl mx-auto">
                    Setup issues can be frustrating because every computer is slightly different.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-700 transition-colors">
                        Try the Quick Start Kit <Settings size={18} />
                    </Link>
                    <Link href="/mastery" className="inline-flex items-center justify-center gap-2 bg-white text-yellow-900 font-bold py-3 px-8 rounded-lg border border-yellow-200 hover:bg-yellow-50 transition-colors">
                        Ask in Mastery Community <HelpCircle size={18} />
                    </Link>
                </div>
                <p className="text-xs text-yellow-700 mt-4">
                    The Quick Start Kit includes a reliable config file that fixes 99% of syntax errors.
                </p>
            </div>

        </ArticleLayout>
    );
}
