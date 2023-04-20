import "@/styles/globals.css";
import { ReactNode } from "react";

import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
	Component,
	pageProps,
}: AppLayoutProps) => {
	const getLayout = Component.getLayout || ((page: ReactNode) => page);

	return getLayout(<Component {...pageProps} />);
};

export default MyApp;
