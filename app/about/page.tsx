import { StandardLayout } from '@/components/layouts/StandardLayout';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Lightbulb, Target, Handshake, Sparkles, Zap, Lock, Sprout, RefreshCw, Heart, Mail, Mic, Github, Linkedin, Twitter, Brain, Workflow, Shield, Globe } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';

export const metadata: Metadata = generatePageMetadata({
    title: "About Jason Laveglia | MCP Made Simple",
    description: "Solo founder and Context Engineer documenting the Model Context Protocol. Practical MCP education from the builder of FightHOA.",
    path: "/about",
    type: "website"
});

export default function AboutPage() {
    return (
        <StandardLayout>
            {/* 1. HERO SECTION */}
            <section className="relative overflow-hidden rounded-3xl bg-slate-900 text-white py-20 px-8 md:px-16 text-center mb-16">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/about/hero-background.png"
                        alt="Abstract gradient background"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover opacity-40"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                        About
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        Solving the Context Gap in AI
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                        I built MCP Made Simple to document the shift from fragmented integrations to a unified operator layer. This is practical education from a solo founder shipping in production.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/start-here">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white border-none w-full sm:w-auto text-base h-12 px-8">
                                Get the Free Kit
                            </Button>
                        </Link>
                        <Link href="/guides">
                            <Button variant="outline" size="lg" className="bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white w-full sm:w-auto text-base h-12 px-8">
                                Read the Guides
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. FEATURE 1: Context Engineering Thesis */}
            <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                <div className="bg-slate-100 rounded-2xl aspect-video md:aspect-square lg:aspect-[4/3] relative overflow-hidden">
                    <Image
                        src="/images/about/jason-action-2.jpg"
                        alt="Jason Laveglia working on FightHOA"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                            <Lightbulb size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Why I Built This</h3>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-6 leading-relaxed">
                        <p className="mb-4">
                            I was drowning in copy-paste.
                        </p>
                        <p className="mb-4">
                            Building FightHOA meant juggling thousands of legal documents, client communications, and project management across a dozen tools. I was spending more time moving information between apps than actually building.
                        </p>
                        <p className="mb-4">
                            When Anthropic released the Model Context Protocol in late 2024, I saw the solution: a single standard that lets Claude talk directly to my tools. No more copying. No more context-switching. No more being a human clipboard.
                        </p>
                        <p>
                            I went deep—implementing MCP servers, writing cursor rules, building agentic workflows. The productivity gain was immediate: what took hours now takes minutes. MCP Made Simple is everything I learned, documented for other builders facing the same problem.
                        </p>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                            <span>Real configs from production use</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                            <span>Battle-tested on FightHOA's legal data pipeline</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                            <span>Designed for solo founders who ship, not tinker</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 3. FEATURE 2: Born in the Lab */}
            <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                <div className="order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                            <Target size={24} /> {/* Using Target as proxy for Microscope icon requested */}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">The FightHOA Stress Test</h3>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-6 leading-relaxed">
                        <p className="mb-4">
                            Every framework on this site is born from real-world constraints. I'm building <strong>FightHOA</strong>—a LegalTech product managing thousands of state statutes and local bylaws.
                        </p>
                        <p className="mb-6">
                            To ship a complex, data-heavy product as a solo founder, I had to move beyond high-level prompts and master the protocol's three core primitives:
                        </p>

                        <div className="space-y-4 mb-6">
                            <div>
                                <strong className="text-slate-900 block">Resources</strong>
                                <span className="text-sm">Building secure, bidirectional paths to Notion, SQL, and Local Filesystems—giving AI a grounded source of truth.</span>
                            </div>
                            <div>
                                <strong className="text-slate-900 block">Tools</strong>
                                <span className="text-sm">Enabling AI agents to execute business logic safely via JSON-RPC 2.0 standardized interfaces.</span>
                            </div>
                            <div>
                                <strong className="text-slate-900 block">Prompts</strong>
                                <span className="text-sm">Designing reusable workflow templates that eliminate context-switching and automate task capture.</span>
                            </div>
                        </div>

                        <p className="italic border-l-4 border-orange-200 pl-4 py-1 bg-slate-50">
                            This platform is my technical ledger—the exact server configs, cursor rules, and agentic patterns I use to maintain velocity every day.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2 bg-slate-100 rounded-2xl aspect-video md:aspect-square lg:aspect-[4/3] relative overflow-hidden">
                    <Image
                        src="/images/about/jason-action-1.jpg"
                        alt="Jason Laveglia using mobile workflow"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* 4. FEATURE 3: Security-First */}
            <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
                <div className="bg-slate-100 rounded-2xl aspect-video md:aspect-square lg:aspect-[4/3] relative overflow-hidden">
                    <Image
                        src="/images/about/jason-whiteboard.jpg"
                        alt="Jason Laveglia explaining MCP transformation on whiteboard"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                            <Lock size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Local-First & Governance</h3>
                    </div>
                    <div className="prose prose-slate text-slate-600 mb-6 leading-relaxed">
                        <p className="mb-4">
                            Automation without governance is a liability. True leverage doesn't come from just connecting tools—it comes from connecting them safely.
                        </p>
                        <p className="mb-4">
                            Reputation in the agentic era is built on trust. I prioritize implementations that keep sensitive data local and advocate for secure authentication methods.
                        </p>
                        <p className="font-medium text-slate-900">
                            At MCP Made Simple, every tutorial prioritizes security alongside speed.
                        </p>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                            <span>OAuth 2.1 and PKCE (Proof Key for Code Exchange)</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                            <span>User-in-the-loop approvals for sensitive actions</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                            <span>Strict transport layers (StdIO and SSE)</span>
                        </li>
                        <li className="flex gap-3 text-slate-700">
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                            <span>Local execution over cloud dependency</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* 5. VALUES GRID: Philosophy */}
            <section className="mb-24">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2 block">Principles</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">The MCP Made Simple Philosophy</h2>
                    <p className="text-lg text-slate-600">Core beliefs driving our content.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <Zap size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Operational Velocity</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Solo founders need leverage. Every guide is designed to increase your shipping speed, not your reading list.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                            <Lock size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Security by Default</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Local-first architecture, authenticated resources, and user-in-the-loop approvals. Safety isn't optional.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-4">
                            <Workflow size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Practitioner Over Pundit</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            I ship what I teach. FightHOA is my lab—every pattern here runs in production.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                            <Target size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">N+M Scalability</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            One protocol, many tools. Reduce SaaS sprawl and integration overhead systematically.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-lg flex items-center justify-center mb-4">
                            <Brain size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Context Engineering</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            The model is smart enough. The bottleneck is context. Master the data layer.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="border border-slate-100 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center mb-4">
                            <Globe size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Open Standard Advocacy</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Vendor-agnostic, community-driven. The Host-Client-Server architecture belongs to everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* 6. FOUNDER SECTION */}
            <section className="bg-slate-50 rounded-3xl p-8 md:p-12 mb-24">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white border-4 border-white shadow-lg rounded-full shrink-0 relative overflow-hidden">
                        <Image
                            src="/images/about/jason-headshot.jpg"
                            alt="Jason Laveglia - Founder of MCP Made Simple"
                            width={256}
                            height={256}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <span className="text-blue-600 font-bold uppercase tracking-wider text-xs mb-2 block">The Builder</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-2">Jason Laveglia</h2>
                        <div className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wide">
                            Solo Founder • Context Engineer • Builder-First Educator
                        </div>

                        <div className="prose prose-slate text-slate-600 leading-relaxed mb-6 max-w-none">
                            <p className="mb-4">
                                I'm a solo founder building where complexity is the competition.
                            </p>
                            <p className="mb-4">
                                By day, I'm shipping <strong>FightHOA</strong>—LegalTech infrastructure that turns thousands of pages of HOA statutes into actionable intelligence. By night, I document everything I learn about the Model Context Protocol.
                            </p>
                            <p>
                                MCP Made Simple exists because I needed these guides myself. The gap between AI hype and business ROI isn't the model—it's the context layer. I'm building the bridge.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
                            {['Agentic Retrieval', 'Tool Discovery', 'Schema Mapping', 'Cursor Rules', 'StdIO Transports', 'Server-Sent Events'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 justify-center md:justify-start text-slate-400">
                            <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" aria-label="GitHub" className="hover:text-slate-900 transition-colors"><Github size={20} /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CONTACT WRAPPER */}
            <div className="grid lg:grid-cols-12 gap-12 mb-20">
                {/* Contact Side */}
                <div className="lg:col-span-5">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-2 text-slate-900 font-semibold">
                                <Handshake size={18} className="text-slate-400" /> Collaboration
                            </div>
                            <p className="text-sm text-slate-600 mb-3">Building something with MCP? I'm always interested in practitioner stories.</p>
                            <a href="mailto:jason@mcpmadesimple.com" className="text-blue-600 hover:underline text-sm font-medium">jason@mcpmadesimple.com</a>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                            <div className="flex items-center gap-3 mb-2 text-slate-900 font-semibold">
                                <Mic size={18} className="text-slate-400" /> Speaking & Podcasts
                            </div>
                            <p className="text-sm text-slate-600 mb-3">Happy to discuss Context Engineering, solo founder leverage, or MCP architecture.</p>
                            <a href="mailto:jason@mcpmadesimple.com" className="text-blue-600 hover:underline text-sm font-medium">jason@mcpmadesimple.com</a>
                        </div>
                    </div>
                </div>

                {/* FAQ Side */}
                <div className="lg:col-span-7">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <div className="border-b border-slate-100 pb-4">
                            <h3 className="font-semibold text-slate-900 mb-2">What makes you qualified to teach MCP?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                I ship production software using MCP daily. FightHOA processes thousands of legal documents through MCP-connected workflows. This isn't theory—it's my operating system.
                            </p>
                        </div>
                        <div className="border-b border-slate-100 pb-4">
                            <h3 className="font-semibold text-slate-900 mb-2">Are you affiliated with Anthropic?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                No. MCP Made Simple is independent. I use Claude and advocate for the protocol because it works, not because I'm paid to.
                            </p>
                        </div>
                        <div className="border-b border-slate-100 pb-4">
                            <h3 className="font-semibold text-slate-900 mb-2">How is this different from the official docs?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Official docs explain what MCP is. I explain how to use it to ship faster. Every guide includes the exact configs and prompts I use in production.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-slate-900 mb-2">Do I need to be technical?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                No. I write for solo founders and operators first. If you can copy-paste, you can implement MCP. Technical deep-dives are available for those who want them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </StandardLayout>
    );
}

function Users({ size, className }: { size?: number, className?: string }) {
    return <div className={className}><svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg></div>
}
