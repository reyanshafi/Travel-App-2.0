// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Redirect all routes to the maintenance page
  return NextResponse.redirect(new URL('/maintenance', request.url));
}

// Apply this middleware to all routes
export const config = {
  matcher: '/:path*', // Match all routes
};