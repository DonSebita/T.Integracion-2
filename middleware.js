export { default } from "next-auth/middleware";
 
export const config = {
  matcher: ["/dashboard/:path*","/api/casoJurtidico", 
    "/api/deleteuser","/api/eventCalendar", "/user/register", "/api/perfil", "/paginaAbogados",
    "/user/perfil", ]
}

