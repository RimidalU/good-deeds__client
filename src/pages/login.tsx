import Head from "next/head";
import styles from "@/styles/Auth.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { log } from "console";
import exp from "constants";

const Login = () => {
	const route = useRouter();

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = {
			email: event.currentTarget.email.value,
			password: event.currentTarget.password.value,
		};

		const JSONdata = JSON.stringify(data);

		const endpoint = "http://localhost:4000/auth/login";

		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);

		const result = await response.json();
		console.log(result);

		if (result) route.push("/");
	};

	return (
		<>
			<Head>
				<title>Login</title>
			</Head>

			<div className="wrapper">
				<form className={styles.contact__form} onSubmit={handleSubmit}>
					<h1 className={styles.form__title}>Remind me who you are...</h1>
					<h3 className={styles.form__subtitle}>
						If you have already registered in the system, you will log in with your account.
					</h3>

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
						LogIn!
					</button>
					<h3 className={styles.form__subtitle}>
						If not,
						<Link href={`singup`}>
							<span>register here</span>
						</Link>
					</h3>
				</form>
			</div>
		</>
	);
};

export default Login;
