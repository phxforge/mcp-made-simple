import Link from 'next/link';
import { Lightbulb, ShieldCheck, Settings, Zap, Play, ArrowRight, User, Users, Terminal, BookOpen, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Guides: Master AI Automation",
    description: "Complete MCP guide library. Learn fundamentals, evaluate security, set up your tools, and build automation workflows. Four pillars, one clear path.",
    path: "/guides",
    type: "website"
});

// --- CONTENT DATA ---

const PILLARS = [
    {
        number: "01",
        tag: "Fundamentals",
        tagColor: "bg-blue-100 text-blue-700",
        icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
        title: "What is MCP?",
        description: "The plain English explanation. What MCP does, how it works, and why it's changing how we use AI. No jargon, no assumptions.",
        topics: [
            "How MCP connects AI to your tools",
            "The USB-C analogy",
            "What you can actually do with it"
        ],
        readTime: "15 min",
        href: "/guides/what-is-mcp",
        buttonText: "Read Guide"
    },
    {
        number: "02",
        tag: "Security",
        tagColor: "bg-green-100 text-green-700",
        icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
        title: "Is MCP Safe?",
        description: "Security and privacy explained. Understand exactly what data goes where, what risks exist, and how to protect yourself.",
        topics: [
            "Data flow and privacy",
            "Permission controls",
            "Risk assessment framework"
        ],
        readTime: "12 min",
        href: "/guides/is-mcp-safe",
        buttonText: "Read Guide"
    },
    {
        number: "03",
        tag: "Setup",
        tagColor: "bg-purple-100 text-purple-700",
        icon: <Settings className="w-8 h-8 text-purple-600" />,
        title: "Setup Guide",
        description: "Step-by-step installation. From downloading Claude Desktop to connecting your first tools. Includes troubleshooting.",
        topics: [
            "Installing Claude Desktop",
            "Connecting Gmail, Drive, Slack",
            "Fixing common problems"
        ],
        readTime: "20 min",
        href: "/guides/setup",
        buttonText: "Read Guide"
    },
    {
        number: "04",
        tag: "Workflows",
        tagColor: "bg-orange-100 text-orange-700",
        icon: <Zap className="w-8 h-8 text-orange-600" />,
        title: "Workflow Examples",
        description: "Copy-paste prompts that work. Real workflows for email, meetings, documents, and more. Start saving time immediately.",
        topics: [
            "Email triage & drafting",
            "Meeting prep automation",
            "Multi-tool workflows"
        ],
        readTime: "18 min",
        href: "/guides/workflows",
        buttonText: "Read Guide"
    }
];

const VIDEOS = [
    {
        title: "MCP in 60 Seconds",
        subtitle: "The fastest introduction",
        views: "1.2k views",
        thumbnailColor: "bg-blue-100",
        href: "/guides/what-is-mcp"
    },
    {
        title: "Installing Your First Server",
        subtitle: "Watch the setup process",
        views: "850 views",
        thumbnailColor: "bg-yellow-100",
        href: "/guides/setup"
    },
    {
        title: "The 'Context Window' Explained",
        subtitle: "Key concept unlocked",
        views: "2.1k views",
        thumbnailColor: "bg-orange-100",
        href: "/guides/what-is-mcp#context-window"
    }
];

const FEATURED_ARTICLES = [
    {
        title: "MCP Explained for Beginners",
        description: "A deeper dive into the concepts for non-technical readers.",
        href: "/articles/mcp-explained-for-beginners",
        readTime: "8 min"
    },
    {
        title: "20 Hours Saved Per Week",
        description: "A real-world case study of a solopreneur's transformation.",
        href: "/articles/20-hours-saved-per-week",
        readTime: "10 min"
    },
    {
        title: "MCP vs Zapier",
        description: "Understanding the differences and when to use each.",
        href: "/articles/mcp-vs-zapier",
        readTime: "6 min"
    },
    {
        title: "Common Security Concerns",
        description: "Addressing the most common questions from IT teams.",
        href: "/articles/common-mcp-security-concerns",
        readTime: "7 min"
    }
];

