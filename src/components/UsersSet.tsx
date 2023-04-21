import { IUser } from "@/interfaces/types";
import styles from "@/styles/UsersSet.module.scss";
import Link from "next/link";
import Image from "next/image";

interface IUsersSetProps {
	users: IUser[];
}

const UsersSet = ({ users }: IUsersSetProps) => {
	return (
		<ul className={styles.users__set}>
			{users.length > 0 &&
				users.map((user) => (
					<Link href={`users/${user._id}`} key={user._id}>
						<li className={styles.user__item}>
							<article className={styles.user__body}>
								<Image className={styles.user__avatar} src="/logo.svg" alt={user.name} width={80} height={80} />
								<div className={styles.user__info}>
									<h3 className={styles.user__description}>@{user.nickName} </h3>
									<span>Name: </span>
									<p className={styles.user__name}>{user.name}</p>
								</div>
							</article>
						</li>
					</Link>
				))}
		</ul>
	);
};

export default UsersSet;
