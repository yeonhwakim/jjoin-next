import { addUser } from "@/service/user";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const user = session?.user;

      if (user) {
        session.user = {
          ...user,
          username: user.email?.split("@")[0] || "",
        };
      }

      return session;
    },
    async signIn({ user: { id, name, email, image } }) {
      if (!email) {
        return false;
      }
      addUser({
        id,
        name: name || "",
        username: email.split("@")[0],
        email,
        image,
      });
      return true;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
