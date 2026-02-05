import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, Trello, Plus, Move, BarChart2, Shield, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "Connect Claude to Trello | MCP Made Simple",
  description: "Trello MCP integration guide. Manage boards, create cards, and automate project tasks with Claude AI. Setup instructions and workflows included.",
  path: "/tools/trello",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout
      title="Connect Claude to Trello"
      description="Manage boards, create cards, and automate task workflows with AI assistance."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The Trello MCP integration lets Claude interact with your Trello boards - viewing cards, creating tasks, moving items between lists, and helping you stay on top of projects. Instead of manually updating boards, ask Claude to manage your tasks through natural conversation.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Trello size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">View Boards & Cards</h3>
            <p className="text-slate-600 text-sm">See what's on any board, check card details, and get project overviews instantly.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <Plus size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Create Cards</h3>
            <p className="text-slate-600 text-sm">Add new tasks with descriptions, due dates, labels, and assignments through conversation.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <Move size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Move & Update Cards</h3>
            <p className="text-slate-600 text-sm">Move cards between lists, update descriptions, mark complete - all via Claude.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <BarChart2 size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Generate Reports</h3>
            <p className="text-slate-600 text-sm">Get summaries of board status, overdue tasks, and team workload.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What cards are on my 'In Progress' list?"</li>
              <li>"Show me all my Trello boards"</li>
              <li>"Find cards assigned to me that are due this week"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Create a new card called 'Review Q3 metrics' in the 'To Do' list with a due date of Friday"</li>
              <li>"Move all cards labeled 'Urgent' to the top of their lists"</li>
              <li>"What cards are overdue across all my boards?"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Give me a status report on the 'Product Launch' board - what's done, in progress, and blocked?"</li>
              <li>"Find all cards I created last month that are still open and summarize their status"</li>
              <li>"Create cards in 'To Do' for each action item from today's meeting notes: [paste notes]"</li>
            </ul>
          </div>
        </div>

        {/* 4. SETUP */}
        <h2 id="setup">Setup Guide</h2>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 not-prose mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Claude Desktop</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Trello Account</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> ~15 Minutes</span>
          </div>
        </div>
        <ol>
          <li>Get your Trello API key from <a href="https://trello.com/power-ups/admin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">trello.com/power-ups/admin</a></li>
          <li>Generate a token with appropriate permissions</li>
          <li>Install the Trello MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Test with a simple board query</li>
        </ol>
        <p>Add this to your configuration file:</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "trello": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-trello"],
      "env": {
        "TRELLO_API_KEY": "your-api-key",
        "TRELLO_TOKEN": "your-token"
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
            <strong>Important:</strong> If you're on a team workspace, changes Claude makes are visible to all team members and appear in the activity log. Coordinate with your team before automating shared boards.
          </p>
        </div>
        <p>
          Claude accesses boards your token has permission to view. You control read vs. read-write permissions when generating your token. Card contents and comments are visible to Claude.
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
              <li>Quick task capture</li>
              <li>Daily standups</li>
              <li>Project tracking</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/solopreneurs" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Solopreneur Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Project Managers</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Generate status reports</li>
              <li>Track overdue tasks</li>
              <li>Batch-create cards</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Small Teams</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Automate recurring tasks</li>
              <li>Workload visibility</li>
              <li>Board organization</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using Trello</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/operations-team-workflows" className="text-blue-600 hover:underline font-medium">Operations Team Workflows</Link>
            <span className="text-slate-500"> — Streamline your ops.</span>
          </li>
          <li>
            <Link href="/articles/10-workflows-every-business-needs" className="text-blue-600 hover:underline font-medium">10 Workflows Every Business Needs</Link>
            <span className="text-slate-500"> — Essential automations.</span>
          </li>
          <li>
            <strong>Meeting to Tasks:</strong> Convert action items into cards automatically.
          </li>
        </ul>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 hover:underline font-medium">See all workflow examples →</Link>
        </p>

        {/* 8. WORKS WELL WITH */}
        <h2 id="integrations">Works Well With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose my-6">
          <Link href="/tools/slack" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Slack</div>
            <div className="text-xs text-slate-500 mt-1">Notifications</div>
          </Link>
          <Link href="/tools/gmail" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Gmail</div>
            <div className="text-xs text-slate-500 mt-1">Email to Card</div>
          </Link>
          <Link href="/tools/google-calendar" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Calendar</div>
            <div className="text-xs text-slate-500 mt-1">Sync Dates</div>
          </Link>
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Notion</div>
            <div className="text-xs text-slate-500 mt-1">Docs</div>
          </Link>
        </div>

        {/* 9. VS ASANA */}
        <h2 id="comparison">Trello vs. Asana</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-700 mb-2">Use Trello If...</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>You prefer visual Kanban boards</li>
              <li>You have simpler project tracking needs</li>
              <li>You like drag-and-drop simplicity</li>
            </ul>
          </div>
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-pink-700 mb-2">Use Asana If...</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>You need complex project views (timeline)</li>
              <li>You have larger team coordination needs</li>
              <li>You need advanced reporting</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-600 mb-6">
          Both have MCP integrations. Choose based on your workflow preference, not MCP capabilities. <Link href="/tools/asana" className="text-blue-600 hover:underline">View Asana Guide →</Link>
        </p>


        {/* 10. FAQ */}
        <h2 id="faq">FAQ</h2>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude access all my Trello boards?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Claude can access boards your API token has permission to view. You control this when generating your token.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Will my team see changes Claude makes?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, all changes appear in the board activity log and are visible to team members with access.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude add attachments to cards?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Capabilities depend on the MCP server implementation. Card creation and updates are typically supported.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Does this work with Trello Butler automations?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, MCP and Butler are independent. Butler automations continue to work alongside MCP.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude archive or delete cards?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">With appropriate permissions, yes. Consider using read-only access if you want to prevent accidental deletions.</p>
        </details>

        {/* 11. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect Trello?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with project management workflows and task automation templates.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
