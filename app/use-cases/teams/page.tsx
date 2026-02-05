import { StandardLayout } from '@/components/layouts/StandardLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, BarChart2, Shield, Zap, MessageSquare, FileText, Search, Briefcase, Calendar } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
  title: "MCP for Teams: Streamline Operations & Eliminate Busywork | MCP Made Simple",
  description: "How operations teams use MCP to automate status updates, data entry, and cross-tool workflows. Reduce manual work by 60-80%.",
  path: "/use-cases/teams",
  type: "article"
});

export default function Page() {
  return (
    <StandardLayout
      title="MCP for Teams"
      description="Streamline operations, eliminate repetitive work, and give your team hours back every week."
    >
      <div className="prose prose-lg prose-slate max-w-4xl">

        {/* HERO INTRO */}
        <p className="lead text-xl text-slate-600 mb-8">
          Managing a team means coordinating information across people, tools, and processes. MCP lets your team automate the connective tissue - status updates, data entry, report compilation, and cross-tool workflows. The result: less time on admin, more time on work that matters.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 not-prose rounded-r-lg">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full text-blue-600 mt-1">
              <BarChart2 size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">Impact at Scale</h3>
              <p className="text-blue-800 m-0">Operations teams using MCP reduce manual data entry by <strong>60-80%</strong> and cut status reporting time by <strong>75%</strong>.</p>
            </div>
          </div>
        </div>

        {/* 2. THE CHALLENGE */}
        <h2 id="challenge">The Team Operations Challenge</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Search className="text-red-500" size={20} />
              Information Silos
            </h3>
            <p className="text-slate-600 text-sm">Sales updates in Slack. Project status in Asana. Documents in Drive. Client details in the CRM. Your team spends hours just finding information that should be at their fingertips.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <MessageSquare className="text-red-500" size={20} />
              Status Update Theater
            </h3>
            <p className="text-slate-600 text-sm">Monday standups. Wednesday check-ins. Friday reports. Your team spends more time reporting on work than doing work.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <FileText className="text-red-500" size={20} />
              Manual Data Entry
            </h3>
            <p className="text-slate-600 text-sm">Someone has to move data from the email to the spreadsheet to the project tracker to the report. It's tedious, error-prone, and a waste of skilled people's time.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Users className="text-red-500" size={20} />
              Onboarding Drain
            </h3>
            <p className="text-slate-600 text-sm">Every new team member means weeks of getting them up to speed on your systems. Where things live. How processes work. Who to ask.</p>
          </div>
        </div>
        <p className="text-slate-600 italic border-l-4 border-slate-300 pl-4 py-2 my-6">
          "A 10-person team losing 5 hours each per week to operational overhead = 50 hours/week = 1.25 full-time employees worth of lost productivity."
        </p>

        {/* 3. HOW MCP HELPS TEAMS */}
        <h2 id="solution">How MCP Helps Teams</h2>
        <div className="bg-slate-900 text-slate-100 rounded-xl p-8 not-prose my-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-red-400 font-bold mb-4 uppercase tracking-wider text-sm">Before MCP</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span className="text-slate-300">Team members manually update status in multiple tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span className="text-slate-300">Managers compile reports from scattered sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✕</span>
                  <span className="text-slate-300">New hires struggle to navigate tribal knowledge</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 font-bold mb-4 uppercase tracking-wider text-sm">After MCP</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-white">"Claude, compile this week's status from Asana, Slack, and our shared docs"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-white">"Update the project tracker based on the decisions from today's meeting"</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-white">"Create an onboarding checklist for the new team member and gather relevant docs"</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <p className="text-lg text-blue-200 italic">"MCP doesn't replace your team's processes. It automates the mundane parts so your people can focus on judgment, creativity, and collaboration."</p>
          </div>
        </div>

        {/* 4. TOP WORKFLOWS */}
        <h2 id="workflows">Top Workflows for Teams</h2>
        <div className="space-y-8">
          <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold m-0">1. Automated Status Compilation</h3>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Saves 2-3 hours/manager/week</span>
            </div>
            <p className="text-slate-600 mb-4">Gathers updates from Slack, Asana/Trello, and docs into one status report.</p>
            <div className="flex gap-2 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1"><Briefcase size={14} /> Slack</span>
              <span className="flex items-center gap-1"><Users size={14} /> Asana</span>
              <span className="flex items-center gap-1"><FileText size={14} /> Drive</span>
            </div>
            <Link href="/articles/operations-team-workflows" className="text-blue-600 hover:underline font-bold text-sm">View Workflow →</Link>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold m-0">2. Meeting Notes to Action Items</h3>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Reduces dropped balls by 80%</span>
            </div>
            <p className="text-slate-600 mb-4">Extracts decisions and tasks from meeting notes, creates tickets, assigns owners.</p>
            <div className="flex gap-2 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1"><FileText size={14} /> Notion</span>
              <span className="flex items-center gap-1"><Users size={14} /> Asana</span>
              <span className="flex items-center gap-1"><Briefcase size={14} /> Slack</span>
            </div>
            <Link href="/articles/meeting-scheduling-automation" className="text-blue-600 hover:underline font-bold text-sm">View Workflow →</Link>
          </div>

          <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold m-0">3. Cross-Tool Search</h3>
              <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">Reduces "where is this?" time by 90%</span>
            </div>
            <p className="text-slate-600 mb-4">Searches Slack, Drive, and email simultaneously to find information.</p>
            <div className="flex gap-2 text-sm text-slate-500 mb-4">
              <span className="flex items-center gap-1"><Briefcase size={14} /> Slack</span>
              <span className="flex items-center gap-1"><FileText size={14} /> Drive</span>
              <span className="flex items-center gap-1"><Users size={14} /> Gmail</span>
            </div>
            <Link href="/tools/slack" className="text-blue-600 hover:underline font-bold text-sm">View Workflow →</Link>
          </div>
        </div>
        <p className="mt-6 text-center">
          <Link href="/guides/workflows" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
            See all team workflows <ArrowRight size={16} />
          </Link>
        </p>

        {/* 5. RECOMMENDED TOOLS */}
        <h2 id="tools">Recommended Tools to Connect</h2>
        <div className="grid md:grid-cols-2 gap-8 not-prose my-8">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Zap className="text-yellow-500" size={20} /> Communication & Project Mgmt</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="flex items-center gap-2 font-medium"><Briefcase size={18} className="text-slate-500" /> Slack</span>
                <Link href="/tools/slack" className="text-xs bg-white border border-slate-300 px-2 py-1 rounded hover:bg-slate-50">Setup Guide</Link>
              </li>
              <li className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="flex items-center gap-2 font-medium"><Users size={18} className="text-slate-500" /> Asana / Trello</span>
                <Link href="/tools/asana" className="text-xs bg-white border border-slate-300 px-2 py-1 rounded hover:bg-slate-50">Setup Guide</Link>
              </li>
              <li className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="flex items-center gap-2 font-medium"><FileText size={18} className="text-slate-500" /> Notion</span>
                <Link href="/tools/notion" className="text-xs bg-white border border-slate-300 px-2 py-1 rounded hover:bg-slate-50">Setup Guide</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><FileText className="text-blue-500" size={20} /> Docs & Scheduling</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="flex items-center gap-2 font-medium"><FileText size={18} className="text-slate-500" /> Google Drive / Dropbox</span>
                <Link href="/tools/google-drive" className="text-xs bg-white border border-slate-300 px-2 py-1 rounded hover:bg-slate-50">Setup Guide</Link>
              </li>
              <li className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="flex items-center gap-2 font-medium"><Calendar size={18} className="text-slate-500" /> Google Calendar</span>
                <Link href="/tools/google-calendar" className="text-xs bg-white border border-slate-300 px-2 py-1 rounded hover:bg-slate-50">Setup Guide</Link>
              </li>
            </ul>
            <div className="bg-blue-50 text-blue-800 text-sm p-4 rounded-lg mt-4">
              <p className="m-0"><strong>Rollout Tip:</strong> Start with one team lead piloting MCP. Prove value with 2-3 workflows before broader adoption.</p>
            </div>
          </div>
        </div>

        {/* 6. ADOPTION PATH */}
        <h2 id="adoption">Team Adoption Path</h2>
        <div className="relative border-l-4 border-blue-200 pl-8 space-y-8 my-8 ml-4">
          <div className="relative">
            <span className="absolute -left-[42px] top-1 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">1</span>
            <h3 className="font-bold text-lg m-0">Phase 1: Pilot (Week 1-2)</h3>
            <p className="text-slate-600 mt-2">One team lead sets up MCP. Focus on personal productivity. Document time savings and wins.</p>
            <Link href="/guides/setup" className="text-blue-600 hover:underline text-sm font-bold">Setup Guide →</Link>
          </div>
          <div className="relative">
            <span className="absolute -left-[42px] top-1 bg-white border-2 border-blue-600 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">2</span>
            <h3 className="font-bold text-lg m-0">Phase 2: Prove Value (Week 3-4)</h3>
            <p className="text-slate-600 mt-2">Share results with team. Identify 2-3 team-wide pain points. Build workflows for shared challenges.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-[42px] top-1 bg-white border-2 border-blue-600 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">3</span>
            <h3 className="font-bold text-lg m-0">Phase 3: Team Adoption (Week 5-8)</h3>
            <p className="text-slate-600 mt-2">Train team members on core workflows. Create team-specific workflow library. Establish best practices.</p>
          </div>
          <div className="relative">
            <span className="absolute -left-[42px] top-1 bg-white border-2 border-blue-600 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">4</span>
            <h3 className="font-bold text-lg m-0">Phase 4: Optimization (Ongoing)</h3>
            <p className="text-slate-600 mt-2">Add new workflows as needs emerge. Measure and report productivity gains.</p>
            <Link href="/mastery" className="text-blue-600 hover:underline text-sm font-bold">MCP Mastery Training →</Link>
          </div>
        </div>

        {/* 7. SECURITY */}
        <h2 id="security">Security for Teams</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Shield size={18} /> Individual Accounts</h4>
              <p className="text-sm text-slate-600">Each team member sets up MCP on their own machine with their own credentials. There's no shared password or central access point to compromise.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Shield size={18} /> Data Visibility</h4>
              <p className="text-sm text-slate-600">MCP doesn't create new data access. Each person's Claude only sees what they already have permission to see in each tool.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Shield size={18} /> Audit Trail</h4>
              <p className="text-sm text-slate-600">Actions Claude takes (creating tasks, posting messages) appear in each tool's native activity log with the user's account.</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Shield size={18} /> Compliance</h4>
              <p className="text-sm text-slate-600">For regulated industries, review your data handling policies before adoption. MCP data flows through Anthropic's API.</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200">
            <Link href="/guides/is-mcp-safe" className="text-blue-600 hover:underline font-bold text-sm">Read Full Security Guide →</Link>
          </div>
        </div>

        {/* 8. REAL RESULTS */}
        <h2 id="results">Real Results</h2>
        <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">MO</div>
              <div>
                <div className="font-bold">Marketing Ops</div>
                <div className="text-xs text-slate-500">Saved 12 hours/week</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm italic mb-4">"We were drowning in status updates. Every Monday was spent compiling what everyone did last week. Now Claude pulls it together from Slack and Asana in 5 minutes."</p>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">Key: Status Compilation</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">CS</div>
              <div>
                <div className="font-bold">Customer Success</div>
                <div className="text-xs text-slate-500">Saved 10 hours/week</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm italic mb-4">"Finding information about a customer used to mean searching Slack, email, Drive, and our CRM. Now we just ask Claude to pull everything related to an account."</p>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">Key: Cross-Tool Search</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">PD</div>
              <div>
                <div className="font-bold">Product Team</div>
                <div className="text-xs text-slate-500">Saved 8 hours/week</div>
              </div>
            </div>
            <p className="text-slate-600 text-sm italic mb-4">"Meeting notes were a black hole. Decisions got made, action items got mentioned, but follow-through was spotty. Now Claude extracts every action item and creates tickets automatically."</p>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide">Key: Auto-Ticketing</div>
          </div>
        </div>
        <p className="text-center">
          <Link href="/articles/reduce-manual-work-with-ai" className="text-blue-600 hover:underline font-bold">Read full case study →</Link>
        </p>

        {/* 9. FAQ */}
        <h2 id="faq">Common Questions from Team Leaders</h2>
        <div className="space-y-4">
          <details className="group border-b border-slate-200 pb-4">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
              How do I justify this to leadership?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600">Frame it as productivity reclamation. Calculate hours lost to manual work × average hourly cost. MCP typically shows 5-10x ROI within the first month. <Link href="/articles/mcp-roi-for-business" className="text-blue-600 hover:underline">Read ROI Guide</Link>.</p>
          </details>
          <details className="group border-b border-slate-200 pb-4">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
              Will my team actually use this?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600">Start with their biggest pain points. If Claude solves a problem they complain about weekly, adoption happens naturally.</p>
          </details>
          <details className="group border-b border-slate-200 pb-4">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
              What about team members who aren't technical?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600">MCP works through conversation. If they can describe what they want done, they can use MCP. <Link href="/articles/connecting-ai-without-coding" className="text-blue-600 hover:underline">No coding required</Link> for most workflows.</p>
          </details>
          <details className="group border-b border-slate-200 pb-4">
            <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-slate-900">
              How do we maintain consistency across the team?
              <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-2 text-slate-600">Create a shared workflow library in Notion or Google Docs. Document your team's standard MCP prompts and use cases.</p>
          </details>
        </div>

        {/* 10. RELATED RESOURCES */}
        <h2 id="related" className="mt-12 mb-6">Related Resources</h2>
        <div className="grid md:grid-cols-2 gap-4 not-prose mb-12">
          <Link href="/articles/mcp-implementation-for-operations-teams" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all">
            <h3 className="font-bold text-slate-800">MCP Implementation Guide</h3>
            <p className="text-sm text-slate-600 mt-1">Detailed rollout plan for ops teams.</p>
          </Link>
          <Link href="/articles/is-mcp-secure-for-business" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all">
            <h3 className="font-bold text-slate-800">Is MCP Secure for Business?</h3>
            <p className="text-sm text-slate-600 mt-1">Deep dive into enterprise security.</p>
          </Link>
          <Link href="/articles/mcp-roi-for-business" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all">
            <h3 className="font-bold text-slate-800">MCP ROI for Business</h3>
            <p className="text-sm text-slate-600 mt-1">Calculate the value for stakeholders.</p>
          </Link>
          <Link href="/articles/operations-team-workflows" className="block p-4 border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all">
            <h3 className="font-bold text-slate-800">Operations Team Workflows</h3>
            <p className="text-sm text-slate-600 mt-1">More automation examples.</p>
          </Link>
        </div>

        {/* 11. CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white not-prose my-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Team's Operations?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Start with the free Quick Start Kit. Includes team-specific workflows, rollout guide, and ROI calculator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-here" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors shadow-sm">
              Get the Free Kit
            </Link>
            <Link href="/mastery" className="inline-block bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">
              Explore Team Training →
            </Link>
          </div>
        </div>

      </div>
    </StandardLayout>
  );
}
