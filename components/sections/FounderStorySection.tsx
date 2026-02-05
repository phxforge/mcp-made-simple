'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function FounderStorySection() {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-[1280px] mx-auto px-6 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Built by a Practitioner, Not a Pundit
                    </h2>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100">
                    <div className="grid md:grid-cols-12 gap-12 items-center">
                        {/* Left: Photo */}
                        <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-start">
                            <div className="relative w-64 h-64 md:w-full md:aspect-square rounded-2xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/about/jason-headshot.jpg"
                                    alt="Jason Laveglia - Founder of MCP Made Simple"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right: Story */}
                        <div className="md:col-span-7 lg:col-span-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">
                                I'm Jason Laveglia. I built MCP Made Simple because I was drowning in copy-paste.
                            </h3>
                            <div className="prose prose-lg text-slate-600 mb-8 leading-relaxed">
                                <p className="mb-4">
                                    I'm shipping <strong>FightHOA</strong>—a LegalTech product managing thousands of state statutes. As a solo founder, I was spending more time moving data between tools than actually building.
                                </p>
                                <p className="mb-4">
                                    When Anthropic released MCP, I went deep. I implemented servers, wrote cursor rules, built agentic workflows. What took hours now takes minutes.
                                </p>
                                <p>
                                    This site is everything I learned—documented for other builders facing the same problem.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">Solo Founder</span>
                                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">Context Engineer</span>
                                <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-semibold">Building in Public</span>
                            </div>

                            <Link href="/about">
                                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                                    Read My Full Story →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
