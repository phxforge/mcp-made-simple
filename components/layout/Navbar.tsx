'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper for classes
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

// Navigation Data
const navItems = [
    { name: 'Start Here', type: 'link', href: '/start-here' },
    { name: 'Tools', type: 'link', href: '/tools' },
    { name: 'Guides', type: 'link', href: '/guides' },
    { name: 'Mastery', type: 'link', href: '/mastery' },
    {
        name: 'Articles',
        type: 'dropdown',
        items: [
            { name: 'All Articles', href: '/articles' },
            { name: '--- By Topic ---', href: '', isHeader: true },
            { name: 'Fundamentals', href: '/articles?category=Fundamentals' },
            { name: 'Security & Trust', href: '/articles?category=Security' },
            { name: 'Setup & Implementation', href: '/articles?category=Setup' },
            { name: 'Workflows & Examples', href: '/articles?category=Workflows' },
            { name: 'Comparisons', href: '/articles?category=Comparison' },
        ],
    },
    {
        name: 'Resources',
        type: 'dropdown',
        items: [
            { name: 'Quick Start Kit', href: '/start-here' },
            { name: 'Setup Guide', href: '/guides/setup' },
            { name: 'All Tools', href: '/tools' },
            { name: 'Workflow Examples', href: '/guides/workflows' },
        ],
    },
    { name: 'About', type: 'link', href: '/about' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
    const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

    const pathname = usePathname();

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenMobileDropdown(null);
    }, [pathname]);

    const isHome = pathname === '/';
    const showBackground = !isHome || isScrolled;

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans',
                isScrolled ? 'py-3 shadow-md' : 'py-5',
                showBackground ? 'bg-white' : 'bg-transparent'
            )}
        >
            <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">

                {/* 1. Branding: MCPMadeSimple (Text) */}
                <Link href="/" className="group flex items-center gap-2 no-underline">
                    <span className="text-[20px] text-[#0f172a] tracking-tight group-hover:text-[#2563eb] transition-colors">
                        MCPMade<span className="font-extrabold">Simple</span>
                    </span>
                </Link>

                {/* 2. Desktop Navigation */}
                <div className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        <div
                            key={item.name}
                            className="relative"
                            onMouseEnter={() => item.type === 'dropdown' && setHoveredDropdown(item.name)}
                            onMouseLeave={() => setHoveredDropdown(null)}
                        >
                            {item.type === 'link' ? (
                                <Link
                                    href={item.href!}
                                    className={cn(
                                        'text-sm font-medium transition-colors',
                                        pathname === item.href
                                            ? 'text-[#2563eb]'
                                            : 'text-[#475569] hover:text-[#2563eb]'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ) : (
                                <button
                                    className={cn(
                                        'text-sm font-medium flex items-center gap-1.5 focus:outline-none transition-colors',
                                        hoveredDropdown === item.name
                                            ? 'text-[#2563eb]'
                                            : 'text-[#475569] hover:text-[#2563eb]'
                                    )}
                                >
                                    {item.name}
                                    <ChevronDown
                                        size={14}
                                        className={cn('transition-transform', hoveredDropdown === item.name ? 'rotate-180' : '')}
                                    />
                                </button>
                            )}

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {item.type === 'dropdown' && hoveredDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full -left-4 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 overflow-hidden"
                                    >
                                        <div className="flex flex-col">
                                            {item.items?.map((subItem) => (
                                                subItem.isHeader ? (
                                                    <div key={subItem.name} className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-1 mb-1">
                                                        {subItem.name.replace(/-/g, '').trim()}
                                                    </div>
                                                ) : (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={cn(
                                                            'px-4 py-2.5 text-sm rounded-lg transition-colors text-left font-medium',
                                                            'text-gray-600 hover:bg-gray-50 hover:text-[#0f172a]'
                                                        )}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    {/* Primary CTA */}
                    <Link
                        href="/start-here"
                        className="px-5 py-2 bg-[#2563eb] text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        Get the Kit
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="xl:hidden text-[#0f172a] p-1"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu size={26} strokeWidth={2.5} />
                </button>
            </div>

            {/* Mobile Full Screen Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-[60] flex flex-col pt-5 px-6"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8 max-w-[1100px] w-full mx-auto">
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="text-[20px] text-[#0f172a] tracking-tight">MCPMade<span className="font-extrabold">Simple</span></span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-gray-500 hover:text-gray-900"
                            >
                                <X size={26} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Mobile Links */}
                        <div className="flex-1 overflow-y-auto max-w-[1100px] w-full mx-auto">
                            <div className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <div key={item.name} className="border-b border-gray-100 last:border-0">
                                        {item.type === 'link' ? (
                                            <Link
                                                href={item.href!}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-4 text-lg font-medium text-[#0f172a]"
                                            >
                                                {item.name}
                                            </Link>
                                        ) : (
                                            <div>
                                                <button
                                                    onClick={() => setOpenMobileDropdown(openMobileDropdown === item.name ? null : item.name)}
                                                    className="w-full flex items-center justify-between py-4 text-lg font-medium text-[#0f172a]"
                                                >
                                                    {item.name}
                                                    {openMobileDropdown === item.name ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                                </button>

                                                {/* Mobile Accordion */}
                                                <AnimatePresence>
                                                    {openMobileDropdown === item.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden bg-gray-50 rounded-lg mb-4"
                                                        >
                                                            <div className="flex flex-col p-2">
                                                                {item.items?.map((subItem) => (
                                                                    subItem.isHeader ? (
                                                                        <div key={subItem.name} className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2 mb-1">
                                                                            {subItem.name.replace(/-/g, '').trim()}
                                                                        </div>
                                                                    ) : (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.href}
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                            className="py-3 px-4 text-gray-600 font-medium hover:text-[#2563eb]"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    )
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile CTA */}
                        <div className="py-8 max-w-[1100px] w-full mx-auto">
                            <Link
                                href="/start-here"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-center py-4 bg-[#2563eb] text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
                            >
                                Get the Kit
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
