import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Code2, FileText, MousePointer, Shield, Star, HelpCircle, HardDrive, Terminal } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    publishedTime: "2026-02-05T07:24:32-07:00",
    modifiedTime: "2026-06-06T12:28:05-07:00",
title: "Connecting AI Without Coding: MCP Guide",
    description: "You don't need to code to use MCP. Visual guide for non-developers. Copy-paste setup, no programming required.",
    path: "/articles/connecting-ai-without-coding",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout publishedAt="2026-02-05T07:24:32-07:00" updatedAt="2026-06-06T12:28:05-07:00"
            title="Connecting AI Without Coding: Non-Technical MCP Guide"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                You've heard MCP requires "configuration files" and "JSON." That sounds like coding. It's not. This guide shows you exactly what's involved—no programming knowledge required. If you can copy-paste and follow instructions, you can do this.
            </p>

            {/* 2. THE TRUTH ABOUT "TECHNICAL" SETUP */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">The Truth About "Technical" Setup</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-red-800 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">What it sounds like</h3>
                        <ul className="space-y-3 text-slate-600 font-mono text-sm bg-red-50 p-4 rounded-lg">
                            <li>"Edit the configuration file"</li>
                            <li>"Add JSON to your config"</li>
                            <li>"Install the MCP server"</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-green-800 mb-2 text-sm uppercase tracking-wider flex items-center gap-2">What it actually means</h3>
                        <ul className="space-y-3 text-slate-600 text-sm bg-green-50 p-4 rounded-lg">
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> "Open a text file we give you"</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> "Copy-paste this exact text"</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-600" /> "Restart the Claude app"</li>
                        </ul>
                    </div>
                </div>
                <p className="mt-6 text-sm text-slate-600 text-center italic">
                    "Setting up MCP is more like following a recipe than writing code."
                </p>
            </div>

            {/* 3. STEP BY STEP */}
            <h2 id="steps">What You'll Actually Do</h2>
            <div className="space-y-6 my-8">

                <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Download Claude Desktop</h3>
                        <p className="text-sm text-slate-600 mb-2">Click a download button. Run the installer. Just like installing Spotify.</p>
                        <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">Difficulty: Installing an app <CheckCircle size={12} /></div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Find a settings file</h3>
                        <p className="text-sm text-slate-600 mb-2">Navigate to a folder on your computer. Find (or create) a file called <code>claude_desktop_config.json</code>.</p>
                        <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">Difficulty: Opening a folder <CheckCircle size={12} /></div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Copy-paste configuration</h3>
                        <p className="text-sm text-slate-600 mb-2">Open the file in Notepad. Paste the text we provide. Save.</p>
                        <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">Difficulty: Copy-and-paste <CheckCircle size={12} /></div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="bg-blue-100 text-blue-700 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">4</div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Restart Claude</h3>
                        <p className="text-sm text-slate-600 mb-2">Close the app. Open it again.</p>
                        <div className="inline-flex items-center gap-1 text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded">Difficulty: Restarting an app <CheckCircle size={12} /></div>
                    </div>
                </div>
            </div>
            <p>
                That's it. Five steps. No code written. If you've ever edited a Word document, you have all the skills required.
            </p>

            {/* 4. THE CONFIG FILE */}
            <h2 id="config">What the "Code" Looks Like</h2>
            <p>
                Here is an actual MCP configuration. Don't worry about understanding it—just know this is what you'll copy-paste:
            </p>
            <div className="bg-slate-900 text-slate-100 rounded-xl overflow-hidden my-6 not-prose">
                <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400">
                    claude_desktop_config.json
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                    {`{
  "mcpServers": {
    "google-drive": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-gdrive"]
    }
  }
}`}
                </pre>
            </div>
            <p className="text-sm text-slate-600">
                Six lines. You copy this exactly as shown. You don't need to know what 'npx' means or why there are curly braces. It just works.
            </p>

            {/* 5. COMMON FEARS */}
            <h2 id="fears">Common Fears (And Why They're Unfounded)</h2>
            <div className="space-y-6 my-6">
                <details className="group border border-slate-200 rounded-lg open:bg-slate-50">
                    <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-900">
                        What if I break something?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4 prose prose-sm text-slate-600">
                        <p>The config file only affects Claude. Worst case: Claude doesn't connect to your tools. Delete the file, restart, and you're back to normal. Your actual files, emails, and data are never at risk.</p>
                    </div>
                </details>
                <details className="group border border-slate-200 rounded-lg open:bg-slate-50">
                    <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-900">
                        I don't know what JSON is
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4 prose prose-sm text-slate-600">
                        <p>You don't need to. It's just a way of organizing text that computers like. Think of it like a specific way of formatting a bulleted list. Copy our examples exactly, and it works.</p>
                    </div>
                </details>
                <details className="group border border-slate-200 rounded-lg open:bg-slate-50">
                    <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-900">
                        The terminal/command line scares me
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4 prose prose-sm text-slate-600">
                        <p>You never need to open the terminal. Everything happens through normal file editing (Notepad/TextEdit) and the Claude app interface.</p>
                    </div>
                </details>
            </div>

            {/* 6. SOCIAL PROOF */}
            <h2 id="stories">Real People Who've Done This</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-slate-50 p-6 rounded-lg text-sm italic text-slate-700">
                    "I'm a therapist. The last time I wrote code was never. MCP took me 20 minutes to set up, and now Claude helps me with all my admin work."
                </div>
                <div className="bg-slate-50 p-6 rounded-lg text-sm italic text-slate-700">
                    "I run a small bakery. I don't even know what JSON stands for. But I followed the guide, copy-pasted the config, and now Claude can search my Google Drive. Magic."
                </div>
            </div>

            {/* 7. THE ONE HARD THING */}
            <h2 id="hard-part">The One Thing That Might Trip You Up</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
                <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2"><Terminal size={18} /> Node.js Installation</h3>
                <p className="text-sm text-yellow-800 mb-2">
                    Some MCP servers need a helper tool called Node.js installed on your computer. This is the only slightly technical step.
                </p>
                <ol className="list-decimal pl-5 space-y-1 text-sm text-yellow-800 font-medium">
                    <li>Go to nodejs.org</li>
                    <li>Click the big green "Download LTS" button</li>
                    <li>Run the installer (click Next a few times)</li>
                    <li>Done. You install it once and forget about it.</li>
                </ol>
            </div>

            {/* 8. OPTIONS */}
            <h2 id="options">Your Options for Getting Started</h2>
            <p className="mb-6">Choose your comfort level. The end result is the same: Claude connected to your tools.</p>

            <div className="grid md:grid-cols-3 gap-6 my-8 not-prose">
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">1. DIY Guide</h3>
                    <p className="text-sm text-slate-600 mb-4 h-12">Follow our step-by-step setup guide and copy-paste configs.</p>
                    <Link href="/articles/mcp-setup-for-solopreneurs" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline">Read Guide <ArrowRight size={14} /></Link>
                </div>
                <div className="border border-blue-200 bg-blue-50 p-6 rounded-xl hover:shadow-md transition-shadow relative">
                    <div className="absolute top-4 right-4 text-blue-200"><Star size={20} fill="currentColor" /></div>
                    <h3 className="font-bold text-lg mb-2 text-blue-900">2. Quick Start Kit</h3>
                    <p className="text-sm text-blue-800 mb-4 h-12">Download pre-built files. Just place them in the folder and go.</p>
                    <Link href="/start-here" className="text-blue-700 text-sm font-bold flex items-center gap-1 hover:underline">Download Kit <ArrowRight size={14} /></Link>
                </div>
                <div className="border border-slate-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg mb-2 text-slate-900">3. Guided Course</h3>
                    <p className="text-sm text-slate-600 mb-4 h-12">Video walkthroughs and live help if you get stuck.</p>
                    <Link href="/mastery" className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline">Join Mastery <ArrowRight size={14} /></Link>
                </div>
            </div>

            {/* 9. AFTER SETUP */}
            <h2 id="payoff">What Happens After Setup?</h2>
            <p>
                The technical part is one-time only. Once configured, you never look at the JSON file again. You just talk to Claude naturally.
            </p>
            <div className="bg-slate-100 p-6 rounded-xl my-6">
                <strong className="block text-slate-900 mb-3">Example things you can say:</strong>
                <ul className="space-y-2 text-slate-700 italic">
                    <li>"What's on my calendar tomorrow?"</li>
                    <li>"Find emails from last week about the project"</li>
                    <li>"What documents do I have about marketing?"</li>
                </ul>
            </div>

            {/* 10. REASSURANCE */}
            <h2 id="reassurance">Still Nervous? That's Okay.</h2>
            <p>
                Start small. Connect just <Link href="/tools/google-drive" className="text-blue-600 underline">Google Drive</Link> first. It's read-only and safe. If you don't like it, delete the config file and Claude goes back to normal.
            </p>
            <p>
                We want you to succeed. These tools are meant for everyone, not just developers. You deserve the productivity benefits too.
            </p>

            {/* CTA */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to try?</h2>
                <p className="text-blue-800 mb-8 max-w-xl mx-auto">
                    Get our Quick Start Kit. It includes the exact file you need, pre-written for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Download Quick Start Kit <ArrowRight size={18} />
                    </Link>
                    <Link href="/guides/what-is-mcp" className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 font-bold py-3 px-8 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
                        Back to Basics
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
