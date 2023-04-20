import Head from "next/head";
import styles from "@/styles/Users.module.scss";
import { useRouter } from "next/router";
import { IUser } from "@/interfaces/types";
import { GetStaticPropsContext } from "next";

interface IUserProps {
	user: IUser;
}

export default function User({ user }: IUserProps) {
	const { query } = useRouter();
console.log(user);

	return (
		<>
			<Head>
				<title>{user.name} Deeds</title>
			</Head>
			<section className={styles.user__section}>
				<div className={styles.user__about}>
					<h1 className={styles.title}>NickName: {user.nickName}</h1>
					<h2 className={styles.subtitle}> Name: {user.name}</h2>
				</div>
				<button className={styles.button}>follow</button>
			</section>
			<section className="deeds__section">
				<ul className="deeds__set">
					{user.deeds.length > 0 &&
						user.deeds.map((deed) => (
							<li className="deed__item" key={deed._id}>
								<article className="deed__body">
									<h3 className="deed__name">{deed.name} </h3>
									<p className="deed__description">{deed.description} </p>
									<span>{deed.status}</span>
								</article>
							</li>
						))}
				</ul>
			</section>
		</>
	);
}

export async function getServerSideProps({ params }: GetStaticPropsContext<{ id: string }>) {
	const res = await fetch(`http://localhost:4000/user/${params!.id}`);
	const user: IUser = await res.json();

	return { props: { user } };
}
