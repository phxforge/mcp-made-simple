'use client';
import { motion } from 'framer-motion';

export function CourseTeaser() {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-0 left-0 p-32 bg-orange-500/10 blur-[100px] rounded-full" />

            <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-block bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full mb-6">
                    Coming Q2 2026
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    MCP Multi-System Automation Bootcamp
                </h2>

                <p className="text-xl text-slate-300 mb-12">
                    The complete system for mastering MCP—from first automation to production deployment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left max-w-2xl mx-auto mb-12">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-300">
                            <span className="text-green-400">✓</span> 9 comprehensive modules
                        </li>
                        <li className="flex items-center gap-2 text-slate-300">
                            <span className="text-green-400">✓</span> Hands-on projects
                        </li>
                        <li className="flex items-center gap-2 text-slate-300">
                            <span className="text-green-400">✓</span> Production patterns
                        </li>
                    </ul>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-slate-300">
                            <span className="text-green-400">✓</span> Lifetime community access
                        </li>
                        <li className="flex items-center gap-2 text-slate-300">
                            <span className="text-green-400">✓</span> Certificate of completion
                        </li>
                        <li className="flex items-center gap-2 text-slate-300">
                            <span className="text-green-400">✓</span> 60-day money-back guarantee
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <a
                        href="/mastery"
                        className="px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-all hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                    >
                        Join Waitlist
                    </a>
                    <p className="text-sm text-slate-400">No credit card required</p>
                </div>
            </div>
        </section>
    );
}
