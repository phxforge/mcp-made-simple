import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, FileText, FolderOpen, RefreshCw, Shield, Download, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-01T19:46:19Z",
title: "Connect Claude to Dropbox | MCP Made Simple",
  description: "Dropbox MCP integration guide. Search, read, and organize your cloud files with Claude AI. Setup instructions and file management workflows.",
  path: "/tools/dropbox",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout updatedAt="2026-02-01T19:46:19Z"
      title="Connect Claude to Dropbox"
      description="Search, read, and organize your Dropbox files with AI assistance."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The Dropbox MCP integration lets Claude access your cloud storage - searching for files, reading documents, and helping you organize your digital files. If you use Dropbox for file storage, Claude can help you find what you need and make sense of your documents without manual downloading.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Search size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Search Files</h3>
            <p className="text-slate-600 text-sm">Find files by name, type, or content. Locate documents across your entire Dropbox instantly.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Read Documents</h3>
            <p className="text-slate-600 text-sm">Claude can read text files, PDFs, and documents stored in your Dropbox.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <FolderOpen size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Organize Files</h3>
            <p className="text-slate-600 text-sm">Get suggestions for folder structure, identify duplicates, and organize messy directories.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <RefreshCw size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">File Inventory</h3>
            <p className="text-slate-600 text-sm">Understand what's in your Dropbox - file types, sizes, organization.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What files are in my Dropbox?"</li>
              <li>"Find files with 'contract' in the name"</li>
              <li>"Show me PDFs I added this month"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Summarize the document called 'Project Proposal.pdf'"</li>
              <li>"Find all spreadsheets in my 'Clients' folder"</li>
              <li>"What are the largest files in my Dropbox?"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Search my Dropbox for any contracts that mention termination clauses and list what each says"</li>
              <li>"Compare the two versions of 'Budget.xlsx' in my Finance folder"</li>
              <li>"Find all documents related to [project name] across all folders and create an inventory"</li>
            </ul>
          </div>
        </div>

        {/* 4. SETUP */}
        <h2 id="setup">Setup Guide</h2>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 not-prose mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Claude Desktop</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Dropbox Account</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> ~10 Minutes</span>
          </div>
        </div>
        <ol>
          <li>Install the Dropbox MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Authorize your Dropbox account</li>
          <li>Grant file access permissions</li>
          <li>Test with a simple file search</li>
        </ol>
        <p>Add this to your configuration file:</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "dropbox": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-dropbox"],
      "env": {
        "DROPBOX_TOKEN": "your-dropbox-access-token"
      }
    }
  }
}`}
        </pre>
        <p className="text-sm text-slate-600">
          Note: You'll need to create a Dropbox app and get an access token from the Dropbox Developer Console.
        </p>
        <p>
          <Link href="/guides/setup" className="font-bold text-blue-600 hover:underline">View Complete Setup Instructions →</Link>
        </p>

        {/* 5. SECURITY */}
        <h2 id="security">Security & Privacy</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="text-yellow-800 text-sm m-0">
            <strong>Important:</strong> Dropbox often contains sensitive files. Consider connecting a work-specific Dropbox or limiting access to specific folders rather than your entire account.
          </p>
        </div>
        <p>
          Claude only accesses files you authorize. You can limit access to specific folders. Files are processed locally through the MCP server.
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
              <li>Find client files quickly</li>
              <li>Organize archives</li>
              <li>Search projects</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/solopreneurs" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Solopreneur Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Teams</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Navigate shared folders</li>
              <li>Find team docs</li>
              <li>Maintain structure</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/teams" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">File Overload</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Tame messy folders</li>
              <li>Find lost files</li>
              <li>Consolidate duplicates</li>
            </ul>
            <div className="mt-4">
              <Link href="/guides/workflows" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">See Workflows →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using Dropbox</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/document-workflow-automation" className="text-blue-600 hover:underline font-medium">Document Workflow Automation</Link>
            <span className="text-slate-500"> — Organize your digital life.</span>
          </li>
          <li>
            <strong>Project Archive Search:</strong> Find files from old projects instantly.
          </li>
          <li>
            <strong>Document Comparison:</strong> Compare versions of files.
          </li>
        </ul>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 hover:underline font-medium">See all workflow examples →</Link>
        </p>

        {/* 8. WORKS WELL WITH */}
        <h2 id="integrations">Works Well With</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose my-6">
          <Link href="/tools/google-drive" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Google Drive</div>
            <div className="text-xs text-slate-500 mt-1">Cross-Search</div>
          </Link>
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Notion</div>
            <div className="text-xs text-slate-500 mt-1">Reference</div>
          </Link>
          <Link href="/tools/gmail" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Gmail</div>
            <div className="text-xs text-slate-500 mt-1">Context</div>
          </Link>
          <Link href="/tools/slack" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Slack</div>
            <div className="text-xs text-slate-500 mt-1">Sharing</div>
          </Link>
        </div>

        {/* 9. FAQ */}
        <h2 id="faq">FAQ</h2>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude access Dropbox Paper documents?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Support for Dropbox Paper depends on the specific MCP server implementation. Standard files and folders are supported.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Does this work with Dropbox Business?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, if your organization allows third-party app connections. Check with your IT administrator.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude upload or move files?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Capabilities depend on the MCP server implementation and permissions you grant. Some servers are read-only.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can I limit access to specific folders?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, you can configure access to specific folders rather than your entire Dropbox.</p>
        </details>

        {/* 10. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect Dropbox?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with file management workflows and organization templates.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
