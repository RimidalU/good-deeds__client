import { IDeed } from "@/interfaces/types";
import styles from "@/styles/DeedsSet.module.scss";
import { ChangeEvent } from "react";

interface IDeedsSetProps {
	deeds: IDeed[];
}

const DeedsSet = ({ deeds }: IDeedsSetProps) => {
	const setStyleLayout = (status: string): string => {
		let bodyColor: string;

		switch (status) {
			case "pending":
				return (bodyColor = "pending");
				break;

			case "in progress":
				return (bodyColor = "inProgress");

				break;
			case "done":
				return (bodyColor = "done");
				break;

			default:
				return (bodyColor = "pending");
				break;
		}
	};

	return (
		<ul className={styles.deeds__set}>
			{deeds.length > 0 &&
				deeds.map((deed) => (
					<li className={styles.deed__item} key={deed._id}>
						<article className={`${setStyleLayout(deed.status)} ${styles.deed__body}`}>
							<h3 className={styles.deed__name}>{deed.name}</h3>
							<details>
								<summary className={styles.deed__summary}>To learn more:</summary>
								<p className={styles.deed__description}>{deed.description} </p>
							</details>
							{/* <span className={styles.deed__status}>{deed.status}</span> */}
							<select className={styles.deed__status} id="deedStatus" name="deedStatus" value={deed.status} onChange={async (e) =>changeStatus(e)}>
								<option>Pending</option>
								<option>In Progress</option>
								<option>done</option>
							</select>
						</article>
					</li>
				))}
		</ul>
	);
};

export default DeedsSet;

const changeStatus = (e:ChangeEvent<HTMLSelectElement>) => {
	console.log(e.target.value);
	
}