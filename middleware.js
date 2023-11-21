export { default } from "next-auth/middleware";
 
export const config = {
  matcher: ["/dashboard/:path*","/api/casoJurtidico", 
    "/api/deleteuser","/api/eventCalendar", "/api/user/:path*",
    "/user/register", "/api/perfil", "/paginaAbogados",
    "/user/perfil", ]
}

