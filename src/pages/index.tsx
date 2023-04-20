import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { IUser } from "@/interfaces/types";

interface IUsersProps {
	user: IUser;
}

export default function Home({ user }: IUsersProps) {
	return (
		<>
			<Head>
				<title>My Deeds</title>
			</Head>
			<div className="wrapper">
				<h1 className="title">Home Page {user.name} </h1>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch("http://localhost:4000/user/6441469968baf5a6c7bfeda0");
	const user: IUser[] = await res.json();

	return {
		props: {
			user,
		},
	};
}
