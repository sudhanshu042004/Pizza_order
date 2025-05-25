import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get('next-auth.session-token')?.value ||
        request.cookies.get('__Secure-next-auth.session-token')?.value

    const { pathname } = request.nextUrl

    const protectedRoutes = ['/dashboard', '/profile', '/admin']
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))

    if (isProtectedRoute && !sessionToken) {
        const loginUrl = new URL('/login', request.url)
        loginUrl.searchParams.set('from', pathname)
        return NextResponse.redirect(loginUrl)
    }

    if (pathname === '/login' && sessionToken) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/profile/:path*',
        '/admin/:path*',
        '/login',
    ],
}
