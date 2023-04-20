import { IDeed } from "@/interfaces/types";
import styles from "@/styles/DeedsSet.module.scss";

interface IDeedsSetProps {
	deeds: IDeed[];
}

const DeedsSet = ({ deeds }: IDeedsSetProps) => {
	return (
		<ul className="deeds__set">
			{deeds.length > 0 &&
				deeds.map((deed) => (
					<li className="deed__item" key={deed._id}>
						<article className="deed__body">
							<h3 className="deed__name">{deed.name} </h3>
							<p className="deed__description">{deed.description} </p>
							<span>{deed.status}</span>
						</article>
					</li>
				))}
		</ul>
	);
};

export default DeedsSet;
