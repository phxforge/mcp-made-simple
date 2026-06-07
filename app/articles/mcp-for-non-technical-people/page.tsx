import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Coffee, Smile, MessageCircle, FileText, Calendar, Search, ArrowDownCircle, CheckCircle, HelpCircle } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    publishedTime: "2026-02-05T07:24:32-07:00",
    modifiedTime: "2026-06-06T12:28:05-07:00",
title: "MCP for Non-Technical People",
    description: "Plain English guide to MCP. No jargon, no code—just practical automation anyone can use.",
    path: "/articles/mcp-for-non-technical-people",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout publishedAt="2026-02-05T07:24:32-07:00" updatedAt="2026-06-06T12:28:05-07:00"
            title="MCP for Non-Technical People: A Painless Guide"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                You keep hearing about MCP. People say it's powerful. But every explanation sounds like it's written for engineers. This one isn't. No technical jargon. No assumptions. Just a clear explanation of what MCP is and why it might matter to you.
            </p>

            {/* 2. SIMPLEST EXPLANATION */}
            <h2 id="what-is-it">MCP in One Sentence</h2>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl text-center my-8 not-prose">
                <p className="text-lg md:text-xl font-medium text-blue-900 mb-2">
                    "MCP lets you talk to Claude about your actual stuff—your emails, your files, your calendar—instead of just asking general questions."
                </p>
            </div>
            <p>
                That's it. Instead of Claude being a smart assistant who doesn't know anything about your life, MCP makes Claude a smart assistant who can actually <em>see</em> and <em>work with</em> your information.
            </p>

            {/* 3. BEFORE VS AFTER */}
            <h2 id="comparison">A Day Without MCP vs. With MCP</h2>
            <p>Let's look at a task you probably hate: Morning Email Triage.</p>

            <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
                {/* Without */}
                <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                    <h3 className="font-bold text-slate-500 mb-4 flex items-center gap-2"><ArrowDownCircle /> Without MCP (Now)</h3>
                    <ol className="space-y-3 text-sm text-slate-600 list-decimal pl-4">
                        <li>Open Gmail, scroll through 40 emails.</li>
                        <li>Mentally categorize what's urgent.</li>
                        <li>Open Claude in another tab.</li>
                        <li>Copy-paste an email you need help with.</li>
                        <li>Get Claude's response.</li>
                        <li>Go back to Gmail to act on it.</li>
                        <li><strong>Repeat for every single email.</strong></li>
                    </ol>
                </div>

                {/* With */}
                <div className="border border-blue-200 rounded-xl p-6 bg-blue-50 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Better Way</div>
                    <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2"><CheckCircle className="text-blue-600" /> With MCP</h3>
                    <ol className="space-y-3 text-sm text-blue-800 list-decimal pl-4">
                        <li>Ask Claude: "What's in my inbox that needs attention?"</li>
                        <li><strong>Done.</strong> Claude reads your Gmail and gives you a prioritized summary.</li>
                        <li>You respond only to the important ones directly in the chat.</li>
                    </ol>
                </div>
            </div>
            <p className="text-center font-medium text-slate-700 italic">
                The difference? You're not copying information TO Claude. Claude can go GET the information itself.
            </p>

            {/* 4. PRACTICAL EXAMPLES */}
            <h2 id="examples">What Can It Actually Do?</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                    <strong className="block text-slate-900 mb-1 flex items-center gap-2"><MessageCircle size={18} className="text-blue-500" /> With Your Email</strong>
                    <p className="text-sm text-slate-600">Read your inbox, find old messages, draft replies, and extract tasks.</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                    <strong className="block text-slate-900 mb-1 flex items-center gap-2"><Search size={18} className="text-purple-500" /> With Your Files</strong>
                    <p className="text-sm text-slate-600">Search by topic (not just filename), summarize long reports, and organize folders.</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                    <strong className="block text-slate-900 mb-1 flex items-center gap-2"><Calendar size={18} className="text-green-500" /> With Your Calendar</strong>
                    <p className="text-sm text-slate-600">Check your schedule, find open slots, and prep you for upcoming meetings.</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                    <strong className="block text-slate-900 mb-1 flex items-center gap-2"><FileText size={18} className="text-orange-500" /> With Your Notes</strong>
                    <p className="text-sm text-slate-600">Search your knowledge base (Notion, Obsidian) and update task lists.</p>
                </div>
            </div>

            {/* 5. IS IT HARD? */}
            <h2 id="setup">Is This Hard to Set Up?</h2>
            <p>
                Honest answer: It's not coding, but it's not as simple as installing an iPhone app either.
            </p>
            <div className="bg-slate-100 p-6 rounded-lg my-4">
                <strong className="block text-slate-900 mb-2">What you actually do:</strong>
                <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                    <li>Download an app (Claude Desktop).</li>
                    <li>Find a settings file on your computer.</li>
                    <li>Copy-paste some text we give you into that file.</li>
                    <li>Sign in to authorize your tools (like "Sign in with Google").</li>
                </ul>
            </div>
            <p>
                Most people get their first tool connected in 30-45 minutes. If you can follow a recipe or assemble IKEA furniture, you can do this.
            </p>
            <div className="flex gap-4 my-4">
                <Link href="/articles/mcp-setup-for-solopreneurs" className="text-blue-600 font-bold hover:underline flex items-center gap-1">
                    See our Non-Technical Setup Guide <ArrowRight size={16} />
                </Link>
            </div>

            {/* 6. COMMON FEARS */}
            <h2 id="worries">Common Worries</h2>
            <div className="space-y-6 my-8">
                <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2"><HelpCircle size={18} className="text-slate-400" /> "I'll break something."</h3>
                    <p className="text-slate-600 text-sm mt-1">The worst that happens is Claude doesn't connect. Your actual files and emails are never at risk from the setup process.</p>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2"><HelpCircle size={18} className="text-slate-400" /> "I don't want AI reading all my stuff."</h3>
                    <p className="text-slate-600 text-sm mt-1">Claude only looks at things when you ask it to. It's not constantly scanning your email. You are in control of every request.</p>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2"><HelpCircle size={18} className="text-slate-400" /> "What if I don't like it?"</h3>
                    <p className="text-slate-600 text-sm mt-1">Disconnect the tools anytime. Delete the settings file. Claude goes back to normal instantly.</p>
                </div>
            </div>

            {/* 7. VALUE */}
            <h2 id="value">Is It Worth It?</h2>
            <p>
                Most people save <strong>5-15 hours per week</strong> once they are up and running.
            </p>
            <div className="bg-green-50 border border-green-100 p-6 rounded-xl my-6 text-center">
                <p className="text-green-900 font-medium">
                    If you value your time at $50/hour and save 10 hours/week...<br />
                    That's <span className="font-bold text-xl">$500/week</span> in value.
                </p>
                <p className="text-green-800 text-sm mt-2">
                    The 45-minute setup pays for itself in the first day.
                </p>
            </div>

            {/* 8. GETTING STARTED */}
            <h2 id="start">How to Start (The Easy Way)</h2>
            <ol className="list-decimal pl-5 space-y-4 my-6 text-slate-700 font-medium">
                <li>
                    <strong>Get the Quick Start Kit:</strong> We packaged the guides and files you need into one free download.<br />
                    <Link href="/start-here" className="text-blue-600 text-sm font-normal underline">Download it here &rarr;</Link>
                </li>
                <li>
                    <strong>Follow the Visual Guide:</strong> Our "Setup for Solopreneurs" article has screenshots for every step.<br />
                    <Link href="/articles/mcp-setup-for-solopreneurs" className="text-blue-600 text-sm font-normal underline">Read the guide &rarr;</Link>
                </li>
                <li>
                    <strong>Connect One Thing:</strong> Just do Gmail or Drive first. Don't try to do everything at once.
                </li>
            </ol>

            {/* 9. ENCOURAGEMENT */}
            <h2 id="encouragement">You Can Do This</h2>
            <p>
                "Technical" is just a label. If you know what tasks waste your time, you know enough to use MCP. You don't need to understand how the engine works to drive the car.
            </p>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Ready to try?</h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Join thousands of "non-technical" people reclaiming their time.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Get the Free Kit <Smile size={18} />
                    </Link>
                    <Link href="/mastery" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        I Want Guided Help <Coffee size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
