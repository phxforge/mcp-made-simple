import { ShieldCheck, Lock, EyeOff, Mail } from 'lucide-react';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { StandardLayout } from '@/components/layouts/StandardLayout';

export const metadata: Metadata = generatePageMetadata({
    title: "Privacy Policy",
    description: "Our plain English privacy promise and full policy regarding your data. Learn why our local-first philosophy keeps your data secure.",
    path: "/privacy",
});

export default function PrivacyPage() {
    return (
        <StandardLayout>
            {/* HERO */}
            <header className="pb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
                    Privacy Policy
                </h1>
                <p className="text-xl text-slate-600">Last Updated: January 26, 2026</p>
            </header>

            <main className="max-w-3xl mx-auto px-6">

                {/* 1. THE HUMAN SUMMARY (Trust Asset) */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-20 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldCheck className="text-blue-600" size={32} />
                        <h2 className="text-2xl font-bold text-blue-900">The Plain English Privacy Promise</h2>
                    </div>
                    <p className="text-blue-800 mb-6 font-medium">
                        You are downloading tools that connect AI to your private business data. You should be paranoid about privacy. Here is how we operate:
                    </p>

                    <ul className="space-y-4">
                        <li className="flex gap-4 items-start">
                            <div className="bg-white p-1.5 rounded-full shadow-sm mt-1">
                                <Lock size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <strong className="block text-blue-900 font-bold">Local-First Philosophy</strong>
                                <span className="text-blue-800/80 text-sm leading-relaxed">
                                    The MCP configurations we teach run on your machine (Localhost). When you connect Claude to your Google Drive, the data flows directly between Anthropic and Google. It never touches a "MCP Made Simple" server. We cannot see your files, your calendar, or your chat logs.
                                </span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-white p-1.5 rounded-full shadow-sm mt-1">
                                <EyeOff size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <strong className="block text-blue-900 font-bold">No Telemetry in Code</strong>
                                <span className="text-blue-800/80 text-sm leading-relaxed">
                                    The config files and templates we provide are open source (JSON/Python). You can read every line of code to verify there is no tracking or "phoning home."
                                </span>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <div className="bg-white p-1.5 rounded-full shadow-sm mt-1">
                                <Mail size={16} className="text-blue-600" />
                            </div>
                            <div>
                                <strong className="block text-blue-900 font-bold">Newsletter Ethics</strong>
                                <span className="text-blue-800/80 text-sm leading-relaxed">
                                    We sell education, not data. We will never sell, rent, or swap your email address.
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* 2. THE LEGAL TEXT (Styled) */}
                <div className="space-y-16 text-slate-700 leading-relaxed">

                    {/* Introduction */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Introduction</h3>
                        <p>
                            This Privacy Policy describes how <strong>MCP Made Simple</strong> ("we," "us," or "our") collects, uses, and shares your personal information when you visit or make a purchase from <strong>mcpmadesimple.com</strong> (the "Site").
                        </p>
                    </section>

                    {/* Information We Collect */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Information We Collect</h3>

                        <div className="mb-6">
                            <h4 className="font-bold text-slate-900 mb-3 text-lg">Information You Provide</h4>
                            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                                <li><strong className="text-slate-900">Account Information:</strong> Name, email address, username, and password when you create an account</li>
                                <li><strong className="text-slate-900">Payment Information:</strong> Billing address and payment details (processed securely through our payment processor, Stripe)</li>
                                <li><strong className="text-slate-900">Course Data:</strong> Your course progress, completion status, quiz responses, and learning activity</li>
                                <li><strong className="text-slate-900">Communications:</strong> Messages you send us, support inquiries, and feedback</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 text-lg">Information Collected Automatically</h4>
                            <ul className="list-disc pl-5 space-y-2 marker:text-blue-500">
                                <li><strong className="text-slate-900">Usage Data:</strong> Pages visited, courses accessed, time spent on content, and interaction patterns</li>
                                <li><strong className="text-slate-900">Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                                <li><strong className="text-slate-900">Cookies and Tracking:</strong> We use cookies and similar technologies to enhance your experience</li>
                            </ul>
                        </div>
                    </section>

                    {/* How We Use Your Information */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">How We Use Your Information</h3>
                        <p className="mb-4">We use your personal information to:</p>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                            <ul className="list-disc pl-5 space-y-2 marker:text-green-500">
                                <li>Provide and deliver the courses you purchase</li>
                                <li>Process payments and send transaction confirmations</li>
                                <li>Create and manage your account</li>
                                <li>Personalize your learning experience</li>
                                <li>Send course updates and educational resources</li>
                            </ul>
                            <ul className="list-disc pl-5 space-y-2 marker:text-green-500">
                                <li>Respond to your questions and provide support</li>
                                <li>Improve our Site and course offerings</li>
                                <li>Detect and prevent fraud or security issues</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>
                    </section>

                    {/* Sharing Your Information */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Sharing Your Information</h3>
                        <p className="mb-4">We may share your information with:</p>
                        <ul className="list-disc pl-5 space-y-3 marker:text-blue-500 mb-6">
                            <li><strong className="text-slate-900">Service Providers:</strong> Payment processors (Stripe), email service providers (ConvertKit), hosting services (Vercel), and analytics platforms that help us operate our business</li>
                            <li><strong className="text-slate-900">Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                            <li><strong className="text-slate-900">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                        </ul>
                        <div className="bg-slate-50 border-l-4 border-slate-900 p-4 font-semibold text-slate-900">
                            We do not sell your personal information to third parties.
                        </div>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Your Rights</h3>
                        <p className="mb-4">
                            Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict use of your data.
                        </p>
                        <p>
                            To exercise these rights, contact us at <a href="mailto:jason@mcpmadesimple.com" className="text-blue-600 font-bold hover:underline">jason@mcpmadesimple.com</a>.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Data Security</h3>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal information, including encryption of data in transit and at rest and secure payment processing through PCI-compliant providers. However, no method of transmission over the internet is 100% secure.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Contact Us</h3>
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                            <p className="mb-4 font-medium">For questions about this Privacy Policy or to exercise your rights:</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex gap-2">
                                    <span className="font-bold text-slate-900 min-w-[80px]">Email:</span>
                                    <a href="mailto:jason@mcpmadesimple.com" className="text-blue-600 hover:underline">jason@mcpmadesimple.com</a>
                                </div>
                                <div className="flex gap-2">
                                    <span className="font-bold text-slate-900 min-w-[80px]">Address:</span>
                                    <span>Austin, TX (Full address details available upon request)</span>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 pt-4 border-t border-slate-200">
                                For GDPR-related inquiries, contact our Data Protection Officer at <a href="mailto:jason@mcpmadesimple.com" className="text-slate-700 underline hover:text-blue-600">jason@mcpmadesimple.com</a>.
                            </p>
                        </div>
                    </section>

                </div>

            </main>
        </StandardLayout>
    );
}
