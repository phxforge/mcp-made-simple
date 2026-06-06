import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, Calculator, CheckCircle2, Zap, User, Users, Terminal, ArrowRight, Sparkles } from 'lucide-react';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = generatePageMetadata({
    title: "Free MCP Templates & Resources",
    description: "Free MCP resources including cheat sheet, ROI calculator, tool compatibility checker, and workflow templates. Everything you need to get started.",
    path: "/resources",
    type: "website"
});

export default function ResourcesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />

            <main className="flex-1 w-full pt-20">
                {/* 1. HERO SECTION */}
                <section className="bg-white border-b border-slate-200 py-16 md:py-24 text-center px-6">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                            Free Resources
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                            Free MCP Tools & Templates
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
                            Everything you need to evaluate, implement, and master MCP—completely free.
                        </p>
                        <Link href="/start-here">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 h-12 text-base shadow-lg shadow-orange-900/10">
                                Get the Quick Start Kit
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* 2. MAIN RESOURCES GRID */}
                <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Download & Use</h2>
                        <p className="text-lg text-slate-600">Practical resources to accelerate your MCP journey.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1: Cheat Sheet */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all flex flex-col">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <FileText size={24} />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">PDF Download</span>
                                <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">POPULAR</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">MCP Cheat Sheet</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                One-page reference covering MCP concepts, common commands, and workflow patterns. Print it, pin it, use it daily.
                            </p>
                            <Link href="/start-here" className="mt-auto">
                                <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50">
                                    Download PDF
                                </Button>
                            </Link>
                        </div>

                        {/* Card 2: ROI Calculator */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-green-300 transition-all flex flex-col">
                            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <Calculator size={24} />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Interactive Tool</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">ROI Calculator</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                Calculate your potential time savings and ROI from implementing MCP. Input your current workflow and see the impact.
                            </p>
                            <Link href="/start-here" className="mt-auto">
                                <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:text-green-600 hover:border-green-200 hover:bg-green-50">
                                    Calculate Your ROI
                                </Button>
                            </Link>
                        </div>

                        {/* Card 3: Tool Compatibility */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-purple-300 transition-all flex flex-col">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                <CheckCircle2 size={24} />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Interactive Tool</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Tool Compatibility</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                Check which of your current tools have MCP server support. See what you can connect today.
                            </p>
                            <Link href="/tools" className="mt-auto">
                                <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:text-purple-600 hover:border-purple-200 hover:bg-purple-50">
                                    Check Your Tools
                                </Button>
                            </Link>
                        </div>

                        {/* Card 4: Workflow Templates */}
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-orange-300 transition-all flex flex-col">
                            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                <Zap size={24} />
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Template Library</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Workflow Templates</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                Copy-paste workflow prompts for email, meetings, documents, and more. Start automating in minutes.
                            </p>
                            <Link href="/guides/workflows" className="mt-auto">
                                <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50">
                                    Browse Workflows
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 3. RESOURCES BY ROLE */}
                <section className="bg-white py-16 md:py-24 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Resources for Your Role</h2>
                            <p className="text-lg text-slate-600">We've organized our best resources by who you are.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Solopreneurs */}
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                                <div className="bg-white w-14 h-14 rounded-full shadow-sm flex items-center justify-center text-slate-700 mb-6">
                                    <User size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">For Solopreneurs</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Running your own business? These resources help you automate admin and focus on clients.
                                </p>
                                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> MCP Cheat Sheet</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Time-saving workflows</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Setup for non-tech users</li>
                                </ul>
                                <Link href="/use-cases/solopreneurs">
                                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                                        Solopreneur Resources
                                    </Button>
                                </Link>
                            </div>

                            {/* Teams */}
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                                <div className="bg-white w-14 h-14 rounded-full shadow-sm flex items-center justify-center text-slate-700 mb-6">
                                    <Users size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">For Teams</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Leading a team? These resources help you evaluate, implement, and roll out MCP.
                                </p>
                                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> ROI Calculator</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Team Implementation Guide</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Security Checklist</li>
                                </ul>
                                <Link href="/use-cases/teams">
                                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                                        Team Resources
                                    </Button>
                                </Link>
                            </div>

                            {/* Developers */}
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-colors">
                                <div className="bg-white w-14 h-14 rounded-full shadow-sm flex items-center justify-center text-slate-700 mb-6">
                                    <Terminal size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">For Developers</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed">
                                    Building with MCP? These resources help you integrate and extend.
                                </p>
                                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Tool Compatibility Checker</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> API Documentation</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Custom Server Guides</li>
                                </ul>
                                <Link href="/use-cases/developers">
                                    <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                                        Developer Resources
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. LEARN MCP */}
                <section className="bg-white border-t border-slate-100 py-16">
                    <div className="max-w-3xl mx-auto px-6 text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">Want to understand MCP first?</h2>
                        <p className="text-slate-600 mb-8">Start with our comprehensive guide to MCP fundamentals.</p>
                        <Link href="/guides/what-is-mcp" className="inline-flex items-center gap-2 font-bold text-blue-600 hover:underline text-lg">
                            What is MCP? <ArrowRight size={18} />
                        </Link>
                    </div>
                </section>

                {/* 5. MASTERY UPGRADE */}
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 px-6">
                    <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 text-blue-300 font-bold uppercase text-xs tracking-wider mb-4 justify-center md:justify-start">
                                <Sparkles size={14} /> Premium Training
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6">MCP Mastery Course</h2>
                            <p className="text-slate-300 text-lg leading-relaxed mb-6">
                                Ready to go beyond the basics? Our complete training program includes video lessons, advanced workflow templates, live Q&A, and community access.
                            </p>
                            <div className="grid grid-cols-2 gap-4 text-sm text-slate-400 mb-8">
                                <div className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 size={16} className="text-blue-400" /> 20+ Video Lessons</div>
                                <div className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 size={16} className="text-blue-400" /> 50+ Workflow Templates</div>
                                <div className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 size={16} className="text-blue-400" /> Live Office Hours</div>
                                <div className="flex items-center gap-2 justify-center md:justify-start"><CheckCircle2 size={16} className="text-blue-400" /> Private Community</div>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <Link href="/mastery">
                                <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 font-bold px-8 h-14">
                                    Learn About Mastery
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 6. CLOSING CTA */}
                <CTASection
                    headline="Ready to Get Started?"
                    description="Get the free Quick Start Kit with cheat sheet, starter workflows, and setup guide."
                    buttonText="Get the Free Kit"
                    buttonLink="/start-here"
                />

            </main>

            <Footer />
        </div>
    );
}
