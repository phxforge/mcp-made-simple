'use client';
import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
            <div className="max-w-[1280px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-8 max-w-xl"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center"
                        >
                            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider border border-blue-100 uppercase">
                                • The Protocol for Agentic AI
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight">
                            Stop Wasting 23<br />
                            Hours a Week<br />
                            Playing <span className="text-blue-600">"Copy-<br />Paste"</span>
                        </h1>

                        <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                            Your tools aren't broken—they just don't talk to each other. Master the <strong className="text-gray-900">Model Context Protocol (MCP)</strong> and turn your scattered apps into a single, intelligent system that obeys your plain English commands.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <Button size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg shadow-blue-500/20 font-semibold" asChild>
                                <a href="/start-here">Start 5-Minute Transformation</a>
                            </Button>

                            <a href="#solution" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors px-4 py-2">
                                <PlayCircle size={20} />
                                See How It Works
                            </a>
                        </div>

                        {/* Works With */}
                        <div className="pt-8">
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Works with</p>
                            <div className="flex flex-wrap gap-6 text-gray-400 font-medium text-lg items-center">
                                <span>Anthropic</span>
                                <span>OpenAI</span>
                                <span>Replit</span>
                                <span>Vercel</span>
                                <span>Notion</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Terminal Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="hidden lg:flex justify-end relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full opacity-50" />

                        {/* Terminal Window */}
                        <div className="relative rounded-xl bg-[#0F1117] shadow-2xl border border-gray-800 p-0 overflow-hidden w-full max-w-lg font-mono text-sm">
                            {/* Title Bar */}
                            <div className="bg-[#1E222D] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                                <div className="flex-1 text-center pr-10">
                                    <span className="text-gray-500 text-xs">agent-terminal — zsh</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-gray-300 space-y-4 min-h-[380px]">
                                <div className="flex items-center gap-3">
                                    <span className="text-green-500 font-bold">➜</span>
                                    <span className="text-blue-400 font-bold">~</span>
                                    <span className="text-white">mcp-agent run "Plan my week based on emails"</span>
                                </div>

                                <div className="space-y-3 pl-0 pt-2">
                                    <p className="text-gray-500">Analyzing last 50 emails...</p>

                                    <div className="space-y-1">
                                        <p className="text-green-400 flex items-center gap-2">
                                            <span>✓</span> Found 3 client meetings requests
                                        </p>
                                        <p className="text-green-400 flex items-center gap-2">
                                            <span>✓</span> Found 2 urgent invoices
                                        </p>
                                    </div>

                                    <p className="text-gray-500 pt-2">Connecting to Google Calendar...</p>

                                    <div className="space-y-1 pl-4 border-l-2 border-gray-800">
                                        <p className="text-blue-400">Created: "Strategy Call with Acme Corp" <span className="text-gray-600">(Tue 2pm)</span></p>
                                        <p className="text-blue-400">Created: "Invoice Review" <span className="text-gray-600">(Wed 10am)</span></p>
                                    </div>

                                    <p className="text-gray-500 pt-2">Connecting to Todoist...</p>

                                    <p className="text-yellow-400 font-bold">Added: 5 tasks to 'Work' project</p>
                                </div>

                                <div className="flex items-center gap-3 pt-4">
                                    <span className="text-green-500 font-bold">➜</span>
                                    <span className="text-blue-400 font-bold">~</span>
                                    <span className="w-2.5 h-5 bg-gray-500 animate-pulse"></span>
                                </div>
                            </div>

                            {/* Toast Notification Overlay */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                className="absolute bottom-6 right-6 bg-[#1A1D24] border border-gray-700/50 rounded-lg p-3 shadow-2xl flex items-center gap-4 pr-6"
                            >
                                <div className="w-10 h-10 bg-green-900/20 rounded-full flex items-center justify-center border border-green-500/20">
                                    <CheckCircle2 size={20} className="text-green-500" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Week Planned</div>
                                    <div className="text-gray-500 text-xs">Saved ~45 mins of manual entry.</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
