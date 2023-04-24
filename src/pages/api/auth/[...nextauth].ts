import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "j@smith.com" },
				password: { label: "Password", type: "password", placeholder: "*****" },
			},
			async authorize(credentials, req) {
				const res = await fetch("/auth/login", {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" },
				});
				const user = await res.json();

				if (res.ok && user) {
					return user;
				}
				return null;
			},
		}),
	],

	session: { strategy: "jwt" },
	pages: {
		signIn: "/login",
	},
};
export default NextAuth(authOptions);