export default function GuidesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white font-sans text-slate-900">
            <Navbar />

            <main className="flex-1">
                {/* 1. HERO SECTION */}
                <header className="bg-slate-900 text-white pt-32 pb-24 px-6 border-b border-slate-800">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-500/30">
                            The Knowledge Hub
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
                            Master MCP in Hours, <br className="hidden md:block" />Not Weeks
                        </h1>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Four comprehensive guides. One clear path. Go from "what is this?" to automating your entire workflow.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/guides/what-is-mcp">
                                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 h-14 w-full sm:w-auto text-base">
                                    Start with Fundamentals
                                </Button>
                            </Link>
                            <Link href="/guides/setup">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-slate-700 hover:bg-slate-800 hover:text-white font-bold px-8 h-14 w-full sm:w-auto text-base">
                                    I'm ready to set up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </header>

                {/* 2. THE FOUR PILLARS */}
                <section className="py-20 px-6 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Everything You Need to Know</h2>
                            <p className="text-lg text-slate-600">Each guide builds on the last. Start wherever makes sense for you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {PILLARS.map((pillar, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 bg-slate-100 text-slate-400 font-bold text-xs px-3 py-1 rounded-bl-xl z-10">
                                        {pillar.number}
                                    </div>

                                    <div className="mb-6">
                                        <Badge variant="secondary" className={`mb-4 ${pillar.tagColor} border-0`}>
                                            {pillar.tag}
                                        </Badge>
                                        <div className="p-3 bg-slate-50 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                                            {pillar.icon}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>

                                    <div className="mb-8">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Topics</p>
                                        <ul className="space-y-2">
                                            {pillar.topics.map((topic, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center text-xs text-slate-500 font-medium">
                                                <Clock size={14} className="mr-1" /> {pillar.readTime}
                                            </div>
                                        </div>
                                        <Link href={pillar.href}>
                                            <Button className="w-full bg-slate-900 text-white hover:bg-slate-800">
                                                {pillar.buttonText} <ArrowRight size={16} className="ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. THE LEARNING PATH */}
                <section className="py-20 px-6 border-t border-slate-100 overflow-hidden">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Your MCP Journey</h2>
                        <p className="text-lg text-slate-600 mb-12">Most people follow this path. Each step unlocks the next.</p>

                        <div className="relative">
                            {/* Connector Line */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 hidden md:block -translate-y-1/2 rounded-full" />

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-0">
                                {[
                                    { step: "Step 1", title: "Learn", link: "/guides/what-is-mcp" },
                                    { step: "Step 2", title: "Evaluate", link: "/guides/is-mcp-safe" },
                                    { step: "Step 3", title: "Set Up", link: "/guides/setup" },
                                    { step: "Step 4", title: "Automate", link: "/guides/workflows" },
                                    { step: "Step 5", title: "Master", link: "/mastery" }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center group">
                                        <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center font-bold text-slate-900 text-sm mb-4 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm z-10">
                                            {idx + 1}
                                        </div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{step.step}</div>
                                        <Link href={step.link} className="font-bold text-lg text-slate-900 hover:text-blue-600 transition-colors">
                                            {step.title}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-16">
                            <Link href="/start-here" className="inline-flex items-center text-slate-500 hover:text-blue-600 font-medium transition-colors">
                                Or skip ahead—get the Quick Start Kit <ArrowRight size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 4. VIDEO LIBRARY */}
                <section className="py-24 px-6 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-2">60-Second Explainer Library</h2>
                                <p className="text-slate-600">Quick visual explanations of key MCP concepts.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {VIDEOS.map((video, idx) => (
                                <Link href={video.href} key={idx} className="group cursor-pointer block">
                                    <div className={`aspect-video w-full ${video.thumbnailColor} rounded-2xl relative shadow-md border border-black/5 overflow-hidden mb-4 transition-transform duration-300 group-hover:-translate-y-1`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                <Play size={24} className="text-slate-900 ml-1" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className="absolute top-3 right-3 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                            Short
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 mb-2">{video.subtitle}</p>
                                        <div className="flex items-center text-xs text-slate-400 font-medium">
                                            <Play size={12} className="mr-1" /> {video.views}
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. GUIDES BY ROLE */}
                <section className="py-24 px-6 bg-white border-t border-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Your Path</h2>
                            <p className="text-lg text-slate-600">Different roles have different starting points.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Solopreneurs */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 transition-all hover:shadow-lg">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <User size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Solopreneurs & Freelancers</h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    Automate your admin. Focus on clients.
                                </p>
                                <div className="mb-8">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Top Guides</p>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-400" /> Setup for non-tech users</li>
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-400" /> Email & calendar workflows</li>
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-blue-400" /> Time-saving automations</li>
                                    </ul>
                                </div>
                                <Link href="/use-cases/solopreneurs">
                                    <Button variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800">
                                        Solopreneur Path
                                    </Button>
                                </Link>
                            </div>

                            {/* Teams */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-purple-200 transition-all hover:shadow-lg">
                                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Teams & Operations</h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    Roll out MCP across your organization.
                                </p>
                                <div className="mb-8">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Top Guides</p>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-400" /> Security evaluation</li>
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-400" /> Team implementation</li>
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-purple-400" /> ROI documentation</li>
                                    </ul>
                                </div>
                                <Link href="/use-cases/teams">
                                    <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:text-purple-800">
                                        Team Path
                                    </Button>
                                </Link>
                            </div>

                            {/* Developers */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-orange-200 transition-all hover:shadow-lg">
                                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                                    <Terminal size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Developers</h3>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                                    Build and extend with MCP.
                                </p>
                                <div className="mb-8">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Top Guides</p>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-orange-400" /> Developer quick start</li>
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-orange-400" /> MCP vs APIs</li>
                                        <li className="flex items-center gap-2"><ArrowRight size={14} className="text-orange-400" /> Custom server building</li>
                                    </ul>
                                </div>
                                <Link href="/use-cases/developers">
                                    <Button variant="outline" className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 hover:text-orange-800">
                                        Developer Path
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. GO DEEPER */}
                <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-4">35+ Supporting Articles</h2>
                                <p className="text-lg text-slate-600">Deep dives on specific topics, comparisons, and advanced techniques.</p>
                            </div>
                            <Link href="/articles">
                                <Button variant="outline" className="border-slate-300">
                                    Browse All Articles <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {FEATURED_ARTICLES.map((article, idx) => (
                                <Link href={article.href} key={idx} className="block group">
                                    <div className="bg-white p-6 rounded-xl border border-slate-200 h-full hover:shadow-md transition-all hover:border-blue-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <BookOpen size={20} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                                            <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">{article.readTime}</span>
                                        </div>
                                        <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {article.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. CLOSING CTA */}
                <CTASection
                    headline="Ready to Start?"
                    description="Get the free Quick Start Kit—config files, starter workflows, and setup checklist included."
                    buttonText="Get the Free Kit"
                    buttonLink="/start-here"
                />

            </main>

            <Footer />
        </div>
    );
}
