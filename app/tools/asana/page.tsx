import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, CheckCircle, Plus, LayoutList, BarChart2, Shield, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "Connect Claude to Asana | MCP Made Simple",
  description: "Asana MCP integration guide. Manage projects, create tasks, and automate team workflows with Claude AI. Setup instructions and examples included.",
  path: "/tools/asana",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout
      title="Connect Claude to Asana"
      description="Manage projects, create tasks, and automate team workflows with AI assistance."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The Asana MCP integration lets Claude interact with your Asana workspace - creating tasks, updating projects, checking team workload, and generating status reports. Manage complex projects through natural conversation instead of clicking through multiple views.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <LayoutList size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">View Projects & Tasks</h3>
            <p className="text-slate-600 text-sm">See project status, task lists, and assignments across your entire workspace.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <Plus size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Create Tasks</h3>
            <p className="text-slate-600 text-sm">Add tasks with descriptions, due dates, assignees, and project assignments via conversation.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <CheckCircle size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Update & Complete</h3>
            <p className="text-slate-600 text-sm">Mark tasks complete, update descriptions, change due dates, reassign work.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <BarChart2 size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Generate Reports</h3>
            <p className="text-slate-600 text-sm">Get workload summaries, overdue task lists, and project status reports.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What tasks are assigned to me in Asana?"</li>
              <li>"Show me all tasks due this week"</li>
              <li>"What's the status of the 'Website Redesign' project?"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Create a task called 'Review vendor proposals' in the 'Operations' project, due Friday, assigned to me"</li>
              <li>"Find all incomplete tasks in 'Q4 Planning' and list them by due date"</li>
              <li>"Mark the 'Send client invoice' task as complete"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Give me a workload report - how many tasks does each team member have due this week?"</li>
              <li>"Find all tasks across projects that are overdue and group them by assignee"</li>
              <li>"Create subtasks for 'Product Launch' based on these milestones: [list milestones]"</li>
            </ul>
          </div>
        </div>

        {/* 4. SETUP */}
        <h2 id="setup">Setup Guide</h2>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 not-prose mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Claude Desktop</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Asana Account</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> ~15 Minutes</span>
          </div>
        </div>
        <ol>
          <li>Generate a Personal Access Token in Asana (Settings → Apps → Developer Apps)</li>
          <li>Install the Asana MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Test with a simple task query</li>
        </ol>
        <p>Add this to your configuration file:</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "asana": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-asana"],
      "env": {
        "ASANA_TOKEN": "your-personal-access-token"
      }
    }
  }
}`}
        </pre>
        <p className="text-sm text-slate-600">
          Note: Your Personal Access Token grants access to all workspaces you belong to. Generate tokens only on secure devices.
        </p>
        <p>
          <Link href="/guides/setup" className="font-bold text-blue-600 hover:underline">View Complete Setup Instructions →</Link>
        </p>

        {/* 5. SECURITY */}
        <h2 id="security">Security & Privacy</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="text-yellow-800 text-sm m-0">
            <strong>Important:</strong> In team workspaces, Claude's changes are visible to all members. Tasks created or modified appear with your account as the author. Coordinate with your team before automating shared projects.
          </p>
        </div>
        <p>
          Claude accesses workspaces your token has permission to view. Task details, comments, and attachments are visible. Changes are logged in Asana's activity history.
        </p>
        <p>
          <Link href="/guides/is-mcp-safe" className="font-bold text-blue-600 hover:underline">Read our complete Security Guide →</Link>
        </p>

        {/* 6. USE CASES */}
        <h2 id="use-cases">Best Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-6">
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Project Managers</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Generate status reports</li>
              <li>Identify bottlenecks</li>
              <li>Batch-create tasks</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Operations Teams</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Automate recurring tasks</li>
              <li>Track workload</li>
              <li>Automate updates</li>
            </ul>
            <div className="mt-4">
              <Link href="/articles/operations-team-workflows" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Ops Workflows →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Individuals</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Quick task capture</li>
              <li>Daily priority review</li>
              <li>Cross-project search</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/solopreneurs" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Solopreneur Guide →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using Asana</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/operations-team-workflows" className="text-blue-600 hover:underline font-medium">Operations Team Workflows</Link>
            <span className="text-slate-500"> — Scale your operations.</span>
          </li>
          <li>
            <Link href="/articles/10-workflows-every-business-needs" className="text-blue-600 hover:underline font-medium">10 Workflows Every Business Needs</Link>
            <span className="text-slate-500"> — Essential automations.</span>
          </li>
          <li>
            <strong>Meeting Notes to Tasks:</strong> Convert action items to Asana tasks automatically.
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
          <Link href="/tools/google-calendar" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Calendar</div>
            <div className="text-xs text-slate-500 mt-1">Sync Dates</div>
          </Link>
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Notion</div>
            <div className="text-xs text-slate-500 mt-1">Docs</div>
          </Link>
          <Link href="/tools/google-drive" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Drive</div>
            <div className="text-xs text-slate-500 mt-1">Files</div>
          </Link>
        </div>

        {/* 9. VS ASANA */}
        <h2 id="comparison">Asana vs. Trello</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-6">
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-pink-700 mb-2">Use Asana If...</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>You need multiple project views</li>
              <li>Complex dependencies & milestones</li>
              <li>Workload management needs</li>
            </ul>
          </div>
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-700 mb-2">Use Trello If...</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>You prefer simple kanban boards</li>
              <li>Straightforward task tracking</li>
              <li>Visual, drag-and-drop simplicity</li>
            </ul>
          </div>
        </div>
        <p className="text-slate-600 mb-6">
          Both have MCP integrations. Choose based on your project complexity, not MCP capabilities. <Link href="/tools/trello" className="text-blue-600 hover:underline">View Trello Guide →</Link>
        </p>


        {/* 10. FAQ */}
        <h2 id="faq">FAQ</h2>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude access all my Asana workspaces?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, your Personal Access Token grants access to all workspaces you're a member of.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Will my team see changes Claude makes?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, all changes appear in activity feeds with your account as the author.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude work with Asana custom fields?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Support for custom fields depends on the MCP server implementation. Standard task fields are typically fully supported.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Does this work with Asana Business/Enterprise?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, Personal Access Tokens work across all Asana tiers. Enterprise admins may have policies about third-party access.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            How does this interact with Asana Rules?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">MCP and Asana Rules are independent. Rules continue to trigger normally when Claude creates or updates tasks.</p>
        </details>

        {/* 11. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect Asana?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with project management workflows and team automation templates.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
