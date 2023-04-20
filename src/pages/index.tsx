import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { IUser } from "@/interfaces/types";
import DeedsSet from "@/components/DeedsSet";
import UsersSet from "@/components/UsersSet";

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
				<section className="deeds__section">
				<h3>My deeds:</h3>

					<DeedsSet deeds={user.deeds} />
				</section>
				<section className="deeds__section">
				<h3>My inspiration</h3>

					<UsersSet users={user.frends} />
				</section>
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
