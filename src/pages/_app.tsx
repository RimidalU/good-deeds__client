import { SessionProvider } from "next-auth/react";
import Head from "next/head";

import Layout from "@/components/Layout";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.scss";

type AppPropsWithLayout = AppProps & {
	Component: ReactElement;
};

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
	return (
		<>
			<Head>
				<meta name="description" content="Good Deeds List App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			<SessionProvider session={session}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SessionProvider>
		</>
	);
}
