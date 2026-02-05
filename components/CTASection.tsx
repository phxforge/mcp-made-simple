'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
    headline?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    variant?: 'default' | 'minimal' | 'upgrade';
}

export function CTASection({
    headline,
    description,
    buttonText,
    buttonLink,
    variant = 'default'
}: CTASectionProps) {

    // Default Content Config
    const config = {
        default: {
            headline: "Ready to Connect Your Tools?",
            description: "Get the free MCP Quick Start Kit with 10 pre-built workflows.",
            buttonText: "Get the Free Kit",
            buttonLink: "/start-here",
            bgClass: "bg-slate-900",
            textClass: "text-white",
            descClass: "text-slate-400",
            buttonClass: "bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-6 h-auto shadow-lg shadow-orange-900/20"
        },
        minimal: {
            headline: "Ready to Connect Your Tools?",
            description: "", // No description for minimal by default
            buttonText: "Get the Free Kit",
            buttonLink: "/start-here",
            bgClass: "bg-blue-50 border-t border-b border-blue-100",
            textClass: "text-slate-900",
            descClass: "hidden",
            buttonClass: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
        },
        upgrade: {
            headline: "Ready to Go Deeper?",
            description: "Join the MCP Mastery Bootcamp for hands-on training.",
            buttonText: "Learn About Mastery",
            buttonLink: "/mastery",
            bgClass: "bg-gradient-to-r from-slate-900 to-slate-800",
            textClass: "text-white",
            descClass: "text-blue-200",
            buttonClass: "bg-white text-slate-900 hover:bg-blue-50 font-bold px-8 py-4 h-auto"
        }
    };

    const currentConfig = config[variant];
    const finalHeadline = headline || currentConfig.headline;
    const finalDescription = description || currentConfig.description;
    const finalButtonText = buttonText || currentConfig.buttonText;
    const finalButtonLink = buttonLink || currentConfig.buttonLink;

    return (
        <section className={`w-full ${currentConfig.bgClass} ${variant === 'minimal' ? 'py-12' : 'py-20 md:py-24'}`}>
            <div className="max-w-4xl mx-auto px-6 text-center">

                {variant === 'upgrade' && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                        <Sparkles size={16} />
                        <span>Premium Course</span>
                    </div>
                )}

                <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-6 ${currentConfig.textClass}`}>
                    {finalHeadline}
                </h2>

                {finalDescription && (
                    <p className={`text-xl md:text-2xl mb-10 max-w-2xl mx-auto ${currentConfig.descClass}`}>
                        {finalDescription}
                    </p>
                )}

                <Link href={finalButtonLink}>
                    <Button className={`rounded-xl transition-all ${currentConfig.buttonClass}`}>
                        {finalButtonText}
                        {variant !== 'minimal' && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                </Link>

                {variant === 'default' && (
                    <p className="mt-6 text-sm text-slate-500">
                        Join 5,000+ developers building with MCP.
                    </p>
                )}
            </div>
        </section>
    );
}
