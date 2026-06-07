import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, Mail, Edit3, Inbox, Filter, Shield, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-01T19:41:07Z",
title: "Connect Claude to Gmail | MCP Made Simple",
  description: "Gmail MCP integration guide. Read, search, and draft emails with Claude AI. Triage your inbox faster. Setup instructions and workflows.",
  path: "/tools/gmail",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout updatedAt="2026-02-01T19:41:07Z"
      title="Connect Claude to Gmail"
      description="Read, search, draft, and manage your email with AI assistance."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The Gmail MCP integration lets Claude access your inbox - reading emails, searching your history, and helping you draft responses. Stop copy-pasting email content into Claude. Just ask Claude to read the thread and help you respond.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Search size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Search Emails</h3>
            <p className="text-slate-600 text-sm">Find emails by sender, subject, date, or content. Locate that important message instantly.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <Mail size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Read & Summarize</h3>
            <p className="text-slate-600 text-sm">Claude reads email threads and summarizes key points, action items, and decisions.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <Edit3 size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Draft Responses</h3>
            <p className="text-slate-600 text-sm">Get AI-drafted replies that match your tone and address all points in the original email.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <Inbox size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Triage Your Inbox</h3>
            <p className="text-slate-600 text-sm">Categorize unread emails by urgency and type. Know what needs attention first.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Show me my unread emails"</li>
              <li>"Find emails from john@company.com"</li>
              <li>"Search for emails about the Q3 budget"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Summarize the email thread with Sarah about the product launch"</li>
              <li>"What emails do I have that need a response today?"</li>
              <li>"Find all emails with attachments from this week"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Read my unread emails and categorize them as: urgent, needs response, FYI, or can wait"</li>
              <li>"Draft a reply to the latest email from my boss - keep it professional and address all their questions"</li>
              <li>"Find all emails where someone requested something from me this week and list the commitments I need to fulfill"</li>
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
          <li>Install the Gmail MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Authorize your Google account</li>
          <li>Grant Gmail read/compose permissions</li>
          <li>Test with a simple inbox search</li>
        </ol>
        <p>Add this to your configuration file:</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "gmail": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-gmail"]
    }
  }
}`}
        </pre>
        <p className="text-sm text-slate-600">
          Note: You'll be prompted to sign into Google and grant permissions. You can choose read-only access if you don't want Claude to send emails.
        </p>
        <p>
          <Link href="/guides/setup" className="font-bold text-blue-600 hover:underline">View Complete Setup Instructions →</Link>
        </p>

        {/* 5. SECURITY */}
        <h2 id="security">Security & Privacy</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="text-yellow-800 text-sm m-0">
            <strong>Important:</strong> Email often contains sensitive information. Consider starting with a secondary email account until you're comfortable with MCP security.
          </p>
        </div>
        <p>
          Claude only accesses emails when you ask. Your emails are processed locally, not stored. You control whether Claude can send or just read.
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
              <li>Triage emails faster</li>
              <li>Draft responses quickly</li>
              <li>Never miss follow-ups</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/solopreneurs" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Solopreneur Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Busy Pros</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Summarize long threads</li>
              <li>Catch up after vacation</li>
              <li>Extract action items</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Sales</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Track communications</li>
              <li>Draft outreach</li>
              <li>Find past conversations</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using Gmail</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/email-automation-workflows" className="text-blue-600 hover:underline font-medium">Email Automation Workflows</Link>
            <span className="text-slate-500"> — Master your inbox.</span>
          </li>
          <li>
            <Link href="/articles/automate-notion-gmail-slack" className="text-blue-600 hover:underline font-medium">Automate Notion, Gmail & Slack</Link>
            <span className="text-slate-500"> — The productivity trifecta.</span>
          </li>
          <li>
            <strong>Client Follow-Up Tracker:</strong> Never let emails fall through the cracks.
          </li>
        </ul>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 hover:underline font-medium">See all workflow examples →</Link>
        </p>

        {/* 8. WORKS WELL WITH */}
        <h2 id="integrations">Works Well With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose my-6">
          <Link href="/tools/google-calendar" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Calendar</div>
            <div className="text-xs text-slate-500 mt-1">Schedule Meetings</div>
          </Link>
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Notion</div>
            <div className="text-xs text-slate-500 mt-1">Save to Docs</div>
          </Link>
          <Link href="/tools/slack" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Slack</div>
            <div className="text-xs text-slate-500 mt-1">Coordinate</div>
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
            Can Claude send emails on my behalf?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">If you grant send permissions, yes. You can also configure read-only access if you prefer to send manually.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Does Claude read ALL my emails automatically?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">No. Claude only reads emails when you explicitly ask. It doesn't continuously monitor your inbox.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            What about confidential or encrypted emails?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Claude can read any email you have access to. Use judgment about which threads to share. For highly sensitive content, consider not using the integration.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can I use this with Google Workspace/business Gmail?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, if your organization allows third-party app access. Some organizations restrict this - check with IT.</p>
        </details>

        {/* 10. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect Gmail?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with email workflow templates and inbox automation examples.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
