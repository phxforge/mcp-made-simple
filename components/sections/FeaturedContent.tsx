'use client';
import { motion } from 'framer-motion';
import { FileText, Grid, Download, ArrowRight } from 'lucide-react';

export function FeaturedContent() {
    const cards = [
        {
            title: "What is MCP?",
            description: "The complete beginner's guide to the Model Context Protocol—in plain English.",
            link: "/guides/what-is-mcp",
            linkText: "Read the Guide",
            icon: <FileText size={32} className="text-blue-200" />,
            gradient: "from-blue-500 to-blue-600"
        },
        {
            title: "Real-World Use Cases",
            description: "50+ automations you can build with MCP—filtered by role and system.",
            link: "/use-cases",
            linkText: "Browse Use Cases",
            icon: <Grid size={32} className="text-green-200" />,
            gradient: "from-green-500 to-green-600"
        },
        {
            title: "Free Resources",
            description: "Quickstart kit, prompt packs, and guides—no purchase required.",
            link: "/start-here",
            linkText: "Get Free Resources",
            icon: <Download size={32} className="text-purple-200" />,
            gradient: "from-purple-500 to-purple-600"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Learning</h2>
                    <p className="text-gray-500">Free resources to get you started</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            {/* Image Area */}
                            <div className={`h-40 bg-gradient-to-br ${card.gradient} flex items-center justify-center`}>
                                {card.icon}
                            </div>

                            {/* Content Area */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                                <p className="text-gray-600 mb-6 min-h-[48px]">
                                    {card.description}
                                </p>
                                <a
                                    href={card.link}
                                    className="inline-flex items-center gap-2 text-orange-500 font-medium hover:text-orange-600 hover:underline"
                                >
                                    {card.linkText} <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
