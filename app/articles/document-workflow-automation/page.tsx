import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, Search, FolderOpen, Scissors, FileDiff, Database, Copy, CheckCircle } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    modifiedTime: "2026-02-02T16:09:40Z",
title: "Document Workflow Automation with MCP | MCP Made Simple",
    description: "Automate document discovery, summarization, and organization. Stop drowning in files.",
    path: "/articles/document-workflow-automation",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout updatedAt="2026-02-02T16:09:40Z"
            title="Document Workflow Automation with MCP"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                Documents are everywhere—Drive, Dropbox, email attachments, Notion pages. Finding the right one, summarizing a long one, or organizing the mess takes hours every week. These workflows automate document discovery, summarization, organization, and creation. Stop drowning in files.
            </p>

            {/* 2. PREREQUISITES */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">What You Need</h2>
                <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Claude Desktop installed</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> <Link href="/tools/google-drive" className="text-blue-600 hover:underline">Google Drive</Link> (or Dropbox)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> <Link href="/tools/gmail" className="text-blue-600 hover:underline">Gmail</Link> (for attachments)</li>
                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-slate-400" /> <Link href="/tools/notion" className="text-blue-600 hover:underline">Notion</Link> (Optional)</li>
                </ul>
            </div>

            {/* WORKFLOW 1: SMART FINDER */}
            <h2 id="finder">Workflow 1: The Smart Document Finder</h2>
            <p>
                You know the document exists. You just can't remember the exact name, folder, or when you created it. Search by <em>concept</em>, not just keyword.
            </p>

            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Search className="text-blue-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    I'm looking for a document about [TOPIC].
                    What I remember:
                    - It might be called [POSSIBLE NAMES] (or similar)
                    - Created/modified around [TIME FRAME]
                    - Contains information about [KEY CONTENT]

                    Search my Drive and find matching documents.
                    For each match, show:
                    1. File name and location
                    2. Last modified date
                    3. Brief summary of contents (first paragraph or key points)
                    4. Confidence level (how well it matches)

                    Rank by relevance.
                </div>
            </div>

            {/* WORKFLOW 2: SUMMARY */}
            <h2 id="summary">Workflow 2: The "TL;DR" Summarizer</h2>
            <p>
                50-page reports are necessary to write but impossible to read quickly. Get the insights without the fluff.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Scissors className="text-orange-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Read the file [FILENAME] (PDF/Doc).

                    Create an Executive Summary that includes:
                    1. **The Core Thesis**: What is this document arguing/proposing in 1 sentence?
                    2. **Key Data Points**: Extract the 5 most important numbers or stats.
                    3. **Action Items**: What needs to be done next?
                    4. **Counter-arguments/Risks**: What potential issues are mentioned?

                    Finally, rate the document's clarity on a scale of 1-10.
                </div>
            </div>

            {/* WORKFLOW 3: ORGANIZER */}
            <h2 id="organizer">Workflow 3: The Digital Librarian</h2>
            <p>
                Your "Downloads" folder is a graveyard of unorganized files. Let Claude suggest a structure.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><FolderOpen className="text-yellow-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Look at the files in my "Downloads" folder (or [TARGET FOLDER]).

                    Based on their contents/filenames, propose a better folder structure to organize them.
                    Group them by:
                    - Project/Client
                    - Document Type (Invoice, Contract, Draft)
                    - Date (Year/Month)

                    List which files should go into which new folder.
                </div>
            </div>

            {/* WORKFLOW 4: TRANSCRIPT TO DOC */}
            <h2 id="creation">Workflow 4: Meeting to Proposal</h2>
            <p>
                You had a great brainstorming session. Now you have to write the proposal. Just use the transcript.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><FileText className="text-green-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Here is the transcript from our planning meeting:
                    [PASTE TRANSCRIPT]

                    Please write a formal **Project Proposal Document** based on this discussion.
                    Follow this structure:
                    1. **Objective**: What are we trying to achieve?
                    2. **Scope**: What is included/excluded?
                    3. **Timeline**: What dates were mentioned?
                    4. **Resources**: Who/what do we need?

                    Save this as "Draft Proposal - [Project Name].md".
                </div>
            </div>

            {/* WORKFLOW 5: CONFLICT CHECK */}
            <h2 id="conflict">Workflow 5: The Cross-Reference Check</h2>
            <p>
                Does this new vendor contract contradict your standard NDA? Don't guess. Check.
            </p>
            <div className="my-6">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><FileDiff className="text-purple-500" /> The Prompt</h3>
                <div className="bg-slate-100 p-5 rounded-lg font-mono text-sm text-slate-800 whitespace-pre-wrap border border-slate-200 shadow-sm relative group">
                    <button className="absolute top-2 right-2 text-xs bg-white border border-slate-200 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"><Copy size={12} /> Copy</button>
                    Compare [NEW_AGREEMENT.pdf] with our standard [NDA_TEMPLATE.pdf].

                    1. Identify any clauses in the new agreement that conflict with our standard terms.
                    2. Highlight any non-standard definitions of "Confidential Information".
                    3. Check if the "Term/Termination" clauses match our policy (30 days notice).

                    Summarize findings in a table: Clause | New Doc | Standard Doc | Risk Level.
                </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center my-12 not-prose">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Connect Your Knowledge Base</h2>
                <p className="text-blue-800 mb-8 max-w-xl mx-auto">
                    Files are just the beginning. Learn how to connect Notion, Obsidian, and your internal wikis to MCP.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/guides/workflows" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                        Explore More Workflows <Database size={18} />
                    </Link>
                </div>
            </div>

        </ArticleLayout>
    );
}
