import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Unplug, Zap, Clock, ArrowRight, UserPlus, FileText, CheckCircle2, AlertTriangle, Workflow } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "What Problem Does MCP Solve? | MCP Made Simple",
    description: "The core problem MCP addresses: fragmented AI-tool integration. Why this matters.",
    path: "/articles/what-problem-does-mcp-solve",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="What Problem Does MCP Solve?"
            description="The core problem MCP addresses: fragmented AI-tool integration. Why this matters."
            category="Fundamentals"
            readTime="7 min"
            parentPillar={{ title: 'What is MCP?', slug: '/guides/what-is-mcp' }}
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Every powerful technology solves a specific problem. Understanding MCP starts with understanding the problem it was built to solve. This article explains the core frustration MCP addresses—and why that matters for anyone working with AI.
            </p>

            {/* 2. THE PROBLEM */}
            <h2 id="problem">The Problem in One Sentence</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 my-6 rounded-r-xl">
                <p className="font-medium text-red-900 text-lg">
                    "AI assistants are smart but isolated. They can't access your actual data or tools without you manually copying information back and forth."
                </p>
            </div>
            <p className="mb-6">
                You have a brilliant assistant who can analyze, write, and reason—but they're locked in a room with no phone, no computer, no access to your files. Every piece of information has to be hand-delivered through a small window. That's what using AI without MCP is like.
            </p>

            {/* 3. COPY-PASTE TAX */}
            <h2 id="tax">The Copy-Paste Tax</h2>
            <p className="mb-4">
                We've grown so used to this friction that we barely notice it anymore.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><Clock size={20} className="text-slate-500" /> The Workflow Before</h3>
                    <ol className="space-y-2 text-sm text-slate-600 list-decimal pl-5">
                        <li>Receive email from client</li>
                        <li><strong>Copy</strong> text</li>
                        <li>Switch to Claude</li>
                        <li><strong>Paste</strong> text</li>
                        <li>Write prompt: "Draft a reply..."</li>
                        <li>Copy response</li>
                        <li>Switch back to email</li>
                        <li><strong>Paste</strong> response</li>
                    </ol>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2"><AlertTriangle size={20} className="text-red-500" /> The Hidden Cost</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex gap-2"><span className="font-bold text-slate-800">Time:</span> 30s per cycle x 50 times/day = 25 mins daily.</li>
                        <li className="flex gap-2"><span className="font-bold text-slate-800">Context:</span> Attachments and history get lost.</li>
                        <li className="flex gap-2"><span className="font-bold text-slate-800">Friction:</span> You only use AI for "big" tasks, ignoring small wins.</li>
                    </ul>
                </div>
            </div>

            {/* 4. INTEGRATION NIGHTMARE */}
            <h2 id="integration">The Integration Nightmare</h2>
            <p className="mb-6">
                Before MCP, solving this required massive effort. You had two bad choices:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="border border-slate-200 p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-2">Option A: Custom Code</strong>
                    <p className="text-sm text-slate-600">Build bespoke integrations for every single tool. Use different APIs, different auth methods. Maintenance hell.</p>
                </div>
                <div className="border border-slate-200 p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-2">Option B: Automation Platforms</strong>
                    <p className="text-sm text-slate-600">Use Zapier or Make. Great for rigid workflows, but they aren't conversational agents. You can't "chat" with a Zap.</p>
                </div>
            </div>

            {/* 5. WHAT MCP SOLVES */}
            <h2 id="solution">What MCP Actually Solves</h2>
            <p className="mb-6">
                MCP is like USB for AI. Before USB, every device needed a different connector. USB standardized the connection. MCP standardizes how AI connects to tools.
            </p>

            <div className="space-y-4 my-8">
                <div className="flex gap-4 items-start p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">Problem: No standard access</strong>
                        <p className="text-sm text-slate-700">MCP provides a universal protocol. Any tool can implement it once and work with any AI.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">Problem: Custom integration fatigue</strong>
                        <p className="text-sm text-slate-700">MCP servers are reusable blocks. Installing the Google Drive server takes minutes, not weeks of coding.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start p-4 bg-blue-50/50 rounded-lg border border-blue-100">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">Problem: Context friction</strong>
                        <p className="text-sm text-slate-700">Claude pulls context <strong>directly</strong>. "Summarize the last 3 emails from Jason" just works.</p>
                    </div>
                </div>
            </div>

            {/* 6. BEFORE AND AFTER */}
            <h2 id="comparison">Before & After</h2>
            <div className="my-8 border rounded-xl overflow-hidden">
                <div className="bg-slate-100 p-4 font-bold border-b text-center">Scenario: Preparing for a meeting</div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                    <div className="p-6">
                        <strong className="block text-red-600 mb-4 text-center">Before MCP</strong>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>1. Open Calendar (find time)</li>
                            <li>2. Open Email (search threads)</li>
                            <li>3. Open Drive (find docs)</li>
                            <li>4. Read & Synthesize manually</li>
                            <li>5. Paste to AI for summary</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t text-center font-bold text-slate-500">23 Minutes</div>
                    </div>
                    <div className="p-6 bg-blue-50/30">
                        <strong className="block text-green-600 mb-4 text-center">With MCP</strong>
                        <p className="text-sm text-slate-900 italic text-center mb-4">"Claude, prepare me for my 2pm meeting"</p>
                        <ul className="text-sm text-slate-600 space-y-2">
                            <li>• AI searches Calendar</li>
                            <li>• AI reads relevant Emails</li>
                            <li>• AI summarizes Docs</li>
                        </ul>
                        <div className="mt-4 pt-4 border-t text-center font-bold text-blue-600">2 Minutes</div>
                    </div>
                </div>
            </div>

            {/* 7. THE BIGGER PICTURE */}
            <h2 id="impact">Why This Matters</h2>
            <p className="mb-6">
                Without tool integration, AI assistance hits a ceiling. The value is capped by your willingness to act as a data mule.
            </p>
            <p className="mb-6">
                AI that can work with your actual tools is categorially different. It shifts the interaction from <span className="font-semibold text-slate-900">"ask a question, get an answer"</span> to <span className="font-semibold text-blue-600">"give a goal, get it done"</span>.
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <Link href="/articles/how-mcp-changes-ai-agents" className="flex items-center gap-2 text-blue-600 font-medium hover:underline">
                    Read more: How MCP transforms Chatbots into Agents <ArrowRight size={16} />
                </Link>
            </div>

            {/* 8. WHO BENEFITS */}
            <h2 id="beneficiaries">Who Feels This Problem Most?</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-8">
                <Link href="/use-cases/solopreneurs" className="block p-4 border rounded-lg hover:border-blue-300 transition-colors">
                    <strong className="flex items-center gap-2 text-slate-900 mb-2"><UserPlus size={18} /> Solopreneurs</strong>
                    <p className="text-xs text-slate-600">You are your own admin. Every minute saved is billable time gained.</p>
                </Link>
                <Link href="/use-cases/teams" className="block p-4 border rounded-lg hover:border-blue-300 transition-colors">
                    <strong className="flex items-center gap-2 text-slate-900 mb-2"><Unplug size={18} /> Operations Teams</strong>
                    <p className="text-xs text-slate-600">Your job is coordination. Without MCP, you are the manual integration layer.</p>
                </Link>
                <div className="block p-4 border rounded-lg">
                    <strong className="flex items-center gap-2 text-slate-900 mb-2"><FileText size={18} /> Knowledge Workers</strong>
                    <p className="text-xs text-slate-600">Anyone living in email and docs. The copy-paste tax is your biggest enemy.</p>
                </div>
                <Link href="/use-cases/developers" className="block p-4 border rounded-lg hover:border-blue-300 transition-colors">
                    <strong className="flex items-center gap-2 text-slate-900 mb-2"><Zap size={18} /> Developers</strong>
                    <p className="text-xs text-slate-600">You know the pain of custom APIs. MCP is the standard you've been waiting for.</p>
                </Link>
            </div>

            {/* 9. ALTERNATIVES */}
            <h2 id="alternatives">Why Not Just Use X?</h2>
            <div className="space-y-4 my-8">
                <div>
                    <strong className="block text-slate-900 text-sm mb-1">"Why not Zapier?"</strong>
                    <p className="text-sm text-slate-600">Great for repetitive, trigger-based workflows. Bad for flexible reasoning. You can't ask a Zap to "analyze this sentiment". <Link href="/articles/mcp-vs-zapier" className="text-blue-600 hover:underline">See Comparison</Link>.</p>
                </div>
                <div>
                    <strong className="block text-slate-900 text-sm mb-1">"Why not custom code?"</strong>
                    <p className="text-sm text-slate-600">Expensive. High maintenance. Requires a dev team. MCP provides the same capability for free.</p>
                </div>
            </div>

            {/* 10. LIMITATIONS */}
            <h2 id="limitations">What MCP Doesn't Solve</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
                <p className="text-sm text-yellow-900 mb-4">
                    Being honest: MCP is a connection protocol, not a magic wand.
                </p>
                <ul className="text-sm text-yellow-800 space-y-2 list-disc pl-5">
                    <li>It doesn't fix AI hallucinations (Claude can still make mistakes).</li>
                    <li>It doesn't replace human judgment (you must approve actions).</li>
                    <li>It doesn't solve organizational adoption (people need to learn it).</li>
                </ul>
                <p className="text-sm text-yellow-900 mt-4 font-medium">
                    It solves the <em>access</em> problem. What you do with that access is up to you.
                </p>
            </div>

            {/* 11. SUMMARY */}
            <h2 id="summary">Summary</h2>
            <p className="mb-8">
                MCP solves the isolation problem. It takes AI assistants from "smart-but-disconnected" to "smart-and-integrated." It removes the infrastructure barrier between AI capability and practical utility.
            </p>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Solve the Connection Problem</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Get Quick Start Kit <Zap size={18} />
                    </Link>
                    <Link href="/guides/what-is-mcp" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        How MCP Works <Workflow size={18} />
                    </Link>
                </div>
                <p className="mt-4 text-sm text-slate-400">
                    See what's possible with <Link href="/guides/workflows" className="text-blue-400 hover:underline">connected workflows</Link>.
                </p>
            </div>

        </ArticleLayout>
    );
}
