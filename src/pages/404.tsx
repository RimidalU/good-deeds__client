import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { IUser } from "@/interfaces/types";
import Head from "next/head";

interface IUsersProps {
	users: IUser[];
}

export default function NotFound() {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>
			<main className={styles.main}>
				<h1>Not Found!</h1>
			</main>
		</>
	);
}
