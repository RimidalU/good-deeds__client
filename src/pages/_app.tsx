import Layout from "@/components/Layout";
import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.scss";

type AppPropsWithLayout = AppProps & {
	Component: ReactElement;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	return (
		<>
			<Head>
				<meta name="description" content="Good Deeds List App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.svg" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
