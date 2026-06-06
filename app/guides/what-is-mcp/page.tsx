import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Lock, Zap, Server, Terminal } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "What is MCP? The Complete Guide",
  description: "Learn what MCP (Model Context Protocol) is, how it works, and why it's changing AI automation. Complete beginner's guide with examples.",
  path: "/guides/what-is-mcp",
  type: "website"
});

export default function Page() {
  return (
    <StandardLayout
      title="What is MCP? The Complete Guide to the Model Context Protocol"
      description="Everything you need to understand MCP, why it matters, and how it changes AI automation."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">
        <p className="lead text-xl text-slate-600 mb-8">
          MCP (Model Context Protocol) is an open standard that lets AI assistants like Claude connect directly to your business tools—Google Drive, Notion, Slack, Gmail, and more. Instead of copying and pasting data into chat windows, MCP lets AI actually access, read, and act on your data.
        </p>

        {/* 2. THE PROBLEM */}
        <h2 id="the-problem">The Problem MCP Solves</h2>
        <p>
          AI chatbots are powerful, but they have a fatal flaw: they are isolated. They can't see your files, they can't search your emails, and they can't check your calendar. To get anything done, you have to act as the "human bridge"—copying information into a prompt and pasting the result back into your tools.
        </p>
        <ul>
          <li>Every tool is a silo—your calendar doesn't talk to your task manager.</li>
          <li>You waste hours manually moving data between apps.</li>
          <li>Building custom integrations is expensive and requires developers.</li>
        </ul>
        <p>
          <Link href="/articles/what-problem-does-mcp-solve" className="text-blue-600 no-underline hover:underline font-medium">
            Read more about the integration nightmare MCP eliminates →
          </Link>
        </p>

        {/* 3. WHAT MCP DOES */}
        <h2 id="what-mcp-does">What MCP Actually Does</h2>
        <p>
          MCP is like giving AI a set of keys to your digital tools. Instead of just describing what's in your Google Drive, MCP lets Claude actually open the door and look inside.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8 not-prose">
          <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Zap className="text-orange-500" size={20} />
            The USB Analogy
          </h3>
          <p className="text-slate-600 mb-0">
            Think of it like USB for AI. Before USB, every device (mouse, keyboard, printer) needed its own special cable. USB created one standard that works with everything. MCP does the same for AI-to-tool connections.
          </p>
        </div>
        <p>
          Technically, it is an open protocol created by Anthropic that works locally on your machine. This means your data doesn't need to be sent to a third-party cloud to be processed—it stays between you, the AI, and your tools.
        </p>
        <p>
          <Link href="/articles/mcp-explained-for-beginners" className="text-blue-600 no-underline hover:underline font-medium">
            See our jargon-free explanation for beginners →
          </Link>
        </p>

        {/* 4. HOW IT WORKS */}
        <h2 id="how-it-works">How MCP Works (Without the Jargon)</h2>
        <p>
          You don't need to be an engineer to use MCP. It works in three simple steps:
        </p>
        <ol>
          <li><strong>Install a Server:</strong> You download a small connector for a tool (like Google Drive).</li>
          <li><strong>Connect Claude:</strong> You tell your Claude desktop app to use that connector.</li>
          <li><strong>AI Takes Action:</strong> Now Claude can read files, search docs, and execute commands.</li>
        </ol>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-10 font-bold text-slate-800 not-prose bg-blue-50 p-6 rounded-xl border border-blue-100">
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-blue-200">You</div>
          <ArrowRight className="text-blue-300" />
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-blue-200">Claude</div>
          <ArrowRight className="text-blue-300" />
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-blue-200">MCP Server</div>
          <ArrowRight className="text-blue-300" />
          <div className="px-4 py-2 bg-white rounded-lg shadow-sm border border-blue-200">Your Tools</div>
        </div>

        <p>
          In practice, this means you can say: <em>"Find the Q3 report and summarize the key metrics."</em>
          <br />
          Claude utilizes MCP to search Google Drive, find the file, read it, and generate the summary—all without you leaving the chat.
        </p>
        <p>
          <Link href="/articles/how-mcp-changes-ai-agents" className="text-blue-600 no-underline hover:underline font-medium">
            Deep dive: How AI agents are changing with MCP →
          </Link>
        </p>

        {/* 5. WHAT CAN YOU DO */}
        <h2 id="capabilities">What Can You Do With MCP?</h2>
        <p>
          The possibilities are endless, but here are the most common uses today:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
          <Link href="/tools/google-drive" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all bg-white group">
            <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1">Google Drive</h4>
            <p className="text-sm text-slate-500">Search files, read documents, organize folders.</p>
          </Link>
          <Link href="/tools/gmail" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all bg-white group">
            <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1">Gmail</h4>
            <p className="text-sm text-slate-500">Read emails, draft responses, find attachments.</p>
          </Link>
          <Link href="/tools/slack" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all bg-white group">
            <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1">Slack</h4>
            <p className="text-sm text-slate-500">Search messages, post updates, summarize threads.</p>
          </Link>
          <Link href="/tools/notion" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all bg-white group">
            <h4 className="font-bold text-slate-900 group-hover:text-blue-600 mb-1">Notion</h4>
            <p className="text-sm text-slate-500">Query databases, create pages, update tasks.</p>
          </Link>
        </div>
        <p>
          <strong>Real Workflow Example:</strong> "Plan my week based on my emails." <br />
          Claude reads your Gmail, checks your <Link href="/tools/google-calendar">Calendar</Link>, and creates a prioritized task list in Notion.
        </p>
        <p>
          <Link href="/guides/workflows" className="text-blue-600 no-underline hover:underline font-medium">
            Explore more workflow examples →
          </Link>
        </p>

        {/* 6. WHO IS IT FOR */}
        <h2 id="who-is-it-for">Who Is MCP For?</h2>
        <div className="not-prose grid gap-6 md:grid-cols-3 my-8">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Solopreneurs</h3>
            <p className="text-slate-600 text-sm mb-4">Automate admin work that eats your billable hours. No coding required.</p>
            <Link href="/use-cases/solopreneurs" className="text-sm font-semibold text-blue-600 hover:underline">View Guide →</Link>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Operations</h3>
            <p className="text-slate-600 text-sm mb-4">Standardize workflows and reduce manual data entry across teams.</p>
            <Link href="/use-cases/teams" className="text-sm font-semibold text-blue-600 hover:underline">View Guide →</Link>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">Developers</h3>
            <p className="text-slate-600 text-sm mb-4">Build AI features fast without boilerplate integration code.</p>
            <Link href="/use-cases/developers" className="text-sm font-semibold text-blue-600 hover:underline">View Guide →</Link>
          </div>
        </div>

        {/* 7. SECURITY */}
        <h2 id="security">Is MCP Safe?</h2>
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 not-prose mb-8">
          <div className="flex items-start gap-3">
            <Lock className="text-green-600 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-green-900 text-lg m-0">Security By Design</h3>
              <p className="text-green-800 mt-2 text-sm leading-relaxed">
                MCP runs locally on your machine. Your data connects directly between Claude and your tools without passing through third-party servers. You explicitly control which tools Claude can access.
              </p>
            </div>
          </div>
        </div>
        <p>
          We've written a complete guide covering privacy, compliance, and enterprise security considerations.
        </p>
        <p>
          <Link href="/guides/is-mcp-safe" className="text-blue-600 no-underline hover:underline font-medium">
            Read the Security Guide →
          </Link>
        </p>

        {/* 8. GET STARTED */}
        <h2 id="get-started">How to Get Started</h2>
        <p>Ready to build your first agent? You have three options:</p>
        <div className="not-prose space-y-4 my-8">
          <Link href="/start-here" className="block p-6 bg-slate-900 text-white rounded-xl shadow-md hover:shadow-lg hover:bg-slate-800 transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg mb-1">1. Quick Start Kit (Recommended)</h3>
                <p className="text-slate-300 text-sm">Get 10 pre-built workflows and step-by-step instructions. Free.</p>
              </div>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link href="/guides/setup" className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">2. Self-Guided Setup</h3>
                <p className="text-slate-500 text-sm">Follow our documentation for Mac, Windows, or Linux.</p>
              </div>
              <ArrowRight className="text-slate-400 group-hover:translate-x-1 transition-transform group-hover:text-blue-500" />
            </div>
          </Link>

          <Link href="/mastery" className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-lg mb-1">3. MCP Mastery Bootcamp</h3>
                <p className="text-slate-500 text-sm">Join our hands-on course for guided learning.</p>
              </div>
              <ArrowRight className="text-slate-400 group-hover:translate-x-1 transition-transform group-hover:text-blue-500" />
            </div>
          </Link>
        </div>

        {/* 9. VS OTHERS */}
        <h2 id="comparisons">MCP vs Other Tools</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold">vs Zapier / Make</h3>
            <p>
              Zapier connects tools with rigid "if-this-then-that" rules. MCP connects tools to an AI brain that can make decisions and handle ambiguity.
            </p>
            <Link href="/articles/mcp-vs-zapier" className="text-sm text-blue-600 hover:underline">Read Comparison →</Link>
          </div>
          <div>
            <h3 className="text-lg font-bold">vs Custom APIs</h3>
            <p>
              Custom integrations require writing code for every new tool. MCP is a standard: build it once, run it anywhere.
            </p>
            <Link href="/articles/mcp-vs-custom-apis" className="text-sm text-blue-600 hover:underline">Read Comparison →</Link>
          </div>
        </div>

        {/* 10. FUTURE */}
        <h2 id="future">The Future of MCP</h2>
        <p>
          As an open standard, MCP is rapidly gaining adoption. We are seeing a future where every SaaS tool comes with an "MCP Native" endpoint, allowing any AI agent to interact with it instantly.
          <Link href="/articles/is-mcp-the-future-of-ai" className="ml-2 text-blue-600 no-underline hover:underline font-medium">
            Read our predictions for 2026 →
          </Link>
        </p>

        {/* 11. FAQ */}
        <h2 id="faq">Frequently Asked Questions</h2>
        <div className="space-y-6 not-prose my-8">
          <div>
            <h4 className="font-bold text-slate-900">Do I need to know how to code?</h4>
            <p className="text-slate-600 mt-1">No. Many MCP workflows work without coding. Some advanced setups benefit from basic technical knowledge.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">Is MCP only for Claude?</h4>
            <p className="text-slate-600 mt-1">It was created by Anthropic, but as an open protocol, other AI systems are adopting it.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900">How much does it cost?</h4>
            <p className="text-slate-600 mt-1">MCP itself is free and open source. You just need a Claude account.</p>
          </div>
        </div>
      </div>
    </StandardLayout>
  );
}
