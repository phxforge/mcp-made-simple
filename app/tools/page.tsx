import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/Breadcrumb';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle2, ShieldCheck, PlusCircle, Wrench, Sparkles, FolderOpen, Mail, Calendar, MessageSquare, ListTodo, GitBranch, Database } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Tool Integrations & Servers",
    description: "Connect Claude to your favorite tools. Step-by-step guides for Gmail, Google Drive, Slack, Notion, GitHub, and more MCP integrations.",
    path: "/tools",
    type: "website"
});

export default function ToolsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
            <Navbar />

            <main className="flex-1 w-full pt-20">
                {/* 1. HERO SECTION */}
                <div className="bg-white border-b border-slate-200 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="flex justify-center mb-6">
                            <Breadcrumb />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">MCP Integrations</h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">Connect Claude to your favorite business tools</p>

                        {/* Filter Tabs */}
                        <div className="flex justify-center gap-2 mb-6">
                            <span className="cursor-pointer px-4 py-2 bg-slate-100 rounded-full text-slate-600 text-sm font-medium">All</span>
                            <span className="cursor-pointer px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-slate-300 transition-colors">Popular</span>
                            <span className="cursor-pointer px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-slate-300 transition-colors">Newest</span>
                        </div>
                        <p className="text-xs text-slate-400 font-medium">9 integrations available • New tools added regularly</p>
                    </div>
                </div>

                {/* 2. TOOL GRID */}
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* TOOL: Google Drive */}
                        <Link href="/tools/google-drive" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-2xl">📂</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Google Drive</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Access, search, and organize your Google Drive files with AI.</p>
                            </div>
                        </Link>

                        {/* TOOL: Slack */}
                        <Link href="/tools/slack" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 text-2xl">💬</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Slack</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Send messages, search conversations, and automate Slack workflows.</p>
                            </div>
                        </Link>

                        {/* TOOL: Notion */}
                        <Link href="/tools/notion" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 text-2xl">📝</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Notion</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Create, update, and query your Notion workspace.</p>
                            </div>
                        </Link>

                        {/* TOOL: Gmail */}
                        <Link href="/tools/gmail" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-2xl">📧</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Gmail</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Read, draft, and manage emails with AI assistance.</p>
                            </div>
                        </Link>

                        {/* TOOL: Google Calendar */}
                        <Link href="/tools/google-calendar" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 text-2xl">📅</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Google Calendar</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Schedule, update, and manage calendar events automatically.</p>
                            </div>
                        </Link>

                        {/* TOOL: Dropbox */}
                        <Link href="/tools/dropbox" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-2xl">📦</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Dropbox</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Manage files and folders in your Dropbox account.</p>
                            </div>
                        </Link>

                        {/* TOOL: Trello */}
                        <Link href="/tools/trello" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mb-4 text-2xl">📋</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Trello</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Create cards, move tasks, and automate your Trello boards.</p>
                            </div>
                        </Link>

                        {/* TOOL: Asana */}
                        <Link href="/tools/asana" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 text-2xl">✅</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">Asana</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Manage projects and tasks in Asana with AI.</p>
                            </div>
                        </Link>

                        {/* TOOL: GitHub */}
                        <Link href="/tools/github" className="block group">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                <div className="w-12 h-12 bg-slate-800 text-white rounded-lg flex items-center justify-center mb-4 text-2xl">💻</div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600">GitHub</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">Access repos, issues, and pull requests programmatically.</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* 3. POPULAR TOOL COMBINATIONS */}
                <section className="bg-white border-y border-slate-100 py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Popular Tool Stacks</h2>
                            <p className="text-lg text-slate-600">Most users connect multiple tools. Here's what works well together.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Essentials Stack */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <div className="flex -space-x-3 mb-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-red-100 flex items-center justify-center text-xl">📧</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xl">📂</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-xl">📅</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">The Essentials Stack</h3>
                                <p className="text-slate-600 text-sm mb-4">Email, files, and scheduling. The core productivity trio.</p>
                                <div className="flex items-center text-xs text-slate-500 font-medium mb-6">
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200">~30 mins setup</span>
                                </div>
                                <Link href="/guides/setup">
                                    <Button variant="outline" className="w-full bg-white hover:bg-slate-100 text-slate-700">View Setup Guide <ArrowRight size={14} className="ml-2" /></Button>
                                </Link>
                            </div>

                            {/* Team Stack */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <div className="flex -space-x-3 mb-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xl">💬</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xl">📝</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xl">📂</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">The Team Stack</h3>
                                <p className="text-slate-600 text-sm mb-4">Communication, documentation, and file sharing for teams.</p>
                                <div className="flex items-center text-xs text-slate-500 font-medium mb-6">
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200">~45 mins setup</span>
                                </div>
                                <Link href="/use-cases/teams">
                                    <Button variant="outline" className="w-full bg-white hover:bg-slate-100 text-slate-700">See Team Workflows <ArrowRight size={14} className="ml-2" /></Button>
                                </Link>
                            </div>

                            {/* Full Stack */}
                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <div className="flex -space-x-3 mb-6">
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-red-100 flex items-center justify-center text-xl">📧</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xl">📂</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-xl">💬</div>
                                    <div className="w-12 h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xl text-xs font-bold text-slate-500">+2</div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">The Full Stack</h3>
                                <p className="text-slate-600 text-sm mb-4">Everything connected. Maximum automation potential.</p>
                                <div className="flex items-center text-xs text-slate-500 font-medium mb-6">
                                    <span className="bg-white px-2 py-1 rounded border border-slate-200">~1 hour setup</span>
                                </div>
                                <Link href="/start-here">
                                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white">Get Quick Start Kit <ArrowRight size={14} className="ml-2" /></Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. TOOLS BY CATEGORY */}
                <section className="py-16 md:py-24 max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">Browse by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Email & Communication */}
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Email & Communication</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="/tools/gmail" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Gmail</Link>
                                    <span className="text-slate-300">•</span>
                                    <Link href="/tools/slack" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Slack</Link>
                                </div>
                            </div>
                        </div>

                        {/* Files & Storage */}
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                                <FolderOpen size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Files & Storage</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="/tools/google-drive" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Google Drive</Link>
                                    <span className="text-slate-300">•</span>
                                    <Link href="/tools/dropbox" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Dropbox</Link>
                                </div>
                            </div>
                        </div>

                        {/* Notes & Docs */}
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                                <MessageSquare size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Notes & Docs</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="/tools/notion" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Notion</Link>
                                </div>
                            </div>
                        </div>

                        {/* Calendar */}
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Calendar</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="/tools/google-calendar" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Google Calendar</Link>
                                </div>
                            </div>
                        </div>

                        {/* Project Management */}
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                                <ListTodo size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Project Management</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="/tools/asana" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Asana</Link>
                                    <span className="text-slate-300">•</span>
                                    <Link href="/tools/trello" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">Trello</Link>
                                </div>
                            </div>
                        </div>

                        {/* Development */}
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                                <GitBranch size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-2">Development</h3>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="/tools/github" className="text-sm text-slate-600 hover:text-blue-600 hover:underline">GitHub</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. GET CONNECTED IN MINUTES */}
                <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get Connected in Minutes</h2>
                            <p className="text-lg text-slate-600">Three steps to your first integration.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[24px] left-[16%] right-[16%] h-0.5 bg-blue-100 z-0"></div>

                            {/* Step 1 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-50 text-blue-600 flex items-center justify-center text-xl shadow-sm mb-6">
                                    ⬇️
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Download Claude Desktop</h3>
                                <p className="text-slate-600 text-sm mb-2">Free app for Mac, Windows, or Linux.</p>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">2 minutes</span>
                            </div>

                            {/* Step 2 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-50 text-blue-600 flex items-center justify-center text-xl shadow-sm mb-6">
                                    ⚙️
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Add Your Tools</h3>
                                <p className="text-slate-600 text-sm mb-2">Copy our config files—no coding required.</p>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">5 minutes</span>
                            </div>

                            {/* Step 3 */}
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-50 text-blue-600 flex items-center justify-center text-xl shadow-sm mb-6">
                                    ⚡
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Start Automating</h3>
                                <p className="text-slate-600 text-sm mb-2">Use our workflow prompts immediately.</p>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Instant</span>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/start-here">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-12">
                                    Get the Quick Start Kit <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 6. WHAT YOU CAN AUTOMATE */}
                <section className="bg-white py-16 md:py-24 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">What You Can Automate</h2>
                            <p className="text-lg text-slate-600">Real workflows people use every day.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1: Email Triage */}
                            <Link href="/articles/email-automation-workflows" className="block group">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                    <div className="flex -space-x-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs border-2 border-white">📧</div>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Email Triage</h3>
                                    <p className="text-sm text-slate-600 mb-3">Process 50 emails in 5 minutes</p>
                                </div>
                            </Link>

                            {/* Card 2: Meeting Prep */}
                            <Link href="/articles/meeting-scheduling-automation" className="block group">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                    <div className="flex -space-x-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs border-2 border-white">📧</div>
                                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs border-2 border-white">📅</div>
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs border-2 border-white">📂</div>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Meeting Prep</h3>
                                    <p className="text-sm text-slate-600 mb-3">Auto-generate briefings from calendar + email</p>
                                </div>
                            </Link>

                            {/* Card 3: Document Search */}
                            <Link href="/articles/document-workflow-automation" className="block group">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                    <div className="flex -space-x-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs border-2 border-white">📂</div>
                                        <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center text-xs border-2 border-white">📝</div>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Document Search</h3>
                                    <p className="text-sm text-slate-600 mb-3">Find anything across all your files instantly</p>
                                </div>
                            </Link>

                            {/* Card 4: Team Updates */}
                            <Link href="/articles/operations-team-workflows" className="block group">
                                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all h-full">
                                    <div className="flex -space-x-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs border-2 border-white">💬</div>
                                        <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-xs border-2 border-white">✅</div>
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">Team Updates</h3>
                                    <p className="text-sm text-slate-600 mb-3">Compile status reports from Slack + project tools</p>
                                </div>
                            </Link>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/guides/workflows">
                                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-blue-600">
                                    See all workflow examples <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 7. DON'T SEE YOUR TOOL? */}
                <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">More Integrations</h2>
                            <p className="text-slate-600">The MCP ecosystem grows every week.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <Link href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener noreferrer" className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group">
                                <Database size={24} className="mx-auto text-slate-400 mb-3 group-hover:text-blue-600 transition-colors" />
                                <h3 className="font-bold text-slate-900 mb-1">Check the Directory</h3>
                                <p className="text-xs text-slate-500">Browse all available MCP servers</p>
                            </Link>

                            <Link href="/contact" className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group">
                                <MessageSquare size={24} className="mx-auto text-slate-400 mb-3 group-hover:text-blue-600 transition-colors" />
                                <h3 className="font-bold text-slate-900 mb-1">Request a Guide</h3>
                                <p className="text-xs text-slate-500">Want us to cover a specific tool?</p>
                            </Link>

                            <Link href="/articles/mcp-developer-quick-start" className="p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all group">
                                <Wrench size={24} className="mx-auto text-slate-400 mb-3 group-hover:text-blue-600 transition-colors" />
                                <h3 className="font-bold text-slate-900 mb-1">Build Your Own</h3>
                                <p className="text-xs text-slate-500">Developers can create custom servers</p>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* 8. DARK CTA */}
                <CTASection variant="upgrade" />

            </main>

            <Footer />
        </div>
    );
}
