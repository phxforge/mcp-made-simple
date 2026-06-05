import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Wrench, Lightbulb, HeartHandshake } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
    title: "About Jason Laveglia",
    description: "Meet the founder of MCP Made Simple. Learn why he built this platform to cut SaaS automation costs and reclaim hours of time.",
    path: "/founder",
});

export default function FounderPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 pb-24">

            {/* HERO */}
            <header className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center">
                <Badge variant="secondary" className="mb-6 bg-slate-100 text-slate-600 hover:bg-slate-200 border-0 text-sm py-1 px-3">
                    The Builder Behind The System
                </Badge>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900">
                    I’m Jason. I built this because I was <span className="text-red-600">tired of being a "Digital Plumber."</span>
                </h1>
            </header>

            <main className="max-w-3xl mx-auto px-6 space-y-20 text-lg text-slate-700 leading-relaxed">

                {/* 1. THE BACKSTORY */}
                <section>
                    <div className="mb-6 flex items-center gap-3 text-slate-900 font-bold uppercase tracking-wider text-sm border-b border-slate-200 pb-2">
                        <Wrench size={18} className="text-slate-500" />
                        The Backstory
                    </div>
                    <p className="mb-6">
                        I am a <strong className="text-slate-900">Systematic Solo Founder</strong> building real companies in public (currently shipping <a href="https://fighthoa.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">FightHOA</a>).
                    </p>
                    <p className="mb-6">
                        I didn't start <em>MCP Made Simple</em> because I wanted to be an educator. I started it because I was drowning in admin work.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-300 italic text-slate-600 my-8">
                        "Like you, I was paying $600/month for a stack of automation tools (Zapier, Make, etc.) that promised to save me time. Instead, they gave me a second job: <strong>managing broken connections</strong>. I was spending my nights fixing API keys instead of building my product."
                    </div>
                </section>

                {/* 2. THE AHA MOMENT */}
                <section>
                    <div className="mb-6 flex items-center gap-3 text-slate-900 font-bold uppercase tracking-wider text-sm border-b border-slate-200 pb-2">
                        <Lightbulb size={18} className="text-yellow-500" />
                        The "Aha" Moment
                    </div>
                    <p className="mb-6">
                        When Anthropic released the <strong>Model Context Protocol (MCP)</strong>, I realized the game had changed.
                    </p>
                    <p className="mb-6">
                        I saw a future where AI didn't need "glue code" to talk to my business. I spent 6 months obsessed with this protocol—breaking things, reading dense documentation intended for engineers, and rewriting my entire operating system.
                    </p>
                    <p className="font-bold text-green-700 bg-green-50 inline-block px-4 py-2 rounded-lg">
                        The Result: I cut my software costs by $8,000/year and reclaimed 15 hours a week.
                    </p>
                </section>

                {/* 3. THE PROMISE */}
                <section className="bg-slate-900 text-slate-300 p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                        <div className="mb-6 flex items-center gap-3 text-white font-bold uppercase tracking-wider text-sm">
                            <HeartHandshake size={18} className="text-blue-400" />
                            My Promise to You
                        </div>

                        <p className="mb-8 text-lg">
                            I am not a theoretical computer scientist. <strong>I am a builder.</strong> Everything on this site is "Production-Grade." I don't teach theory; I teach the exact workflows I use to run a 6-figure business as a team of one.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-center">
                            <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                                <div className="text-white font-bold text-xl mb-1">No Code.</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                                <div className="text-white font-bold text-xl mb-1">No Hype.</div>
                            </div>
                            <div className="bg-white/10 p-4 rounded-xl border border-white/5">
                                <div className="text-white font-bold text-xl mb-1">Just Systems.</div>
                            </div>
                        </div>

                        <p className="mb-8 text-center text-slate-400">
                            If you want to build the "One-Person Unicorn," you need your AI to work for you, not the other way around.
                        </p>

                        <div className="text-center">
                            <Link href="/#waitlist-form">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 px-10 rounded-xl text-lg shadow-lg hover:shadow-blue-500/25 transition-all w-full md:w-auto">
                                    Steal My System (Get the Kit) <ArrowRight className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
