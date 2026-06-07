import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GitBranch, Code2, AlertCircle, FileCode, Terminal, Copy, BookOpen, GitMerge, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-02T16:09:40Z",
title: "Developer Productivity Workflows with MCP | MCP Made Simple",
    description: "Automate code review, issue triage, and documentation. Keep your flow state while Claude handles the overhead.",
    path: "/articles/developer-productivity-workflows",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout updatedAt="2026-02-02T16:09:40Z"
            title="Developer Productivity Workflows with MCP"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Developers don't lack coding skills. They lack time—lost to context-switching, documentation, issue triage, and the endless PR review queue. These workflows automate the non-coding work that eats your day. More time in flow state, less time on overhead.
            </p>

            {/* 2. PREREQUISITES */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">What You Need</h2>
                <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Claude Desktop installed</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> <Link href="/tools/github" className="text-blue-600 hover:underline">GitHub connected</Link> (Essential)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> <Link href="/tools/slack" className="text-blue-600 hover:underline">Slack</Link> (For team workflows)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> <Link href="/tools/notion" className="text-blue-600 hover:underline">Notion</Link> (Optional for docs)</li>
                </ul>
            </div>

            {/* WORKFLOW 1: CODEBASE NAVIGATOR */}
            <h2 id="navigator">Workflow 1: The Codebase Navigator</h2>
            <p>
                Jumping into a new repo (or one you haven't touched in 6 months) is disorienting. Stop clicking through folders randomly.
            </p>

            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Code2 className="text-blue-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    I need to understand the [REPO-NAME] repository.
                    Give me:
                    **Overview**
                    - Project code purpose
                    - Tech stack & key dependencies
                    - Project structure tree

                    **Architecture**
                    - Key modules and their responsibilities
                    - Data flow (how does a request travel?)

                    **Developer Guide**
                    - How to run locally?
                    - Where do the tests live?
                    - If I want to modify [FEATURE], which files should I look at?
                </div>
            </div>

            {/* WORKFLOW 2: PR REVIEW ASSISTANT */}
            <h2 id="pr-review">Workflow 2: The PR Review Assistant</h2>
            <p>
                Reviews are crucial but draining. Get a high-level summary and risk analysis before you dive into the line-by-line diff.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><GitBranch className="text-purple-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Please review PR #[NUMBER] in [REPO-NAME].

                    1. **Summarize the Intent**: What is this PR trying to achieve?
                    2. **File Analysis**: Which core components are being touched?
                    3. **Risk Check**: Flag any changes that look like they could break existing functionality or introduce security issues.
                    4. **Test Coverage**: Does it include new tests?
                </div>
            </div>

            {/* WORKFLOW 3: BUG TRIAGE */}
            <h2 id="triage">Workflow 3: Automated Bug Triage</h2>
            <p>
                "It doesn't work." Users file vague issues. Claude can analyze the stack trace and point you to the exact line of code.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><AlertCircle className="text-red-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Look at Issue #[NUMBER] in [REPO-NAME].

                    1. Analyze the stack trace or error message provided.
                    2. Search the codebase for the error string or relevant function.
                    3. Hypothesize the root cause.
                    4. Draft a comment asking the user for any missing information needed to reproduce it.
                    5. Suggest a potential fix plan.
                </div>
            </div>

            {/* WORKFLOW 4: AUTO-DOCUMENTATION */}
            <h2 id="documentation">Workflow 4: The "Doc-Stringer"</h2>
            <p>
                Documentation is the first thing to slip when deadlines loom. Catch up on technical debt by auto-generating docs for your complex modules.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><BookOpen className="text-orange-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Read the file [FILENAME].
                    I need to add documentation to this tracking.

                    1. Generate a standardized docstring/comment for every public function explaining:
                    - What it does
                    - Parameters (types and purpose)
                    - Return values
                    - Potential errors thrown
                    2. Create a markdown snippet illustrating how to use the main class/function in this file.
                </div>
            </div>

            {/* WORKFLOW 5: RELEASE NOTES */}
            <h2 id="release-notes">Workflow 5: Release Note Generator</h2>
            <p>
                Turn a list of cryptic commit messages into a clean, user-friendly changelog.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Terminal className="text-slate-700" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    List the commits on [REPO-NAME] since tag [LAST-VERSION] (e.g. v1.0.0).

                    Draft the Release Notes for version [NEW-VERSION].
                    Group changes into:
                    - 🚀 New Features
                    - 🐛 Bug Fixes
                    - 🔧 Infrastructure/Chores
                    - ⚠️ Breaking Changes

                    Rewrite the commit messages to be human-readable and user-focused.
                </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 text-white rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold mb-4">Code Faster with Context</h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    These workflows are just the start. Learn how to build custom MCP servers to connect your own internal APIs and databases.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/use-cases/developers" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Developer Resource Hub <Code2 size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
