import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, Eye, Server, Key, AlertTriangle, CheckSquare, XCircle, Search, Network, Users, FileText } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-02T01:50:26Z",
title: "MCP Security Best Practices | MCP Made Simple",
    description: "Security checklist for MCP users. Credential management, access controls, and safe usage patterns.",
    path: "/articles/mcp-security-best-practices",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout updatedAt="2026-02-02T01:50:26Z"
            title="MCP Security Best Practices"
            description="Security checklist for MCP users. Credential management, access controls, and safe usage patterns."
            category="Security"
            readTime="10 min"
            parentPillar={{ title: 'Is MCP Safe?', slug: '/guides/is-mcp-safe' }}
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                MCP's architecture is secure by design. But good security also depends on how you use it. This guide covers security best practices for MCP—from initial setup to ongoing usage. Follow these and you'll minimize risk while maximizing value.
            </p>

            {/* 2. PRINCIPLES */}
            <h2 id="principles">Security Principles for MCP</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">1. Least Privilege</strong>
                    <p className="text-sm text-slate-600">Only grant the access MCP needs. Read-only preferred.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">2. Defense in Depth</strong>
                    <p className="text-sm text-slate-600">Secure your device + credentials + usage patterns.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">3. Know Your Data</strong>
                    <p className="text-sm text-slate-600">Understand the sensitivity of what you connect.</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg">
                    <strong className="block text-slate-900 mb-1">4. Stay Informed</strong>
                    <p className="text-sm text-slate-600">Security requires ongoing awareness.</p>
                </div>
            </div>

            {/* 3. SETUP SECURITY */}
            <h2 id="setup">Setup Security</h2>

            <div className="space-y-6 my-6">
                <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><Lock size={20} className="text-blue-500" /> 3.1 Device Security First</h3>
                    <p className="text-sm text-slate-600 mb-2">MCP credentials live on your device. Device security = credential security.</p>
                    <div className="bg-white border rounded-lg p-3 text-sm space-y-2">
                        <label className="flex gap-2"><input type="checkbox" disabled /> Full disk encryption enabled (FileVault/BitLocker)</label>
                        <label className="flex gap-2"><input type="checkbox" disabled /> Automatic screen lock configured</label>
                        <label className="flex gap-2"><input type="checkbox" disabled /> Strong password/biometrics</label>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><FileText size={20} className="text-blue-500" /> 3.2 Config File Protection</h3>
                    <p className="text-sm text-slate-600 mb-2">Your config file contains sensitive tokens. Protect it.</p>
                    <ul className="list-disc pl-5 text-sm text-slate-600">
                        <li>Restrict file permissions (chmod 600)</li>
                        <li><strong>Never</strong> commit to public version control</li>
                        <li>Don't sync to unsecure cloud folders</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><Server size={20} className="text-blue-500" /> 3.3 Use Official Servers</h3>
                    <p className="text-sm text-slate-600">For maximum security, prefer official Anthropic MCP servers. If using third-party servers, review the code or verify the author.</p>
                </div>
            </div>

            {/* 4. CREDENTIALS */}
            <h2 id="credentials">Credential Management</h2>
            <p>Handling OAuth tokens and API keys correctly is critical.</p>

            <div className="my-6">
                <h3 className="font-bold text-slate-900 mb-3">4.1 OAuth Scoping</h3>
                <div className="overflow-x-auto border border-slate-200 rounded-lg mb-6">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b">
                            <tr><th className="p-3">Tool</th><th className="p-3">Risky (Avoid)</th><th className="p-3">Best Practice</th></tr>
                        </thead>
                        <tbody className="divide-y">
                            <tr><td className="p-3 font-medium">Gmail</td><td className="p-3 text-red-600">Full Mailbox</td><td className="p-3 text-green-700">Read-only, specific labels</td></tr>
                            <tr><td className="p-3 font-medium">Drive</td><td className="p-3 text-red-600">All Files</td><td className="p-3 text-green-700">Specific Folder Scope</td></tr>
                            <tr><td className="p-3 font-medium">Slack</td><td className="p-3 text-red-600">All Channels</td><td className="p-3 text-green-700">Designated Channels</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="font-bold text-slate-900 mb-2">4.2 Rotation & Exposure</h3>
                <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                    <li>Revoke and re-authorize tokens every 6-12 months.</li>
                    <li>If your laptop is lost/stolen, <strong>revoke all OAuth tokens immediately</strong>.</li>
                    <li>Never share tokens in screenshots or support tickets.</li>
                </ul>
            </div>

            {/* 5. ACCESS CONTROL */}
            <h2 id="access">Access Control</h2>
            <p>Be deliberate about tool selection.</p>
            <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="border-l-4 border-green-500 pl-4 py-2 bg-green-50/50">
                    <strong className="block text-slate-900 text-sm">Connect Freely</strong>
                    <p className="text-xs text-slate-600">Productivity tools, Calendar, Reference Docs</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50/50">
                    <strong className="block text-slate-900 text-sm">Consider Carefully</strong>
                    <p className="text-xs text-slate-600">Email, Shared Drives, Team Chat</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50/50">
                    <strong className="block text-slate-900 text-sm">Don't Connect</strong>
                    <p className="text-xs text-slate-600">Regulated Data, Trade Secrets, Production DBs</p>
                </div>
            </div>

            {/* 6. SAFE USAGE */}
            <h2 id="usage">Safe Usage Patterns</h2>
            <div className="space-y-4 my-6">
                <div className="flex gap-4 items-start">
                    <Eye className="text-slate-500 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">Be Mindful of Requests</strong>
                        <p className="text-sm text-slate-600">Remember: When you ask about email, email content goes to the API. Don't ask about sensitive data unnecessarily.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <CheckSquare className="text-slate-500 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">Review Before Acting</strong>
                        <p className="text-sm text-slate-600">Mistakes with read operations are fine. Write operations (sending email, deleting files) have consequences. Always review drafts.</p>
                    </div>
                </div>
            </div>

            {/* 7. NETWORK */}
            <h2 id="network">Network Security</h2>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2 mb-6">
                <li><strong>Outbound Only:</strong> MCP servers do not listen on network ports. No external party can connect "to" your MCP.</li>
                <li><strong>Trusted Networks:</strong> Avoid using MCP on public WiFi for sensitive work without a VPN.</li>
                <li><strong>Corporate Firewalls:</strong> Ensure your network allows outbound HTTPS to Anthropic and tool APIs.</li>
            </ul>

            {/* 8. TEAM SECURITY */}
            <h2 id="team">Team Security</h2>
            <p>Shared environments require extra care.</p>
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg my-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2"><Users size={18} /> Shared Tool Considerations</h3>
                <p className="text-sm text-slate-600 mb-2">When MCP acts in Slack or Google Drive, it acts <strong>as you</strong>. The audit trail will show your name.</p>
                <ul className="list-disc pl-5 text-sm text-slate-600">
                    <li>Coordinate usage with your team.</li>
                    <li>Don't access others' private folders.</li>
                    <li>For teams, define <Link href="/articles/mcp-implementation-for-operations-teams" className="text-blue-600 hover:underline">standard approved configurations</Link>.</li>
                </ul>
            </div>

            {/* 9. INCIDENT RESPONSE */}
            <h2 id="incident">Incident Response</h2>
            <div className="grid gap-4 my-6">
                <div className="bg-red-50 border border-red-100 p-4 rounded-lg">
                    <strong className="block text-red-900 text-sm mb-1 flex items-center gap-2"><AlertTriangle size={16} /> Suspected Credential Compromise</strong>
                    <ol className="list-decimal pl-5 text-xs text-red-800 space-y-1">
                        <li>Revoke OAuth access in affected tools immediately.</li>
                        <li>Remove MCP servers from config.</li>
                        <li>Change passwords.</li>
                        <li>Check audit logs for unauthorized access.</li>
                    </ol>
                </div>
            </div>

            {/* 10. CHECKLIST */}
            <h2 id="checklist">Complete Security Checklist</h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8 text-sm text-slate-700 space-y-4">
                <div>
                    <strong className="block text-slate-900 mb-2">Initial Setup</strong>
                    <div className="grid sm:grid-cols-2 gap-2">
                        <label className="flex gap-2"><input type="checkbox" disabled /> Device encrypted & password protected</label>
                        <label className="flex gap-2"><input type="checkbox" disabled /> Config file permissions restricted</label>
                        <label className="flex gap-2"><input type="checkbox" disabled /> Only trusted servers installed</label>
                    </div>
                </div>
                <div>
                    <strong className="block text-slate-900 mb-2">Ongoing</strong>
                    <div className="grid sm:grid-cols-2 gap-2">
                        <label className="flex gap-2"><input type="checkbox" disabled /> Minimum OAuth scopes granted</label>
                        <label className="flex gap-2"><input type="checkbox" disabled /> Reviewing write operations before approving</label>
                        <label className="flex gap-2"><input type="checkbox" disabled /> Quarterly access review scheduled</label>
                    </div>
                </div>
            </div>

            {/* 11. DOS AND DONTS */}
            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div>
                    <strong className="block text-green-700 text-lg mb-4 flex items-center gap-2"><CheckSquare /> Do</strong>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2"><span className="text-green-500">✓</span> Use official MCP servers</li>
                        <li className="flex gap-2"><span className="text-green-500">✓</span> Grant minimum permissions</li>
                        <li className="flex gap-2"><span className="text-green-500">✓</span> Secure your device</li>
                        <li className="flex gap-2"><span className="text-green-500">✓</span> Rotate credentials periodically</li>
                    </ul>
                </div>
                <div>
                    <strong className="block text-red-700 text-lg mb-4 flex items-center gap-2"><XCircle /> Don't</strong>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2"><span className="text-red-500">✕</span> Share config files publicly</li>
                        <li className="flex gap-2"><span className="text-red-500">✕</span> Install untrusted servers</li>
                        <li className="flex gap-2"><span className="text-red-500">✕</span> Connect highly sensitive tools blindly</li>
                        <li className="flex gap-2"><span className="text-red-500">✕</span> Grant broad access when narrow works</li>
                    </ul>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Setup?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Quick Start Kit <Lock size={18} />
                    </Link>
                    <Link href="/guides/is-mcp-safe" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        Full Security Guide <Shield size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
