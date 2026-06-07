import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, MessageSquare, Bell, List, Users, Shield, Hash, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-01T19:36:10Z",
title: "Connect Claude to Slack | MCP Made Simple",
  description: "Slack MCP integration guide. Search messages, summarize channels, and automate team updates with Claude AI. Setup instructions included.",
  path: "/tools/slack",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout updatedAt="2026-02-01T19:36:10Z"
      title="Connect Claude to Slack"
      description="Search conversations, post updates, and automate team communication with AI."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The Slack MCP integration lets Claude access your workspace conversations, search message history, and help you stay on top of team communication. Instead of scrolling through channels to catch up, ask Claude to summarize what you missed.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Search size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Search Messages</h3>
            <p className="text-slate-600 text-sm">Find conversations by keyword, person, or channel. Locate that discussion you remember but can't find.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <Bell size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Catch Up on Channels</h3>
            <p className="text-slate-600 text-sm">Get summaries of channel activity while you were away. Never miss important updates.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <MessageSquare size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Post Messages</h3>
            <p className="text-slate-600 text-sm">Draft and send messages to channels or DMs through Claude.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <List size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Extract Action Items</h3>
            <p className="text-slate-600 text-sm">Pull out decisions, commitments, and to-dos from lengthy threads.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What happened in #general today?"</li>
              <li>"Find messages from @sarah about the product launch"</li>
              <li>"Show me unread messages in my DMs"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Summarize the discussion in #engineering from this week"</li>
              <li>"What decisions were made in #marketing yesterday?"</li>
              <li>"Find all messages mentioning the Q3 deadline"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What action items came out of the #project-alpha channel this week? Who owns each one?"</li>
              <li>"Compare what #sales and #support are saying about the new feature"</li>
              <li>"Post a summary of today's #standup to #leadership"</li>
            </ul>
          </div>
        </div>

        {/* 4. SETUP */}
        <h2 id="setup">Setup Guide</h2>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 not-prose mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Claude Desktop</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Slack Token</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> ~15 Minutes</span>
          </div>
        </div>
        <ol>
          <li>Install the Slack MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Authorize with your Slack workspace</li>
          <li>Test with a simple channel search</li>
        </ol>
        <p>Add this to your configuration file (requires admin approval in most orgs):</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-slack"],
      "env": {
        "SLACK_TOKEN": "your-slack-token"
      }
    }
  }
}`}
        </pre>
        <p>
          <Link href="/guides/setup" className="font-bold text-blue-600 hover:underline">View Complete Setup Instructions →</Link>
        </p>

        {/* 5. SECURITY */}
        <h2 id="security">Security & Privacy</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="text-yellow-800 text-sm m-0">
            <strong>Important:</strong> Slack messages often contain sensitive business information. Review your organization's policies before connecting.
          </p>
        </div>
        <p>
          Claude only accesses channels you have permission to view. Private channels and DMs require explicit authorization.
          Messages are processed locally through the MCP server.
        </p>
        <p>
          <Link href="/guides/is-mcp-safe" className="font-bold text-blue-600 hover:underline">Read our complete Security Guide →</Link>
        </p>

        {/* 6. USE CASES */}
        <h2 id="use-cases">Best Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-6">
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Remote Teams</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Catch up after time zone gaps</li>
              <li>Summarize async discussions</li>
              <li>Never miss important decisions</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Managers</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Monitor activity w/o micromanaging</li>
              <li>Extract action items</li>
              <li>Compile weekly updates</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Developers</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Search technical discussions</li>
              <li>Track bug reports</li>
              <li>Automate standup summaries</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/developers" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Developer Guide →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using Slack</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/operations-team-workflows" className="text-blue-600 hover:underline font-medium">Operations Team Workflows</Link>
            <span className="text-slate-500"> — Automate updates and reporting.</span>
          </li>
          <li>
            <Link href="/articles/automate-notion-gmail-slack" className="text-blue-600 hover:underline font-medium">Automate Notion, Gmail & Slack</Link>
            <span className="text-slate-500"> — The trifecta workflow.</span>
          </li>
          <li>
            <strong>Status Update Compiler:</strong> Gather updates across channels automatically.
          </li>
        </ul>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 hover:underline font-medium">See all workflow examples →</Link>
        </p>

        {/* 8. WORKS WELL WITH */}
        <h2 id="integrations">Works Well With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose my-6">
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Notion</div>
            <div className="text-xs text-slate-500 mt-1">Documentation</div>
          </Link>
          <Link href="/tools/gmail" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Gmail</div>
            <div className="text-xs text-slate-500 mt-1">Communication</div>
          </Link>
          <Link href="/tools/github" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">GitHub</div>
            <div className="text-xs text-slate-500 mt-1">Code Links</div>
          </Link>
          <Link href="/tools/asana" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Asana</div>
            <div className="text-xs text-slate-500 mt-1">Tasks</div>
          </Link>
        </div>

        {/* 9. FAQ */}
        <h2 id="faq">FAQ</h2>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude access private channels?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Only if you explicitly grant permission. By default, Claude accesses channels your Slack token has permission to view.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Will my coworkers know I'm using Claude with Slack?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">If Claude posts messages, they'll appear as coming from the connected app. Searching and reading are not visible to others.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Does this work with Slack Enterprise Grid?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, but enterprise workspaces often have additional approval requirements. Check with your IT team.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude read message attachments and files?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Text content in messages is accessible. File attachments may require additional setup depending on the MCP server.</p>
        </details>

        {/* 10. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect Slack?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with pre-configured settings and team workflow examples.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
