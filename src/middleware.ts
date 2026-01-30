import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // 1. Pega o token
    const token = request.cookies.get('wandersync_token')?.value;
    const path = request.nextUrl.pathname;

    // 2. Rotas PÚBLICAS 
    const publicRoutes = ['/login', '/register', '/createAccount'];

    // Verifica se a rota atual é pública
    const isPublicRoute = publicRoutes.some(route => path.startsWith(route));

    //  SEM token tentando acessar rota PROTEGIDA
    if (!isPublicRoute && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // COM token tentando acessar rota PÚBLICA (Login/Register)
    if (isPublicRoute && token) {
        return NextResponse.redirect(new URL('/', request.url)); // Manda pra Home
    }

    // Se passou por tudo, deixa seguir
    return NextResponse.next();
}

// Ignora arquivos estáticos, imagens e API interna do Next
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};