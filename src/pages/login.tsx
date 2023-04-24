import Head from "next/head";
import styles from "@/styles/Auth.module.scss";
import Link from "next/link";
import { FormEvent } from "react";
import { signIn } from "next-auth/react";

const Login = () => {
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const email = event.currentTarget.email.value;
		const password = event.currentTarget.password.value;

		const result = await signIn("credentials", {
			email: email,
			password: password,
			redirect: true,
			callbackUrl: "/",
		});

		console.log(result); // TODO: add token!
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
						<Link href={'/signup'}>
							<span>register here</span>
						</Link>
					</h3>
				</form>
			</div>
		</>
	);
};

export default Login;
