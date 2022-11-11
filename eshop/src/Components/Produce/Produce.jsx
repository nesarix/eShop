import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMushiesById, addItem, subItem } from "../../Services/Mushies";

import styles from "./Produce.module.scss";
const Produce = () => {
	const params = useParams();
	const [mushie, setMushie] = useState(null);
	const [itemNumber, setItemNumber] = useState(null);
	useEffect(() => {
		getMushiesById(params.Produce).then((data) => setMushie(data));
	}, [itemNumber]);

	const addItemBtn = () => {
		addItem(mushie.id).then(() => setItemNumber(itemNumber + 1));
	};
	const subItemBtn = () => {
		if (mushie.quantity > 0) {
			subItem(mushie.id).then(() => setItemNumber(itemNumber - 1));
		}
	};

	return (
		<>
			{mushie ? (
				<div className={styles.produce__holder}>
					<h1>{mushie.productName}</h1>
					<h3>Also known as {mushie.scientificName}.</h3>

					<img src={mushie.image} alt={mushie.productName} />
					<h3>Price Per unit ${mushie.price}</h3>
					<div className={styles.quantity__holder}>
						<button className={styles.size} onClick={addItemBtn}>
							+
						</button>
						<p>{mushie.quantity} </p>
						<button className={styles.size} onClick={subItemBtn}>
							-
						</button>
					</div>
					<div className={styles.quantity__holder}>
						<select className={styles.size}>
							{mushie.variants.map((item, i) => (
								<option key={i} value={item}>
									{item}
								</option>
							))}
						</select>
						<button className={styles.size}>add to basket</button>
					</div>
				</div>
			) : (
				<h1>please wait, loading.</h1>
			)}
		</>
	);
};

export default Produce;
