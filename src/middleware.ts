import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { publicRoutes } from '@/router/routes';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('userToken')?.value;

  if (!currentUser && !publicRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/movies/:path*', '/films/:path*'],
};
