'use client';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

export function ProblemSolution() {
    return (
        <section className="pt-16 pb-20 bg-gray-50">
            <div className="max-w-[1280px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: The Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            Why 78% of AI <br className="hidden md:block" />Automation Projects Fail
                        </h2>

                        <div className="space-y-6">
                            {[
                                "AI tools don't talk to each other",
                                "Custom integrations break constantly",
                                "Context gets lost between systems",
                                "Security concerns block adoption"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 p-1 bg-red-100 rounded-full text-red-500">
                                        <X size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: The Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            The <span className="text-green-600">MCP Solution</span>
                        </h2>

                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            MCP (Model Context Protocol) is the emerging standard that lets AI orchestrate across ALL your tools—securely, reliably, and without custom code for each integration.
                        </p>

                        <div className="space-y-4">
                            {[
                                "One protocol, unlimited connections",
                                "Backed by Anthropic, adopted by OpenAI",
                                "Enterprise-grade security built in"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="p-1 bg-green-100 rounded-full text-green-600">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="text-lg text-green-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10">
                            <a
                                href="/guides/what-is-mcp"
                                className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent font-medium rounded-lg hover:bg-orange-50 transition-colors"
                            >
                                Learn What MCP Is →
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
