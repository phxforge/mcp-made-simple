import { ConversionLayout } from '@/components/layouts/ConversionLayout';
import { EmailCaptureForm } from '@/components/ui/EmailCaptureForm';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { FileText, Wrench, Shield, HelpCircle, CheckCircle, Settings } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
    title: "Get the MCP Quick Start Kit",
    description: "Free MCP Quick Start Kit with 10 pre-built workflows and step-by-step setup guides. Start automating in 15 minutes.",
    path: "/start-here",
    type: "website"
});

export default function StartHerePage() {
    return (
        <ConversionLayout>
            <div className="text-center">

                {/* 1. HERO SECTION */}
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                    Get the MCP <span className="text-orange-600">Quick Start Kit</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    10 pre-built workflows + step-by-step setup guides. <br className="hidden md:block" />
                    Start automating in 15 minutes. Free.
                </p>

                {/* 2. EMAIL CAPTURE FORM */}
                <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-xl mb-16 ring-1 ring-slate-100">
                    <EmailCaptureForm
                        source="start_here_hero"
                        buttonText="Send Me the Kit"
                        placeholder="Enter your email address"
                    />
                    <p className="text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
                        <Shield size={12} />
                        No spam. Unsubscribe anytime.
                    </p>
                </div>

                {/* 3. WHAT'S INCLUDED SECTION */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-10">What You'll Get</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                        {/* Item 1 */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                                <FileText size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">10 Ready-to-Use Workflows</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Copy-paste automations for email, calendar, documents, and more. Works in 15 minutes.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-purple-600">
                                <Settings size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Step-by-Step Setup Guide</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Mac, Windows, and Linux instructions. No coding required for most workflows.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-orange-600">
                                <Wrench size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Tool Connection Templates</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Pre-configured settings for Google Drive, Notion, Slack, Gmail, and more.
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-red-600">
                                <HelpCircle size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-2">Troubleshooting Cheatsheet</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Solutions to the 10 most common setup issues. Save hours of frustration.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 4. WHO THIS IS FOR SECTION */}
                <div className="mb-20 max-w-2xl mx-auto text-left">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Perfect For You If...</h2>
                    <ul className="space-y-4">
                        {[
                            "You're tired of copying data between apps manually",
                            "You want AI to actually DO things, not just chat",
                            "You've heard about MCP but don't know where to start",
                            "You want to automate without learning to code",
                            "You're a developer who wants to skip the boilerplate"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                <span className="text-lg text-slate-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 6. FAQ SECTION */}
                <div className="mb-20 max-w-2xl mx-auto text-left">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Is this really free?</h4>
                            <p className="text-slate-600">Yes, completely free. No credit card required.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">Do I need to know how to code?</h4>
                            <p className="text-slate-600">No. 8 of the 10 workflows work without any coding. The other 2 have copy-paste code included.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">How long does setup take?</h4>
                            <p className="text-slate-600">Most people are running their first workflow within 15-30 minutes.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-2">What tools do I need?</h4>
                            <p className="text-slate-600">Claude (free tier works), plus whatever tools you want to connect (Google Drive, Notion, etc.)</p>
                        </div>
                    </div>
                </div>

                {/* 7. FINAL CTA SECTION */}
                <div className="bg-slate-900 p-8 md:p-12 rounded-2xl text-white mb-12">
                    <h2 className="text-3xl font-bold mb-6">Ready to Stop Playing Copy-Paste?</h2>
                    <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                        Get the full kit and start building your first agent today.
                    </p>
                    <div className="max-w-md mx-auto">
                        <EmailCaptureForm
                            source="start_here_bottom"
                            buttonText="Send Me the Kit"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>

                {/* LINKS */}
                <div className="text-slate-500 text-sm space-y-2">
                    <p>
                        Want to learn more first? <Link href="/guides/what-is-mcp" className="text-blue-600 hover:underline">Read: What is MCP?</Link>
                    </p>
                    <p>
                        Looking for advanced training? <Link href="/mastery" className="text-slate-400 hover:text-slate-600 hover:underline">View Bootcamp</Link>
                    </p>
                </div>

            </div>
        </ConversionLayout>
    );
}
