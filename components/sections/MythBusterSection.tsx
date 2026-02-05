'use client';
import { motion } from 'framer-motion';
import { Server, CloudOff, UserX, Terminal, Zap, Clock, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function MythBusterSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 w-full">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        No, You Don't Need to Buy a Server
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        When you hear "MCP Server," you might picture racks of hardware and IT departments.
                        <br className="hidden md:block" />
                        Here's the truth: "Server" is just unfortunate naming.
                    </p>
                    <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 inline-block text-left">
                        <p className="text-blue-800 font-medium flex gap-3 items-center">
                            <Laptop size={24} />
                            <span>MCP is <strong>SOFTWARE</strong> that runs on your existing laptop. Think of it like installing Slack or Zoom—but for AI connections.</span>
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Column 1: What You DON'T Need */}
                    <div className="bg-red-50/50 border border-red-100 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                            <span className="bg-red-100 p-2 rounded-lg"><Server size={20} className="text-red-600" /></span>
                            What You DON'T Need
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { text: "Physical servers", icon: Server },
                                { text: "Cloud hosting bills", icon: CloudOff },
                                { text: "IT department", icon: UserX },
                                { text: "Coding skills", icon: Terminal }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <span className="text-red-500 font-bold">✕</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: What You DO Need */}
                    <div className="bg-green-50/50 border border-green-100 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                        <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                            <span className="bg-green-100 p-2 rounded-lg"><Laptop size={20} className="text-green-600" /></span>
                            What You DO Need
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { text: "A laptop (you have this)" },
                                { text: "5 minutes to set up" },
                                { text: "The free Quick Start Kit" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                    <span className="font-medium">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: What You GET */}
                    <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8">
                        <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                            <span className="bg-blue-100 p-2 rounded-lg"><Zap size={20} className="text-blue-600" /></span>
                            What You GET
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { text: "Claude reads your Google Drive", icon: Zap },
                                { text: "AI searches your Slack", icon: Zap },
                                { text: "Instant file access", icon: Zap },
                                { text: "5+ hours saved weekly", icon: Clock }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <Zap size={16} className="text-blue-500 shrink-0" />
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/start-here">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 h-14 text-lg shadow-lg shadow-orange-500/20">
                            Get the Free Kit →
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
