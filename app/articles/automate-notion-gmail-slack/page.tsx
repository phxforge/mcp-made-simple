import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Search, Mail, Slack, Coffee, FileText, Database, MessageSquare } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    publishedTime: "2026-02-05T07:24:32-07:00",
    modifiedTime: "2026-06-05T14:38:48-07:00",
title: "Automate Notion, Gmail & Slack with MCP | MCP Made Simple",
    description: "Step-by-step tutorial for a 3-tool workflow. Connect Gmail, Notion, and Slack to Claude to save 5-10 hours per week.",
    path: "/articles/automate-notion-gmail-slack",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout publishedAt="2026-02-05T07:24:32-07:00" updatedAt="2026-06-05T14:38:48-07:00"
            title="Automate Notion, Gmail & Slack with MCP"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Notion for tasks. Gmail for communication. Slack for team chat. Great tools—but you're the one copying information between them. This tutorial shows you how to connect all three to Claude, then build workflows that eliminate the busywork.
            </p>

            {/* 2. WHAT YOU'LL BUILD */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">What You'll Build</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">The Outcome</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> All three tools connected to Claude</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> 5 ready-to-use automation workflows</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> A unified system for tasks & comms</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">The Workflows</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex gap-2"><span>1.</span> <span>Morning Email → Task Extraction</span></li>
                            <li className="flex gap-2"><span>2.</span> <span>Slack Discussion → Notion Doc</span></li>
                            <li className="flex gap-2"><span>3.</span> <span>Cross-Tool Search</span></li>
                            <li className="flex gap-2"><span>4.</span> <span>Weekly Digest Generator</span></li>
                            <li className="flex gap-2"><span>5.</span> <span>Meeting Follow-Up Automator</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3. PART 1: CONNECT YOUR TOOLS */}
            <h2 id="setup">Part 1: Connect Your Tools</h2>
            <p>
                We'll connect each tool one at a time. Your goal is to build a config file that looks like this:
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-xl overflow-hidden my-6 not-prose">
                <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400">
                    claude_desktop_config.json
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                    {`{
  "mcpServers": {
    "gmail": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-gmail"]
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-notion"],
      "env": {
        "NOTION_TOKEN": "your-notion-token"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-slack"],
      "env": {
        "SLACK_TOKEN": "your-slack-bot-token"
      }
    }
  }
}`}
                </pre>
            </div>

            <div className="space-y-8 my-8">
                {/* Gmail Setup */}
                <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Mail className="text-red-500" /> Step 1A: Connect Gmail</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                        <li>Add the <code>gmail</code> section to your config file (shown above).</li>
                        <li>Restart Claude Desktop completely.</li>
                        <li>Ask Claude: "Show me my recent emails".</li>
                        <li>It will ask you to Sign in with Google. Follow the browser prompt.</li>
                    </ol>
                    <Link href="/tools/gmail" className="text-blue-600 text-sm font-bold mt-4 inline-block hover:underline">See detailed Gmail guide →</Link>
                </div>

                {/* Notion Setup */}
                <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Database className="text-slate-900" /> Step 1B: Connect Notion</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                        <li>Go to <a href="https://www.notion.so/my-integrations" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">notion.so/my-integrations</a> and create a new integration.</li>
                        <li>Copy the "Internal Integration Secret".</li>
                        <li>Paste it into your config file where it says <code>your-notion-token</code>.</li>
                        <li><strong>Crucial Step:</strong> Go to the Notion pages you want Claude to access, click "..." in the top right, select "Connect to", and choose your new integration.</li>
                    </ol>
                    <Link href="/tools/notion" className="text-blue-600 text-sm font-bold mt-4 inline-block hover:underline">See detailed Notion guide →</Link>
                </div>

                {/* Slack Setup */}
                <div className="border border-slate-200 rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Slack className="text-purple-500" /> Step 1C: Connect Slack</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
                        <li>Create a Slack app at <a href="https://api.slack.com/apps" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">api.slack.com/apps</a>.</li>
                        <li>Under "OAuth & Permissions", add these Scopes: <code>channels:history</code>, <code>channels:read</code>, <code>chat:write</code>.</li>
                        <li>Install the app to your workspace and copy the "Bot User OAuth Token".</li>
                        <li>Paste it into your config file where it says <code>your-slack-bot-token</code>.</li>
                    </ol>
                    <Link href="/tools/slack" className="text-blue-600 text-sm font-bold mt-4 inline-block hover:underline">See detailed Slack guide →</Link>
                </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg text-green-800 text-sm mb-8">
                <strong>Verification:</strong> Before proceeding, ask Claude: <em>"What tools do you have access to?"</em> It should list Gmail, Notion, and Slack tools.
            </div>

            {/* 4. PART 2: THE WORKFLOWS */}
            <h2 id="workflows">Part 2: The Workflows</h2>
            <p>Now that your tools are connected, copy-paste these prompts to run powerful automation workflows.</p>

            {/* Workflow 1 */}
            <div className="my-8">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">1. Morning Email Triage <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Saves 30 mins/day</span></h3>
                <p className="text-sm text-slate-600 mb-4">Claude reads your inbox, categorizes urgent items, and automatically creates tasks in Notion for things you need to do.</p>

                <div className="bg-slate-100 p-5 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-800 whitespace-pre-wrap">
                    Review my unread emails from the last 24 hours. For each email:

                    1. Categorize as: Urgent, Needs Response, Task/Action Item, FYI, or Can Wait.
                    2. For any "Task/Action Item", create a page in my Notion "Tasks" database. Use the email subject as the title and put a brief summary + sender in the body.
                    3. Give me a bulleted summary of just the Urgent items and the Tasks you created.
                </div>
            </div>

            {/* Workflow 2 */}
            <div className="my-8">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">2. Slack Discussion → Notion Doc <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Saves 15 mins/run</span></h3>
                <p className="text-sm text-slate-600 mb-4">Turn a messy Slack thread into a clean, structured design document or decision log in Notion.</p>

                <div className="bg-slate-100 p-5 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-800 whitespace-pre-wrap">
                    Read the last 50 messages in the #product-design channel.

                    Extract the discussion about "Mobile Navigation".
                    Summarize the key decisions made, open questions, and agreed-upon next steps.
                    Create a new Notion page titled "Mobile Nav Decisions - [Date]" and write this summary there.
                </div>
            </div>

            {/* Workflow 3 */}
            <div className="my-8">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">3. Cross-Tool Search <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Saves frustration</span></h3>
                <p className="text-sm text-slate-600 mb-4">"Where did we talk about that?" Let Claude search Slack, Email, and Notion simultaneously.</p>

                <div className="bg-slate-100 p-5 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-800 whitespace-pre-wrap">
                    Search Notion, my recent Emails, and the #general Slack channel for anything related to "Q4 Marketing Plan".

                    Synthesize what you find into a single timeline of our progress and listing the most recent files or links shared.
                </div>
            </div>

            {/* Workflow 4 */}
            <div className="my-8">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">4. Weekly Digest Generator <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Saves 1 hour/week</span></h3>
                <p className="text-sm text-slate-600 mb-4">Perfect for managers. Generate a weekly status report based on what your team actually did.</p>

                <div className="bg-slate-100 p-5 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-800 whitespace-pre-wrap">
                    Look at the #engineering and #marketing Slack channels from the past week. Also check my "Project Updates" database in Notion.

                    Draft a "Weekly Highlights" message for me to send to the team.
                    Group updates by project. Keep it high-energy and concise.
                </div>
            </div>

            {/* Workflow 5 */}
            <div className="my-8">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">5. Meeting Follow-Up Automator <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Saves 20 mins/meeting</span></h3>
                <p className="text-sm text-slate-600 mb-4">After a meeting, have Claude find the relevant context and draft your follow-up email.</p>

                <div className="bg-slate-100 p-5 rounded-lg border-l-4 border-blue-500 font-mono text-sm text-slate-800 whitespace-pre-wrap">
                    I just had a meeting with [Client Name]. Check my email history with them to see what we discussed last month.

                    Draft a follow-up email to them summarizing that we are moving forward with the "Platinum Plan" we discussed, and listing the 3 next steps from our "Onboarding" Notion page.
                </div>
            </div>

            {/* 5. CONCLUSION */}
            <h2 id="next-steps">Start Automating</h2>
            <p>
                You now have a powerful AI assistant connected to your daily tools. These 5 workflows are just the beginning.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Link href="/start-here" className="block p-6 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors">
                    <div className="font-bold text-lg mb-2">Get the Configs</div>
                    <p className="text-blue-100 text-sm mb-4">Download our Quick Start Kit to get these configuration codes without typing.</p>
                    <span className="font-bold text-sm inline-flex items-center gap-1">Download Kit <ArrowRight size={14} /></span>
                </Link>
                <Link href="/guides/workflows" className="block p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                    <div className="font-bold text-lg mb-2 text-slate-800">More Workflows</div>
                    <p className="text-slate-600 text-sm mb-4">Explore our library of automation examples for operations, sales, and dev.</p>
                    <span className="font-bold text-sm text-blue-600 inline-flex items-center gap-1">Browse Library <ArrowRight size={14} /></span>
                </Link>
            </div>

        </ArticleLayout>
    );
}
