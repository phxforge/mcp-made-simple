import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Search, GitPullRequest, Github, FileCode, CheckCircle, Shield, Command } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "Connect Claude to GitHub | MCP Made Simple",
  description: "GitHub MCP integration guide. Access repos, manage issues, review PRs, and automate dev workflows with Claude AI. Setup for developers.",
  path: "/tools/github",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout
      title="Connect Claude to GitHub"
      description="Access repos, manage issues, review PRs, and automate development workflows with AI."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <div className="flex items-center gap-2 mb-8 not-prose">
          <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">Official Integration</span>
        </div>

        <p className="lead text-xl text-slate-600 mb-8">
          The GitHub MCP integration lets Claude interact with your repositories - reading code, managing issues, reviewing pull requests, and helping you navigate codebases. Ask Claude about your repo structure, get explanations of unfamiliar code, or automate repetitive GitHub tasks.
        </p>

        {/* 2. WHAT YOU CAN DO */}
        <h2 id="capabilities">What You Can Do</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-blue-600">
              <Github size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Browse Repositories</h3>
            <p className="text-slate-600 text-sm">Navigate repo structure, read files, understand codebases without cloning locally.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-green-600">
              <CheckCircle size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Manage Issues</h3>
            <p className="text-slate-600 text-sm">Create, search, update, and triage issues. Get summaries of open issues and bug reports.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-purple-600">
              <GitPullRequest size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Review Pull Requests</h3>
            <p className="text-slate-600 text-sm">Read PR diffs, get summaries of changes, understand what code is being modified.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="bg-orange-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-orange-600">
              <FileCode size={20} />
            </div>
            <h3 className="font-bold text-lg mb-2">Generate Docs</h3>
            <p className="text-slate-600 text-sm">Create README updates, code comments, and documentation from existing code.</p>
          </div>
        </div>

        {/* 3. EXAMPLE COMMANDS */}
        <h2 id="commands">Example Commands</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Basic</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"What repositories do I have access to?"</li>
              <li>"Show me the README for my 'project-x' repo"</li>
              <li>"List open issues in the 'frontend' repository"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Intermediate</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Find all files that import the 'authentication' module"</li>
              <li>"Summarize the changes in pull request #42"</li>
              <li>"Create an issue titled 'Fix login timeout' with a description of the bug"</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Command size={18} /> Advanced</h3>
            <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <li>"Review the code in PR #87 and explain what the changes do in plain English"</li>
              <li>"Find all TODO comments across the codebase and create issues for each one"</li>
              <li>"Analyze the 'api' folder and generate documentation for each endpoint"</li>
            </ul>
          </div>
        </div>

        {/* 4. SETUP */}
        <h2 id="setup">Setup Guide</h2>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200 not-prose mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Prerequisites</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> Claude Desktop</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> GitHub Account</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span> ~15 Minutes</span>
          </div>
        </div>
        <ol>
          <li>Generate a Personal Access Token at <a href="https://github.com/settings/tokens" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/settings/tokens</a></li>
          <li>Select appropriate scopes (repo, read:org)</li>
          <li>Install the GitHub MCP server</li>
          <li>Add configuration to Claude Desktop</li>
          <li>Test with a simple repo query</li>
        </ol>
        <p>Add this to your configuration file:</p>
        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto">
          {`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-github"],
      "env": {
        "GITHUB_TOKEN": "your-personal-access-token"
      }
    }
  }
}`}
        </pre>
        <div className="my-4">
          <h4 className="font-bold text-sm mb-2">Token Scopes Recommendation:</h4>
          <ul className="list-disc pl-5 text-sm text-slate-600">
            <li><code>repo</code> - Full access to repositories (required for most operations)</li>
            <li><code>read:org</code> - Read organization data (if accessing org repos)</li>
            <li>Use fine-grained tokens for more precise access control</li>
          </ul>
        </div>
        <p>
          <Link href="/guides/setup" className="font-bold text-blue-600 hover:underline">View Complete Setup Instructions →</Link>
        </p>

        {/* 5. SECURITY */}
        <h2 id="security">Security & Privacy</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
          <p className="text-yellow-800 text-sm m-0">
            <strong>Critical Warning:</strong> Your GitHub token grants significant access. Never share tokens. Use fine-grained tokens with minimal scopes when possible. For organization repos, consult your security team before connecting.
          </p>
        </div>
        <p>
          Claude accesses repos your token has permission to view. Private repos require appropriate token scopes. Code content is processed but not stored.
        </p>
        <p>
          <Link href="/guides/is-mcp-safe" className="font-bold text-blue-600 hover:underline">Read our complete Security Guide →</Link>
        </p>

        {/* 6. USE CASES */}
        <h2 id="use-cases">Best Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-6">
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Developers</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Navigate unfamiliar code</li>
              <li>Explain complex logic</li>
              <li>Automate triage</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/developers" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Developer Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Teams</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Summarize PRs</li>
              <li>Track issues</li>
              <li>Generate changelogs</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/developers" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Team Guide →</Link>
            </div>
          </div>
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-lg mb-2">Maintainers</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
              <li>Triage issues</li>
              <li>Answer questions</li>
              <li>Update docs</li>
            </ul>
            <div className="mt-4">
              <Link href="/use-cases/developers" className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wide">Maintainer Guide →</Link>
            </div>
          </div>
        </div>

        {/* 7. WORKFLOWS */}
        <h2 id="workflows">Workflows Using GitHub</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/articles/developer-productivity-workflows" className="text-blue-600 hover:underline font-medium">Developer Productivity Workflows</Link>
            <span className="text-slate-500"> — Automate your coding.</span>
          </li>
          <li>
            <Link href="/articles/mcp-developer-quick-start" className="text-blue-600 hover:underline font-medium">MCP Developer Quick Start</Link>
            <span className="text-slate-500"> — Get up and running fast.</span>
          </li>
          <li>
            <strong>PR Summary Bot:</strong> Summarize PRs in plain English for team leads.
          </li>
        </ul>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 hover:underline font-medium">See all workflow examples →</Link>
        </p>

        {/* 8. WORKS WELL WITH */}
        <h2 id="integrations">Works Well With</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose my-6">
          <Link href="/tools/slack" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Slack</div>
            <div className="text-xs text-slate-500 mt-1">Notifications</div>
          </Link>
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Notion</div>
            <div className="text-xs text-slate-500 mt-1">Documentation</div>
          </Link>
          <Link href="/tools/gmail" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-center group">
            <div className="font-bold text-slate-700 group-hover:text-blue-700">Gmail</div>
            <div className="text-xs text-slate-500 mt-1">Alerts</div>
          </Link>
        </div>

        {/* 9. TECHNICAL CONSIDERATIONS */}
        <h2 id="technical">Technical Considerations</h2>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 not-prose my-6">
          <h4 className="font-bold text-slate-900 mb-2">Rate Limits</h4>
          <p className="text-sm text-slate-600 mb-4">GitHub API has rate limits. Claude's requests count against your token's limit. For heavy usage, consider GitHub Enterprise or authenticated requests.</p>

          <h4 className="font-bold text-slate-900 mb-2">Large Repositories</h4>
          <p className="text-sm text-slate-600 mb-4">Very large repos may have performance considerations. Claude works best with targeted queries rather than reading entire codebases.</p>

          <h4 className="font-bold text-slate-900 mb-2">Binary Files</h4>
          <p className="text-sm text-slate-600">Claude can identify binary files but can't read their contents. Focus on source code, docs, and config files.</p>
        </div>

        {/* 10. FAQ */}
        <h2 id="faq">FAQ</h2>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude push code to my repositories?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">With appropriate token scopes, Claude can create files and commits. Use read-only tokens if you want to prevent writes.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Does this work with GitHub Enterprise?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, with appropriate configuration for your Enterprise instance. Check with your GitHub admin.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude access private repositories?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Yes, if your token has the <code>repo</code> scope and you have access to the private repo.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Will Claude see my organization's private code?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Only if your token has org access and you're a member. Claude can't access repos you can't access yourself.</p>
        </details>
        <details className="group border-b border-slate-200 pb-4 mb-4">
          <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
            Can Claude run GitHub Actions?
            <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <p className="mt-2 text-slate-600">Claude can potentially trigger workflows if your token has appropriate permissions. Be cautious with automation permissions.</p>
        </details>

        {/* 11. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Connect GitHub?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Get our Quick Start Kit with developer workflow templates and code automation examples.
          </p>
          <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
            Get the Free Kit
          </Link>
        </div>

      </div>
    </StandardLayout>
  );
}
