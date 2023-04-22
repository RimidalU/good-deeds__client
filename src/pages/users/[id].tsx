import Head from "next/head";
import styles from "@/styles/Users.module.scss";
import { IUser } from "@/interfaces/types";
import { GetStaticPropsContext } from "next";
import DeedsSet from "@/components/DeedsSet";

interface IUserProps {
	user: IUser;
}

const User = ({ user }: IUserProps) => {
	if (!user._id) {
		return (
			<div className="wrapper">
				<h1 className={styles.user__section}>User Not Found!</h1>
			</div>
		);
	}
	return (
		<>
			<Head>
				<title>@{user.nickName} Deeds</title>
			</Head>
			<div className="wrapper">
				<section className={styles.user__section}>
					<div className={styles.user__about}>
						<h1 className={styles.title}>NickName: {user.nickName}</h1>
						<h2 className={styles.subtitle}> Name: {user.name}</h2>
					</div>
					<button className={styles.button}>Follow</button>
				</section>
				<section className="deeds__section">
					<DeedsSet deeds={user.deeds} />
				</section>
			</div>
		</>
	);
};

export async function getServerSideProps({ params }: GetStaticPropsContext<{ id: string }>) {
	const res = await fetch(`${process.env.URL}user/${params!.id}`);
	const user: IUser = await res.json();

	return { props: { user } };
}

export default User;
