import { useEffect, useState } from "react";
import React from "react";
import { getMushies } from "../../Services/Mushies";
import ProductCards from "../../Components/ProductCards/ProductCards";
import styles from "./ProductList.module.scss";

const ProductList = () => {
	const [fungi, setFungi] = useState([]);
	useEffect(() => {
		getMushies().then((fungi) => setFungi(fungi));
	}, []);
	return (
		<section className={styles.cards}>
			{fungi.map((fungi) => (
				<ProductCards key={fungi.id} fungiData={fungi} />
			))}
		</section>
	);
};

export default ProductList;
