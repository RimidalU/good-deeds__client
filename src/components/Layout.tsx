import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

import styles from "@/styles/Layout.module.scss";

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</>
	);
}
