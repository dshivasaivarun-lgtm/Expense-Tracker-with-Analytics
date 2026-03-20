import { NextRequest, NextResponse } from 'next/server';

// Let client-side handle page protection.
// Only protect API routes server-side.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public API paths - no auth needed
  const publicApi = ['/api/auth/login', '/api/auth/register', '/api/auth/logout'];
  if (publicApi.some(p => pathname.startsWith(p))) return NextResponse.next();

  // Protect API routes with token
  if (pathname.startsWith('/api/')) {
    const authHeader = req.headers.get('authorization');
    const cookieToken = req.cookies.get('token')?.value;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : cookieToken;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
