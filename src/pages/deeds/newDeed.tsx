import Head from "next/head";
import styles from "@/styles/NewDeed.module.scss";
import { useRouter } from "next/router";
import { IUser } from "@/interfaces/types";

interface IUserProps {
	user: IUser;
}

export default function NewDeed({ user }: IUserProps) {
	const { query } = useRouter();

	return (
		<>
			<Head>
				<title>New deed</title>
			</Head>
			<div className="wrapper">
				<form className={styles.contact__form}>
					<h3 className={styles.form__title}>let&apos;s start</h3>
					<label htmlFor="name">Deed name:</label>
					<input
						className={styles.form__name}
						type="text"
						name="name"
						id="name"
						placeholder="Enter your Deed name."
						minLength={3}
						required
					/>
					<label htmlFor="message">Deed description:</label>
					<textarea
						className={styles.form__description}
						name="description"
						id="description"
						cols={30}
						rows={5}
						placeholder="Space for your Deed description."
						minLength={3}
					></textarea>
					<button className="button" type="submit" onSubmit={(e) => e.preventDefault()}>
						Add Deed!
					</button>
				</form>
			</div>
		</>
	);
}
