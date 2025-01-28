export async function middleware(req) {
    const isMaintenance = true; // Set this to true when maintenance is on, false when it's off
  
    // If the site is in maintenance mode, redirect to the maintenance page
    if (isMaintenance) {
      return new Response(null, {
        status: 503,
        headers: {
          'Retry-After': '3600', // This is optional but useful to indicate retry time
          'Location': '/maintenance', // Redirect to the maintenance page
        },
      });
    }
  
    // If the site is not in maintenance, allow the request to proceed as normal
    return NextResponse.next();
  }
  
  // Define where this middleware should be applied
  export const config = {
    matcher: '/((?!maintenance).*)', // Apply this middleware to all routes except the maintenance page
  };
  