import Head from "next/head";
import styles from "@/styles/NotFound.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push("/");
		}, 1000);
	}, [router]);

	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<div className="wrapper">
				<h1 className={styles.title}>Not Found!</h1>
			</div>
		</>
	);
};

export default NotFound;
