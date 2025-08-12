import { NextResponse } from 'next/server';

const publicPaths = ['/', '/login', '/register'];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (publicPaths.includes(pathname)) {
        return NextResponse.next();
    }

    const token = request.cookies.get('token')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
