import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import conexionBD from '@/lib/cxDB'
import Abogado from '@/models/abogados'

const authOptions = {
  // Configuracion del proveedor
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      authorization: {
        params: {
          scope: 
            "https://www.googleapis.com/auth/userinfo.email " +  
            "https://www.googleapis.com/auth/userinfo.profile "  + 
            "https://www.googleapis.com/auth/calendar"
        },
      },
    }),
    CredentialsProvider({
      name:"credentials",
      credentials:{},

       async authorize(credentials) {
        const { rut, clave } = credentials;

        try {
          await conexionBD();
          const user = await Abogado.findOne({ rut });

          if (!user) {
            return null;
          }

          const claveCoin = await bcrypt.compare(clave, user.clave);

          if (!claveCoin) {
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    })
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.id = account.providerAccountId;
        token.access_token = account.access_token;
        console.log(account);
      }
      return token;
    },
    async session({ session, token, user }) {
      session.access_token  = token.access_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export default authOptions;
export { handler as GET, handler as POST };
