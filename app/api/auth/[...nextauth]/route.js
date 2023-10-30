import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import conexionBD from "@/lib/cxDB";
import Abogado from "@/models/Abogado";

export const authOptions = {
  // Configuracion del proveedor
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: {
        params: {
          scope: "https://www.googleapis.com/auth/userinfo.email " +
            "https://www.googleapis.com/auth/userinfo.profile " +
            "https://www.googleapis.com/auth/calendar",
        },
      },
    }),
    CredentialsProvider({
      name: "S&S Abogados",
      credentials: {},

      async authorize(credentials, req) {
        const { rut, clave } = credentials;
        try {
          await conexionBD();
          const usuario = await Abogado.findOne({ rut });
          console.log(usuario)
          if (!usuario) {
            console.log("No hay");
            return { error: "Usuario inexistente" };
          }

          const user = {
            id: usuario.id,
            rut: usuario.rut,
            nombre: usuario.Nombre,
            apellido: usuario.apellido,
          };
          console.log(user);
          const claveCoin = await bcrypt.compare(clave, usuario.clave);

          if (!claveCoin) {
            return { error: "Contraseña incorrecta" };
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },

      credentials: {
        rut: { label: "Rut", type: "text ", placeholder: "Ingresar rut" },
        clave: {
          label: "Contraseña",
          type: "text",
          placeholder: "Ingresar contraseña",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user?.error === "Usuario inexistente") {
        console.log("Matame");
        return Response.json({ error: "Usuario no existente", status: false });
      }
    },
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId;
        token.access_token = account.access_token;
        console.log(account);
      }
      return token;
    },
    async session({ session, token, user }) {
      session.access_token = token.access_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
