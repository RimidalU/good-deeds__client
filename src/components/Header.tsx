import styles from "@/styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
	const isAuth = true;

	return (
		<header className="header">
			<div className={`wrapper ${styles.header}`}>
				<h1 className={styles.header__title}>Good Deeds</h1>
				<nav className={styles.header__nav}>
					<ul className={styles.nav__set}>
						<li className="nav__item">
							<Link href="/" className="nav__link">
								Home
							</Link>
						</li>
						<li className="nav__item">
							<Link href="/users" className="nav__link">
								Users
							</Link>
						</li>
					</ul>
				</nav>

				{isAuth ? (
					<div className={styles.user__control}>
						<a className={styles.user__link} href="#">
							UserName
						</a>
						<button className={styles.user__button}>
							LogOut
						</button>
					</div>
				) : (
					<div className={styles.user__control}>
						<a className={styles.user__link} href="#">
							LogIn
						</a>
						<a className={styles.user__button} href="#">
							Sign up
						</a>
					</div>
				)}
			</div>
		</header>
	);
}
