import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Calendar, Play, FileJson, Search, Filter, Lightbulb, PartyPopper, Mail } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "First Week with MCP: A Day-by-Day Learning Plan | MCP Made Simple",
    description: "Day-by-day learning plan for your first week with MCP. Small daily wins that build into real productivity gains.",
    path: "/articles/first-week-with-mcp",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="First Week with MCP: A Day-by-Day Learning Plan"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                You've decided to try MCP. Now what? The difference between people who succeed with MCP and those who give up is having a plan. This is your day-by-day guide to your first week. Small daily wins that build into real productivity gains.
            </p>

            {/* 2. THE GOAL */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">The Goal: Confidence, Not Perfection</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-green-700 mb-2 text-sm uppercase tracking-wider flex items-center gap-2"><CheckCircle size={16} /> What You'll Achieve</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li>✓ Claude Desktop installed and working</li>
                            <li>✓ 2-3 tools connected</li>
                            <li>✓ 5+ workflows tested</li>
                            <li>✓ A clear sense of what MCP can do for you</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-500 mb-2 text-sm uppercase tracking-wider">What You Won't (Yet)</h3>
                        <ul className="space-y-2 text-slate-500 text-sm italic">
                            <li>✗ A fully automated business</li>
                            <li>✗ Every tool connected</li>
                            <li>✗ Advanced custom workflows</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-6 bg-white p-4 rounded-lg border border-slate-200">
                    <p className="text-slate-800 text-sm m-0">
                        <strong>Mindset Check:</strong> This week is about exploration and building confidence. Speed comes later. Right now, focus on understanding how MCP works.
                    </p>
                </div>
            </div>

            {/* DAY 1 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden my-8">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900 m-0 flex items-center gap-2">
                        <span className="bg-slate-900 text-white rounded px-2 py-0.5 text-base">Day 1</span>
                        Install and Explore
                    </h2>
                    <span className="text-sm text-slate-500 flex items-center gap-1"><Calendar size={14} /> 30 mins</span>
                </div>
                <div className="p-6">
                    <p className="mb-4">Goal: Get Claude Desktop running and understand the basics. No tool connections today—just get familiar with the app.</p>
                    <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Download Claude Desktop from <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">claude.ai/download</a></span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Install and sign in</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Have a normal conversation to confirm it works</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Read the <Link href="/guides/what-is-mcp" className="text-blue-600 underline">What is MCP?</Link> overview</span>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                        <strong>End of day check:</strong> Can you open Claude Desktop and have a conversation? ✓
                    </div>
                </div>
            </div>

            {/* DAY 2 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden my-8">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900 m-0 flex items-center gap-2">
                        <span className="bg-slate-900 text-white rounded px-2 py-0.5 text-base">Day 2</span>
                        Connect Your First Tool
                    </h2>
                    <span className="text-sm text-slate-500 flex items-center gap-1"><Calendar size={14} /> 45 mins</span>
                </div>
                <div className="p-6">
                    <p className="mb-4">Goal: One tool connected and working. we recommend <strong>Google Drive</strong> as it's easy and read-only to start.</p>
                    <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Find your config file location (see <Link href="/articles/mcp-setup-for-solopreneurs" className="text-blue-600 underline">Setup Guide</Link>)</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Add the Google Drive configuration from <Link href="/tools/google-drive" className="text-blue-600 underline">here</Link></span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Restart Claude Desktop</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Authorize Google when prompted</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Test: Ask <em>"What files are in my Google Drive?"</em></span>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
                        <strong>End of day check:</strong> Did Claude successfully show you files from your Drive? ✓
                    </div>
                </div>
            </div>

            {/* DAY 3 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden my-8">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900 m-0 flex items-center gap-2">
                        <span className="bg-slate-900 text-white rounded px-2 py-0.5 text-base">Day 3</span>
                        Learn What's Possible
                    </h2>
                    <span className="text-sm text-slate-500 flex items-center gap-1"><Calendar size={14} /> 30 mins</span>
                </div>
                <div className="p-6">
                    <p className="mb-4">Goal: Discover the range of things you can ask. No new setup today—just exploration.</p>
                    <div className="bg-slate-100 p-4 rounded-lg mb-6">
                        <h3 className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wide">Prompts to Try</h3>
                        <ul className="space-y-2 text-sm text-slate-600 font-mono">
                            <li>"What documents did I edit this week?"</li>
                            <li>"Find 3 files with 'proposal' in the name"</li>
                            <li>"Search for anything related to [project name]"</li>
                            <li>"Find all spreadsheets from the last month"</li>
                            <li>"Summarize the document called [name]"</li>
                        </ul>
                    </div>
                    <p className="text-sm italic text-slate-500">
                        <strong>Learning Point:</strong> MCP works best with specific requests. "Find files about the Johnson project" works better than "organize my Drive."
                    </p>
                </div>
            </div>

            {/* DAY 4 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden my-8">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900 m-0 flex items-center gap-2">
                        <span className="bg-slate-900 text-white rounded px-2 py-0.5 text-base">Day 4</span>
                        Add a Second Tool
                    </h2>
                    <span className="text-sm text-slate-500 flex items-center gap-1"><Calendar size={14} /> 45 mins</span>
                </div>
                <div className="p-6">
                    <p className="mb-4">Goal: Connect a complementary tool. If you have Drive, add <strong>Gmail</strong>. If you have Notion, add <strong>Slack</strong>.</p>
                    <div className="space-y-3 mb-6">
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Choose your second tool</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Add it to your config file (be careful with commas!)</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Restart, authorize, and test</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1.5" />
                            <span>Try a cross-tool prompt: <em>"Find emails about [project] and any related docs in Drive."</em></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* DAY 5 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden my-8">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900 m-0 flex items-center gap-2">
                        <span className="bg-slate-900 text-white rounded px-2 py-0.5 text-base">Day 5</span>
                        Your First Real Workflow
                    </h2>
                    <span className="text-sm text-slate-500 flex items-center gap-1"><Calendar size={14} /> 30 mins</span>
                </div>
                <div className="p-6">
                    <p className="mb-4">Goal: Create a workflow you'll actually use. Choose one based on your tools:</p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">
                            <strong className="block text-slate-900 mb-2 flex items-center gap-2"><Mail size={16} /> If you have Gmail:</strong>
                            <p className="text-xs font-mono bg-slate-50 p-2 rounded text-slate-600 mb-2">
                                "Review my unread emails. Categorize as Urgent, Needs Response, or Can Wait. Start with Urgent items."
                            </p>
                        </div>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">
                            <strong className="block text-slate-900 mb-2 flex items-center gap-2"><Search size={16} /> If you have Drive:</strong>
                            <p className="text-xs font-mono bg-slate-50 p-2 rounded text-slate-600 mb-2">
                                "Find the last 3 documents I created. Summarize what I've been working on this week based on them."
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm">
                        Save your best prompt in a text file or Notion page called "My Prompts". You'll reuse this on Monday.
                    </p>
                </div>
            </div>

            {/* DAYS 6-7 */}
            <div className="border border-slate-200 rounded-xl overflow-hidden my-8">
                <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-slate-900 m-0 flex items-center gap-2">
                        <span className="bg-slate-900 text-white rounded px-2 py-0.5 text-base">Weekend</span>
                        Reflect and Plan
                    </h2>
                    <span className="text-sm text-slate-500 flex items-center gap-1"><Lightbulb size={14} /> 15 mins</span>
                </div>
                <div className="p-6">
                    <p className="mb-4">Goal: Don't do more work. Just reflect on what worked.</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li>Which tool connection felt most magical?</li>
                        <li>Which prompt saved you the most time?</li>
                        <li>What task do you want to tackle next week?</li>
                    </ul>
                    <div className="mt-6 flex items-center gap-2 text-green-700 font-bold bg-green-50 p-4 rounded-lg border border-green-200">
                        <PartyPopper size={20} />
                        <span>Congratulations! You're no longer a beginner. You're a user.</span>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <h2 id="next">Where to go from here</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Link href="/guides/workflows" className="block p-6 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors">
                    <div className="font-bold text-lg mb-2">Explore Advanced Workflows</div>
                    <p className="text-blue-100 text-sm mb-4">Ready for more connected automation? See what else is possible.</p>
                    <span className="font-bold text-sm inline-flex items-center gap-1">Browse Library <ArrowRight size={14} /></span>
                </Link>
                <Link href="/mastery" className="block p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                    <div className="font-bold text-lg mb-2 text-slate-800">Get the Full Course</div>
                    <p className="text-slate-600 text-sm mb-4">Fast-track your learning with our comprehensive video course.</p>
                    <span className="font-bold text-sm text-blue-600 inline-flex items-center gap-1">View Course <ArrowRight size={14} /></span>
                </Link>
            </div>

        </ArticleLayout>
    );
}
