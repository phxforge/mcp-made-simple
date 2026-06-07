import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Terminal, Settings, Play, CheckCircle, AlertCircle, ArrowRight, Laptop, Monitor, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    publishedTime: "2026-02-05T07:24:32-07:00",
    modifiedTime: "2026-06-06T12:28:05-07:00",
title: "MCP Setup Guide: Get Started in 15 Minutes",
  description: "Step-by-step MCP setup guide for beginners. Connect Claude to Google Drive, Notion, Slack and more. No coding required.",
  path: "/guides/setup",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout publishedAt="2026-02-05T07:24:32-07:00" updatedAt="2026-06-06T12:28:05-07:00"
      title="MCP Setup Guide: Get Started in 15 Minutes"
      description="Step-by-step instructions to connect Claude to your tools. No coding required for most setups."
    >
      <div className="prose prose-lg prose-slate max-w-4xl mx-auto">

        <p className="lead text-xl text-slate-600 mb-8">
          You've decided to try MCP—great choice. This guide walks you through setup from zero to your first working automation. Most people complete their first connection in 15-30 minutes.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-10 not-prose flex flex-wrap gap-4 text-sm font-medium text-blue-600">
          <span className="text-slate-500">Jump to:</span>
          <a href="#prerequisites" className="hover:underline">Prerequisites</a>
          <span className="text-slate-300">|</span>
          <a href="#paths" className="hover:underline">Choose Your Path</a>
          <span className="text-slate-300">|</span>
          <a href="#install" className="hover:underline">Installation</a>
          <span className="text-slate-300">|</span>
          <a href="#connection" className="hover:underline">First Connection</a>
          <span className="text-slate-300">|</span>
          <a href="#troubleshooting" className="hover:underline">Troubleshooting</a>
        </div>

        {/* 2. PREREQUISITES */}
        <h2 id="prerequisites">What You'll Need</h2>

        <div className="grid md:grid-cols-2 gap-8 my-8 not-prose">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> Required
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                Claude Account (Free tier works)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                Claude Desktop App (Mac or Windows)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                10-15 minutes of focus time
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Settings className="text-blue-500" size={20} /> Recommended
            </h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                One tool account ready (e.g. Google Drive)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                Basic comfort installing software
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                <Link href="/start-here" className="text-blue-600 hover:underline">Our Quick Start Kit</Link> (Optional)
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg text-sm text-blue-900 mb-8 not-prose">
          <strong>Technical Note:</strong> Most MCP setups don't require coding. Some advanced configurations use simple text files (JSON)—we'll walk you through existing templates.
        </div>

        {/* 3. CHOOSE PATH */}
        <h2 id="paths">Choose Your Path</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
          {/* Path A */}
          <div className="bg-slate-900 text-white p-6 rounded-xl shadow-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Download size={80} />
            </div>
            <div className="relative z-10">
              <div className="text-xs font-bold bg-orange-500 text-white px-2 py-1 inline-block rounded mb-3">RECOMMENDED</div>
              <h3 className="text-xl font-bold mb-2">Quick Start</h3>
              <p className="text-slate-300 text-sm mb-4">Download pre-built configs. Perfect for solopreneurs & beginners.</p>
              <div className="text-xs text-slate-400 mb-6 flex items-center gap-4">
                <span>⏱ 15m</span>
                <span>⚡️ No Code</span>
              </div>
              <Link href="/start-here" className="block w-full py-2 bg-white text-slate-900 text-center rounded-lg font-bold hover:bg-slate-100 transition-colors">
                Get the Kit
              </Link>
            </div>
          </div>

          {/* Path B */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-blue-300 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-900">
              <Settings size={80} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Self-Guided</h3>
              <p className="text-slate-600 text-sm mb-4">Follow step-by-step instructions to configure it yourself.</p>
              <div className="text-xs text-slate-500 mb-6 flex items-center gap-4">
                <span>⏱ 30m</span>
                <span>📄 Edit JSON</span>
              </div>
              <a href="#install" className="block w-full py-2 bg-slate-100 text-slate-700 text-center rounded-lg font-semibold hover:bg-slate-200 transition-colors">
                Read Guide ↓
              </a>
            </div>
          </div>

          {/* Path C */}
          <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:border-blue-300 transition-colors relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-slate-900">
              <Terminal size={80} />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Developer</h3>
              <p className="text-slate-600 text-sm mb-4">Build custom integrations or deploy for production.</p>
              <div className="text-xs text-slate-500 mb-6 flex items-center gap-4">
                <span>⏱ 1-2h</span>
                <span>💻 Technical</span>
              </div>
              <Link href="/articles/mcp-developer-quick-start" className="block w-full py-2 bg-slate-100 text-slate-700 text-center rounded-lg font-semibold hover:bg-slate-200 transition-colors">
                Dev Guide
              </Link>
            </div>
          </div>
        </div>

        {/* 4. INSTALL CLAUDE */}
        <h2 id="install">Step 1: Install Claude Desktop</h2>
        <p>
          MCP features currently exist only in the Claude Desktop application. The web version (claude.ai) does not support local MCP connections yet.
        </p>
        <ol>
          <li>Visit <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">claude.ai/download</a></li>
          <li>Choose your operating system (Mac or Windows)</li>
          <li>Run the installer and sign in with your account</li>
        </ol>
        <div className="not-prose grid md:grid-cols-2 gap-4 my-6">
          <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <Laptop className="text-slate-400" />
            <div className="text-sm">
              <strong>Mac Users:</strong> You may need to approve the app in System Settings &gt; Privacy & Security.
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <Monitor className="text-slate-400" />
            <div className="text-sm">
              <strong>Windows Users:</strong> Run as Administrator for the initial installation if prompted.
            </div>
          </div>
        </div>

        {/* 5. CONFIG FILE */}
        <h2 id="config">Step 2: Understand the Config File</h2>
        <p>
          MCP connections are managed via a simple configuration file. Claude reads this file to know which tools it can access.
        </p>
        <p><strong>File Location:</strong></p>
        <ul>
          <li><strong>Mac:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
          <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
        </ul>
        <p>A basic configuration looks like this:</p>
        <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
          {`{
  "mcpServers": {
    "server-name": {
      "command": "path/to/server",
      "args": ["argument1"]
    }
  }
}`}
        </pre>
        <p className="text-sm text-slate-500">
          Don't worry—most of the time you will just copy-paste pre-written blocks into this file.
        </p>

        {/* 6. CONNECT TOOL */}
        <h2 id="connection">Step 3: Connect Your First Tool (Google Drive)</h2>
        <p>
          We'll use Google Drive as an example, as it is the most common first integration.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">1. Prerequisite Check</h3>
            <p>Ensure you have Node.js installed (required for running the server). To check, open Terminal/Command Prompt and type <code>node -v</code>. If you get an error, download Node.js from nodejs.org.</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">2. Edit the Config</h3>
            <p>Open your config file in any text editor (Notepad, TextEdit, VS Code) and paste this:</p>
            <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto text-sm">
              {`{
  "mcpServers": {
    "google-drive": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-gdrive"]
    }
  }
}`}
            </pre>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">3. Authenticate</h3>
            <p>Restart Claude Desktop. The inputs area should now show a "plug" icon. When you first ask Claude to use Drive, it will prompt you to sign in via your browser. Grant the permissions.</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">4. Verify</h3>
            <p>Type into Claude: <em>"List the first 5 files in my Google Drive."</em><br />Claude should respond with a list of your files. Success!</p>
          </div>
        </div>

        <p className="mt-8">
          <Link href="/tools/google-drive" className="text-blue-600 hover:underline font-medium">
            View detailed Google Drive guide →
          </Link>
        </p>

        {/* 7. MORE TOOLS */}
        <h2 id="more-tools">Connect More Tools</h2>
        <p>Once you are comfortable, try connecting other tools. Here are the most popular ones:</p>

        <div className="not-prose overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 font-bold text-slate-700">Tool</th>
                <th className="p-4 font-bold text-slate-700">Difficulty</th>
                <th className="p-4 font-bold text-slate-700">Time</th>
                <th className="p-4 font-bold text-slate-700">Guide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 text-slate-900 font-medium">Google Drive</td>
                <td className="p-4 text-green-600">Easy</td>
                <td className="p-4 text-slate-500">10 min</td>
                <td className="p-4"><Link href="/tools/google-drive" className="text-blue-600 hover:underline">View Guide</Link></td>
              </tr>
              <tr>
                <td className="p-4 text-slate-900 font-medium">Notion</td>
                <td className="p-4 text-green-600">Easy</td>
                <td className="p-4 text-slate-500">10 min</td>
                <td className="p-4"><Link href="/tools/notion" className="text-blue-600 hover:underline">View Guide</Link></td>
              </tr>
              <tr>
                <td className="p-4 text-slate-900 font-medium">Slack</td>
                <td className="p-4 text-green-600">Easy</td>
                <td className="p-4 text-slate-500">15 min</td>
                <td className="p-4"><Link href="/tools/slack" className="text-blue-600 hover:underline">View Guide</Link></td>
              </tr>
              <tr>
                <td className="p-4 text-slate-900 font-medium">GitHub</td>
                <td className="p-4 text-orange-600">Medium</td>
                <td className="p-4 text-slate-500">20 min</td>
                <td className="p-4"><Link href="/tools/github" className="text-blue-600 hover:underline">View Guide</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <Link href="/tools" className="text-blue-600 hover:underline font-medium">See all available integrations →</Link>
        </p>

        {/* 8. WORKFLOWS */}
        <h2 id="workflows">Step 4: Run Your First Workflow</h2>
        <p>
          Now that you are connected, try these starter prompts:
        </p>
        <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Document Search</h4>
            <div className="bg-slate-100 p-3 rounded text-sm text-slate-700 italic mb-2">
              "Find all documents mentioning 'Project Alpha' in my Google Drive."
            </div>
            <p className="text-xs text-slate-500">Claude will search your files and return the specific Docs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-2">Meeting Prep</h4>
            <div className="bg-slate-100 p-3 rounded text-sm text-slate-700 italic mb-2">
              "Read my last 3 emails from Jason and summarize the key action items."
            </div>
            <p className="text-xs text-slate-500">Requires Gmail connection. Claude reads and summarizes context.</p>
          </div>
        </div>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 no-underline hover:underline font-medium">
            Browse our library of pre-built workflows →
          </Link>
        </p>

        {/* 9. TROUBLESHOOTING */}
        <h2 id="troubleshooting">Troubleshooting</h2>
        <div className="space-y-4">
          <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
            <summary className="font-bold text-slate-900 list-none flex items-center justify-between">
              Claude doesn't show my connected tools
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-3 text-slate-600 text-sm">
              Restart Claude Desktop completely. Check that your <code>claude_desktop_config.json</code> file has valid JSON syntax (no missing commas or brackets).
            </div>
          </details>
          <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
            <summary className="font-bold text-slate-900 list-none flex items-center justify-between">
              "Command not found" or "npx error"
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-3 text-slate-600 text-sm">
              This usually means Node.js is not installed or not in your system path. Install Node.js from nodejs.org and try again.
            </div>
          </details>
          <details className="group bg-slate-50 p-4 rounded-lg cursor-pointer">
            <summary className="font-bold text-slate-900 list-none flex items-center justify-between">
              Authorization failed
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-3 text-slate-600 text-sm">
              Ensure you are signed into the correct Google/Slack account in your default browser. Try quitting Claude and restarting the auth flow.
            </div>
          </details>
        </div>
        <p>
          <Link href="/articles/mcp-setup-troubleshooting" className="text-blue-600 hover:underline font-medium">
            View full troubleshooting guide →
          </Link>
        </p>

        {/* 10. ROLES */}
        <h2 id="roles">Setup by Role</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">Solopreneurs</h3>
            <p className="text-sm text-slate-600 mb-4">Start with Drive & Gmail. Good for automating admin.</p>
            <Link href="/use-cases/solopreneurs" className="text-blue-600 text-sm font-semibold hover:underline">Read Guide →</Link>
          </div>
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">Teams</h3>
            <p className="text-sm text-slate-600 mb-4">Start with Slack & Asana. Focus on status updates.</p>
            <Link href="/use-cases/teams" className="text-blue-600 text-sm font-semibold hover:underline">Read Guide →</Link>
          </div>
          <div className="border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-2">Developers</h3>
            <p className="text-sm text-slate-600 mb-4">Start with GitHub. Focus on code automation.</p>
            <Link href="/use-cases/developers" className="text-blue-600 text-sm font-semibold hover:underline">Read Guide →</Link>
          </div>
        </div>

        {/* 11. FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose my-8">
          <div>
            <h4 className="font-bold text-slate-900">Do I need to keep my computer on?</h4>
            <p className="text-slate-600 mt-1">Yes, MCP servers run locally. When you close Claude Desktop, connections stop. This is a security feature.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Can I use this on mobile?</h4>
            <p className="text-slate-600 mt-1">Not currently. MCP requires the Claude Desktop app (Mac/Windows/Linux).</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">What if I mess up the config?</h4>
            <p className="text-slate-600 mt-1">Delete the JSON file and Claude will recreate a blank one. You can start fresh.</p>
          </div>
        </div>

        {/* 12. CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Want the Easy Path?</h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Skip the manual setup. Our Quick Start Kit includes pre-configured settings for the most popular tools, plus 10 ready-to-use workflows.
          </p>
          <Link href="/start-here" className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
