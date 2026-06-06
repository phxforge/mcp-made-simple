import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessagesSquare, LifeBuoy, Handshake, HelpCircle } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { StandardLayout } from '@/components/layouts/StandardLayout';

export const metadata: Metadata = {
    ...generatePageMetadata({
        title: "Contact Support & Partnerships",
        description: "Get in touch with the MCP Made Simple team. We prioritize support tickets and collaboration requests.",
        path: "/contact",
    }),
    robots: {
        index: false,
        follow: true,
    },
};

export default function ContactPage() {
    return (
        <StandardLayout>
            {/* HERO */}
            <header className="pb-20 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
                    How can we help?
                </h1>
                <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
                    We are a small team (mostly just Jason and some automations). We read every message, but we route them differently to ensure speed.
                </p>
            </header>

            <main className="max-w-[1280px] mx-auto px-6">

                {/* 1. TRIAGE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

                    {/* CARD 1: Community Support */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <MessagesSquare size={32} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">"I'm stuck on a tutorial."</h2>
                        <p className="text-slate-600 mb-8 flex-1">
                            <strong className="text-red-500">Do not email support.</strong> We cannot debug your local computer via email. Join the community to get help from 1,200+ other builders.
                        </p>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-md">
                            Ask the Community
                        </Button>
                    </div>

                    {/* CARD 2: Purchase Support */}
                    <div className="bg-white p-8 rounded-2xl border-2 border-slate-900 shadow-lg flex flex-col text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            PRIORITY
                        </div>
                        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <LifeBuoy size={32} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">"I have an issue with my purchase."</h2>
                        <p className="text-slate-600 mb-8 flex-1">
                            Need a refund? Login trouble? Course access issues? We prioritize these tickets above everything else.
                        </p>
                        <a href="mailto:jason@mcpmadesimple.com" className="block w-full">
                            <Button variant="outline" className="w-full border-2 border-slate-200 hover:border-slate-900 hover:bg-slate-50 text-slate-900 font-bold py-3 rounded-xl">
                                Email Support
                            </Button>
                        </a>
                        <p className="text-xs text-slate-400 mt-3 font-medium">Response time: 24h M-F</p>
                    </div>

                    {/* CARD 3: Partnerships */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col text-center">
                        <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Handshake size={32} />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-4">"Partnerships / Media."</h2>
                        <p className="text-slate-600 mb-8 flex-1">
                            Want to sponsor the newsletter or interview Jason?
                        </p>
                        <a href="mailto:jason@mcpmadesimple.com" className="block w-full">
                            <Button variant="ghost" className="w-full text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold py-3 rounded-xl">
                                Email Jason
                            </Button>
                        </a>
                        <p className="text-xs text-slate-400 mt-3 font-medium">Response time: Varies</p>
                    </div>

                </div>

                {/* 2. FAQ SECTION */}
                <section className="max-w-3xl mx-auto border-t border-slate-200 pt-16">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
                        <HelpCircle className="text-slate-400" /> Frequently Asked Questions
                    </h3>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Q: Do you do consulting?</h4>
                            <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="text-slate-900">A: No.</strong> I focus 100% on the Course and the Content. I do not have the bandwidth for 1-on-1 implementation work.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">Q: Can I hire you to set up MCP for my company?</h4>
                            <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                                <strong className="text-slate-900">A: I do not take implementation clients.</strong> However, you can check the <span className="text-blue-600 font-medium">#hiring</span> channel in our community to find certified graduates of the Bootcamp who are taking clients.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </StandardLayout>
    );
}
