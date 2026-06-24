import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Avoid redirecting internal Next.js requests, API routes, or static files
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Check if the path contains any uppercase characters
    if (/[A-Z]/.test(pathname)) {
        const lowercaseUrl = new URL(
            pathname.toLowerCase() + request.nextUrl.search,
            request.url
        );
        return NextResponse.redirect(lowercaseUrl, 301);
    }

    return NextResponse.next();
}
