import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Zap, MessageSquare, Briefcase, FileText, Code, CheckCircle, Search, Mail, Calendar } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "MCP Workflow Examples & Automations",
  description: "Real MCP workflow examples to automate email, calendar, documents, and more. Copy these automations to save 10-20 hours per week.",
  path: "/guides/workflows",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout
      title="MCP Workflow Examples: Real Automations You Can Build Today"
      description="Copy these workflows to save 10-20 hours per week. From simple email triage to complex multi-tool automations."
    >
      <div className="prose prose-lg prose-slate max-w-4xl mx-auto">

        <p className="lead text-xl text-slate-600 mb-8">
          MCP becomes powerful when you combine tools into workflows. Instead of asking Claude one question at a time, you can create automations that handle entire processes. This guide showcases real workflows you can copy, adapt, and use immediately.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-10 not-prose flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Impact</div>
            <div className="text-2xl font-bold text-slate-900">Save 15 hr/week</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200"></div>
          <div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Library</div>
            <div className="text-2xl font-bold text-slate-900">25+ Examples</div>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-200"></div>
          <div>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Tools</div>
            <div className="text-2xl font-bold text-slate-900">9 Connected</div>
          </div>
        </div>

        {/* 2. HOW WORKFLOWS WORK */}
        <h2 id="how-it-works">How MCP Workflows Work</h2>
        <p>
          A workflow is a series of steps Claude performs across your connected tools. You describe what you want in plain English, and Claude executes each step.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8 not-prose">
          <h3 className="font-bold text-blue-900 mb-2">Example: The "Morning Briefing"</h3>
          <p className="text-blue-800 text-sm italic mb-4">"Every morning, check my email for meeting requests, add them to my calendar, and create prep notes in Notion."</p>
          <ol className="space-y-2 text-sm text-blue-900">
            <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">1</div> Reads Gmail for meeting-related emails</li>
            <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">2</div> Extracts dates, times, and participants</li>
            <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">3</div> Creates calendar events in Google Calendar</li>
            <li className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center text-xs font-bold">4</div> Creates a Notion page with meeting prep template</li>
          </ol>
        </div>
        <p>The magic is in combining tools. Each tool alone is useful. Together, they're transformative.</p>

        {/* 3. QUICK WINS */}
        <h2 id="quick-wins">Quick Wins: 5-Minute Workflows</h2>
        <p>These require minimal setup and deliver immediate value.</p>

        <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
          <div className="border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-all bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-orange-600 font-bold text-sm uppercase">
              <Mail size={16} /> Gmail
            </div>
            <h3 className="font-bold text-lg mb-2">Smart Email Triage</h3>
            <p className="text-slate-600 text-sm mb-3 italic">"Categorize my unread emails as urgent, needs response, FYI, or spam. List the urgent ones first."</p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>⏱ Saves 30 min/day</span>
              <Link href="/tools/gmail" className="text-blue-600 hover:underline">Setup Gmail →</Link>
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-all bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-sm uppercase">
              <Search size={16} /> Google Drive
            </div>
            <h3 className="font-bold text-lg mb-2">Document Finder</h3>
            <p className="text-slate-600 text-sm mb-3 italic">"Find all documents related to [project] from the last 30 days and summarize what each one contains."</p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>⏱ Saves 15 min/search</span>
              <Link href="/tools/google-drive" className="text-blue-600 hover:underline">Setup Drive →</Link>
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-all bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-green-600 font-bold text-sm uppercase">
              <Calendar size={16} /> Calendar + Drive
            </div>
            <h3 className="font-bold text-lg mb-2">Meeting Prep</h3>
            <p className="text-slate-600 text-sm mb-3 italic">"What meetings do I have tomorrow? Find any relevant documents for each meeting."</p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>⏱ Saves 20 min/day</span>
              <Link href="/tools/google-calendar" className="text-blue-600 hover:underline">Setup Calendar →</Link>
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg p-5 hover:border-blue-300 transition-all bg-white shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-purple-600 font-bold text-sm uppercase">
              <MessageSquare size={16} /> Slack
            </div>
            <h3 className="font-bold text-lg mb-2">Slack Catch-Up</h3>
            <p className="text-slate-600 text-sm mb-3 italic">"Summarize what I missed in [channel] since yesterday. Highlight anything needing attention."</p>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>⏱ Saves 15 min/day</span>
              <Link href="/tools/slack" className="text-blue-600 hover:underline">Setup Slack →</Link>
            </div>
          </div>
        </div>

        {/* 4. PRODUCTIVITY */}
        <h2 id="productivity">Productivity Workflows</h2>
        <div className="space-y-6 not-prose my-8">
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-2">Weekly Planning</h3>
              <div className="flex gap-2 text-xs text-slate-500 mb-3">
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Calendar</span>
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Gmail</span>
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Notion</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">Reviews your calendar, checks email for commitments, and creates a prioritized plan in Notion.</p>
              <Link href="/articles/reduce-manual-work-with-ai" className="text-sm font-bold text-blue-600 hover:underline">Read Case Study →</Link>
            </div>
            <div className="md:w-1/3 bg-white p-4 rounded-lg border border-slate-200 text-xs text-slate-500">
              <strong>Impact:</strong><br />Saves 1-2 hours/week.<br /><br />
              <strong>Best For:</strong><br />Solopreneurs, Managers
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 p-6 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex-1">
              <h3 className="font-bold text-xl mb-2">Research Assistant</h3>
              <div className="flex gap-2 text-xs text-slate-500 mb-3">
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Drive</span>
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Notion</span>
              </div>
              <p className="text-slate-600 text-sm mb-4">Searches documents for a topic, compiles findings, and creates a research note in Notion.</p>
            </div>
            <div className="md:w-1/3 bg-white p-4 rounded-lg border border-slate-200 text-xs text-slate-500">
              <strong>Impact:</strong><br />Saves 2-3 hours/project.<br /><br />
              <strong>Best For:</strong><br />Consultants, Researchers
            </div>
          </div>
        </div>

        {/* 5. EMAIL WORKFLOWS */}
        <h2 id="email">Email Workflows</h2>
        <p>
          <Link href="/articles/email-automation-workflows" className="text-blue-600 hover:underline font-medium">Deep Dive: Email Automation Guide →</Link>
        </p>
        <ul className="space-y-4">
          <li>
            <strong>Email Draft Assistant:</strong> Reads a thread, drafts a response in your style. You review and send. (Gmail)
          </li>
          <li>
            <strong>Client Follow-Up Tracker:</strong> Identifies emails awaiting response, creates follow-up tasks in Notion. (Gmail + Notion)
          </li>
          <li>
            <strong>Newsletter Curator:</strong> Scans subscriptions, extracts insights, compiles into a briefing doc. (Gmail + Notion)
          </li>
        </ul>

        {/* 6. CALENDAR WORKFLOWS */}
        <h2 id="calendar">Calendar & Meeting Workflows</h2>
        <p>
          <Link href="/articles/meeting-scheduling-automation" className="text-blue-600 hover:underline font-medium">Deep Dive: Meeting Automation Guide →</Link>
        </p>
        <ul className="space-y-4">
          <li>
            <strong>Meeting Notes to Tasks:</strong> Reads notes, extracts action items, creates tasks in Asana/Trello. (Notion + Asana)
          </li>
          <li>
            <strong>Schedule Optimizer:</strong> Analyzes your week, identifies clusters and gaps, suggests improvements. (Calendar)
          </li>
          <li>
            <strong>Pre-Meeting Brief:</strong> Checks attendees, pulls recent emails/docs, creates a 1-page prep brief. (Calendar + Gmail + Drive)
          </li>
        </ul>

        {/* 7. DOCUMENT WORKFLOWS */}
        <h2 id="documents">Document Workflows</h2>
        <p>
          <Link href="/articles/document-workflow-automation" className="text-blue-600 hover:underline font-medium">Deep Dive: Document Automation Guide →</Link>
        </p>
        <ul className="space-y-4">
          <li>
            <strong>Report Generator:</strong> Pulls data from multiple docs, compiles formatted report. (Drive + Notion)
          </li>
          <li>
            <strong>Document Organizer:</strong> Scans messy folders, suggests structure, renames files, moves them. (Drive)
          </li>
          <li>
            <strong>Contract Reviewer:</strong> Extracts key terms/dates from contracts, creates summary. (Drive)
          </li>
        </ul>

        {/* 8. TEAM WORKFLOWS */}
        <h2 id="team">Team & Operations Workflows</h2>
        <p>
          <Link href="/articles/operations-team-workflows" className="text-blue-600 hover:underline font-medium">Deep Dive: Ops Team Guide →</Link>
        </p>
        <ul className="space-y-4">
          <li>
            <strong>Status Update Compiler:</strong> Collects updates from Slack/Asana, compiles weekly report. (Slack + Asana)
          </li>
          <li>
            <strong>Onboarding Automation:</strong> Creates checklists, sends welcomes, schedules intros. (Notion + Slack + Gmail)
          </li>
          <li>
            <strong>Knowledge Base Updater:</strong> Monitors Slack for Q&A, drafts KB articles. (Slack + Notion)
          </li>
        </ul>

        {/* 9. DEVELOPER WORKFLOWS */}
        <h2 id="developers">Developer Workflows</h2>
        <p>
          <Link href="/articles/developer-productivity-workflows" className="text-blue-600 hover:underline font-medium">Deep Dive: Developer Guide →</Link>
        </p>
        <ul className="space-y-4">
          <li>
            <strong>PR Summary Bot:</strong> Monitors repo, summarizes changes, posts to Slack. (GitHub + Slack)
          </li>
          <li>
            <strong>Documentation Generator:</strong> Reads code, generates docs, updates Notion. (GitHub + Notion)
          </li>
          <li>
            <strong>Bug Report Triage:</strong> Categorizes issues, suggests related ones, adds labels. (GitHub)
          </li>
        </ul>

        {/* 10. MULTI-TOOL POWER */}
        <h2 id="power-workflows">Multi-Tool Power Workflows</h2>
        <div className="bg-slate-900 text-slate-300 p-8 rounded-2xl not-prose my-8">
          <h3 className="text-white text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap className="text-yellow-400" /> The Daily Autopilot
          </h3>
          <p className="mb-6 text-lg">
            This is the workflow that saves people 20+ hours per week.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <strong className="text-white block mb-2">Morning Routine:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Summarize overnight emails & Slack messages</li>
                <li>Check calendar for today's meetings</li>
                <li>Create daily prioritized task list in Notion</li>
              </ul>
            </div>
            <div>
              <strong className="text-white block mb-2">Evening Routine:</strong>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Review completed tasks</li>
                <li>Summarize outstanding items</li>
                <li>Draft tomorrow's agenda</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-700 text-center">
            <Link href="/articles/20-hours-saved-per-week" className="text-white font-bold hover:text-blue-400 transition-colors">
              Read the step-by-step setup guide →
            </Link>
          </div>
        </div>

        {/* 11. BUILD YOUR OWN */}
        <h2 id="build-your-own">Build Your Own Workflow</h2>
        <ol>
          <li><strong>Identify the Task:</strong> What do you do repeatedly that takes &gt;10 mins?</li>
          <li><strong>Map Tools:</strong> Which MCP servers do you need (Gmail, Drive, etc.)?</li>
          <li><strong>Write Instructions:</strong> Describe the process plainly, as if to an assistant.</li>
          <li><strong>Test & Refine:</strong> Run it, see where Claude stumbles, and clarify.</li>
          <li><strong>Save Prompt:</strong> Store it in Notion for easy reuse.</li>
        </ol>

        {/* 12. RESOURCES */}
        <h2 id="resources">Workflow Resources</h2>
        <div className="not-prose grid md:grid-cols-3 gap-6 my-8">
          <Link href="/start-here" className="block p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-all group">
            <div className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">Quick Start Kit</div>
            <p className="text-sm text-slate-600">Get 10 ready-to-use workflows you can copy-paste.</p>
          </Link>
          <Link href="/articles?category=Workflows" className="block p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-all group">
            <div className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">All Articles</div>
            <p className="text-sm text-slate-600">Browse our full library of workflow tutorials.</p>
          </Link>
          <Link href="/mastery" className="block p-6 bg-slate-50 border border-slate-200 rounded-xl hover:shadow-md transition-all group">
            <div className="font-bold text-slate-900 group-hover:text-blue-600 mb-2">MCP Mastery</div>
            <p className="text-sm text-slate-600">Join our hands-on course for advanced building.</p>
          </Link>
        </div>

        {/* 13. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Get 10 Ready-to-Use Workflows</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Stop building from scratch. Our Quick Start Kit includes the most popular workflows pre-configured and ready to run.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Download Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
