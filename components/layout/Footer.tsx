import Link from 'next/link';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { EmailCaptureForm } from '@/components/ui/EmailCaptureForm';

export function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
            <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* BRANDING (lg: 2 cols) */}
                    <div className="lg:col-span-3 xl:col-span-3 flex flex-col gap-6">
                        <Link href="/" className="inline-block group no-underline">
                            <span className="text-2xl text-white tracking-tight group-hover:text-blue-400 transition-colors">
                                MCPMade<span className="font-extrabold">Simple</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Master the Model Context Protocol. Connect your tools, streamline your workflow, and build the future of AI automation.
                        </p>
                    </div>

                    {/* LINKS: Learn */}
                    <div className="lg:col-span-2 xl:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Learn</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="/guides/what-is-mcp" className="hover:text-blue-400 transition-colors">What is MCP?</Link></li>
                            <li><Link href="/guides/is-mcp-safe" className="hover:text-blue-400 transition-colors">Is MCP Safe?</Link></li>
                            <li><Link href="/guides/setup" className="hover:text-blue-400 transition-colors">Setup Guide</Link></li>
                            <li><Link href="/guides/workflows" className="hover:text-blue-400 transition-colors">Workflow Examples</Link></li>
                            <li><Link href="/articles" className="hover:text-blue-400 transition-colors">All Articles</Link></li>
                        </ul>
                    </div>

                    {/* LINKS: Tools */}
                    <div className="lg:col-span-2 xl:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Tools</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="/tools" className="hover:text-blue-400 transition-colors">All Integrations</Link></li>
                            <li><Link href="/tools/google-drive" className="hover:text-blue-400 transition-colors">Google Drive</Link></li>
                            <li><Link href="/tools/slack" className="hover:text-blue-400 transition-colors">Slack</Link></li>
                            <li><Link href="/tools/notion" className="hover:text-blue-400 transition-colors">Notion</Link></li>
                            <li><Link href="/tools/gmail" className="hover:text-blue-400 transition-colors">Gmail</Link></li>
                        </ul>
                    </div>

                    {/* LINKS: Use Cases */}
                    <div className="lg:col-span-2 xl:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Use Cases</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="/use-cases" className="hover:text-blue-400 transition-colors">All Use Cases</Link></li>
                            <li><Link href="/use-cases/solopreneurs" className="hover:text-blue-400 transition-colors">Solopreneurs</Link></li>
                            <li><Link href="/use-cases/teams" className="hover:text-blue-400 transition-colors">Teams</Link></li>
                            <li><Link href="/use-cases/developers" className="hover:text-blue-400 transition-colors">Developers</Link></li>
                        </ul>
                    </div>

                    {/* LINKS: Company (Short, maybe combined with social or separate) */}
                    {/* User asked for separate column. 2+2+2+2 = 8 cols used for links. Logo=3. Total 11. 1 col left for Newsletter? No. */}
                    {/* Let's adjust spans. Logo=3. Links=1.5 each? No. */}
                    {/* Layout: Logo (2), Learn (2), Tools (2), Use Cases (2), Company (2), Newsletter (2)? Total 12. */}
                    {/* Newsletter in 2 cols is very tight. */}
                    {/* Alternative: Wrap Links. */}

                    {/* Let's go with the user's visual suggestion heavily implies horizontal spread. */}
                    {/* I will use flex-wrap or auto-grid for links. */}
                    {/* Let's stick to Grid 12 for large screens. */}
                    {/* Logo (3), Learn (2), Tools (2), Use Cases (2), Company (1?), Newsletter (2?) */}

                    <div className="lg:col-span-1 xl:col-span-1 flex flex-col gap-4">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Company</h4>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                            <li><Link href="/resources" className="hover:text-blue-400 transition-colors">Resources</Link></li>
                            <li><Link href="/mastery" className="hover:text-blue-400 transition-colors">Mastery</Link></li>
                            <li><Link href="/about#contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* NEWSLETTER (lg: 3 cols - wait, 3+2+2+2+1 = 10. 2 left for newsletter) */}
                    <div className="lg:col-span-2 xl:col-span-2 flex flex-col gap-4">
                        <h3 className="text-white font-bold text-sm uppercase tracking-wider">Join Us</h3>
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
                            <p className="text-slate-400 text-xs mb-3">Weekly tips & new server alerts.</p>
                            <EmailCaptureForm source="footer" buttonText="Join" inline={false} />
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Socials moved to bottom left */}
                    <div className="flex gap-4">
                        <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" aria-label="GitHub" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="mailto:jason@mcpmadesimple.com" aria-label="Email" className="text-slate-500 hover:text-white transition-colors"><Mail size={20} /></a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-slate-500">
                        <p>© 2026 MCP Made Simple.</p>
                        <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
                        <Link href="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
                        <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full" />
                        <Link href="/terms" className="hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
