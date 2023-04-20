import styles from "@/styles/Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="wrapper">
				<a href="https://github.com/RimidalU" target="_blank">
					RimidalU &copy; 2023
				</a>
			</div>
		</footer>
	);
};

export default Footer;
