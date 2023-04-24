import styles from "@/styles/Header.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
	{ id: 1, title: "Home", path: "/" },
	{ id: 2, title: "Users", path: "/users" },
];

const Header = () => {
	const { data } = useSession();
	const { pathname } = useRouter();

	return (
		<header className="header">
			<div className={`wrapper ${styles.header}`}>
				<h1 className={styles.header__title}>Good Deeds</h1>
				<nav className={styles.header__nav}>
					<ul className={styles.nav__set}>
						{navigation.map(({ id, title, path }) => (
							<li className={pathname === path ? styles.active : styles.nav__item} key={id}>
								<Link href={path} className="nav__link">
									{title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				{data?.user ? (
					<div className={styles.user__control}>
						<a className={styles.user__link} href="#">
							{data?.user.name}
						</a>
						<button className={styles.user__button} onClick={() => signOut()}>
							LogOut
						</button>
					</div>
				) : (
					<div className={styles.user__control}>
						<a className={styles.user__link} href="#" onClick={() => signIn()}>
							LogIn
						</a>
						<a className={styles.user__button} href="/signup">
							Sign up
						</a>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
