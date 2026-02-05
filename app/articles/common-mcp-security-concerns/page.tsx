import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, AlertTriangle, Lock, Eye, Server, Shield, Activity, FileText, Users, CheckSquare, ArrowRight } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    title: "Common MCP Security Concerns Answered | MCP Made Simple",
    description: "Honest answers to top MCP security questions. Data access, privacy, compliance, and safe usage explained clearly.",
    path: "/articles/common-mcp-security-concerns",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout
            title="Common MCP Security Concerns Answered"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                You're right to ask security questions before connecting AI to your tools. Here are the concerns we hear most often—and straight answers. No hand-waving. No marketing speak. Just honest explanations of how MCP handles your data and where the real risks are.
            </p>

            {/* 2. HOW WE ADDRESS CONCERNS */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">The Reality Check</h2>
                <p className="text-sm text-slate-600 mb-4">For each concern below, we break it down into:</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white p-3 rounded shadow-sm">
                        <span className="block font-bold text-slate-900 mb-1">The Reality</span>
                        <span className="text-slate-500">How it technically works</span>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                        <span className="block font-bold text-slate-900 mb-1">Risk Level</span>
                        <span className="text-slate-500">Honest assessment</span>
                    </div>
                </div>
            </div>

            {/* CONCERN 1: ACCESS */}
            <h2 id="access">1. Can Claude see all my files?</h2>
            <div className="mb-8">
                <p className="font-medium text-slate-900 mb-2 flex items-center gap-2"><Eye size={18} className="text-blue-500" /> The Concern</p>
                <p className="text-slate-600 italic mb-4">"Once I connect Google Drive, can Claude see everything? My personal files? Sensitive documents?"</p>

                <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">The Reality</strong>
                        <ul className="text-sm text-slate-600 list-disc pl-5 mt-1 space-y-1">
                            <li>Claude only accesses data when you ask it to.</li>
                            <li>Each query triggers a specific search or read operation.</li>
                            <li>Claude does <strong>not</strong> continuously monitor or index your data.</li>
                            <li>No background scanning or massive data collection happens.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">Risk Level: Low</strong>
                        <p className="text-sm text-slate-600 mt-1">Similar to giving a human assistant access—they see what you show them.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-900">
                        <strong>Best Practice:</strong> Start with read-only workflows. Be mindful of what you ask Claude to access. For highly sensitive files, keep them in separate folders.
                    </div>
                </div>
            </div>

            {/* CONCERN 2: STORAGE */}
            <h2 id="storage">2. Is my data stored on servers?</h2>
            <div className="mb-8">
                <p className="font-medium text-slate-900 mb-2 flex items-center gap-2"><Server size={18} className="text-purple-500" /> The Concern</p>
                <p className="text-slate-600 italic mb-4">"When Claude reads my email, is that email stored on Anthropic's servers? Forever?"</p>

                <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">The Reality</strong>
                        <ul className="text-sm text-slate-600 list-disc pl-5 mt-1 space-y-1">
                            <li>MCP servers run locally on your machine.</li>
                            <li>Data flows: Tool &rarr; Local MCP Server &rarr; Claude API &rarr; Response.</li>
                            <li>Anthropic's data retention policies apply to the API interaction.</li>
                            <li>For Pro/API users, conversations are <strong>not</strong> used for model training.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">Risk Level: Low-Medium</strong>
                        <p className="text-sm text-slate-600 mt-1">Your data does reach Anthropic's servers for processing. Review their <Link href="/guides/is-mcp-safe" className="text-blue-600 underline">privacy policy</Link>.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-900">
                        <strong>Best Practice:</strong> Review Anthropic's data handling docs. For regulated industries, consult their enterprise team.
                    </div>
                </div>
            </div>

            {/* CONCERN 3: UNAUTHORIZED ACCESS */}
            <h2 id="unauthorized">3. Can it access more than I allow?</h2>
            <div className="mb-8">
                <p className="font-medium text-slate-900 mb-2 flex items-center gap-2"><Lock size={18} className="text-orange-500" /> The Concern</p>
                <p className="text-slate-600 italic mb-4">"What stops an MCP server from accessing things I didn't authorize?"</p>

                <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">The Reality</strong>
                        <ul className="text-sm text-slate-600 list-disc pl-5 mt-1 space-y-1">
                            <li>MCP servers only have the access you explicitly grant via OAuth/API keys.</li>
                            <li>You control which servers are installed.</li>
                            <li>Official servers are open source and auditable.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">Risk Level: Low (Official Servers)</strong>
                        <p className="text-sm text-slate-600 mt-1">Official servers are vetted. Third-party servers vary—review them before installing.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-900">
                        <strong>Best Practice:</strong> Use official servers. Grant minimal OAuth scopes. Review connected apps periodically.
                    </div>
                </div>
            </div>

            {/* CONCERN 4: UNWANTED ACTIONS */}
            <h2 id="actions">4. What if Claude goes rogue?</h2>
            <div className="mb-8">
                <p className="font-medium text-slate-900 mb-2 flex items-center gap-2"><Activity size={18} className="text-red-500" /> The Concern</p>
                <p className="text-slate-600 italic mb-4">"What if Claude sends an email I didn't approve? Or posts to Slack?"</p>

                <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">The Reality</strong>
                        <ul className="text-sm text-slate-600 list-disc pl-5 mt-1 space-y-1">
                            <li>Claude only acts when you ask it to (it is not autonomous).</li>
                            <li>For write operations, Claude typically shows you the draft first.</li>
                            <li>Actions are logged in the tool's native history (e.g. Sent items).</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">Risk Level: Low-Medium</strong>
                        <p className="text-sm text-slate-600 mt-1">Miscommunication is possible. Write operations carry more risk than read operations.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-900">
                        <strong>Best Practice:</strong> Review drafts before sending. Use explicit confirmation for important actions.
                    </div>
                </div>
            </div>

            {/* CONCERN 5: TRAINING */}
            <h2 id="training">5. Is my data training the AI?</h2>
            <div className="mb-8">
                <p className="font-medium text-slate-900 mb-2 flex items-center gap-2"><FileText size={18} className="text-blue-500" /> The Concern</p>
                <p className="text-slate-600 italic mb-4">"By using MCP, am I helping train Claude on my private data?"</p>

                <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">The Reality</strong>
                        <p className="text-sm text-slate-600 mt-1">For Claude Pro subscribers and API users (Enterprise), <strong>no</strong>. Conversations are not used for training.</p>
                    </div>
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">Risk Level: Low</strong>
                        <p className="text-sm text-slate-600 mt-1">This is a standard industry commitment for paid services. Verify in the Terms of Service.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-900">
                        <strong>Best Practice:</strong> Keep updated as policies can evolve. Review the current Terms of Service.
                    </div>
                </div>
            </div>

            {/* CONCERN 6: SHARED TOOLS */}
            <h2 id="shared">6. Can coworkers see my AI usage?</h2>
            <div className="mb-8">
                <p className="font-medium text-slate-900 mb-2 flex items-center gap-2"><Users size={18} className="text-slate-500" /> The Concern</p>
                <p className="text-slate-600 italic mb-4">"If I use MCP with shared tools (Slack, Drive), can others see?"</p>

                <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">The Reality</strong>
                        <ul className="text-sm text-slate-600 list-disc pl-5 mt-1 space-y-1">
                            <li>Actions Claude takes appear as <strong>your</strong> actions.</li>
                            <li>Posting to Slack = Your name on the message.</li>
                            <li>Editing doc = Your edit history.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">Risk Level: Low</strong>
                        <p className="text-sm text-slate-600 mt-1">Same visibility as if you did it manually. You own the action.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-900">
                        <strong>Best Practice:</strong> Be aware team actions are visible. Coordinate with your team about MCP usage.
                    </div>
                </div>
            </div>

            {/* CONCERN 7: COMPLIANCE */}
            <h2 id="compliance">7. What about HIPAA/GDPR/SOC2?</h2>
            <div className="mb-8">
                <p className="font-medium text-slate-900 mb-2 flex items-center gap-2"><Shield size={18} className="text-green-500" /> The Concern</p>
                <p className="text-slate-600 italic mb-4">"Can I use MCP in a regulated environment?"</p>

                <div className="space-y-4 border-l-2 border-slate-200 pl-4 py-2">
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">The Reality</strong>
                        <ul className="text-sm text-slate-600 list-disc pl-5 mt-1 space-y-1">
                            <li>Standard Claude API is not HIPAA-compliant out of the box.</li>
                            <li>GDPR considerations apply to any data processing.</li>
                            <li>Anthropic offers specific Enterprise agreements for compliance.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="block text-sm font-bold text-slate-900">Risk Level: Varies</strong>
                        <p className="text-sm text-slate-600 mt-1">Low risk for non-regulated use. Requires careful eval for regulated industries.</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-900">
                        <strong>Best Practice:</strong> See our <Link href="/articles/is-mcp-secure-for-business" className="underline">Business Security Guide</Link>. Do not process PHI without a BAA.
                    </div>
                </div>
            </div>

            {/* RISK SUMMARY */}
            <h2 id="summary">The Honest Risk Summary</h2>
            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="border border-green-200 rounded p-4">
                    <h3 className="font-bold text-green-900 flex items-center gap-2 mb-2"><CheckCircle size={18} /> Lowest Risk</h3>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>&bull; Reading & summarizing your own data</li>
                        <li>&bull; Searching across tools</li>
                        <li>&bull; Drafting content you review</li>
                        <li>&bull; Personal productivity</li>
                    </ul>
                </div>
                <div className="border border-yellow-200 rounded p-4">
                    <h3 className="font-bold text-yellow-900 flex items-center gap-2 mb-2"><AlertTriangle size={18} /> Higher Care Needed</h3>
                    <ul className="text-sm text-slate-600 space-y-1">
                        <li>&bull; Automated actions without review</li>
                        <li>&bull; Highly sensitive/regulated data</li>
                        <li>&bull; Shared environments without notice</li>
                    </ul>
                </div>
            </div>
            <p className="text-slate-600 text-sm">
                MCP's security model is sound. The protocol is local-first, permissions are explicit, and you control access. Real risks come from basic hygiene: credential management and appropriate use.
            </p>

            {/* CHECKLIST */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-8 not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><CheckSquare size={20} className="text-blue-600" /> Quick Security Checklist</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <label className="flex items-start gap-2 text-sm text-slate-700">
                        <input type="checkbox" className="mt-1" /> Review Anthropic's data policy
                    </label>
                    <label className="flex items-start gap-2 text-sm text-slate-700">
                        <input type="checkbox" className="mt-1" /> Understand what each server accesses
                    </label>
                    <label className="flex items-start gap-2 text-sm text-slate-700">
                        <input type="checkbox" className="mt-1" /> Start with read-only workflows
                    </label>
                    <label className="flex items-start gap-2 text-sm text-slate-700">
                        <input type="checkbox" className="mt-1" /> Secure your device (password/encryption)
                    </label>
                    <label className="flex items-start gap-2 text-sm text-slate-700">
                        <input type="checkbox" className="mt-1" /> Plan for token rotation if needed
                    </label>
                </div>
            </div>


            {/* CLOSE CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center my-12 border-t border-slate-200 pt-8">
                <Link href="/guides/is-mcp-safe" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                    Read Complete Security Guide <ArrowRight size={16} />
                </Link>
                <Link href="/start-here" className="flex items-center gap-2 text-slate-600 font-bold hover:underline">
                    Get Started Safely <ArrowRight size={16} />
                </Link>
            </div>

        </ArticleLayout>
    );
}
