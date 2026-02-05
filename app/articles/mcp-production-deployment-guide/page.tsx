import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Server, Lock, Settings, Users, Activity, CheckSquare, AlertTriangle, FileText, ArrowRight, Database, Network, Rocket } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Production Deployment Guide | MCP Made Simple",
    description: "Enterprise deployment of MCP. Security hardening, monitoring, and organizational rollout.",
    path: "/articles/mcp-production-deployment-guide",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="MCP Production Deployment Guide"
            description="Enterprise deployment of MCP. Security hardening, monitoring, and organizational rollout."
            category="Setup"
            readTime="20 min"
            parentPillar={{ title: 'Setup Guide', slug: '/guides/setup' }}
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Personal MCP setup is straightforward—install, connect, go. Enterprise deployment requires more: security hardening, access controls, monitoring, and standardized configurations. This guide covers everything you need to deploy MCP at organizational scale—from security architecture to operational monitoring.
            </p>

            {/* 2. PROD VS PERSONAL */}
            <h2 id="comparison">Production vs. Personal Deployment</h2>
            <p>
                Moving from individual use to an organizational rollout fundamentally changes how you manage MCP.
            </p>

            <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 font-bold text-slate-900">
                        <tr><th className="p-4">Aspect</th><th className="p-4">Personal</th><th className="p-4 text-blue-700 bg-blue-50/50">Production</th></tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr><td className="p-4 font-medium">Configuration</td><td className="p-4 text-slate-600">Single user</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Managed/Standardized</td></tr>
                        <tr><td className="p-4 font-medium">Security</td><td className="p-4 text-slate-600">User discretion</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Policy-enforced</td></tr>
                        <tr><td className="p-4 font-medium">Monitoring</td><td className="p-4 text-slate-600">Optional</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Required</td></tr>
                        <tr><td className="p-4 font-medium">Access Control</td><td className="p-4 text-slate-600">User owns</td><td className="p-4 font-bold text-slate-900 bg-blue-50/30">Org-managed</td></tr>
                    </tbody>
                </table>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700">
                <strong>When to use this guide:</strong> Teams of 10+ users, regulated industries, sensitive data access, or centralized IT management requirements.
            </div>

            {/* 3. ARCHITECTURE */}
            <h2 id="architecture">Architecture Overview</h2>
            <div className="bg-slate-900 text-slate-300 p-6 rounded-xl font-mono text-sm leading-relaxed overflow-x-auto my-6">
                <pre>{`
┌─────────────────────────────────────────────────────────────┐
│                    User Workstations                        │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │ Claude  │  │ Claude  │  │ Claude  │  │ Claude  │       │
│  │ Desktop │  │ Desktop │  │ Desktop │  │ Desktop │       │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘       │
│       │            │            │            │             │
│       ▼            ▼            ▼            ▼             │
│  ┌─────────────────────────────────────────────────┐      │
│  │              MCP Servers (Local)                 │      │
│  │  Gmail | Drive | Slack | Notion | Custom        │      │
│  └─────────────────────────────────────────────────┘      │
└─────────┬───────────────────────────────────────────────────┘
          │ (Authorized API Calls)
          ▼
┌─────────────────────────────────────────────────────────────┐
│                  External Services                          │
│  Google Workspace | Slack | Notion | GitHub | Internal APIs │
└─────────────────────────────────────────────────────────────┘
        `}</pre>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 mt-6">
                <li className="flex gap-3 items-start">
                    <Server className="text-blue-500 shrink-0" size={20} />
                    <div>
                        <strong className="block text-slate-900 text-sm">Local Execution</strong>
                        <p className="text-xs text-slate-600">MCP servers run locally on user machines, not on a central server. This reduces latency and keeps data local.</p>
                    </div>
                </li>
                <li className="flex gap-3 items-start">
                    <Network className="text-purple-500 shrink-0" size={20} />
                    <div>
                        <strong className="block text-slate-900 text-sm">Direct API Connection</strong>
                        <p className="text-xs text-slate-600">Workstations connect directly to external APIs. Network policies must allow this outbound traffic.</p>
                    </div>
                </li>
            </ul>

            {/* 4. SECURITY HARDENING */}
            <h2 id="security">Security Hardening</h2>
            <p>Security in production differs from personal use primarily in <strong>enforcement</strong>.</p>

            <div className="space-y-8 my-8">
                {/* 4.1 Creds */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><Lock size={20} className="text-slate-400" /> 4.1 Credential Management</h3>
                    <p className="text-sm text-slate-600 mb-2"><strong>Problem:</strong> Storing tokens in plain text config files is risky at scale.</p>
                    <p className="text-sm text-slate-600 mb-2"><strong>Solution:</strong> Use secure credential injection.</p>
                    <ul className="list-disc pl-5 text-sm text-slate-600">
                        <li>Environment variables injected at runtime.</li>
                        <li>OS Keychain integration (where supported).</li>
                        <li>Secrets management tools (HashiCorp Vault, AWS Secrets Manager) for server-side components.</li>
                    </ul>
                </div>

                {/* 4.2 Least Privilege */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><Shield size={20} className="text-slate-400" /> 4.2 Principle of Least Privilege</h3>
                    <p className="text-sm text-slate-600 mb-4">Request minimum OAuth scopes. Do not grant "Full Access" unless absolutely necessary.</p>
                    <div className="overflow-x-auto border border-slate-200 rounded-lg">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-50 border-b">
                                <tr><th className="p-3">Tool</th><th className="p-3">Full Access (Avoid)</th><th className="p-3">Recommended Production</th></tr>
                            </thead>
                            <tbody className="divide-y">
                                <tr><td className="p-3 font-medium">Gmail</td><td className="p-3 text-red-600">Full Mailbox</td><td className="p-3 text-green-700">Read-only or specific labels</td></tr>
                                <tr><td className="p-3 font-medium">Drive</td><td className="p-3 text-red-600">All Files</td><td className="p-3 text-green-700">Specific Folder Scope</td></tr>
                                <tr><td className="p-3 font-medium">Slack</td><td className="p-3 text-red-600">All Public Channels</td><td className="p-3 text-green-700">Designated Channels Only</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 4.3 Network */}
                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2"><Network size={20} className="text-slate-400" /> 4.3 Network Security</h3>
                    <ul className="list-disc pl-5 text-sm text-slate-600">
                        <li>MCP servers run on loopback (localhost). Ensure host firewalls block inbound connections to these ports.</li>
                        <li>Monitor outbound API traffic (egress filtering).</li>
                        <li>Verify VPN/Proxy compatibility if traffic inspection is used.</li>
                    </ul>
                </div>
            </div>

            {/* 5. STANDARDIZED CONFIG */}
            <h2 id="config">Standardized Configuration</h2>
            <p>Avoid "config drift" where every user has a different setup.</p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border p-4 rounded-lg bg-slate-50">
                    <strong className="block text-slate-900 mb-2 flex items-center gap-2"><Settings size={16} /> Distribution Methods</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                        <li><span className="font-semibold">MDM:</span> Push config files (jamf, Intune).</li>
                        <li><span className="font-semibold">Repo:</span> Git-based config templates.</li>
                        <li><span className="font-semibold">Script:</span> Startup scripts that pull latest config.</li>
                    </ul>
                </div>
                <div className="border p-4 rounded-lg bg-slate-50">
                    <strong className="block text-slate-900 mb-2 flex items-center gap-2"><Settings size={16} /> Policy Levels</strong>
                    <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                        <li><span className="font-semibold">Strict:</span> Config is locked (read-only).</li>
                        <li><span className="font-semibold">Additive:</span> Base config locked, users can add.</li>
                        <li><span className="font-semibold">Flexible:</span> Template provided, users manage.</li>
                    </ul>
                </div>
            </div>

            {/* 6. ACCESS CONTROL */}
            <h2 id="access">Access Control & Governance</h2>
            <p>Not everyone needs every tool.</p>
            <div className="overflow-x-auto my-6 border border-slate-200 rounded-lg">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b">
                        <tr><th className="p-3">Tier</th><th className="p-3">Access Level</th><th className="p-3">Target User</th></tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr><td className="p-3 font-medium">Basic</td><td className="p-3">Read-only on approved tools</td><td className="p-3 text-slate-600">General Staff</td></tr>
                        <tr><td className="p-3 font-medium">Standard</td><td className="p-3">Read/Write on approved tools</td><td className="p-3 text-slate-600">Knowledge Workers</td></tr>
                        <tr><td className="p-3 font-medium">Power User</td><td className="p-3">All tools + custom servers</td><td className="p-3 text-slate-600">Technical Leads</td></tr>
                        <tr><td className="p-3 font-medium">Admin</td><td className="p-3">Full access + config management</td><td className="p-3 text-slate-600">IT / Ops</td></tr>
                    </tbody>
                </table>
            </div>

            {/* 7. MONITORING */}
            <h2 id="monitoring">Monitoring & Logging</h2>
            <p>You need visibility into how MCP is being used and if it's breaking.</p>
            <div className="space-y-4 my-6">
                <div className="flex gap-4 items-start">
                    <Activity className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">What to Log</strong>
                        <p className="text-sm text-slate-600">Capture MCP server `stderr` output. Log server startup/shutdown events, auth failures, and error rates. Send to Splunk/Datadog.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <Activity className="text-blue-500 shrink-0 mt-1" size={20} />
                    <div>
                        <strong className="block text-slate-900">What to Alert On</strong>
                        <p className="text-sm text-slate-600">Repeated authentication failures (potential breach attempt or expired token), high error rates, or unusual server crashes.</p>
                    </div>
                </div>
            </div>

            {/* 8. CHECKLIST */}
            <h2 id="checklist">Deployment Checklist</h2>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-8">
                <h3 className="font-bold text-slate-900 mb-4">Pre-Deployment</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700 mb-6">
                    <label className="flex gap-2"><input type="checkbox" disabled /> Security review completed</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Approved tool list defined</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Base configuration created</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Credential strategy selected</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Monitoring infrastructure ready</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Rollback plan documented</label>
                </div>
                <h3 className="font-bold text-slate-900 mb-4">Post-Deployment</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                    <label className="flex gap-2"><input type="checkbox" disabled /> Adoption metrics active</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Regular feedback collection</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Access reviews scheduled</label>
                    <label className="flex gap-2"><input type="checkbox" disabled /> Documentation updated</label>
                </div>
            </div>

            {/* 9. COMPLIANCE */}
            <h2 id="compliance">Compliance Considerations</h2>
            <p>For regulated environments (HIPAA, SOX, GDPR).</p>
            <div className="space-y-4 my-6">
                <div className="border-l-4 border-yellow-400 pl-4 py-1">
                    <strong className="block text-slate-900 text-sm">Healthcare (HIPAA)</strong>
                    <p className="text-xs text-slate-600">Avoid connecting tools containing PHI unless a BAA is in place with Anthropic. Enforce strict access logging.</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4 py-1">
                    <strong className="block text-slate-900 text-sm">Financial (SOX)</strong>
                    <p className="text-xs text-slate-600">Document controls around financial data access. Implement segregation of duties in tool permissions.</p>
                </div>
                <div className="border-l-4 border-slate-400 pl-4 py-1">
                    <strong className="block text-slate-900 text-sm">Legal</strong>
                    <p className="text-xs text-slate-600">Consider attorney-client privilege implications and document retention policies.</p>
                </div>
            </div>

            {/* 10. TROUBLESHOOTING */}
            <h2 id="troubleshooting">Troubleshooting at Scale</h2>
            <div className="grid gap-4 my-6">
                <div className="bg-white border p-4 rounded-lg">
                    <strong className="text-slate-900 font-medium flex items-center gap-2"><AlertTriangle size={16} className="text-orange-500" /> Issue: Config Drift</strong>
                    <p className="text-sm text-slate-600 mt-1">Users customizing extensively causing support issues. <strong>Fix:</strong> Enforce standardized base configs via MDM.</p>
                </div>
                <div className="bg-white border p-4 rounded-lg">
                    <strong className="text-slate-900 font-medium flex items-center gap-2"><AlertTriangle size={16} className="text-orange-500" /> Issue: Auth Token Expiry</strong>
                    <p className="text-sm text-slate-600 mt-1">Tokens expiring silently. <strong>Fix:</strong> Monitor auth error rates and prompt proactive re-auth.</p>
                </div>
            </div>

            {/* SCALING */}
            <h2 id="scaling">Scaling Considerations</h2>
            <ul className="space-y-4 my-6">
                <li className="flex gap-3">
                    <div className="bg-slate-100 p-2 rounded h-fit font-bold text-slate-600 text-sm">50+</div>
                    <div>
                        <strong className="block text-slate-900 text-sm">Automation Needed</strong>
                        <p className="text-xs text-slate-600">Manual config management fails here. Move to MDM or automated scripts.</p>
                    </div>
                </li>
                <li className="flex gap-3">
                    <div className="bg-slate-100 p-2 rounded h-fit font-bold text-slate-600 text-sm">200+</div>
                    <div>
                        <strong className="block text-slate-900 text-sm">Dedicated Ops</strong>
                        <p className="text-xs text-slate-600">Requires dedicated staff for prompt engineering support and config management.</p>
                    </div>
                </li>
            </ul>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Ready for Production?</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/start-here" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Start Pilot <Rocket size={18} />
                    </Link>
                    <Link href="/guides/is-mcp-safe" className="inline-flex items-center justify-center gap-2 text-white font-bold py-3 px-8 rounded-lg border border-slate-600 hover:bg-slate-800 transition-colors">
                        Security Deep Dive <Shield size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
