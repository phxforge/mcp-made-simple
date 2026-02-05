import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Mail, Filter, FileSpreadsheet, Clock, Search, MessageSquare, AlertCircle } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "Email Automation Workflows with MCP | MCP Made Simple",
    description: "Auto-categorize emails, extract data to spreadsheets, and automate follow-ups. Cut email time by 50%.",
    path: "/articles/email-automation-workflows",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="Email Automation Workflows with MCP"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Email is where productivity goes to die. The average professional spends 28% of their workweek on email—that's 11+ hours. These MCP workflows cut that time by 50-70%. Real prompts you can copy, real time savings you can measure.
            </p>

            {/* 2. PREREQUISITES */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">What You Need</h2>
                <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Claude Desktop installed</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Gmail connected via MCP</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> (Optional) Google Sheets or Notion for advanced data extraction</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-600">
                        Haven't connected Gmail yet? <Link href="/tools/gmail" className="text-blue-600 font-bold hover:underline">Follow our 5-minute setup guide →</Link>
                    </p>
                </div>
            </div>

            {/* WORKFLOW 1: TRIAGE */}
            <h2 id="triage">Workflow 1: The Morning Triage</h2>
            <p>
                You open your inbox to 40+ emails. Which need attention now? Which can wait? Figuring this out takes 30-45 minutes of "pre-work" before you even start replying.
            </p>

            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Filter className="text-blue-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
                    Review my unread emails from the last 24 hours. Categorize each as:

                    🔴 **Urgent** (needs response within 2 hours)
                    🟡 **Today** (needs response today)
                    🔵 **This Week** (can wait a few days)
                    ⚪ **FYI** (no response needed)

                    List emails in each category with sender and subject. Start with Urgent.
                </div>
            </div>
            <p className="text-sm bg-blue-50 text-blue-800 p-4 rounded-lg flex gap-3 items-start">
                <AlertCircle size={18} className="mt-0.5 shrink-0" />
                <strong>Pro Tip:</strong> You can teach Claude your priorities. Add: <em>"Emails from @acme.com are always Urgent"</em> or <em>"Newsletters are always FYI"</em>.
            </p>

            {/* WORKFLOW 2: DATA EXTRACTION */}
            <h2 id="extraction">Workflow 2: Information Extraction</h2>
            <p>
                Copy-pasting data from emails to spreadsheets is the definition of busywork. Whether it's invoices, leads, or bug reports, MCP can parse the messy human text and structure it efficiently.
            </p>

            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><FileSpreadsheet className="text-green-500" /> The Prompt</h3>
                <p className="text-slate-600 text-sm mb-2">Use this when you have a batch of similar emails (e.g., "New Lead" notifications).</p>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm">
                    Find all emails with the subject "New Lead Submission" from the last 7 days.

                    Extract the following details for each:
                    - Name
                    - Company
                    - Budget (if mentioned)
                    - Primary Pain Point

                    Format this as a CSV string that I can copy-paste into Excel.
                </div>
            </div>
            <p className="text-slate-600 text-sm">
                <strong>Advanced Move:</strong> If you have the filesystem MCP server enabled, you can change the last line to: <em>"Save this as 'leads.csv' to my Desktop."</em>
            </p>

            {/* WORKFLOW 3: SMART FOLLOW-UPS */}
            <h2 id="follow-ups">Workflow 3: Smart Follow-Ups</h2>
            <p>
                Writing a follow-up requires context. You need to remember what was said in the last meeting, checking previous threads, and finding the right tone. Claude does the recall for you.
            </p>

            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><MessageSquare className="text-purple-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm">
                    I need to follow up with [Client Name].

                    1. Search my email history with them to see our last conversation.
                    2. Draft a polite follow-up email checking in on the "Project X Proposal" we sent.
                    3. Reference the specific concerns they raised in their last email and ask if they've had time to review our answers.
                </div>
            </div>

            {/* WORKFLOW 4: DEEP SEARCH */}
            <h2 id="deep-search">Workflow 4: The "Deep Search"</h2>
            <p>
                Gmail search is okay. MCP search is semantic. It understands concepts, not just keywords.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Search className="text-orange-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm">
                    Find the email thread where we discussed the "Q3 Marketing Budget".

                    I don't remember the exact subject line, but it was probably between Sarah and me around July or August.

                    Summarize the final decided budget numbers.
                </div>
            </div>

            {/* SECTION: SUCCESS TIPS */}
            <h2 id="tips">Tips for Email MCP Success</h2>
            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white border border-slate-200 p-5 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Be Specific with Time</h3>
                    <p className="text-sm text-slate-600">Always specify "last 24 hours", "last week", or "since Tuesday". Otherwise, Claude might search your entire history, which is slower.</p>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Trust but Verify</h3>
                    <p className="text-sm text-slate-600">Claude usually gets drafts right, but always read before you send. Check names and specific numbers.</p>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Batch Processing</h3>
                    <p className="text-sm text-slate-600">Ask Claude to "Draft responses for all Urgent emails" in one go, rather than one by one.</p>
                </div>
                <div className="bg-white border border-slate-200 p-5 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Privacy First</h3>
                    <p className="text-sm text-slate-600">Remember, your email data is processed by the API. Follow your company's data policy.</p>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Want these prompts ready to go?</h2>
                <p className="text-blue-800 mb-8 max-w-xl mx-auto">
                    Download our "Email Productivity Pack" - a text file with these prompts optimized for copy-pasting.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Get the Prompts <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
