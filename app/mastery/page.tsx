import { ConversionLayout } from '@/components/layouts/ConversionLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Check, Star, Users, Clock, Shield, PlayCircle, FileText, Settings, HelpCircle, ArrowRight, Zap, Database, MessageSquare } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Mastery: Complete Training Course | MCP Made Simple",
    description: "Master MCP in 30 days. Hands-on training, 50+ workflows, expert support. Save 15-20 hours per week with AI automation.",
    path: "/mastery",
    type: "website"
});

export default function MasteryPage() {
    return (
        <ConversionLayout>
            {/* 1. HERO SECTION */}
            <section className="text-center mb-16 px-4">
                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
                    New Cohort Open for Enrollment
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    MCP Mastery
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Go from beginner to power user in 30 days. <br />
                    <span className="text-slate-900 font-semibold">Hands-on training, real workflows, expert guidance.</span>
                </p>

                <p className="text-slate-500 max-w-2xl mx-auto mb-10">
                    The Quick Start Kit gets you started. MCP Mastery makes you unstoppable. This is the complete training program for professionals who want to fully leverage MCP—with structured lessons, hands-on projects, and support when you get stuck.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="#pricing" className="bg-blue-600 text-white text-lg font-bold py-4 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto">
                        Enroll Now
                    </Link>
                    <Link href="#curriculum" className="text-slate-600 font-medium hover:text-slate-900 flex items-center gap-2 px-6 py-4">
                        See what's included <ArrowRight size={16} />
                    </Link>
                </div>
            </section>

            {/* 2. WHO THIS IS FOR */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Who This Is For</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-blue-600">
                            <Clock size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">The Busy Professional</h3>
                        <p className="text-slate-600 text-sm">You've tried MCP but haven't fully integrated it into your workflow. You want structured guidance to actually get results—not just another tool gathering dust.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-purple-600">
                            <Users size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">The Team Leader</h3>
                        <p className="text-slate-600 text-sm">You need to roll out MCP across your team. You want proven workflows, training materials, and confidence that this will stick.</p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 text-green-600">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2">The Ambitious Learner</h3>
                        <p className="text-slate-600 text-sm">You learn best with structure. You want a curriculum, not just documentation. You want to master this, not just dabble.</p>
                    </div>
                </div>
                <div className="bg-white border text-center p-4 rounded-lg mt-8 text-sm text-slate-500">
                    <strong>Not for you?</strong> If you're happy with basic usage and don't need advanced workflows, the free <Link href="/start-here" className="text-blue-600 underline">Quick Start Kit</Link> may be all you need.
                </div>
            </section>

            {/* 3. MODULES */}
            <section id="curriculum" className="mb-20">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-4">What You'll Master</h2>
                <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">A structured 4-week curriculum designed to take you from "Setup" to "System".</p>

                <div className="space-y-6">
                    {/* Module 1 */}
                    <div className="border border-slate-200 rounded-xl p-6 md:p-8 hover:border-blue-200 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="shrink-0 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                                01
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Foundation (Week 1)</h3>
                                <p className="text-slate-600 mb-4">Master the architecture and set up a rock-solid configuration connecting your core tools.</p>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> MCP Architecture Deep Dive</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Connecting Gmail, Drive, Calendar</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Multi-Tool Configuration</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Troubleshooting Common Issues</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Module 2 */}
                    <div className="border border-slate-200 rounded-xl p-6 md:p-8 hover:border-blue-200 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="shrink-0 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                                02
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Core Workflows (Week 2)</h3>
                                <p className="text-slate-600 mb-4">Automate the "Big 3" time sinks: Email, Meetings, and Documents.</p>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Email Automation Mastery</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Meeting Prep Systems</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Document Management</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Task Extraction & Tracking</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Module 3 */}
                    <div className="border border-slate-200 rounded-xl p-6 md:p-8 hover:border-blue-200 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="shrink-0 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                                03
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Advanced Integration (Week 3)</h3>
                                <p className="text-slate-600 mb-4">Go beyond basics with multi-tool chaining and custom prompt engineering.</p>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Complex Multi-Step Workflows</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Cross-Platform Synthesis</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Building Workflow Libraries</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Custom Prompt Engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Module 4 */}
                    <div className="border border-slate-200 rounded-xl p-6 md:p-8 hover:border-blue-200 transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="shrink-0 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 font-bold text-xl">
                                04
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Team & Scale (Week 4)</h3>
                                <p className="text-slate-600 mb-4">Deploying MCP organization-wide securely and effectively.</p>
                                <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> ROI Measurement</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Shared Team Libraries</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Security & Compliance</li>
                                    <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle size={14} className="text-blue-500" /> Training Your Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHAT'S INCLUDED */}
            <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
                <h2 className="text-3xl font-bold text-center mb-12 relative z-10">Everything You Get</h2>

                <div className="grid md:grid-cols-2 gap-8 relative z-10">
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-lg h-fit"><PlayCircle size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">20+ Video Lessons</h3>
                            <p className="text-slate-300 text-sm">Bite-sized, screen-recorded tutorials you can watch at your own pace. Lifetime access.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-lg h-fit"><FileText size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Workflow Templates</h3>
                            <p className="text-slate-300 text-sm">50+ copy-paste prompts organized by use case. The exact "code" to run your tailored automations.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-lg h-fit"><Settings size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Config Files</h3>
                            <p className="text-slate-300 text-sm">Pre-built, validated configuration files for Mac and Windows. Skip the setup headaches.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-lg h-fit"><Users size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Private Community</h3>
                            <p className="text-slate-300 text-sm">Network with other professionals. Share workflows, ask questions, and get feedback.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-lg h-fit"><HelpCircle size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Weekly Office Hours</h3>
                            <p className="text-slate-300 text-sm">Live Q&A sessions to get unstuck in real-time. We don't leave you hanging.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-3 rounded-lg h-fit"><MessageSquare size={24} /></div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Priority Email Support</h3>
                            <p className="text-slate-300 text-sm">Direct access to instructors for specific implementation questions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE DIFFERENCE */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Why This Course vs. DIY</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="p-4 rounded-tl-lg font-bold text-slate-500">DIY with Free Content</th>
                                <th className="p-4 rounded-tr-lg font-bold text-blue-700 bg-blue-50 border-b-blue-100">MCP Mastery</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr><td className="p-4 text-slate-600">Scattered documentation</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Structured curriculum</td></tr>
                            <tr><td className="p-4 text-slate-600">Trial and error</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Proven workflows</td></tr>
                            <tr><td className="p-4 text-slate-600">Stuck? Google it</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Stuck? Ask an Expert</td></tr>
                            <tr><td className="p-4 text-slate-600">Generic examples</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Industry-specific templates</td></tr>
                            <tr><td className="p-4 text-slate-600">Weeks to figure out</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Days to implement</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="mb-20">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-10">Results You Can Expect</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-xl">
                        <div className="flex items-center gap-1 text-yellow-500 mb-3"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                        <p className="text-slate-700 text-sm mb-4">"I saved 8 hours in my first week just by automating my meeting prep. The course paid for itself immediately."</p>
                        <div className="text-xs">
                            <strong>Marcus Chen</strong>
                            <div className="text-slate-500">Product Manager</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-xl">
                        <div className="flex items-center gap-1 text-yellow-500 mb-3"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                        <p className="text-slate-700 text-sm mb-4">"Finally, a guide that doesn't just assume I'm a software engineer. The templates are literally copy-paste gold."</p>
                        <div className="text-xs">
                            <strong>Sarah Jenkins</strong>
                            <div className="text-slate-500">Operations Director</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-sm border border-slate-100 p-6 rounded-xl">
                        <div className="flex items-center gap-1 text-yellow-500 mb-3"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                        <p className="text-slate-700 text-sm mb-4">"Rolled this out to my team of 5. We've eliminated our Monday status sync entirely thanks to the automated reporting workflow."</p>
                        <div className="text-xs">
                            <strong>David Ross</strong>
                            <div className="text-slate-500">Agency Founder</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. PRICING & GUARANTEE */}
            <section id="pricing" className="mb-20 max-w-lg mx-auto">
                <div className="border-2 border-blue-600 rounded-3xl p-8 relative shadow-2xl bg-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                    </div>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">MCP Mastery</h2>
                    <div className="text-center mb-6">
                        <span className="text-4xl font-extrabold text-slate-900">$297</span>
                        <span className="text-slate-500 text-sm block mt-1">One-time payment • Lifetime access</span>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3 text-sm text-slate-700"><Check size={18} className="text-green-500 shrink-0" /> <strong>Full 4-Module Curriculum</strong></div>
                        <div className="flex items-center gap-3 text-sm text-slate-700"><Check size={18} className="text-green-500 shrink-0" /> <strong>50+ Workflow Templates</strong></div>
                        <div className="flex items-center gap-3 text-sm text-slate-700"><Check size={18} className="text-green-500 shrink-0" /> <strong>Pre-built Config Files</strong></div>
                        <div className="flex items-center gap-3 text-sm text-slate-700"><Check size={18} className="text-green-500 shrink-0" /> <strong>Community Access</strong></div>
                        <div className="flex items-center gap-3 text-sm text-slate-700"><Check size={18} className="text-green-500 shrink-0" /> <strong>4 Weeks Live Office Hours</strong></div>
                    </div>

                    <a href="#" className="block w-full bg-blue-600 text-white text-center font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                        Enroll Now
                    </a>

                    <p className="text-center text-xs text-slate-400 mt-4">
                        Secure payment via Stripe. Instant access.
                    </p>
                </div>

                {/* Guarantee */}
                <div className="mt-8 flex gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <Shield size={32} className="text-slate-400 shrink-0" />
                    <div>
                        <h3 className="font-bold text-slate-900">30-Day Money-Back Guarantee</h3>
                        <p className="text-sm text-slate-600 mt-1">Try MCP Mastery risk-free. If you don't save time in the first 30 days, we'll refund you in full. No questions asked.</p>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <Link href="mailto:team@mcpmadesimple.com" className="text-slate-500 text-sm hover:underline">Looking for team pricing (5+ seats)? Contact us.</Link>
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="mb-20 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-center text-slate-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">How is this different from the free Quick Start Kit?</h3>
                        <p className="text-sm text-slate-600">The Quick Start Kit is a basic setup guide. Mastery is a complete curriculum with 4x the content, live support, community access, and advanced techniques.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">What if I'm not technical?</h3>
                        <p className="text-sm text-slate-600">Perfect. This course is designed for non-technical professionals. We walk through every step with screen recordings. No coding required.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Do I need Claude Pro?</h3>
                        <p className="text-sm text-slate-600">Claude Pro ($20/month) is recommended for full MCP functionality, but you can learn the concepts on the free tier.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Can I expense this?</h3>
                        <p className="text-sm text-slate-600">Yes. We provide invoices and <Link href="/articles/mcp-roi-for-business" className="text-blue-600 underline">ROI documentation</Link> to help you make the case.</p>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Stop Wasting Time on Busywork</h2>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto">Every week you delay is another 15-20 hours lost to tasks AI could handle.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="#pricing" className="bg-blue-600 text-white text-lg font-bold py-4 px-12 rounded-xl hover:bg-blue-700 transition-colors shadow-lg">
                        Join MCP Mastery
                    </Link>
                </div>
                <p className="mt-8 text-sm text-slate-500">
                    Not ready? <Link href="/start-here" className="text-slate-900 underline font-medium">Start for free</Link>
                </p>
            </section>

        </ConversionLayout>
    );
}
