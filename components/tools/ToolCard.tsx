import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Signal } from 'lucide-react';
import Link from 'next/link';

export interface ToolProps {
    name: string;
    description: string;
    category: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    type: 'Official' | 'Community' | 'Local';
    url: string;
    icon?: React.ReactNode;
}

const difficultyColors = {
    Beginner: 'text-green-600 bg-green-50 border-green-200',
    Intermediate: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    Advanced: 'text-red-600 bg-red-50 border-red-200',
};

const typeColors = {
    Official: 'bg-blue-100 text-blue-800',
    Community: 'bg-slate-100 text-slate-800',
    Local: 'bg-purple-100 text-purple-800'
};

export function ToolCard({ tool }: { tool: ToolProps }) {
    return (
        <Link href={tool.url} className="block group">
            <div className="h-full bg-white rounded-xl border border-slate-200 p-6 transition-all duration-200 hover:shadow-lg hover:border-blue-200 flex flex-col">

                {/* Header: Icon & Difficulty */}
                <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors text-2xl">
                        {tool.icon || '🔌'}
                    </div>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${difficultyColors[tool.difficulty]}`}>
                        {tool.difficulty}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-1 mb-4">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                        {tool.name}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    </h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        {tool.description}
                    </p>
                </div>

                {/* Footer: Tags */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-slate-50">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${typeColors[tool.type]}`}>
                        {tool.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium ml-auto">
                        Details →
                    </span>
                </div>
            </div>
        </Link>
    );
}
