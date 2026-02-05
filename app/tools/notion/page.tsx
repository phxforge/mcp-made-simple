import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, FileText, Database, Edit3, BookOpen, Shield, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "Connect Claude to Notion | MCP Made Simple",
  description: "Notion MCP integration guide. Create pages, query databases, and automate your workspace with Claude AI. Setup instructions and workflows.",
  path: "/tools/notion",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout
      title="Connect Claude to Notion"
      description="Create pages, query databases, and manage your workspace with AI assistance."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The Notion MCP integration lets Claude interact with your Notion workspace - creating pages, updating databases, and searching your knowledge base. Turn Claude into a Notion power user that can organize information, track tasks, and maintain your documentation automatically.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Search size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Search Your Workspace</h3>
            <p className="text-slate-600 text-sm">Find pages, databases, and content across your entire Notion workspace instantly.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Create Pages</h3>
            <p className="text-slate-600 text-sm">Generate new pages with structured content, templates, and formatting.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <Database size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Query Databases</h3>
            <p className="text-slate-600 text-sm">Search and filter your Notion databases. Get answers from your structured data.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <Edit3 size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Update Content</h3>
            <p className="text-slate-600 text-sm">Modify existing pages, add to databases, and keep information current.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What pages do I have in my Notion workspace?"</li>
              <li>"Find all pages mentioning 'project roadmap'"</li>
              <li>"Show me my task database"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Create a new meeting notes page for today's standup"</li>
              <li>"Add a new entry to my 'Content Ideas' database with title 'MCP Tutorial Series'"</li>
              <li>"Find all tasks in my database that are marked 'In Progress'"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Summarize all my meeting notes from this week and create a weekly digest page"</li>
              <li>"Query my CRM database for clients we haven't contacted in 30 days and create a follow-up list"</li>
              <li>"Take the action items from today's Slack #standup and add them to my Tasks database with appropriate owners"</li>
            </ul>
          </div>
        </div>

        {/* 4. SETUP */}
        <h2 id="setup">Setup Guide</h2>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 not-prose mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Claude Desktop</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Notion Token</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> ~10 Minutes</span>
          </div>
        </div>
        <ol>
          <li>Create a Notion integration at <a href="https://www.notion.so/my-integrations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">notion.so/my-integrations</a></li>
          <li>Share relevant pages/databases with your integration</li>
          <li>Install the Notion MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Test with a simple search</li>
        </ol>
        <p>Add this to your configuration file:</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-notion"],
      "env": {
        "NOTION_TOKEN": "your-notion-integration-token"
      }
    }
  }
}`}
        </pre>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
          <p className="text-yellow-800 text-sm m-0">
            <strong>Important:</strong> You must explicitly share pages and databases with your Notion integration. Claude can only access content you've shared.
          </p>
        </div>
        <p>
          <Link href="/guides/setup" className="font-bold text-blue-600 hover:underline">View Complete Setup Instructions →</Link>
        </p>

        {/* 5. SECURITY */}
        <h2 id="security">Security & Privacy</h2>
        <p>
          Claude only accesses pages you've shared with the integration. Workspace content not shared with the integration remains private.
          You control access at the page and database level and can revoke access anytime from Notion settings.
        </p>
        <p className="italic text-slate-500 text-sm">
          Tip: Start by sharing only non-sensitive pages. You can always expand access later as you get comfortable with the integration.
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
              <li>Automate client tracking</li>
              <li>Build knowledge base</li>
              <li>Draft content faster</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/solopreneurs" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Solopreneur Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Teams</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Maintain team wikis</li>
              <li>Convert meetings to docs</li>
              <li>Keep DBs updated</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Developers</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Generate tech docs</li>
              <li>Track bugs & features</li>
              <li>Create runbooks</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/developers" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Developer Guide →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using Notion</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/automate-notion-gmail-slack" className="text-blue-600 hover:underline font-medium">Automate Notion, Gmail & Slack</Link>
            <span className="text-slate-500"> — The ultimate productivity stack.</span>
          </li>
          <li>
            <Link href="/articles/document-workflow-automation" className="text-blue-600 hover:underline font-medium">Document Workflow Automation</Link>
            <span className="text-slate-500"> — Organize your digital life.</span>
          </li>
          <li>
            <strong>Meeting Notes to Tasks:</strong> Extract action items and add to Notion databases.
          </li>
        </ul>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 hover:underline font-medium">See all workflow examples →</Link>
        </p>

        {/* 8. WORKS WELL WITH */}
        <h2 id="integrations">Works Well With</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 not-prose my-6">
          <Link href="/tools/gmail" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Gmail</div>
            <div className="text-xs text-slate-500 mt-1">Emails to Docs</div>
          </Link>
          <Link href="/tools/slack" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Slack</div>
            <div className="text-xs text-slate-500 mt-1">Chat to Docs</div>
          </Link>
          <Link href="/tools/google-calendar" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Calendar</div>
            <div className="text-xs text-slate-500 mt-1">Meeting Prep</div>
          </Link>
          <Link href="/tools/google-drive" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Drive</div>
            <div className="text-xs text-slate-500 mt-1">References</div>
          </Link>
          <Link href="/tools/github" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">GitHub</div>
            <div className="text-xs text-slate-500 mt-1">Repo Docs</div>
          </Link>
        </div>

        {/* 9. FAQ */}
        <h2 id="faq">FAQ</h2>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude access my entire Notion workspace?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">No. Claude can only access pages and databases you explicitly share with your Notion integration. Unshared content is completely invisible.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude create new databases?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, Claude can create pages and databases within shared parent pages. The specific capabilities depend on the MCP server implementation.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Does this work with Notion AI?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">These are separate features. MCP connects Claude to Notion's content, while Notion AI is Notion's built-in AI. They can complement each other.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can team members see changes Claude makes?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, changes Claude makes appear like any other edit in Notion - visible in page history and to anyone with access.</p>
        </details>

        {/* 10. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect Notion?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with pre-configured settings and Notion workflow templates.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
