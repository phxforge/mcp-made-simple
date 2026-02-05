'use client';
import { motion } from 'framer-motion';
import { EmailCaptureForm } from '@/components/ui/EmailCaptureForm';
import { Check, CheckCircle2, AlertCircle, Plus } from 'lucide-react';
import { useState } from 'react';

const modules = [
    "Why 95% of AI automation fails (and how to be in the 5%)",
    "MCP fundamentals—architecture, security, comparisons",
    "Your first AI agent in 60 minutes",
    "Prompt engineering for reliable workflows",
    "Multi-system integration (connect 3+ tools)",
    "Production-ready deployment",
    "Building custom MCP servers (advanced)",
    "The MCP ecosystem and staying current",
    "Capstone: Your production-grade automation"
];

const faqs = [
    { q: "When will the course launch?", a: "Q2 2026. Modules will release progressively so you can start learning before full launch." },
    { q: "Is this just for Todoist?", a: "No—MCP works with any system that has an MCP server. We cover Todoist, Notion, Linear, Gmail, GitHub, Slack, and more." },
    { q: "Do I need to code?", a: "No for the core modules. We have an optional DIY Track for those who want to build custom servers." },
    { q: "What if I join waitlist but don't buy?", a: "No obligation! You'll just get updates and free content. Unsubscribe anytime." }
];

export default function CoursePage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-center px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <div className="inline-block bg-amber-100 text-amber-900 px-4 py-1 rounded-full text-sm font-bold mb-6 border border-amber-200">
                        🚧 Currently in Development | Launching Q2 2026
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        MCP Multi-System <span className="text-primary">Automation Bootcamp</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mb-10">
                        Master AI automation across your entire workflow—Todoist, Notion, Linear, Gmail, GitHub & more.
                    </p>

                    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md mx-auto">
                        <h3 className="font-bold text-gray-900 mb-2">Join Waitlist for Founder Pricing</h3>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-3xl font-bold text-orange-500">$199</span>
                            <span className="text-gray-400 line-through text-lg">$350</span>
                        </div>
                        <EmailCaptureForm source="course-hero" buttonText="Join Waitlist & Save $150" inline={false} />
                        <p className="text-xs text-gray-400 mt-3">No credit card required.</p>
                    </div>
                </div>
            </section>

            {/* Curriculum */}
            <section className="py-20 bg-gray-50 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">9 Modules to MCP Mastery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                        {modules.map((mod, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold flex-shrink-0">
                                    {i + 1}
                                </div>
                                <span className="text-lg text-gray-700 font-medium pt-1">{mod}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-8 text-center max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-2">
                            <Plus size={24} /> Includes Bonuses
                        </h3>
                        <p className="text-blue-700">Prompt packs, security playbook, use case library, deployment guides, lifetime community</p>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-20 bg-white px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-16">Simple Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                        {/* Regular */}
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 opacity-60 grayscale hover:grayscale-0 transition-all">
                            <h3 className="text-xl font-bold text-gray-500">Regular Price</h3>
                            <div className="my-4 text-4xl font-bold text-gray-400">$350</div>
                            <p className="text-sm text-gray-500 mb-8">Available after launch</p>
                            <button disabled className="w-full py-3 bg-gray-200 text-gray-400 font-bold rounded-lg cursor-not-allowed">
                                Coming Soon
                            </button>
                        </div>

                        {/* Waitlist (Highlighted) */}
                        <div className="bg-white rounded-xl p-8 border-2 border-orange-500 shadow-xl relative scale-105 z-10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                                Waitlist Only
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Founder Pricing</h3>
                            <div className="my-4 flex items-end gap-2">
                                <span className="text-5xl font-bold text-gray-900">$199</span>
                                <span className="text-xl text-gray-400 line-through mb-2">$350</span>
                            </div>
                            <div className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold mb-8">
                                Save $150
                            </div>
                            <EmailCaptureForm source="course-pricing" buttonText="Join Waitlist Now" inline={false} />

                            {/* LOCAL DEV ONLY */}
                            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                                <p className="text-xs font-bold text-blue-600 mb-2 uppercase tracking-wide">Dev: Integration Test</p>
                                <a
                                    href="http://local.openedx.io/courses/course-v1:MCP+MCP101+2026/about"
                                    target="_blank"
                                    className="block w-full py-2 bg-blue-50 border border-blue-200 text-blue-700 font-bold rounded-lg hover:bg-blue-100 text-sm"
                                >
                                    Access Local LMS Course →
                                </a>
                            </div>
                        </div>

                        {/* Enterprise */}
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                            <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
                            <div className="my-4 text-4xl font-bold text-gray-900">$697</div>
                            <p className="text-sm text-gray-500 mb-8">Team seats + coaching</p>
                            <a href="mailto:sales@mcpmadesimple.com" className="block w-full text-center py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50">
                                Contact Us
                            </a>
                        </div>

                    </div>

                    <div className="text-center mt-12 flex items-center justify-center gap-2 text-gray-500">
                        <CheckCircle2 className="text-green-500" size={20} />
                        <span className="font-medium">60-day money-back guarantee</span>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-gray-50 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-4 font-bold text-gray-900 flex justify-between items-center hover:bg-gray-50"
                                >
                                    {faq.q}
                                    <span className={`text-gray-400 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-slate-900 text-white px-6 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-6">Ready to Master MCP?</h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Join 500+ on the waitlist. Launching Q2 2026.
                    </p>
                    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                        <EmailCaptureForm source="course-footer" buttonText="Join the Waitlist" inline={true} />
                    </div>
                </div>
            </section>
        </main>
    );
}
