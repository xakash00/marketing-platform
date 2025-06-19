import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const res = await fetch("https://auth-service-wts6.onrender.com/api/v1/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password
                    }),
                });
                const data = await res.json();
                if (res.ok && data?.user) {
                    return {
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email,
                        token: data.token
                    };
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.email = user.email;
                token.token = user.token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.token = token.token;
            return session;
        }
    },
    pages: {
        signIn: "/login"
    }
});

export { handler as GET, handler as POST }; 