import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, Calendar, Plus, Clock, BarChart2, Shield, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "Connect Claude to Google Calendar | MCP Made Simple",
  description: "Google Calendar MCP integration guide. Check schedules, create events, and automate calendar management with Claude AI. Setup instructions included.",
  path: "/tools/google-calendar",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout
      title="Connect Claude to Google Calendar"
      description="Check your schedule, create events, and automate calendar management with AI."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The Google Calendar MCP integration lets Claude see your schedule, create events, and help you manage your time. Ask Claude what's on your calendar tomorrow, find time for a meeting, or automatically schedule follow-ups based on your email conversations.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Calendar size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">View Your Schedule</h3>
            <p className="text-slate-600 text-sm">Check what's on your calendar for any day, week, or time range. Get a quick overview without opening the app.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <Plus size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Create Events</h3>
            <p className="text-slate-600 text-sm">Schedule meetings, appointments, and reminders through natural language commands.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <Clock size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Find Free Time</h3>
            <p className="text-slate-600 text-sm">Ask Claude to identify open slots in your schedule for new meetings.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <BarChart2 size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Analyze Your Time</h3>
            <p className="text-slate-600 text-sm">Understand how you spend your time - meeting load, focus time, patterns.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What meetings do I have today?"</li>
              <li>"Show me my schedule for next week"</li>
              <li>"Do I have anything at 3pm tomorrow?"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Create a meeting called 'Team Standup' for tomorrow at 9am, 30 minutes"</li>
              <li>"When is my next free hour this week?"</li>
              <li>"Find all meetings with Sarah in the next 2 weeks"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Look at my calendar for next week and tell me which days are too meeting-heavy for deep work"</li>
              <li>"Check my email for meeting requests and add them to my calendar"</li>
              <li>"I need a 2-hour focus block this week - when could I schedule it without conflicts?"</li>
            </ul>
          </div>
        </div>

        {/* 4. SETUP */}
        <h2 id="setup">Setup Guide</h2>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 not-prose mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Claude Desktop</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Google Account</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> ~10 Minutes</span>
          </div>
        </div>
        <ol>
          <li>Install the Google Calendar MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Authorize your Google account</li>
          <li>Grant calendar read/write permissions</li>
          <li>Test with "What's on my calendar today?"</li>
        </ol>
        <p>Add this to your configuration file:</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "google-calendar": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-gcalendar"]
    }
  }
}`}
        </pre>
        <p className="text-sm text-slate-600">
          Note: You'll choose whether Claude can only view your calendar or also create/modify events during authorization.
        </p>
        <p>
          <Link href="/guides/setup" className="font-bold text-blue-600 hover:underline">View Complete Setup Instructions →</Link>
        </p>

        {/* 5. SECURITY */}
        <h2 id="security">Security & Privacy</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="text-yellow-800 text-sm m-0">
            <strong>Important:</strong> Calendar events often reveal sensitive information. Consider using a work-specific calendar integration rather than a personal calendar with private events.
          </p>
        </div>
        <p>
          Claude sees events on calendars you authorize. You control read-only vs. read-write access. Event details (titles, attendees, locations) are visible to Claude.
        </p>
        <p>
          <Link href="/guides/is-mcp-safe" className="font-bold text-blue-600 hover:underline">Read our complete Security Guide →</Link>
        </p>

        {/* 6. USE CASES */}
        <h2 id="use-cases">Best Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-6">
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Solopreneurs</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Quick schedule checks</li>
              <li>Auto-scheduling</li>
              <li>Weekly planning</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/solopreneurs" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Solopreneur Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Busy Pros</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Meeting prep</li>
              <li>Find deep work time</li>
              <li>Analyze time usage</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Coordinators</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Schedule team meetings</li>
              <li>Track recurring events</li>
              <li>Prepare agendas</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using Google Calendar</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/meeting-scheduling-automation" className="text-blue-600 hover:underline font-medium">Meeting Scheduling Automation</Link>
            <span className="text-slate-500"> — Stop the email tag.</span>
          </li>
          <li>
            <Link href="/articles/10-workflows-every-business-needs" className="text-blue-600 hover:underline font-medium">10 Workflows Every Business Needs</Link>
            <span className="text-slate-500"> — Including calendar management.</span>
          </li>
          <li>
            <strong>Focus Time Finder:</strong> Identify and protect time for deep work.
          </li>
        </ul>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 hover:underline font-medium">See all workflow examples →</Link>
        </p>

        {/* 8. WORKS WELL WITH */}
        <h2 id="integrations">Works Well With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose my-6">
          <Link href="/tools/gmail" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Gmail</div>
            <div className="text-xs text-slate-500 mt-1">Email Context</div>
          </Link>
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Notion</div>
            <div className="text-xs text-slate-500 mt-1">Meeting Notes</div>
          </Link>
          <Link href="/tools/slack" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Slack</div>
            <div className="text-xs text-slate-500 mt-1">Updates</div>
          </Link>
          <Link href="/tools/google-drive" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Drive</div>
            <div className="text-xs text-slate-500 mt-1">Attachments</div>
          </Link>
        </div>

        {/* 9. FAQ */}
        <h2 id="faq">FAQ</h2>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude access shared team calendars?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, if you have permission to view them. Claude sees what you see in Google Calendar.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Will Claude send calendar invites to other people?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">If you grant write access, Claude can create events that send invites. Use read-only access if you want to prevent this.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude see private/hidden event details?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Claude sees full details of events you can see. Mark events as private in Google Calendar if you want to hide details from all integrations.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude reschedule or cancel meetings?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">With write access, yes. Claude can modify and delete events. Use read-only if you prefer to make changes manually.</p>
        </details>

        {/* 10. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect Google Calendar?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with calendar workflow templates and scheduling automation examples.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
