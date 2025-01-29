import { NextResponse } from 'next/server';

export async function middleware(req) {
  const isMaintenance = true; // Set this to true when maintenance is on

  // If the site is under maintenance and the requested URL is not the /maintenance page or static files
  if (isMaintenance && !req.nextUrl.pathname.startsWith('/maintenance') && !req.nextUrl.pathname.startsWith('/_next/static')) {
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }
  
  // Allow the request to proceed if the site is not under maintenance
  return NextResponse.next();
}

// Apply this middleware to all routes except /maintenance and static files
export const config = {
  matcher: '/((?!maintenance|_next/static).*)', // Apply to all routes except /maintenance and static paths
};
