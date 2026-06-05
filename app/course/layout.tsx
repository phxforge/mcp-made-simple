import { generatePageMetadata } from '@/lib/metadata';
import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = generatePageMetadata({
    title: "MCP Multi-System Automation Bootcamp",
    description: "Master AI automation across your entire workflow. Join the waitlist for founder pricing.",
    path: "/course",
});

export default function CourseLayout({ children }: { children: ReactNode }) {
    return <>{children}</>;
}
