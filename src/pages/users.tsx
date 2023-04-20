import styles from "@/styles/Users.module.scss";
import Link from "next/link";
import { IUser } from "@/interfaces/types";
import Head from "next/head";

interface IUsersProps {
	users: IUser[];
}

export default function Users({ users }: IUsersProps) {
	return (
		<>
			<Head>
				<title>Users List</title>
			</Head>
			<div className="wrapper">
				<h1 className="title">Users Page</h1>
				<p>Here you can find interesting doers of good deeds and subscribe to them.</p>
				<section className="users__list">
					<ul className={styles.user__set}>
						{users.map((user) => (
							<li className="set_item" key={user._id}>
								<Link href={`users/${user._id}`}>
									<article className={styles.user__item}>{user.nickName}</article>
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch("http://localhost:4000/user/");
	const users: IUser[] = await res.json();

	return {
		props: {
			users,
		},
	};
}
