import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { IUser } from "@/interfaces/types";
import { GetStaticPropsContext } from "next";

interface IUserProps {
	user: IUser;
}

export default function User({ user }: IUserProps) {
	const { query } = useRouter();

	return (
		<>
			<Head>
				<title>User Deeds</title>
			</Head>
			<main className={styles.main}>
				<div className="wrapper">
					<h1 className="title">User {user.name} Page</h1>
					<h2>{user.nickName}</h2>
					<div className="button__set">
						<button className="uset_btn">follow</button>
						<button className="uset_btn">unfollow</button>
					</div>
				</div>
			</main>
		</>
	);
}

export async function getServerSideProps({ params }: GetStaticPropsContext<{ id: string }>) {
	const res = await fetch(`http://localhost:4000/user/${params!.id}`);
	const user: IUser = await res.json();

	return { props: { user } };
}
