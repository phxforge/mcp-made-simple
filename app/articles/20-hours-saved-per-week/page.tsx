import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, TrendingUp, Calendar, FileText, Mail, BarChart } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "20 Hours Saved Per Week: A Solopreneur Case Study | MCP Made Simple",
    description: "How a freelance consultant automated 15 hours of admin work using MCP. A week-by-week breakdown.",
    path: "/articles/20-hours-saved-per-week",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="20 Hours Saved Per Week: A Solopreneur Case Study"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Sarah was working 60-hour weeks. Not because she had too many clients—but because admin work was eating her alive. This is how she used MCP to reclaim 20 hours per week, and how you can do the same.
            </p>

            {/* 2. THE BEFORE PICTURE */}
            <h2 id="before">The Before Picture</h2>
            <p>
                Sarah's typical week before MCP was a grind. She's a freelance marketing consultant with 5 active clients, which meant 5 different project trackers, 5x the emails, and 5x the reporting.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6 not-prose">
                <h3 className="font-bold text-lg mb-4 text-slate-900">Weekly Time Breakdown (Before)</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-slate-500 font-medium border-b border-slate-200">
                            <tr>
                                <th className="pb-2">Task</th>
                                <th className="pb-2 text-right">Time/Week</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            <tr className="border-b border-slate-100">
                                <td className="py-2 flex items-center gap-2"><Mail size={16} className="text-slate-400" /> Email processing</td>
                                <td className="py-2 text-right">5 hours</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="py-2 flex items-center gap-2"><BarChart size={16} className="text-slate-400" /> Status updates & data entry</td>
                                <td className="py-2 text-right">4 hours</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="py-2 flex items-center gap-2"><Calendar size={16} className="text-slate-400" /> Meeting prep & research</td>
                                <td className="py-2 text-right">3 hours</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="py-2 flex items-center gap-2"><FileText size={16} className="text-slate-400" /> Reporting & summaries</td>
                                <td className="py-2 text-right">3 hours</td>
                            </tr>
                            <tr className="border-b border-slate-100">
                                <td className="py-2 flex items-center gap-2"><Clock size={16} className="text-slate-400" /> Context switching overhead</td>
                                <td className="py-2 text-right">~5 hours</td>
                            </tr>
                            <tr className="font-bold text-red-600 bg-red-50">
                                <td className="py-3 pl-2 rounded-l">Total Admin Overhead</td>
                                <td className="py-3 pr-2 text-right rounded-r">20 HOURS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p className="text-slate-600 italic">"That's half a work week—gone. Not to client work. Not to growing her business. Just... admin."</p>

            {/* 3. THE TURNING POINT */}
            <h2 id="turning-point">The Turning Point</h2>
            <p>
                Sarah heard about MCP from a colleague. Skeptical but desperate, she decided to try it. She wasn't technical—she described herself as "barely able to update WordPress"—but she was willing to spend one weekend figuring it out.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4 text-slate-800 text-sm">
                <strong>The Goal:</strong> "Just make email less painful. That's all I wanted at first."
            </div>

            {/* 4. WEEK 1: EMAIL TRIAGE */}
            <h2 id="week-1">Week 1: Email Triage</h2>
            <p>
                She started small. She installed Claude Desktop and connected it to her Gmail account (using a guide like our <Link href="/articles/convert-gmail-to-tasks" className="text-blue-600 underline">Gmail Setup Guide</Link>).
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2">The Setup</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li><strong>Time spent:</strong> 30 minutes</li>
                    <li><strong>Tools connected:</strong> Gmail</li>
                    <li><strong>The workflow:</strong> A single morning prompt to categorize and summarize the inbox.</li>
                </ul>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm">
                Review my unread emails. Categorize each as:

                1. **Client** (needs response today)
                2. **Admin** (can batch later)
                3. **Newsletter/FYI** (archive unless interesting)
                4. **Spam/Unsubscribe** candidate

                Start with Client emails. For each, give me a one-sentence summary of what they need and a drafted short response.
            </div>
            <p className="mt-4">
                <strong>The Result:</strong> Sarah processed her Monday morning inbox in 15 minutes instead of 2 hours. She simply reviewed Claude's drafts, tweaked them, and hit send.
                <br />
                <span className="text-green-600 font-bold">Time Saved: ~4 hours/week</span>
            </p>

            {/* 5. WEEK 2: MEETING PREP */}
            <h2 id="week-2">Week 2: Meeting Prep</h2>
            <p>
                Emboldened by her email success, Sarah connected <strong>Google Drive</strong> and <strong>Notion</strong>. Her goal: stop the frantic searching for documents 10 minutes before every client call.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2">The Workflow</h3>
                <p className="text-slate-600 mb-2">Before a call with "Acme Corp", she runs this prompt:</p>
            </div>
            <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm">
                Find all emails from "Acme Corp" in the last 7 days.
                Also check my Notion database "Projects" for the Acme Corp page.

                Give me a briefing document that lists:
                - The status of their current deliverables
                - Any outstanding questions they asked in email
                - The last 3 decisions we logged in Notion

                Create a new Notion page called "Meeting Prep - Acme - [Date]" with this info.
            </div>
            <p className="mt-4">
                <strong>The Result:</strong> No more searching. No more "let me find that file." She showed up to meetings fully prepped in seconds.
                <br />
                <span className="text-green-600 font-bold">Time Saved: ~3 hours/week</span>
            </p>

            {/* 6. WEEK 3: REPORTING */}
            <h2 id="week-3">Week 3: Automated Reporting</h2>
            <p>
                The biggest time sink was Friday reporting. Compiling status updates for 5 clients used to ruin her weekends. Now that Claude could see her emails and tasks, she automated it.
            </p>
            <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm">
                Draft a weekly status update email to [Client Name].

                Base it on the tasks I completed in Notion marked "Done" this week, and the sent emails where I delivered files to them.

                Format it as:
                - Completed this week
                - Next week's focus
                - Decisions needed from you
            </div>
            <p className="mt-4">
                <strong>The Result:</strong> Reports that took 2 hours now took 10 minutes to review and send.
                <br />
                <span className="text-green-600 font-bold">Time Saved: ~3 hours/week</span>
            </p>

            {/* 7. THE RESULTS (ROI) */}
            <h2 id="results">The Results</h2>
            <p>
                After one month, Sarah re-calculated her time. The difference was staggering.
            </p>
            <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-lg mb-4 text-center">Admin Time / Week</h3>
                    <div className="flex items-end justify-center gap-4 h-32">
                        <div className="w-16 bg-red-100 border border-red-200 rounded-t relative group h-full">
                            <span className="absolute bottom-2 w-full text-center font-bold text-red-800">20h</span>
                            <span className="absolute -bottom-6 w-full text-center text-xs text-slate-500">Before</span>
                        </div>
                        <div className="w-16 bg-green-100 border border-green-200 rounded-t relative group h-1/4">
                            <span className="absolute bottom-2 w-full text-center font-bold text-green-800">5h</span>
                            <span className="absolute -bottom-6 w-full text-center text-xs text-slate-500">After</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Business Impact</h3>
                    <ul className="space-y-3 text-slate-700">
                        <li className="flex gap-2"><CheckCircle className="text-green-500 shrink-0" /> <strong>15 hours reclaimed</strong> every single week.</li>
                        <li className="flex gap-2"><CheckCircle className="text-green-500 shrink-0" /> <strong>Took on 2 new clients</strong> with the extra time.</li>
                        <li className="flex gap-2"><CheckCircle className="text-green-500 shrink-0" /> <strong>Zero weekend work</strong> for the first time in years.</li>
                        <li className="flex gap-2"><CheckCircle className="text-green-500 shrink-0" /> <strong>Better client service</strong> due to faster response times.</li>
                    </ul>
                </div>
            </div>

            {/* 8. NEXT STEPS */}
            <h2 id="next">Ready to Reclaim Your Time?</h2>
            <p>
                Sarah isn't a computer genius. She's just a consultant who got tired of busywork. You can build this exact system today.
            </p>

            <div className="bg-blue-900 rounded-2xl p-8 text-center text-white not-prose my-12 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Start Your Transformation</h3>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                    Download the exact configuration files and prompts Sarah used in our free kit.
                </p>
                <Link href="/start-here" className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
                    Get the Automation Kit
                </Link>
                <p className="mt-4 text-sm text-blue-300">Includes configs for Gmail, Drive, Notion, and Sarah's 3 key prompts.</p>
            </div>

        </ArticleLayout>
    );
}
