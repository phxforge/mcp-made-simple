import { Scale, AlertTriangle, GraduationCap, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { StandardLayout } from '@/components/layouts/StandardLayout';

export const metadata: Metadata = generatePageMetadata({
    title: "Terms of Service",
    description: "Our 'Responsible Builder' agreement and terms governing your use of our platform.",
    path: "/terms",
});

export default function TermsPage() {
    return (
        <StandardLayout>
            {/* HERO */}
            <header className="pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
                    Terms of Service
                </h1>
                <p className="text-xl text-slate-600">Effective Date: January 26, 2026</p>
            </header>

            <main className="max-w-3xl mx-auto px-6">

                {/* 1. THE HUMAN SUMMARY (The "Responsible Builder" Agreement) */}
                <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-8 mb-20 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <Scale className="text-yellow-600" size={32} />
                        <h2 className="text-2xl font-bold text-yellow-900">The "Responsible Builder" Agreement</h2>
                    </div>

                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <div className="bg-white p-1.5 rounded-full shadow-sm mt-1">
                                <AlertTriangle size={16} className="text-yellow-600" />
                            </div>
                            <div>
                                <strong className="block text-yellow-900 font-bold">1. You are the Captain</strong>
                                <span className="text-yellow-800/80 text-sm leading-relaxed">
                                    We teach you how to give AI "hands" to edit files and delete emails. We are not responsible if you tell your AI to "Delete my entire hard drive" and it actually does it. <strong>Always backup your data before running new MCP servers.</strong>
                                </span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-white p-1.5 rounded-full shadow-sm mt-1">
                                <GraduationCap size={16} className="text-yellow-600" />
                            </div>
                            <div>
                                <strong className="block text-yellow-900 font-bold">2. Educational Use Only</strong>
                                <span className="text-yellow-800/80 text-sm leading-relaxed">
                                    The code snippets provided are for educational purposes. Test them in a safe environment before using them on production business data.
                                </span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-white p-1.5 rounded-full shadow-sm mt-1">
                                <ShieldAlert size={16} className="text-yellow-600" />
                            </div>
                            <div>
                                <strong className="block text-yellow-900 font-bold">3. Refund Policy</strong>
                                <span className="text-yellow-800/80 text-sm leading-relaxed block mb-2">
                                    <strong>Digital Downloads (PDFs/Json):</strong> No refunds (since you can't "return" a file), unless the file is corrupt.
                                </span>
                                <span className="text-yellow-800/80 text-sm leading-relaxed">
                                    <strong>Courses:</strong> 14-Day Money-Back Guarantee if you show you tried the work.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 2. THE LEGAL TEXT (Styled) */}
                <div className="space-y-16 text-slate-700 leading-relaxed">

                    {/* 1. Agreement */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">1. Agreement to Terms</h3>
                        <p className="mb-4">
                            These Terms of Service ("Terms") constitute a legally binding agreement between you (the "User") and <strong>MCP Made Simple</strong> ("Company," "we," "us," or "our") governing your access to and use of <strong>mcpmadesimple.com</strong> (the "Platform") and all related services.
                        </p>
                        <p>
                            By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, you must not use the Platform.
                        </p>
                    </section>

                    {/* Definitions & Eligibility */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">2. Interpretation and Definitions</h3>
                        <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                            <li><strong>"Content"</strong> means all educational materials, including videos, text, images, audio, documents, and any other material available on the Platform.</li>
                            <li><strong>"Course"</strong> means any educational program or digital content offered for purchase or access through the Platform.</li>
                            <li><strong>"User Account"</strong> means the account you create to access purchased courses and services.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">3. Eligibility</h3>
                        <p>
                            You must be at least 16 years of age to use this Platform. By using the Platform, you represent that you meet this age requirement and have the legal capacity to enter into these Terms.
                        </p>
                    </section>

                    {/* User Accounts */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">4. User Accounts</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Registration</h4>
                                <ul className="list-disc pl-5 space-y-2 text-sm marker:text-blue-500">
                                    <li>Provide accurate, complete, and current information</li>
                                    <li>Maintain confidentiality of your credentials</li>
                                    <li>Notify us immediately of unauthorized use</li>
                                    <li>Solely responsible for account activities</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Restrictions</h4>
                                <ul className="list-disc pl-5 space-y-2 text-sm marker:text-red-500">
                                    <li>Do not share credentials with others</li>
                                    <li>Do not create multiple accounts to circumvent bans</li>
                                    <li>Do not transfer or sell your account</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* License */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">5. License to Use Courses</h3>
                        <p className="mb-4">
                            Upon payment, we grant you a limited, non-exclusive, non-transferable, revocable license to access and view purchased courses solely for your <strong>personal, non-commercial educational use</strong>.
                        </p>
                        <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-4">
                            <h4 className="font-bold text-red-900 mb-3">License Restrictions (You may NOT):</h4>
                            <ul className="list-disc pl-5 space-y-2 text-red-800 marker:text-red-500">
                                <li>Share, distribute, or resell course content</li>
                                <li>Download or copy course materials except where explicitly permitted</li>
                                <li>Use courses for commercial training purposes</li>
                                <li>Create derivative works from our content</li>
                                <li>Use automated tools to scrape content</li>
                            </ul>
                        </div>
                    </section>

                    {/* Payment & Refunds */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">6. Payment & Refund Policy</h3>

                        <div className="mb-6">
                            <h4 className="font-bold text-slate-900 mb-2">Refund Policy</h4>
                            <p className="mb-4">You may request a refund within 30 days of purchase if:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-green-500 mb-4">
                                <li>You have completed less than 20% of the course content</li>
                                <li>Technical issues prevent reasonable access to the course</li>
                                <li>The course was significantly misrepresented</li>
                            </ul>
                        </div>
                        <p className="text-sm text-slate-500">
                            Refunds are processed to the original payment method within 5-10 business days. Abuse of this policy may result in account termination.
                        </p>
                    </section>

                    {/* Disclaimers & Liability */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">13. Disclaimers</h3>
                        <div className="bg-slate-100 p-6 rounded-xl text-slate-600 text-sm font-medium uppercase tracking-wide leading-relaxed">
                            THE PLATFORM AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE PLATFORM WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE FROM VIRUSES.
                        </div>
                    </section>

                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">14. Limitation of Liability</h3>
                        <div className="bg-slate-100 p-6 rounded-xl text-slate-600 text-sm font-medium uppercase tracking-wide leading-relaxed">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY IS LIMITED TO THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
                        </div>
                    </section>

                    {/* Dispute Resolution */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">16. Dispute Resolution</h3>
                        <p className="mb-4">
                            These Terms are governed by the laws of <strong>Texas, United States</strong>, without regard to conflict of law principles.
                        </p>
                        <p className="mb-4">
                            <strong>Arbitration:</strong> Any disputes will be resolved through binding arbitration rather than in court, except for small claims court matters and intellectual property disputes. You waive your right to a jury trial and participation in class actions.
                        </p>
                    </section>

                    {/* Contact */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Contact Information</h3>
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                            <p className="mb-4 font-medium">For questions about these Terms:</p>
                            <div className="space-y-2">
                                <div className="flex gap-2">
                                    <span className="font-bold text-slate-900 min-w-[80px]">Email:</span>
                                    <a href="mailto:jason@mcpmadesimple.com" className="text-blue-600 hover:underline">jason@mcpmadesimple.com</a>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold text-slate-900 min-w-[80px]">Support:</span>
                                    <a href="mailto:jason@mcpmadesimple.com" className="text-blue-600 hover:underline">jason@mcpmadesimple.com</a>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold text-slate-900 min-w-[80px]">Address:</span>
                                    <span>Austin, TX</span>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

            </main>
        </StandardLayout>
    );
}
