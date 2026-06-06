import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, User, Users, Terminal, CheckCircle2, HelpCircle, Mail, BarChart3, GitPullRequest, Search, Zap } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Use Cases & Solutions",
    description: "Find MCP resources for your role. Tailored guides and workflows for solopreneurs, teams, and developers. Start with your path.",
    path: "/use-cases",
    type: "website"
});

export default function UseCasesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
            <Navbar />

            <main className="flex-1 w-full pt-20">
                {/* 1. HERO SECTION */}
                <div className="bg-white border-b border-slate-200 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                            Use Cases
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            MCP for the Way You Work
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                            Whether you're flying solo, leading a team, or building software—MCP adapts to your workflow. Find your path.
                        </p>
                        <Link href="/guides/what-is-mcp">
                            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 h-12 text-base">
                                Not sure? Start with the basics <ArrowRight size={16} className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* 2. CHOOSE YOUR PATH */}
                <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Are You?</h2>
                        <p className="text-lg text-slate-600">Click your role for tailored guides, workflows, and resources.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1: Solopreneurs */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all h-full flex flex-col group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                                <User size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Solopreneurs</h3>
                            <p className="text-blue-600 font-medium text-sm mb-4">Freelancers, consultants, and one-person businesses</p>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                                You wear all the hats. MCP helps you automate the admin so you can focus on the work that pays. Email, scheduling, documents—handled.
                            </p>

                            <div className="bg-slate-50 rounded-xl p-5 mb-8">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What you'll find</p>
                                <ul className="space-y-2.5">
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Non-technical setup guides
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Time-saving workflows
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Email & calendar automation
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <p className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-1">
                                    <Zap size={12} className="text-amber-500" fill="currentColor" /> Average time saved: 10-15 hrs/week
                                </p>
                                <Link href="/use-cases/solopreneurs">
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                        Explore Solopreneur Resources
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Card 2: Teams */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all h-full flex flex-col group">
                            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                                <Users size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Teams</h3>
                            <p className="text-purple-600 font-medium text-sm mb-4">Managers, ops leads, and growing organizations</p>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                                Coordination is your job. MCP helps your team work smarter—less time hunting for information, more time making decisions.
                            </p>

                            <div className="bg-slate-50 rounded-xl p-5 mb-8">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What you'll find</p>
                                <ul className="space-y-2.5">
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Team implementation guides
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Security and compliance info
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Multi-user workflows
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <p className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-1">
                                    <Zap size={12} className="text-amber-500" fill="currentColor" /> Teams report 20-30% efficiency gains
                                </p>
                                <Link href="/use-cases/teams">
                                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                                        Explore Team Resources
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Card 3: Developers */}
                        <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-orange-300 hover:shadow-xl transition-all h-full flex flex-col group">
                            <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform">
                                <Terminal size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Developers</h3>
                            <p className="text-orange-600 font-medium text-sm mb-4">Engineers, builders, and technical users</p>
                            <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                                You want to understand how it works and extend it. MCP is an open protocol you can build on—connect internal tools, create custom servers.
                            </p>

                            <div className="bg-slate-50 rounded-xl p-5 mb-8">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">What you'll find</p>
                                <ul className="space-y-2.5">
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Technical quick start
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        API and protocol details
                                    </li>
                                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                                        <CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        Custom server guides
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <p className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-1">
                                    <Zap size={12} className="text-amber-500" fill="currentColor" /> From setup to first custom server: ~2 hours
                                </p>
                                <Link href="/use-cases/developers">
                                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                                        Explore Developer Resources
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. COMMON QUESTIONS BY ROLE */}
                <section className="bg-white border-y border-slate-200 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">What People Ask</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Solopreneurs Qs */}
                            <div>
                                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6 text-lg">
                                    <User size={20} className="text-blue-600" /> Solopreneurs ask:
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"Can I set this up without coding?"</p>
                                        <Link href="/articles/connecting-ai-without-coding" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Yes. Read the guide <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"How much time will I actually save?"</p>
                                        <Link href="/articles/20-hours-saved-per-week" className="text-sm text-blue-600 hover:underline flex items-center">
                                            See the case study <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"Is it worth the setup effort?"</p>
                                        <Link href="/articles/mcp-roi-for-business" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Calculate ROI <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Teams Qs */}
                            <div>
                                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6 text-lg">
                                    <Users size={20} className="text-purple-600" /> Teams ask:
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"Is it secure for business use?"</p>
                                        <Link href="/guides/is-mcp-safe" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Read security guide <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"How do we roll this out?"</p>
                                        <Link href="/articles/mcp-implementation-for-operations-teams" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Implementation plan <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"What's the ROI?"</p>
                                        <Link href="/articles/mcp-roi-for-business" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Business context <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Developers Qs */}
                            <div>
                                <h3 className="flex items-center gap-2 font-bold text-slate-900 mb-6 text-lg">
                                    <Terminal size={20} className="text-orange-600" /> Developers ask:
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"How does MCP compare to APIs?"</p>
                                        <Link href="/articles/mcp-vs-custom-apis" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Comparison guide <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"Can I build custom integrations?"</p>
                                        <Link href="/articles/mcp-developer-quick-start" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Developer quick start <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-800 mb-1">"What's the protocol spec?"</p>
                                        <Link href="/articles/mcp-vs-traditional-apis" className="text-sm text-blue-600 hover:underline flex items-center">
                                            Technical deep dive <ArrowRight size={14} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. FEATURED WORKFLOWS */}
                <section className="bg-slate-50 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Workflows</h2>
                            <p className="text-lg text-slate-600">See what's possible for your situation.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Solopreneur Workflow */}
                            <Link href="/articles/email-automation-workflows" className="block group">
                                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all h-full">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                                        <Mail size={20} />
                                    </div>
                                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-0 mb-4">Solopreneur Favorite</Badge>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Morning Inbox Zero</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        Triage 50 emails in 5 minutes. AI categorizes, prioritizes, and drafts responses.
                                    </p>
                                    <span className="text-sm font-semibold text-blue-600 flex items-center">Read workflow <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" /></span>
                                </div>
                            </Link>

                            {/* Team Workflow */}
                            <Link href="/articles/operations-team-workflows" className="block group">
                                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all h-full">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
                                        <BarChart3 size={20} />
                                    </div>
                                    <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 border-0 mb-4">Team Favorite</Badge>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">Weekly Status Compiler</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        Pull updates from Slack, Asana, and email into one report automatically.
                                    </p>
                                    <span className="text-sm font-semibold text-blue-600 flex items-center">Read workflow <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" /></span>
                                </div>
                            </Link>

                            {/* Developer Workflow */}
                            <Link href="/articles/developer-productivity-workflows" className="block group">
                                <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all h-full">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                                        <GitPullRequest size={20} />
                                    </div>
                                    <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-0 mb-4">Developer Favorite</Badge>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">PR Review Assistant</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                        Summarize changes, check for issues, draft review comments.
                                    </p>
                                    <span className="text-sm font-semibold text-blue-600 flex items-center">Read workflow <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" /></span>
                                </div>
                            </Link>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/guides/workflows">
                                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-blue-600">
                                    See all workflow examples <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 5. NOT SURE WHERE YOU FIT */}
                <section className="bg-white border-t border-slate-200 py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Not Sure Where You Fit?</h2>
                            <p className="text-slate-600">If you're still exploring, these resources work for everyone.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/guides/what-is-mcp" className="block group">
                                <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                                    <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-slate-600 mb-3 group-hover:text-blue-600 transition-colors">
                                        <Search size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">Learn the Basics</h3>
                                    <p className="text-xs text-slate-500">Understand what MCP is and why it matters.</p>
                                </div>
                            </Link>

                            <Link href="/guides/is-mcp-safe" className="block group">
                                <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                                    <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-slate-600 mb-3 group-hover:text-blue-600 transition-colors">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">Check Security</h3>
                                    <p className="text-xs text-slate-500">See how MCP handles your data.</p>
                                </div>
                            </Link>

                            <Link href="/start-here" className="block group">
                                <div className="text-center p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
                                    <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-slate-600 mb-3 group-hover:text-blue-600 transition-colors">
                                        <Zap size={20} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-1">Get the Kit</h3>
                                    <p className="text-xs text-slate-500">Start with our Quick Start Kit—works for any role.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 6. SUCCESS STORIES PROOF */}
                <section className="bg-slate-50 py-16 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">Real Results</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/articles/mcpmadesimple-reviews-and-testimonials" className="block p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all">
                                <p className="text-slate-600 italic text-sm mb-4">"I used to spend 2 hours a day on email. Now it's 20 minutes. The ROI was immediate."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs font-bold">JS</div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">Sarah J.</p>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">Solopreneur</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/articles/mcpmadesimple-reviews-and-testimonials" className="block p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all">
                                <p className="text-slate-600 italic text-sm mb-4">"Finally, a way to connect our tools securely. The team adopted it faster than any other tool."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs font-bold">MR</div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">Marcus R.</p>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">Ops Lead</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/articles/mcpmadesimple-reviews-and-testimonials" className="block p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all">
                                <p className="text-slate-600 italic text-sm mb-4">"The open protocol approach is brilliant. Built a custom server for our internal CRM in one afternoon."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs font-bold">DK</div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900">David K.</p>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wide">Senior dev</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 7. CLOSING CTA */}
                <CTASection
                    headline="Ready to Get Started?"
                    description="Get the free Quick Start Kit—it works for solopreneurs, teams, and developers."
                    buttonText="Get the Free Kit"
                    buttonLink="/start-here"
                />

            </main>

            <Footer />
        </div>
    );
}
