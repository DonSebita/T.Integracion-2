import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
