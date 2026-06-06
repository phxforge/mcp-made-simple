import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Star, Quote, Clock, CheckCircle2, Users, Rocket, BarChart, MessageSquare, ThumbsUp, HelpCircle } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "MCPMadeSimple Reviews & Testimonials",
    description: "What people say about learning MCP with MCPMadeSimple. Real results and feedback.",
    path: "/articles/mcpmadesimple-reviews-and-testimonials",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="MCPMadeSimple Reviews & Testimonials"
            description="What people say about learning MCP with MCPMadeSimple. Real results and feedback."
            category="Security"
            readTime="6 min"
            parentPillar={{ title: 'Is MCP Safe?', slug: '/guides/is-mcp-safe' }}
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                You're considering learning MCP. You want to know if MCPMadeSimple actually helps people get results—or if it's just another resource that sounds good but doesn't deliver. Here's what real users have experienced learning MCP with our guides, Quick Start Kit, and Mastery course.
            </p>

            {/* 2. USE CASES */}
            <h2 id="use-cases">What People Use MCPMadeSimple For</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Learning from Scratch</h3>
                    <p className="text-sm text-slate-600">Most visitors arrive knowing almost nothing about MCP. They leave with working setups and functioning workflows.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Getting Unstuck</h3>
                    <p className="text-sm text-slate-600">Many try to set it up alone, hit config errors, and give up. Our troubleshooting guides bridge that gap.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Team Rollout</h3>
                    <p className="text-sm text-slate-600">Operations leads use our implementation plans to deploy MCP safely across their departments.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-bold text-slate-900 mb-2">Validating Security</h3>
                    <p className="text-sm text-slate-600">IT professionals use our security guides to audit whether MCP is safe for their data.</p>
                </div>
            </div>

            {/* 3. REPORTED RESULTS */}
            <h2 id="results">Results People Report</h2>
            <div className="my-8 space-y-6">

                <div className="flex gap-4 items-start">
                    <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0 mt-1"><Clock size={24} /></div>
                    <div>
                        <strong className="block text-slate-900 text-lg">Time Savings</strong>
                        <p className="text-slate-600 text-sm mb-2">"10-15 hours per week" is the most common metric. Heavy users reporting 20+ hours on documentation and email tasks.</p>
                        <Link href="/articles/20-hours-saved-per-week" className="text-blue-600 text-sm hover:underline flex items-center gap-1">Read Case Study <BarChart size={14} /></Link>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600 shrink-0 mt-1"><CheckCircle2 size={24} /></div>
                    <div>
                        <strong className="block text-slate-900 text-lg">Setup Success</strong>
                        <p className="text-slate-600 text-sm mb-2">Average setup time for first tool &lt; 60 minutes. High success rate for non-technical users using the Quick Start configuration files.</p>
                        <Link href="/articles/mcp-setup-troubleshooting" className="text-blue-600 text-sm hover:underline flex items-center gap-1">See Troubleshooting Guide <HelpCircle size={14} /></Link>
                    </div>
                </div>

                <div className="flex gap-4 items-start">
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600 shrink-0 mt-1"><Rocket size={24} /></div>
                    <div>
                        <strong className="block text-slate-900 text-lg">Workflow Adoption</strong>
                        <p className="text-slate-600 text-sm mb-2">Users typically start with 2 core workflows (Email + Calendar) and expand to 10+ within the first month.</p>
                        <Link href="/guides/workflows" className="text-blue-600 text-sm hover:underline flex items-center gap-1">Explore Workflows <Rocket size={14} /></Link>
                    </div>
                </div>
            </div>

            {/* 4. TESTIMONIALS */}
            <h2 id="testimonials">What Users Say</h2>
            <div className="grid gap-6 my-8">

                {/* Testimonial 1 */}
                <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm relative overflow-hidden">
                    <Quote className="absolute top-4 right-4 text-slate-100 size-16 -z-10" />
                    <p className="text-slate-700 italic mb-4">"I spent weeks trying to figure out MCP from the official docs and got nowhere. The Quick Start Kit got me running in 45 minutes. Now Claude handles my entire inbox triage."</p>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">JS</div>
                        <div>
                            <strong className="block text-xs uppercase tracking-wider text-slate-500">The Solopreneur</strong>
                            <span className="text-sm font-bold text-slate-900">Sarah J. // Marketing Consultant</span>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm relative overflow-hidden">
                    <Quote className="absolute top-4 right-4 text-slate-100 size-16 -z-10" />
                    <p className="text-slate-700 italic mb-4">"Rolling this out to my ops team was daunting. The Implementation Guide gave me the exact roadmap. We went from 0 to 15 people using standard MCP configs in 3 weeks."</p>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-bold">MR</div>
                        <div>
                            <strong className="block text-xs uppercase tracking-wider text-slate-500">The Operations Lead</strong>
                            <span className="text-sm font-bold text-slate-900">Marcus R. // COO @ LogiTech</span>
                        </div>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm relative overflow-hidden">
                    <Quote className="absolute top-4 right-4 text-slate-100 size-16 -z-10" />
                    <p className="text-slate-700 italic mb-4">"I'm not a coder. I thought this was just for engineers. The Non-Technical guide proved me wrong. Connecting Google Drive to Claude felt like magic."</p>
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold">AL</div>
                        <div>
                            <strong className="block text-xs uppercase tracking-wider text-slate-500">The Non-Technical User</strong>
                            <span className="text-sm font-bold text-slate-900">Amanda L. // HR Director</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. FEEDBACK ANALYSIS */}
            <h2 id="feedback">Feedback Analysis</h2>
            <div className="grid md:grid-cols-2 gap-8 my-8">
                <div>
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><ThumbsUp size={18} className="text-green-600" /> What People Appreciate</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> <strong>Clarity:</strong> "No jargon, just steps."</li>
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> <strong>Practicality:</strong> "Workflows I can actually use today."</li>
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> <strong>Honesty:</strong> "They tell you when NOT to use it."</li>
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-green-500 mt-0.5 shrink-0" /> <strong>Support:</strong> "Troubleshooting guide actually works."</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><MessageSquare size={18} className="text-slate-600" /> Common Critiques & Responses</h3>
                    <ul className="space-y-3 text-sm text-slate-600">
                        <li className="border-l-2 border-slate-200 pl-3">
                            <em>"Some content feels basic."</em><br />
                            <span className="text-xs text-slate-500">Fair. We prioritize accessibility. Devs should skip to the Developer Guide.</span>
                        </li>
                        <li className="border-l-2 border-slate-200 pl-3">
                            <em>"Want more tool integrations."</em><br />
                            <span className="text-xs text-slate-500">We add them as stable servers emerge. Quality &gt; Quantity.</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 6. WHO IT IS FOR */}
            <h2 id="verdict">Is MCPMadeSimple Right for You?</h2>
            <p className="mb-6">We want you to succeed, even if it's not with us.</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-lg">
                    <strong className="block text-blue-900 mb-2">Yes, if you...</strong>
                    <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                        <li>Want structured, step-by-step guidance</li>
                        <li>Value practical workflows over theory</li>
                        <li>Needs help troubleshooting configuration</li>
                        <li>Want to automate without becoming a developer</li>
                    </ul>
                </div>
                <div className="bg-slate-50/50 border border-slate-200 p-5 rounded-lg">
                    <strong className="block text-slate-900 mb-2">No, if you...</strong>
                    <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                        <li>Are already an MCP power user / contributor</li>
                        <li>Require enterprise-grade consulting services</li>
                        <li>Want guaranteed specific business outcomes</li>
                        <li>Prefer reading raw GitHub READMEs</li>
                    </ul>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Decide for Yourself</h2>
                <p className="text-slate-400 mb-6 max-w-lg mx-auto">Try the free content first. It's the best way to know if our teaching style works for you.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Get the Free Kit <Rocket size={18} />
                    </Link>
                    <Link href="/mastery" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        View Mastery Course <Star size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
