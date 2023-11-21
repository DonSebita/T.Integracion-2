export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/user/register",
    "/paginaAbogados",
    "/user/perfil",
    "/api/deleteuser",
    "/api/eventCalendar",
    "/api/user/:path*",
    "/api/perfil",
    "/api/casoJurtidico",
  ],
};
