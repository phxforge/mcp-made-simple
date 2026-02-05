import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BarChart3, FileText, AlertTriangle, Users, Calendar, Copy, Receipt, Search } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "Operations Team Workflows with MCP | MCP Made Simple",
    description: "Automate status reports, cross-department updates, and team coordination. Cut everyday ops drudgery.",
    path: "/articles/operations-team-workflows",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="Operations Team Workflows with MCP"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Operations teams are the connective tissue of every organization. You're also drowning in status updates, data entry, and cross-team coordination. These workflows automate the operational overhead so your team can focus on actually improving the business.
            </p>

            {/* 2. PREREQUISITES */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">What Your Team Needs</h2>
                <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Claude Desktop for each team member</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> <Link href="/tools/slack" className="text-blue-600 hover:underline">Slack</Link> (Internal comms)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> <Link href="/tools/google-drive" className="text-blue-600 hover:underline">Google Drive</Link> (Documentation)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> <Link href="/tools/asana" className="text-blue-600 hover:underline">Asana/Trello</Link> (Project management)</li>
                </ul>
            </div>

            {/* WORKFLOW 1: STATUS COMPILER */}
            <h2 id="status">Workflow 1: The Weekly Status Compiler</h2>
            <p>
                Every Monday, you spend 2 hours pinging people for updates, then another hour compiling them into a report. This handles 90% of that work instantly.
            </p>

            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><BarChart3 className="text-blue-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Compile the weekly operations status report.
                    Pull from the last 7 days:
                    FROM SLACK: Key updates from #ops-team, #projects, #announcements
                    FROM ASANA: Tasks completed this week & tasks currently in progress
                    FROM DRIVE: Documents updated this week in the "Operations" folder

                    FORMAT AS:
                    **Weekly Ops Status: [DATE RANGE]**

                    **Highlights**
                    Top 3-5 accomplishments

                    **In Progress**
                    Major initiatives and their status

                    **Blockers & Issues**
                    What needs attention

                    **Next Week Focus**
                    Planned priorities

                    Keep it scannable. Executives read this in 2 minutes.
                </div>
            </div>

            {/* WORKFLOW 2: SOP GENERATOR */}
            <h2 id="sop">Workflow 2: The "Instant SOP" Generator</h2>
            <p>
                Process documentation usually happens in messy notes or Slack threads that get lost. Turn those raw instructions into polished Standard Operating Procedures (SOPs).
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><FileText className="text-green-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Here are some raw notes/brain dump on "How to onboard a new vendor":
                    [PASTE NOTES]

                    Please transform this into a professional SOP (Standard Operating Procedure).
                    Include:
                    1. **Purpose & Scope**
                    2. **Prerequisites** (What access is needed?)
                    3. **Step-by-Step Instructions** (Numbered list)
                    4. **Troubleshooting** (Common issues)

                    Save the output as a Markdown file named "SOP - Vendor Onboarding.md" to my Desktop.
                </div>
            </div>

            {/* WORKFLOW 3: CONTRACT WATCHDOG */}
            <h2 id="contracts">Workflow 3: The Contract Renewal Watchdog</h2>
            <p>
                Missing a renewal date can cost thousands in unwanted auto-renewals. Scan your repository for dates.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Receipt className="text-purple-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Scan the "Legal/Contracts" folder in my Google Drive.

                    1. Identify all contracts with an "End Date" or "Renewal Date" within the next 90 days.
                    2. Extract the Vendor Name, Cost, and specific Renewal/Termination clause for each.
                    3. Create a summary table sorted by date, with a "Days Remaining" column.
                </div>
            </div>

            {/* WORKFLOW 4: INCIDENT TIMELINE */}
            <h2 id="incidents">Workflow 4: Incident Timeline Creator</h2>
            <p>
                When something breaks, building the post-mortem timeline is tedious. Claude can look back at the chaos and order it chronologically.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><AlertTriangle className="text-orange-500" /> The Prompt</h3>
                <p className="text-xs text-slate-500 mb-2 italic">Use this after an incident is resolved.</p>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Review the history of the #production-incidents Slack channel for the last 24 hours.

                    Create a chronological timeline of the recent outage.
                    For each entry include:
                    - Time (UTC)
                    - Event Description (Alert fired, Status update, Fix deployed)
                    - Who was involved

                    Then, draft a "Root Cause Analysis" summary based on the engineering discussion in the thread.
                </div>
            </div>

            {/* WORKFLOW 5: RESOURCE ALLOCATION */}
            <h2 id="resources">Workflow 5: Resource Heat Check</h2>
            <p>
                Who is overloaded? Who has capacity? Instead of asking everyone, check the data.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Users className="text-blue-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Analyze our Asana/Linear project board.
                    1. List each team member.
                    2. Count their total assigned tasks and how many are marked "In Progress" or "Overdue".
                    3. Flag any individual who seems overloaded (more than 5 active tasks).
                    4. Identify any tasks that haven't been touched in over 2 weeks.
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-600 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Scale Your Ops Team</h2>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                    Give every team member the power of an AI analyst. Our course teaches team deployment and security best practices.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/mastery" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                        Explore Team Training <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
