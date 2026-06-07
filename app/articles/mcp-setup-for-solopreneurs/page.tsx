import { ArticleLayout } from '@/components/layouts/ArticleLayout';
import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Terminal, FileJson, Play, AlertCircle, HardDrive, Download, Settings, MousePointer } from 'lucide-react';

export const metadata: Metadata = generatePageMetadata({
    publishedTime: "2026-02-05T07:24:32-07:00",
    modifiedTime: "2026-06-05T14:38:48-07:00",
title: "MCP Setup for Solopreneurs: No-Code Guide | MCP Made Simple",
    description: "A step-by-step, no-code guide for non-technical business owners to set up MCP. Get Claude connected to your files in 15 minutes.",
    path: "/articles/mcp-setup-for-solopreneurs",
    type: "article"
});

export default function ArticlePage() {
    return (
        <ArticleLayout publishedAt="2026-02-05T07:24:32-07:00" updatedAt="2026-06-05T14:38:48-07:00"
            title="MCP Setup for Solopreneurs: No-Code Guide"
        >
            {/* 1. OPENING */}
            <p className="lead text-xl text-slate-600 mb-8">
                You don't need to be technical to use MCP. If you can install an app and edit a text file, you can do this. This guide walks you through setup step-by-step. In 15-30 minutes, you'll have Claude connected to your tools and running your first workflow.
            </p>

            {/* 2. WHAT YOU'LL ACHIEVE */}
            <div className="bg-slate-50 border border-slate-200 p-6 my-8 rounded-xl not-prose">
                <h2 className="text-lg font-bold text-slate-900 mb-4">What You'll Achieve</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">The Goal</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Claude Desktop installed and running</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Your computer's Documents folder connected</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Your first workflow tested and working</li>
                            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> A foundation to add Gmail/Drive later</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Time Investment</h3>
                        <ul className="space-y-2 text-slate-600 text-sm">
                            <li className="flex justify-between border-b border-slate-200 pb-1"><span>First read-through:</span> <span>5 mins</span></li>
                            <li className="flex justify-between border-b border-slate-200 pb-1"><span>Actual setup:</span> <span>15-30 mins</span></li>
                            <li className="flex justify-between border-b border-slate-200 pb-1"><span>First workflow test:</span> <span>5 mins</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 3. WHAT YOU'LL NEED */}
            <h2 id="requirements">What You'll Need</h2>
            <ul className="space-y-3 my-6">
                <li className="flex items-center gap-3">
                    <div className="bg-slate-100 p-1 rounded text-slate-500"><Terminal size={18} /></div>
                    <span>A computer (Mac or Windows)</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="bg-slate-100 p-1 rounded text-slate-500"><Download size={18} /></div>
                    <span>A Claude account (free tier works - sign up at claude.ai)</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="bg-slate-100 p-1 rounded text-slate-500"><HardDrive size={18} /></div>
                    <span>Access to your local Documents folder</span>
                </li>
            </ul>
            <p className="text-sm bg-blue-50 text-blue-800 p-4 rounded-lg flex gap-3 items-start">
                <InfoIcon />
                <strong>Note:</strong> We'll start by connecting your local files. This is the safest, "no-code" way to learn. Once you're comfortable, you can add Gmail and Google Drive using the same method.
            </p>

            {/* 4. STEP 1: INSTALL CLAUDE DESKTOP */}
            <h2 id="step-1">Step 1: Install Claude Desktop</h2>
            <p>
                MCP only works with <strong>Claude Desktop</strong>—not the website. The desktop app can connect to tools on your computer; the website cannot.
            </p>

            <div className="my-6 grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-bold text-lg mb-2">For Mac Users</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                        <li>Go to <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">claude.ai/download</a></li>
                        <li>Click "Download for Mac"</li>
                        <li>Open the downloaded file</li>
                        <li>Drag Claude to your Applications folder</li>
                        <li>Open Claude from Applications</li>
                        <li>Sign in with your Claude account</li>
                    </ol>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-2">For Windows Users</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                        <li>Go to <a href="https://claude.ai/download" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">claude.ai/download</a></li>
                        <li>Click "Download for Windows"</li>
                        <li>Run the installer</li>
                        <li>Follow the prompts (default settings are fine)</li>
                        <li>Open Claude from your Start menu</li>
                        <li>Sign in with your Claude account</li>
                    </ol>
                </div>
            </div>
            <div className="bg-slate-100 p-4 rounded-lg text-sm text-slate-600 mb-8">
                <strong>Verification:</strong> You should see the familiar Claude chat interface, but now it's in its own dedicated app window on your computer.
            </div>

            {/* 5. STEP 2: FIND CONFIG FILE */}
            <h2 id="step-2">Step 2: Find Your Config File</h2>
            <p>
                Claude stores its settings in a configuration file on your computer. This hidden file is where the magic happens. We need to open it.
            </p>

            <div className="space-y-6 my-6">
                <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                        <span className="bg-slate-200 text-slate-700 rounded px-2 py-0.5 text-xs">Mac</span>
                    </h3>
                    <p className="text-sm mb-2">Open <strong>Terminal</strong> (Command+Space, type "Terminal") and paste this command exactly, then press Enter:</p>
                    <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs overflow-x-auto">
                        open ~/Library/Application\ Support/Claude/claude_desktop_config.json
                    </div>
                    <p className="text-xs text-slate-500 mt-2">This will open the file in your default text editor (like TextEdit). If it says file not found, creating it is a bit more technical, but usually Claude creates a blank one for you upon first launch.</p>
                </div>

                <div className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                        <span className="bg-slate-200 text-slate-700 rounded px-2 py-0.5 text-xs">Windows</span>
                    </h3>
                    <p className="text-sm mb-2">Press <strong>Windows + R</strong> on your keyboard, paste this path, and press Enter:</p>
                    <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs overflow-x-auto">
                        %APPDATA%\Claude\claude_desktop_config.json
                    </div>
                    <p className="text-xs text-slate-500 mt-2">It should open in Notepad. If it asks to create the file, say <strong>Yes</strong>.</p>
                </div>
            </div>

            {/* 6. STEP 3: THE MAGIC CODE */}
            <h2 id="step-3">Step 3: Connect Your Files</h2>
            <p>
                You should now have a text file open. It might be empty, or contain just <code>{`{}`}</code>. We are going to paste a configuration that tells Claude: <em>"Hey, use the 'filesystem' tool to read files in the paths I specify."</em>
            </p>
            <p>
                Copy the code block below and paste it into your file, replacing everything that's currently there.
            </p>

            <div className="bg-slate-900 text-slate-100 rounded-xl overflow-hidden my-6 not-prose">
                <div className="bg-slate-800 px-4 py-2 text-xs font-mono text-slate-400 flex justify-between items-center">
                    <span>claude_desktop_config.json</span>
                    <span className="text-[10px] bg-blue-900 text-blue-200 px-2 py-0.5 rounded">COPY THIS</span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
                    {`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/username/Documents",
        "/Users/username/Desktop"
      ]
    }
  }
}`}
                </pre>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6 text-sm text-yellow-800">
                <strong>IMPORTANT EDIT NEEDED:</strong> Look at the paths in the code above (<code>/Users/username/Documents</code>). You MUST change these to match your actual computer's username and folder paths.
                <br /><br />
                <strong>Windows Example:</strong> <code>"C:\\Users\\YourName\\Documents"</code> (Note the double backslashes!)
            </div>

            {/* 7. STEP 4: RESTART & VERIFY */}
            <h2 id="step-4">Step 4: Restart and Verify</h2>
            <ol className="list-decimal pl-5 space-y-4">
                <li>Save the file.</li>
                <li><strong>Fully quit Claude Desktop.</strong> (On Mac, click Claude in menu bar &rarr; Quit. On Windows, verify it's not in the system tray).</li>
                <li>Open Claude Desktop again.</li>
                <li>Look for the <b className="text-slate-900">plug icon</b> <div className="inline-block border border-slate-300 rounded p-0.5"><PlugIcon /></div> near the chat input box.</li>
            </ol>
            <p>
                If the plug icon has a green dot or simply appears without error, <strong>congratulations!</strong> You just set up your first MCP server.
            </p>

            {/* 8. YOUR FIRST WORKFLOW */}
            <h2 id="workflow">Your First Workflow</h2>
            <p>
                Now for the fun part. Let's make Claude do real work.
            </p>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm my-6">
                <h3 className="font-bold text-lg mb-2">Try this prompt:</h3>
                <p className="font-mono text-sm bg-slate-50 p-3 rounded mb-4 text-slate-700">
                    "Read the files in my Documents folder and give me a summary of the 3 most recently modified documents."
                </p>
                <p className="text-slate-600 text-sm">
                    <strong>What happens:</strong> Claude will ask for permission to access your Documents folder. Click "Allow". It will then scan the files, read the metadata, and generate a summary—without you uploading anything.
                </p>
            </div>

            {/* 9. TROUBLESHOOTING */}
            <h2 id="troubleshooting">Troubleshooting</h2>
            <div className="space-y-4">
                <details className="group border border-slate-200 rounded-lg open:bg-slate-50">
                    <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-900">
                        Plug icon is missing or red
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4 prose prose-sm">
                        <p>This usually means a syntax error in your JSON file. Ensure you kept all the curly braces <code>{`{ }`}</code> and commas matching the example exactly. Also check if you entered your path correctly with double backslashes for Windows.</p>
                    </div>
                </details>
                <details className="group border border-slate-200 rounded-lg open:bg-slate-50">
                    <summary className="font-bold p-4 cursor-pointer list-none flex justify-between items-center text-slate-900">
                        "Command not found: npx"
                        <span className="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-4 pb-4 prose prose-sm">
                        <p>Ah, this means your computer doesn't have Node.js installed. Creating the 'filesystem' server uses <code>npx</code>, which requires Node. You can download and install the "LTS" version of Node.js from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">nodejs.org</a>, then restart Claude.</p>
                    </div>
                </details>
            </div>

            {/* 10. NEXT STEPS */}
            <h2 id="next-steps">What's Next?</h2>
            <p>
                You've mastered the basics! Now you can expand.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                <Link href="/start-here" className="block p-6 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-colors">
                    <div className="font-bold text-lg mb-2">Get the Quick Start Kit</div>
                    <p className="text-blue-100 text-sm mb-4">Includes pre-made configurations for connecting Gmail, Google Drive, and more (so you don't have to write code).</p>
                    <span className="font-bold text-sm inline-flex items-center gap-1">Download Kit <ArrowRight size={14} /></span>
                </Link>
                <Link href="/use-cases/solopreneurs" className="block p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
                    <div className="font-bold text-lg mb-2 text-slate-800">See Solopreneur Workflows</div>
                    <p className="text-slate-600 text-sm mb-4">Discover what else you can automate now that you're connected.</p>
                    <span className="font-bold text-sm text-blue-600 inline-flex items-center gap-1">Explore Use Cases <ArrowRight size={14} /></span>
                </Link>
            </div>

        </ArticleLayout>
    );
}

function PlugIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22v-5"></path>
            <path d="M9 8V2"></path>
            <path d="M15 8V2"></path>
            <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>
        </svg>
    )
}

function InfoIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
        </svg>
    )
}
