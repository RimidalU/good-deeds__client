import styles from "@/styles/Users.module.scss";
import { IUser } from "@/interfaces/types";
import Head from "next/head";
import UsersSet from "@/components/UsersSet";

interface IUsersProps {
	users: IUser[];
}

const Users = ({ users }: IUsersProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>Users List</title>
			</Head>
			<div className="wrapper">
				<h1 className="title">Users Page</h1>
				<p>Here you can find interesting doers of good deeds and subscribe to them.</p>
				<section className="users__list">
					<UsersSet users={users} />
				</section>
			</div>
		</>
	);
};

export async function getStaticProps() {
	const res = await fetch(`${process.env.URL}user/`);
	const users: IUser[] = await res.json();

	if (!users) {
		return { notFoud: true };
	}

	return {
		props: {
			users,
		},
	};
}

export default Users;
