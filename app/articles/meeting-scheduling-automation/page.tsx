import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Users, FileText, CheckCircle, Copy, Search, MessageSquare, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-02T16:09:40Z",
title: "Meeting Scheduling Automation with MCP | MCP Made Simple",
    description: "Automate meeting prep, scheduling conflicts, and follow-ups. Cut the busywork out of your calendar.",
    path: "/articles/meeting-scheduling-automation",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout updatedAt="2026-02-02T16:09:40Z"
            title="Meeting Scheduling Automation with MCP"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Meetings aren't the problem. It's everything around them—the prep, the scheduling back-and-forth, the follow-ups that never happen. These workflows automate the busywork so you can focus on the meetings themselves. From prep to follow-up, we've got you covered.
            </p>

            {/* 2. PREREQUISITES */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">What You Need</h2>
                <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Claude Desktop installed</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> <Link href="/tools/google-calendar" className="text-blue-600 hover:underline">Google Calendar connected</Link></li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> <Link href="/tools/gmail" className="text-blue-600 hover:underline">Gmail</Link> (Recommended for context)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> <Link href="/tools/google-drive" className="text-blue-600 hover:underline">Google Drive</Link> (Optional for deep prep)</li>
                </ul>
            </div>

            {/* WORKFLOW 1: DAILY BRIEFING */}
            <h2 id="briefing">Workflow 1: The Daily Schedule Briefing</h2>
            <p>
                You check your calendar, see 6 meetings, but don't actually know what each one needs from you. This prompt gives you a "Chief of Staff" style briefing.
            </p>

            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="text-blue-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Review my calendar for today. For each meeting:

                    1. Meeting name and time
                    2. Who's attending (and their role if known)
                    3. What's this meeting likely about? (Check recent emails with attendees)
                    4. Do I need to prepare anything?
                    5. Any relevant documents in my Drive?

                    Format as a briefing I can review in 5 minutes over coffee.
                </div>
            </div>

            {/* WORKFLOW 2: SCHEDULING CONFLICTS */}
            <h2 id="conflicts">Workflow 2: The Time Finder</h2>
            <p>
                Finding a slot that works for 5 people is a nightmare. Instead of playing Tetris manually, let Claude analyze the slots.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Calendar className="text-green-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    I need to schedule a 45-minute syncing meeting with [Person A] and [Person B] sometime next week.

                    1. Look at my calendar for open slots between 9am and 5pm.
                    2. (Optional: "Check my email for their stated availability")
                    3. Propose 3 options that minimize conflict with my "Deep Work" blocks.
                    4. Draft an email to them proposing these times.
                </div>
            </div>
            <p className="text-sm bg-yellow-50 text-yellow-800 p-4 rounded-lg flex gap-3 items-start border border-yellow-200">
                <AlertTriangle size={18} className="mt-0.5 shrink-0" />
                <strong>Note:</strong> Claude can currently only see <em>your</em> calendar details fully. It can't see others' free/busy status unless you have that data synced or pasted into context.
            </p>

            {/* WORKFLOW 3: INTELLIGENT PREP */}
            <h2 id="prep">Workflow 3: Intelligent Meeting Prep</h2>
            <p>
                Walking into a client meeting and forgetting exactly what you promised last time is painful. This workflow builds your "cheat sheet."
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Search className="text-purple-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    I have a meeting with [Client Name] about "[Project X]" at 2pm.

                    Please prepare me:
                    1. Summarize the last 3 emails exchanged with them.
                    2. Find the latest PDF proposal in my Drive related to this project.
                    3. List any "Outstanding Action Items" I promised them.
                    4. Suggest 3 talking points to move the project forward.
                </div>
            </div>

            {/* WORKFLOW 4: THE "RUNNING LATE" */}
            <h2 id="running-late">Workflow 4: The "Running Late" Triage</h2>
            <p>
                When your current meeting runs over, the domino effect ruins your day. Fix it fast.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Users className="text-orange-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    I'm running 15 minutes late for my next meeting.

                    1. Check who I am meeting with next.
                    2. Draft a polite Slack DM or Email (depending on if they are internal/external) letting them know.
                    3. Check if this delay conflicts with the meeting *after* that one, and flag if I need to reschedule.
                </div>
            </div>

            {/* WORKFLOW 5: FOLLOW-UP AUTOMATION */}
            <h2 id="follow-up">Workflow 5: Instant Follow-Ups</h2>
            <p>
                The meeting is done. You have messy notes. You need to send a summary. Usually, this takes 20 minutes. Now it takes 2.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><MessageSquare className="text-blue-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Here are my raw notes from the meeting with [Company]:
                    [PASTE NOTES]

                    1. Clean this into a professional Minutes of Meeting summary.
                    2. Extract the Action Items table (Who, What, When).
                    3. Draft a follow-up email to the attendees thanking them and including the summary.
                    4. (Optional) Create a CSV format of the tasks so I can import to Asana.
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Want more workflows?</h2>
                <p className="text-blue-800 mb-8 max-w-xl mx-auto">
                    Meeting scheduling is just one part of the puzzle. See our full library of business automations.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/guides/workflows" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Browse Automation Library <ArrowRight size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
