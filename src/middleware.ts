import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if (req.nextUrl.pathname === '/' && !token) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.url));
  }

  if (req.nextUrl.pathname === '/auth/sign-in' && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (req.nextUrl.pathname === '/auth/sign-up' && token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // Otherwise, allow the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/auth/sign-in', '/auth/sign-up'],
};
