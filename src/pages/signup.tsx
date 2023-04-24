import Head from "next/head";
import styles from "@/styles/Auth.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormEvent } from "react";

const SignUp = () => {
	const route = useRouter();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			name: event.currentTarget.userName.value,
			nickName: event.currentTarget.nickName.value,
			email: event.currentTarget.email.value,
			password: event.currentTarget.password.value,
		};

		const JSONdata = JSON.stringify(data);

		const endpoint = "http://localhost:4000/auth/signup";

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);

		const result = await response.json();

		if (result) route.push("/login");
	};

	return (
		<>
			<Head>
				<title>Signup</title>
			</Head>

			<div className="wrapper">
				<form className={styles.contact__form} onSubmit={handleSubmit}>
					<h1 className={styles.form__title}>Let&apos;s get acquainted!</h1>
					<h3>
						Let&apos;s create a new account where you can share your achievements and be inspired by others!
					</h3>
					<label htmlFor="userName">Enter your name:</label>
					<input
						className={styles.form__name}
						type="text"
						name="userName"
						id="userName"
						placeholder="Enter your name."
						minLength={3}
						required
					/>
					<label htmlFor="name">Enter your nickName:</label>
					<input
						className={styles.form__name}
						type="text"
						name="nickName"
						id="nickName"
						placeholder="Enter your nickName."
						minLength={3}
						required
					/>

					<label htmlFor="email">Enter email:</label>
					<input
						className={styles.form__name}
						type="email"
						name="email"
						id="email"
						placeholder="Enter your email."
						minLength={3}
						required
					/>
					<label htmlFor="password">Enter password:</label>
					<input
						className={styles.form__name}
						type="password"
						name="password"
						id="password"
						placeholder="Enter your password."
						minLength={3}
						required
					/>
					<button className="button" type="submit">
						Сreate!
					</button>
					<h3 className={styles.form__subtitle}>
						If you already have an account,
						<Link href={`login`}>
							<span>please login here</span>
						</Link>
					</h3>
				</form>
			</div>
		</>
	);
};

export default SignUp;
