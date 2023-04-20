import { IUser } from "@/interfaces/types";
import styles from "@/styles/UsersSet.module.scss";
import Link from "next/link";

interface IUsersSetProps {
	users: IUser[];
}

const UsersSet = ({ users }: IUsersSetProps) => {
	return (
		<ul className="user__set">
			{users.length > 0 &&
				users.map((user) => (
					<li className="user__item" key={user._id}>
						<Link href={`users/${user._id}`}>
							<article className="deed__body">
								<p className="deed__description">{user.nickName} </p>
								<h3 className="deed__name">{user.name} </h3>
							</article>
						</Link>
					</li>
				))}
		</ul>
	);
};

export default UsersSet;
