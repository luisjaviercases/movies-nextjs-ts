import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { publicRoutes, apiPath } from './router/routes';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('userToken')?.value;
  const pathname = request.nextUrl.pathname;

  if (!currentUser && !pathname.startsWith(apiPath)) {
    request.cookies.delete('userToken');
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('userToken');

    return response;
  }

  if (currentUser) {
    if (publicRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('Authorization', `JWT ${currentUser}`);
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    return response;
  }
}

export const config = {
  matcher: ['/movies/:path*', '/films/:path*', '/'],
};
