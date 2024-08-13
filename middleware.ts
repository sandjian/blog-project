import {  clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define las rutas públicas
const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks/clerk",
]);

// Middleware para proteger las rutas privadas
export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});

// Configuración del matcher
export const config = {
  matcher: [
    // Excluye archivos estáticos y Next.js internals
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Siempre ejecuta para rutas de API y TRPC
    '/(api|trpc)(.*)',
  ],
};



