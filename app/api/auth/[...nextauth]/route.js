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
      id: "credentials",
      name: "S&S Abogados",

      credentials: {
        correo: {
          label: "Correo",
          type: "text ",
          placeholder: "Ingresar Correo",
        },
        clave: {
          label: "Contraseña",
          type: "text",
          placeholder: "Ingresar contraseña",
        },
      },

      async authorize(credentials, req) {
        const { correo, clave } = credentials;
        try {
          await conexionBD();
          const usuario = await Abogado.findOne({ correo });

          if (!usuario) {
            console.log("No hay");
            return { error: "Usuario inexistente" };
          }

          const user = {
            id: usuario.id,
            //rut: usuario.rut,
            correo: usuario.correo,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
          };

          const claveCoin = await bcrypt.compare(clave, usuario.clave);

          if (!claveCoin) {
            console.log("No son iguales");
            return { error: "Contraseña incorrecta" };
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider == "credentials") {
        //console.log("signIn", credentials);
        return true;
      }
      if (account?.provider == "google") {
        //console.log("signIn", user);
        return true;
      }
      if (user?.error === "Usuario inexistente") {
        console.log("Matame");
        return Response.json({ error: "Usuario no existente", status: false });
      }
    },

    async jwt({ token, account, user, profile }) {
      if (account) {
        if (account.provider == "credentials") {
          token.provider = account.provider;
          token.id = account.providerAccountId;
          token.user = user;
          return token;
        }
        if (account.provider == "google") {
          token.id = account.providerAccountId;
          token.provider = account.provider;
          token.access_token = account.access_token;
          token.user = {
            id: user.id,
            name: profile.given_name,
            apellido: profile.family_name,
            correo: profile.email,
          };
          //console.log(profile);
          console.log(user);
          return token;
        }
      }
      //console.log("Token", account);
      return token;
    },
    async session({ session, token, user }) {
      if (token.access_token) {
        session.access_token = token.access_token;
      }
      session.user = token.user;
      // console.log("Sesion", session)
      //console.log(user)
      //console.log("token", session);
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
