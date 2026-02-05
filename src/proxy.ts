import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    // pega o token HttpOnly setado pelo backend
    const token = request.cookies.get('access_token')?.value;
    const path = request.nextUrl.pathname;

    const publicRoutes = ['/login', '/register', '/createAccount'];
    const isPublicRoute = publicRoutes.some(route => path.startsWith(route));

    if (!isPublicRoute && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
